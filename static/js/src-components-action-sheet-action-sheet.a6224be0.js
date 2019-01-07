(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"./src/components/ActionSheet/ActionSheet.mdx":function(e,t,n){"use strict";n.r(t);var o=n("./node_modules/react/index.js"),r=n.n(o),i=n("./node_modules/@mdx-js/tag/dist/index.js"),a=n("./node_modules/docz/dist/index.m.js"),l=n("./src/index.js"),c=(n("./dist/styles.css"),n("./src/components/ActionSheet/ActionSheet.js")),s=n("./src/components/Button/Button.js");function u(e){return(u="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function p(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function m(e,t){return!t||"object"!==u(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function y(e,t){return(y=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var h=function(e){function t(){var e,n;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var o=arguments.length,r=new Array(o),i=0;i<o;i++)r[i]=arguments[i];return(n=m(this,(e=f(t)).call.apply(e,[this].concat(r)))).state={visibility1:!1,visibility2:!1,visibility3:!1},n.toggleActionsheet=function(e,t){var o,r,i,a="visibility".concat(e);n.setState((i=t,(r=a)in(o={})?Object.defineProperty(o,r,{value:i,enumerable:!0,configurable:!0,writable:!0}):o[r]=i,o))},n}var n,o,i;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&y(e,t)}(t,r.a.Component),n=t,(o=[{key:"render",value:function(){var e=this;return r.a.createElement(r.a.Fragment,null,r.a.createElement(c.a,{visible:this.state.visibility1,buttons:[r.a.createElement(s.a,null,"Add to playlist"),r.a.createElement(s.a,null,"Copy link"),r.a.createElement(s.a,null,"Archive"),r.a.createElement(s.a,{color:"red"},"Delete")],onRequestClose:function(){return e.toggleActionsheet(1,!1)}}),r.a.createElement(s.a,{fill:!0,onClick:function(){return e.toggleActionsheet(1,!0)}},"Open ActionSheet"),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(c.a,{visible:this.state.visibility2,content:"Amet tempor nostrud dolore non consequat elit do proident irure sit irure exercitation.",onRequestClose:function(){return e.toggleActionsheet(2,!1)}}),r.a.createElement(s.a,{fill:!0,onClick:function(){return e.toggleActionsheet(2,!0)}},"Open ActionSheet without buttons"),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(c.a,{visible:this.state.visibility3,content:"What do you want to do?",buttons:[r.a.createElement(s.a,null,"Add to playlist"),r.a.createElement(s.a,null,"Copy link"),r.a.createElement(s.a,null,"Archive"),r.a.createElement(s.a,{color:"red"},"Delete")],onRequestClose:function(){return e.toggleActionsheet(3,!1)}}),r.a.createElement(s.a,{fill:!0,onClick:function(){return e.toggleActionsheet(3,!0)}},"Open ActionSheet with title"))}}])&&p(n.prototype,o),i&&p(n,i),t}();function b(e){return(b="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function d(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function g(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function v(e,t){return!t||"object"!==b(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function E(e){return(E=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function S(e,t){return(S=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}h.__docgenInfo={description:"",methods:[{name:"toggleActionsheet",docblock:null,modifiers:[],params:[{name:"id",type:null},{name:"val",type:null}],returns:null}],displayName:"ASE"},n.d(t,"default",function(){return A});var A=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=v(this,E(t).call(this,e))).layout=null,n}var n,o,c;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&S(e,t)}(t,r.a.Component),n=t,(o=[{key:"render",value:function(){var e=this.props,t=e.components,n=d(e,["components"]);return r.a.createElement(i.MDXTag,{name:"wrapper",components:t},r.a.createElement(i.MDXTag,{name:"h1",components:t,props:{id:"actionsheet"}},"ActionSheet"),r.a.createElement(i.MDXTag,{name:"p",components:t},"To use this component, simply import it into any file and pass the ",r.a.createElement(i.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"#/#props"}},"modifiers")," in the properties."),r.a.createElement(i.MDXTag,{name:"p",components:t},'Note: This component has no state (a controlled component), you must provide the visibility state of the component and close it "manually".'),r.a.createElement(i.MDXTag,{name:"p",components:t},"See more in the example below:"),r.a.createElement(i.MDXTag,{name:"pre",components:t},r.a.createElement(i.MDXTag,{name:"code",components:t,parentName:"pre",props:{className:"language-jsx"}},"import { ActionSheet, Button } from 'ios-theme-toolkit'\n\nexport default class ActionSheetExample extends React.Component {\n  state = {\n    visibility: false,\n  }\n\n  openActionSheet = () => {\n    this.setState({ visibility: true })\n  }\n\n  closeActionSheet = () => {\n    this.setState({ visibility: false })\n  }\n\n  render() {\n    return (\n      <React.Fragment>\n        <ActionSheet\n          visible={this.state.visibility}\n          buttons={[\n            <Button>Add to</Button>,\n            <Button>Copy link</Button>,\n            <Button color=\"red\">Delete</Button>\n          ]}\n          onRequestClose={this.closeActionSheet}\n        />\n\n        <Button fill onClick={this.openActionSheet}>Open Action Sheet</Button>\n      </React.Fragment>\n    )\n  }\n}\n")),r.a.createElement(i.MDXTag,{name:"h2",components:t,props:{id:"examples"}},"Examples"),r.a.createElement(a.e,{__codesandbox:"undefined",__position:0,__code:"<ActionSheetExample />",__scope:{props:this?this.props:n,ActionSheet:l.a,ActionSheetExample:h}},r.a.createElement(h,null)),r.a.createElement(i.MDXTag,{name:"h2",components:t,props:{id:"props"}},"Props"),r.a.createElement(a.f,{of:l.a}),r.a.createElement(i.MDXTag,{name:"p",components:t},"All the properties which are not listed above will be transferred to the ",r.a.createElement(i.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"#/components/Drawer"}},"Drawer component"),"."))}}])&&g(n.prototype,o),c&&g(n,c),t}();A.__docgenInfo={description:"",methods:[],displayName:"MDXContent"}}}]);
//# sourceMappingURL=src-components-action-sheet-action-sheet.19765e61298572579557.js.map