import { JSONSchemaObject } from '@json-schema-tools/meta-schema';
import Ajv from 'ajv';
import {
  AnyTypeComposer,
  isSomeInputTypeComposer,
  ObjectTypeComposer,
  ObjectTypeComposerFieldConfig,
  SchemaComposer,
} from 'graphql-compose';
import { getGenericJSONScalar } from './getGenericJSONScalar';
import { getTypeResolverFromOutputTCs } from './getTypeResolverFromOutputTCs';
import { getValidTypeName } from './getValidTypeName';

const ONE_OF_DEFINITION = /* GraphQL */ `
  directive @oneOf on INPUT_OBJECT | FIELD_DEFINITION
`;

export interface GetUnionTypeComposersOpts {
  schemaComposer: SchemaComposer;
  ajv: Ajv;
  typeComposersList: { input?: AnyTypeComposer<any>; output?: ObjectTypeComposer }[];
  subSchema: JSONSchemaObject;
  generateInterfaceFromSharedFields: boolean;
  validateWithJSONSchema: (data: any) => boolean;
}

export function getUnionTypeComposers({
  schemaComposer,
  ajv,
  typeComposersList,
  subSchema,
  generateInterfaceFromSharedFields,
  validateWithJSONSchema,
}: GetUnionTypeComposersOpts) {
  // Filter null types
  typeComposersList = typeComposersList.filter(
    typeComposers => typeComposers.input.getTypeName() !== 'Void' || typeComposers.output.getTypeName() !== 'Void'
  );
  if (typeComposersList.length === 1) {
    return typeComposersList[0];
  }
  const unionInputFields: Record<string, any> = {};
  const outputTypeComposers: ObjectTypeComposer<any>[] = [];
  let ableToUseGraphQLUnionType = true;
  typeComposersList.forEach(typeComposers => {
    const { input, output } = typeComposers;
    if (isSomeInputTypeComposer(output)) {
      ableToUseGraphQLUnionType = false;
    } else {
      outputTypeComposers.push(output);
    }
    unionInputFields[input.getTypeName()] = {
      type: input,
    };
  });
  const input = schemaComposer.createInputTC({
    name: getValidTypeName({
      schemaComposer,
      isInput: true,
      subSchema,
    }),
    description: subSchema.description,
    fields: unionInputFields,
  });
  if (!schemaComposer.hasDirective('oneOf')) {
    schemaComposer.addTypeDefs(ONE_OF_DEFINITION);
  }
  input.setDirectives([
    {
      name: 'oneOf',
      args: {},
    },
  ]);

  let output: AnyTypeComposer<any>;
  if (ableToUseGraphQLUnionType) {
    let sharedFields: Record<string, ObjectTypeComposerFieldConfig<any, any, any>>;
    if (generateInterfaceFromSharedFields) {
      for (const typeComposer of outputTypeComposers) {
        const fieldMap = typeComposer.getFields();
        if (!sharedFields) {
          sharedFields = { ...fieldMap };
        } else {
          for (const potentialSharedFieldName in sharedFields) {
            if (
              !(
                potentialSharedFieldName in fieldMap &&
                fieldMap[potentialSharedFieldName].type.getTypeName() ===
                  sharedFields[potentialSharedFieldName].type.getTypeName()
              )
            ) {
              sharedFields[potentialSharedFieldName] = undefined;
              delete sharedFields[potentialSharedFieldName];
            }
          }
        }
      }
    }

    const resolveType = getTypeResolverFromOutputTCs(ajv, outputTypeComposers);
    if (sharedFields && Object.keys(sharedFields).length > 0) {
      output = schemaComposer.createInterfaceTC({
        name: getValidTypeName({
          schemaComposer,
          isInput: false,
          subSchema,
        }),
        description: subSchema.description,
        fields: sharedFields,
        resolveType,
      });
      for (const typeComposer of outputTypeComposers) {
        typeComposer.addInterface(output);
        // GraphQL removes implementations
        schemaComposer.addSchemaMustHaveType(typeComposer);
      }
    } else {
      // If no shared fields found
      output = schemaComposer.createUnionTC({
        name: getValidTypeName({
          schemaComposer,
          isInput: false,
          subSchema,
        }),
        description: subSchema.description,
        types: outputTypeComposers,
        resolveType,
      });
    }
  } else {
    output = getGenericJSONScalar({
      schemaComposer,
      subSchema,
      isInput: false,
      validateWithJSONSchema,
    });
  }
  return {
    input,
    output,
  };
}