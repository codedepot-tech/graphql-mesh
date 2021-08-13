"use strict";(self.webpackChunk_graphql_mesh_website=self.webpackChunk_graphql_mesh_website||[]).push([[1129],{5318:function(e,t,a){a.d(t,{Zo:function(){return m},kt:function(){return c}});var n=a(7378);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},m=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,p=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),d=s(a),c=i,k=d["".concat(p,".").concat(c)]||d[c]||u[c]||r;return a?n.createElement(k,l(l({ref:t},m),{},{components:a})):n.createElement(k,l({ref:t},m))}));function c(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,l=new Array(r);l[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var s=2;s<r;s++)l[s]=a[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},1298:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return o},metadata:function(){return p},toc:function(){return s},default:function(){return u}});var n=a(5773),i=a(808),r=(a(7378),a(5318)),l=["components"],o={id:"as-gateway",title:"Mesh as Gateway",sidebar_label:"Mesh as Gateway"},p={unversionedId:"recipes/as-gateway",id:"recipes/as-gateway",isDocsHomePage:!1,title:"Mesh as Gateway",description:"You can use GraphQL Mesh as an HTTP gateway proxy for your data sources. GraphQL Mesh provides you an HTTP server with Express, GraphQL Helix, GraphQL-WS and GraphiQL Explorer with the bunch of configurable features out-of-box which can be seen here.",source:"@site/docs/recipes/as-gateway.md",sourceDirName:"recipes",slug:"/recipes/as-gateway",permalink:"/docs/recipes/as-gateway",editUrl:"https://github.com/urigo/graphql-mesh/edit/master/website/docs/recipes/as-gateway.md",version:"current",sidebar_label:"Mesh as Gateway",frontMatter:{id:"as-gateway",title:"Mesh as Gateway",sidebar_label:"Mesh as Gateway"},sidebar:"sidebar",previous:{title:"Mesh as SDK",permalink:"/docs/recipes/as-sdk"},next:{title:"Custom Server",permalink:"/docs/recipes/custom-server"}},s=[],m={toc:s};function u(e){var t=e.components,a=(0,i.Z)(e,l);return(0,r.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",{align:"center"},(0,r.kt)("img",{src:"/img/as-gateway.png",width:"450",alt:"Apollo Federation"}),(0,r.kt)("br",null)),(0,r.kt)("p",null,"You can use GraphQL Mesh as an HTTP gateway proxy for your data sources. GraphQL Mesh provides you an HTTP server with ",(0,r.kt)("a",{parentName:"p",href:"https://expressjs.com/"},"Express"),", ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/contrawork/graphql-helix"},"GraphQL Helix"),", ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/enisdenjo/graphql-ws#readme"},"GraphQL-WS")," and ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/OneGraph/graphiql-explorer"},"GraphiQL Explorer")," with the bunch of configurable features out-of-box which can be seen ",(0,r.kt)("a",{parentName:"p",href:"/docs/recipes/mesh-as-gateway"},"here"),"."),(0,r.kt)("p",null,"There are two commands for GraphQL Mesh's HTTP Server;"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"dev")," commands generates the unified schema without using any existing artifacts on the disk and it introspects all the schemas but it doesn't save it."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"start")," commands generates the unified schema by using the existing artifacts previously created by ",(0,r.kt)("inlineCode",{parentName:"li"},"mesh build")," command. ",(0,r.kt)("a",{parentName:"li",href:"/docs/recipes/build-mesh-artifacts"},"Learn more about Mesh artifacts."),".")),(0,r.kt)("p",null,"You can also point to a specific directory which contains the source files (",(0,r.kt)("inlineCode",{parentName:"p"},".meshrc.yaml"),", etc.)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"mesh dev --dir some/path/to-configuration/\n")),(0,r.kt)("p",null,"GraphQL Mesh's HTTP Server can be configured using ",(0,r.kt)("inlineCode",{parentName:"p"},"serve")," command like below;"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"serve:\n    port: 5000\n")),(0,r.kt)("p",null,(0,r.kt)("ul",{parentName:"p"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"fork")," -  - Spawn multiple server instances as node clusters (default: ",(0,r.kt)("inlineCode",{parentName:"li"},"1"),") One of: ",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Int")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Boolean")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"port")," -  - TCP Port to listen (default: ",(0,r.kt)("inlineCode",{parentName:"li"},"3000"),") One of: ",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Int")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"String")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"hostname")," (type: ",(0,r.kt)("inlineCode",{parentName:"li"},"String"),") - The binding hostname (default: ",(0,r.kt)("inlineCode",{parentName:"li"},"localhost"),")"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"cors")," (type: ",(0,r.kt)("inlineCode",{parentName:"li"},"Object"),") - Configuration for CORS: ",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"origin")," (type: ",(0,r.kt)("inlineCode",{parentName:"li"},"Any"),")"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"allowedHeaders")," (type: ",(0,r.kt)("inlineCode",{parentName:"li"},"Array of String"),")"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"exposedHeaders")," (type: ",(0,r.kt)("inlineCode",{parentName:"li"},"Array of String"),")"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"credentials")," (type: ",(0,r.kt)("inlineCode",{parentName:"li"},"Boolean"),")"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"maxAge")," (type: ",(0,r.kt)("inlineCode",{parentName:"li"},"Int"),")"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"preflightContinue")," (type: ",(0,r.kt)("inlineCode",{parentName:"li"},"Boolean"),")"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"optionsSuccessStatus")," (type: ",(0,r.kt)("inlineCode",{parentName:"li"},"Int"),")"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"handlers")," -  - Express/Connect compatible handlers and middlewares extend GraphQL Mesh HTTP Server Array of: ",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"object"),": ",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"path")," (type: ",(0,r.kt)("inlineCode",{parentName:"li"},"String"),", required) - Path that remote API will ping"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"method")," (type: ",(0,r.kt)("inlineCode",{parentName:"li"},"String (GET | POST | DELETE | PATCH)"),") - HTTP Method that the handler will control"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"pubsubTopic")," (type: ",(0,r.kt)("inlineCode",{parentName:"li"},"String"),", required) - Name of the topic you want to pass incoming payload"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"payload")," (type: ",(0,r.kt)("inlineCode",{parentName:"li"},"String"),") - Part of the object you want to pass (e.g. ",(0,r.kt)("inlineCode",{parentName:"li"},"data.messages"),")"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"object"),": ",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"path")," (type: ",(0,r.kt)("inlineCode",{parentName:"li"},"String"),", required) - Path that the handler will control"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"handler")," (type: ",(0,r.kt)("inlineCode",{parentName:"li"},"String"),", required) - Path of the handler's code"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"method")," (type: ",(0,r.kt)("inlineCode",{parentName:"li"},"String (GET | POST | DELETE | PATCH)"),") - HTTP Method that the handler will control"))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"staticFiles")," (type: ",(0,r.kt)("inlineCode",{parentName:"li"},"String"),") - Path to your static files you want to be served with GraphQL Mesh HTTP Server"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"playground")," (type: ",(0,r.kt)("inlineCode",{parentName:"li"},"Boolean"),") - Show GraphiQL Playground"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"maxRequestBodySize")," -  - Controls the maximum request body size. If this is a number, then the value specifies the number of bytes; if it is a string, the value is passed to the bytes library for parsing. Defaults to '100kb'. One of: ",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Int")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"String")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"upload")," (type: ",(0,r.kt)("inlineCode",{parentName:"li"},"Object"),") - Configuration for GraphQL File Upload: ",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"maxFileSize")," (type: ",(0,r.kt)("inlineCode",{parentName:"li"},"Int"),") - Maximum File Size for GraphQL Upload (default: ",(0,r.kt)("inlineCode",{parentName:"li"},"100000000"),")"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"maxFiles")," (type: ",(0,r.kt)("inlineCode",{parentName:"li"},"Int"),") - Maximum number of files for GraphQL Upload (default: ",(0,r.kt)("inlineCode",{parentName:"li"},"10"),")"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"sslCredentials")," (type: ",(0,r.kt)("inlineCode",{parentName:"li"},"Object"),") - SSL Credentials for HTTPS Server\nIf this is provided, Mesh will be served via HTTPS: ",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"key")," (type: ",(0,r.kt)("inlineCode",{parentName:"li"},"String"),", required)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"cert")," (type: ",(0,r.kt)("inlineCode",{parentName:"li"},"String"),", required)"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"endpoint")," (type: ",(0,r.kt)("inlineCode",{parentName:"li"},"String"),") - Path to GraphQL Endpoint (default: /graphql)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"browser")," -  - Path to the browser that will be used by ",(0,r.kt)("inlineCode",{parentName:"li"},"mesh serve")," to open a playground window in development mode\nThis feature can be disable by passing ",(0,r.kt)("inlineCode",{parentName:"li"},"false")," One of: ",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"String")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Boolean")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"customServerHandler")," (type: ",(0,r.kt)("inlineCode",{parentName:"li"},"String"),") - If you want to use a custom GraphQL server, you can pass the path of the code file that exports a custom Mesh Server Handler\nWith a custom server handler, you won't be able to use the features of GraphQL Mesh HTTP Server"))))}u.isMDXComponent=!0}}]);