(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"8+s/":function(e,t,n){"use strict";var r,a=n("q1tI"),c=(r=a)&&"object"==typeof r&&"default"in r?r.default:r;function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var o=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,n){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var l,s=[];function u(){l=e(s.map((function(e){return e.props}))),f.canUseDOM?t(l):n&&(l=n(l))}var f=function(e){var t,n;function a(){return e.apply(this,arguments)||this}n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,a.peek=function(){return l},a.rewind=function(){if(a.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=l;return l=void 0,s=[],e};var i=a.prototype;return i.UNSAFE_componentWillMount=function(){s.push(this),u()},i.componentDidUpdate=function(){u()},i.componentWillUnmount=function(){var e=s.indexOf(this);s.splice(e,1),u()},i.render=function(){return c.createElement(r,this.props)},a}(a.PureComponent);return i(f,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(r)+")"),i(f,"canUseDOM",o),f}}},Bl7J:function(e,t,n){"use strict";n.d(t,"a",(function(){return h}));var r=n("q1tI"),a=n.n(r),c=n("Wbzz"),i=n("dURY"),o=n.n(i),l=n("ignT"),s=n.n(l);function u(){var e=Object(r.useState)(!1),t=e[0],n=e[1];return a.a.createElement("header",null,a.a.createElement("nav",{className:"navbar "+s.a.navbar,role:"navigation","aria-label":"main navigation"},a.a.createElement("div",{className:"navbar-brand"},a.a.createElement(c.Link,{className:"navbar-item",to:"/"},a.a.createElement("img",{className:s.a.logo,src:o.a,height:"28",alt:"brand"}),a.a.createElement("p",null,"sbhaseen.github.io")),a.a.createElement("button",{className:"navbar-burger burger "+s.a.navbarBurger+(t?" is-active":""),"aria-label":"menu","aria-expanded":"false",onClick:function(){n(!t)}},a.a.createElement("span",{"aria-hidden":"true"}),a.a.createElement("span",{"aria-hidden":"true"}),a.a.createElement("span",{"aria-hidden":"true"}))),a.a.createElement("div",{className:"navbar-menu"+(t?"is-active":""),onClick:t?function(){n(!t)}:null,role:"none"},a.a.createElement("div",{className:"navbar-end"},a.a.createElement(c.Link,{to:"/",className:"navbar-item"},"Home"),a.a.createElement(c.Link,{to:"/blog",className:"navbar-item"},"Blog")))))}var f=n("Sz9g");function p(){return a.a.createElement("footer",{className:"footer"},a.a.createElement("div",{className:"content has-text-centered"},a.a.createElement("p",null,"© Shan Bhaseen 2020"),a.a.createElement("div",{className:"level"},a.a.createElement("p",{className:"level-item"},"Published with  "," ",a.a.createElement("a",{href:"https://pages.github.com/","aria-label":"GitHub Pages"},a.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"169px",height:"34px",viewBox:"0 0 169 34",spacing:"preserve"},a.a.createElement("path",{fill:"#000",d:"M98.955,23.733h-2.081V0.78h7.009c5.723,0,7.682,3.305,7.682,6.886s-1.959,6.886-7.682,6.886h-4.927V23.733z M98.955,12.624h5.203c4.315,0,5.141-2.755,5.141-4.958s-0.827-4.958-5.141-4.958h-5.203V12.624z M119.193,10.023 c-2.05,0-3.397,0.367-4.591,0.765V8.951c1.347-0.581,3.122-0.826,4.591-0.826c4.591,0,5.785,2.081,5.785,5.141v10.466h-1.194 l-0.459-1.224c-1.377,1.01-3.091,1.53-4.621,1.53c-4.009,0-5.356-2.357-5.356-4.928c0-2.601,1.439-4.529,5.448-4.774l4.04-0.245 v-0.857C122.835,11.002,122.04,10.023,119.193,10.023z M118.642,15.991c-2.173,0.214-3.122,1.347-3.122,3.121 c0,1.377,0.337,3.03,3.244,3.03c1.653,0,2.754-0.46,4.07-1.224v-5.325L118.642,15.991z M131.71,19.449 c-0.337,0.336-0.582,0.765-0.582,1.132c0,0.765,0.367,1.102,1.163,1.193l5.203,0.612c2.877,0.306,4.193,1.439,4.193,4.101 c0,3.734-3.734,5.203-7.957,5.203c-4.285,0-6.855-1.255-6.855-4.621c0-2.081,1.439-3.459,3.153-4.04v-0.031 c-0.582-0.398-0.979-1.01-0.979-2.02c0-0.856,0.52-1.56,1.163-2.081c-1.836-1.01-2.448-2.877-2.448-5.019 c0-3.152,1.346-5.754,5.968-5.754c0.949,0,1.745,0.122,2.449,0.306h5.203v1.163l-2.571,0.735c0.643,0.979,0.887,2.203,0.887,3.55 c0,3.153-1.347,5.754-5.968,5.754C132.965,19.633,132.291,19.571,131.71,19.449z M132.597,23.58c-2.02,0.46-3.734,1.408-3.734,3.367 c0,2.265,1.714,2.908,4.866,2.908c3.061,0,5.937-0.765,5.937-3.367c0-1.561-0.735-2.173-2.601-2.388L132.597,23.58z M137.708,13.879 c0-2.02-0.398-3.887-3.979-3.887s-3.978,1.867-3.978,3.887s0.398,3.886,3.978,3.886S137.708,15.899,137.708,13.879z M149.206,8.125 c5.203,0,5.815,3.55,5.815,7.957v0.979h-10.1c0.123,2.662,0.827,5.081,4.285,5.081c2.203,0,3.55-0.214,5.05-0.857v1.836 c-1.714,0.765-3.55,0.918-5.05,0.918c-5.172,0-6.427-3.55-6.427-7.957S144.033,8.125,149.206,8.125z M144.921,15.317h7.957 c0-2.724-0.153-5.295-3.673-5.295C145.655,10.023,145.013,12.563,144.921,15.317z M163.191,14.95 c4.346,0.398,5.387,1.867,5.387,4.376c0,2.356-1.5,4.713-6.151,4.713c-1.469,0-3.581-0.368-4.56-0.765v-1.836 c0.949,0.336,2.418,0.704,4.591,0.704c3.183,0,4.04-1.347,4.04-2.785c0-1.408-0.429-2.387-3.458-2.632 c-4.438-0.398-5.356-1.959-5.356-4.07c0-2.173,1.408-4.529,5.723-4.529c1.438,0,3.06,0.183,4.407,0.765v1.837 c-1.193-0.398-2.387-0.704-4.438-0.704c-3.03,0-3.673,1.133-3.673,2.632C159.703,14.001,160.253,14.705,163.191,14.95z M17.184,10.327H9.687c-0.194,0-0.35,0.157-0.35,0.35v3.666c0,0.193,0.157,0.35,0.35,0.35h2.925v4.555c0,0-0.657,0.223-2.472,0.223 c-2.142,0-5.134-0.783-5.134-7.362c0-6.582,3.116-7.447,6.041-7.447c2.532,0,3.623,0.446,4.317,0.66 c0.218,0.067,0.42-0.15,0.42-0.344l0.837-3.541c0-0.09-0.031-0.199-0.134-0.274C16.204,0.963,14.484,0,10.139,0 C5.134,0,0,2.129,0,12.366c0,10.241,5.878,11.766,10.832,11.766c4.102,0,6.589-1.752,6.589-1.752c0.102-0.057,0.114-0.2,0.114-0.265 V10.678C17.535,10.484,17.378,10.327,17.184,10.327z M56.129,1.226c0-0.195-0.155-0.352-0.349-0.352h-4.221 c-0.193,0-0.349,0.157-0.349,0.352c0,0.001,0.001,8.158,0.001,8.158h-6.58V1.226c0-0.195-0.156-0.352-0.349-0.352h-4.221 c-0.192,0-0.349,0.157-0.349,0.352v22.095c0,0.194,0.157,0.353,0.349,0.353h4.221c0.193,0,0.349-0.158,0.349-0.353v-9.453h6.58 c0,0-0.012,9.452-0.012,9.453c0,0.194,0.157,0.353,0.349,0.353h4.232c0.193,0,0.348-0.158,0.349-0.353V1.226z M25.303,4.125 c0-1.52-1.218-2.748-2.722-2.748c-1.502,0-2.722,1.228-2.722,2.748c0,1.519,1.22,2.751,2.722,2.751 C24.085,6.876,25.303,5.644,25.303,4.125z M25.002,18.657c0-0.566,0-10.197,0-10.197c0-0.194-0.156-0.352-0.349-0.352h-4.208 c-0.192,0-0.365,0.199-0.365,0.393c0,0,0,12.27,0,14.613c0,0.429,0.268,0.556,0.614,0.556c0,0,1.796,0,3.792,0 c0.416,0,0.518-0.203,0.518-0.564C25.002,22.323,25.002,19.252,25.002,18.657z M72.511,8.141h-4.189 c-0.192,0-0.349,0.158-0.349,0.353v10.831c0,0-1.064,0.779-2.575,0.779c-1.511,0-1.911-0.685-1.911-2.165c0-1.48,0-9.444,0-9.444 c0-0.195-0.156-0.353-0.349-0.353h-4.251c-0.192,0-0.349,0.158-0.349,0.353c0,0,0,5.768,0,10.16c0,4.397,2.448,5.472,5.816,5.472 c2.763,0,4.991-1.526,4.991-1.526s0.106,0.804,0.154,0.9c0.048,0.096,0.173,0.19,0.309,0.19l2.705-0.012 c0.192,0,0.349-0.157,0.349-0.351L72.86,8.495C72.86,8.3,72.704,8.141,72.511,8.141z M84.19,7.645c-2.379,0-3.997,1.061-3.997,1.061 v-7.48c0-0.195-0.156-0.352-0.348-0.352h-4.233c-0.193,0-0.349,0.157-0.349,0.352v22.095c0,0.194,0.156,0.353,0.349,0.353 c0,0,2.937,0,2.937,0c0.132,0,0.232-0.069,0.306-0.188c0.073-0.118,0.178-1.018,0.178-1.018s1.732,1.64,5.009,1.64 c3.847,0,6.053-1.952,6.053-8.764C90.094,8.535,86.571,7.645,84.19,7.645z M82.538,20.091c-1.453-0.045-2.438-0.704-2.438-0.704 v-6.995c0,0,0.971-0.596,2.165-0.702c1.509-0.135,2.962,0.321,2.962,3.919C85.227,19.404,84.571,20.152,82.538,20.091z M37.058,8.106h-3.166c0,0-0.005-4.183-0.005-4.184c0-0.158-0.081-0.238-0.265-0.238h-4.315c-0.168,0-0.258,0.074-0.258,0.235v4.322 c0,0-2.162,0.522-2.309,0.564c-0.145,0.043-0.253,0.177-0.253,0.337v2.716c0,0.195,0.156,0.353,0.349,0.353h2.212 c0,0,0,2.841,0,6.535c0,4.858,3.404,5.335,5.702,5.335c1.05,0,2.305-0.338,2.513-0.414c0.125-0.045,0.198-0.175,0.198-0.317 l0.004-2.991c0-0.195-0.164-0.353-0.35-0.353c-0.184,0-0.657,0.076-1.142,0.076c-1.556,0-2.082-0.723-2.082-1.66 c0-0.935-0.001-6.211-0.001-6.211h3.167c0.193,0,0.349-0.158,0.349-0.353V8.458C37.407,8.263,37.25,8.106,37.058,8.106z"}))))),a.a.createElement("div",{className:"level"},a.a.createElement("p",{className:"level-item"},"Built with  "," ",a.a.createElement("a",{href:"https://www.gatsbyjs.com/","aria-label":"Gatsby"},a.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"106px",height:"28px",viewBox:"0 0 106 28"},a.a.createElement("path",{d:"M62.9 12h2.8v10h-2.8v-1.3c-1 1.5-2.3 1.6-3.1 1.6-3.1 0-5.1-2.4-5.1-5.3 0-3 2-5.3 4.9-5.3.8 0 2.3.1 3.2 1.6V12zm-5.2 5c0 1.6 1.1 2.8 2.8 2.8 1.6 0 2.8-1.2 2.8-2.8 0-1.6-1.1-2.8-2.8-2.8-1.6 0-2.8 1.2-2.8 2.8zm13.5-2.6V22h-2.8v-7.6h-1.1V12h1.1V8.6h2.8V12h1.9v2.4h-1.9zm8.5 0c-.7-.6-1.3-.7-1.6-.7-.7 0-1.1.3-1.1.8 0 .3.1.6.9.9l.7.2c.8.3 2 .6 2.5 1.4.3.4.5 1 .5 1.7 0 .9-.3 1.8-1.1 2.5s-1.8 1.1-3 1.1c-2.1 0-3.2-1-3.9-1.7l1.5-1.7c.6.6 1.4 1.2 2.2 1.2.8 0 1.4-.4 1.4-1.1 0-.6-.5-.9-.9-1l-.6-.2c-.7-.3-1.5-.6-2.1-1.2-.5-.5-.8-1.1-.8-1.9 0-1 .5-1.8 1-2.3.8-.6 1.8-.7 2.6-.7.7 0 1.9.1 3.2 1.1l-1.4 1.6zm6.1-1.1c1-1.4 2.4-1.6 3.2-1.6 2.9 0 4.9 2.3 4.9 5.3s-2 5.3-5 5.3c-.6 0-2.1-.1-3.2-1.6V22H83V5.2h2.8v8.1zm-.3 3.7c0 1.6 1.1 2.8 2.8 2.8 1.6 0 2.8-1.2 2.8-2.8 0-1.6-1.1-2.8-2.8-2.8-1.7 0-2.8 1.2-2.8 2.8zm13 3.5L93.7 12H97l3.1 5.7 2.8-5.7h3.2l-8 15.3h-3.2l3.6-6.8zM54 13.7h-7v2.8h3.7c-.6 1.9-2 3.2-4.6 3.2-2.9 0-5-2.4-5-5.3S43.1 9 46 9c1.6 0 3.2.8 4.2 2.1l2.3-1.5C51 7.5 48.6 6.3 46 6.3c-4.4 0-8 3.6-8 8.1s3.4 8.1 8 8.1 8-3.6 8-8.1c.1-.3 0-.5 0-.7z"}),a.a.createElement("path",{d:"M25 14h-7v2h4.8c-.7 3-2.9 5.5-5.8 6.5L5.5 11c1.2-3.5 4.6-6 8.5-6 3 0 5.7 1.5 7.4 3.8l1.5-1.3C20.9 4.8 17.7 3 14 3 8.8 3 4.4 6.7 3.3 11.6l13.2 13.2C21.3 23.6 25 19.2 25 14zm-22 .1c0 2.8 1.1 5.5 3.2 7.6 2.1 2.1 4.9 3.2 7.6 3.2L3 14.1z",fill:"#fff"}),a.a.createElement("path",{d:"M14 0C6.3 0 0 6.3 0 14s6.3 14 14 14 14-6.3 14-14S21.7 0 14 0zM6.2 21.8C4.1 19.7 3 16.9 3 14.2L13.9 25c-2.8-.1-5.6-1.1-7.7-3.2zm10.2 2.9L3.3 11.6C4.4 6.7 8.8 3 14 3c3.7 0 6.9 1.8 8.9 4.5l-1.5 1.3C19.7 6.5 17 5 14 5c-3.9 0-7.2 2.5-8.5 6L17 22.5c2.9-1 5.1-3.5 5.8-6.5H18v-2h7c0 5.2-3.7 9.6-8.6 10.7z",fill:"#639"})))))),a.a.createElement(f.a,{showMessage:!0}))}n("XjQp");function h(e){var t=e.children;return a.a.createElement(a.a.Fragment,null,a.a.createElement(u,null),a.a.createElement("main",null,t),a.a.createElement(p,null))}},Sz9g:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n("q1tI"),a=n.n(r),c=n("wwL4"),i=n.n(c);function o(e){var t=e.showMessage,n=void 0!==t&&t;return a.a.createElement("div",{className:i.a.socialContainer},n?a.a.createElement("p",null,"Connect with me: "):"",a.a.createElement("ul",{className:i.a.socialList},a.a.createElement("li",{className:i.a.socialListItem},a.a.createElement("a",{className:i.a.socialLink,href:"https://www.linkedin.com/in/shan-bhaseen","aria-label":"linkedin profile"},a.a.createElement("svg",{className:i.a.socialIcon,xmlns:"http://www.w3.org/2000/svg",height:"50px",viewBox:"0 0 448 512"},a.a.createElement("path",{fill:"currentColor",d:"M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"})))),a.a.createElement("li",{li:!0,className:i.a.socialListItem},a.a.createElement("a",{className:i.a.socialLink,href:"https://www.github.com/sbhaseen","aria-label":"github page"},a.a.createElement("svg",{className:i.a.socialIcon,xmlns:"http://www.w3.org/2000/svg",height:"50px",viewBox:"0 0 448 512"},a.a.createElement("path",{fill:"currentColor",d:"M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zM277.3 415.7c-8.4 1.5-11.5-3.7-11.5-8 0-5.4.2-33 .2-55.3 0-15.6-5.2-25.5-11.3-30.7 37-4.1 76-9.2 76-73.1 0-18.2-6.5-27.3-17.1-39 1.7-4.3 7.4-22-1.7-45-13.9-4.3-45.7 17.9-45.7 17.9-13.2-3.7-27.5-5.6-41.6-5.6-14.1 0-28.4 1.9-41.6 5.6 0 0-31.8-22.2-45.7-17.9-9.1 22.9-3.5 40.6-1.7 45-10.6 11.7-15.6 20.8-15.6 39 0 63.6 37.3 69 74.3 73.1-4.8 4.3-9.1 11.7-10.6 22.3-9.5 4.3-33.8 11.7-48.3-13.9-9.1-15.8-25.5-17.1-25.5-17.1-16.2-.2-1.1 10.2-1.1 10.2 10.8 5 18.4 24.2 18.4 24.2 9.7 29.7 56.1 19.7 56.1 19.7 0 13.9.2 36.5.2 40.6 0 4.3-3 9.5-11.5 8-66-22.1-112.2-84.9-112.2-158.3 0-91.8 70.2-161.5 162-161.5S388 165.6 388 257.4c.1 73.4-44.7 136.3-110.7 158.3zm-98.1-61.1c-1.9.4-3.7-.4-3.9-1.7-.2-1.5 1.1-2.8 3-3.2 1.9-.2 3.7.6 3.9 1.9.3 1.3-1 2.6-3 3zm-9.5-.9c0 1.3-1.5 2.4-3.5 2.4-2.2.2-3.7-.9-3.7-2.4 0-1.3 1.5-2.4 3.5-2.4 1.9-.2 3.7.9 3.7 2.4zm-13.7-1.1c-.4 1.3-2.4 1.9-4.1 1.3-1.9-.4-3.2-1.9-2.8-3.2.4-1.3 2.4-1.9 4.1-1.5 2 .6 3.3 2.1 2.8 3.4zm-12.3-5.4c-.9 1.1-2.8.9-4.3-.6-1.5-1.3-1.9-3.2-.9-4.1.9-1.1 2.8-.9 4.3.6 1.3 1.3 1.8 3.3.9 4.1zm-9.1-9.1c-.9.6-2.6 0-3.7-1.5s-1.1-3.2 0-3.9c1.1-.9 2.8-.2 3.7 1.3 1.1 1.5 1.1 3.3 0 4.1zm-6.5-9.7c-.9.9-2.4.4-3.5-.6-1.1-1.3-1.3-2.8-.4-3.5.9-.9 2.4-.4 3.5.6 1.1 1.3 1.3 2.8.4 3.5zm-6.7-7.4c-.4.9-1.7 1.1-2.8.4-1.3-.6-1.9-1.7-1.5-2.6.4-.6 1.5-.9 2.8-.4 1.3.7 1.9 1.8 1.5 2.6z"}))))))}},XjQp:function(e,t,n){},ZhWT:function(e,t){var n="undefined"!=typeof Element,r="function"==typeof Map,a="function"==typeof Set,c="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;e.exports=function(e,t){try{return function e(t,i){if(t===i)return!0;if(t&&i&&"object"==typeof t&&"object"==typeof i){if(t.constructor!==i.constructor)return!1;var o,l,s,u;if(Array.isArray(t)){if((o=t.length)!=i.length)return!1;for(l=o;0!=l--;)if(!e(t[l],i[l]))return!1;return!0}if(r&&t instanceof Map&&i instanceof Map){if(t.size!==i.size)return!1;for(u=t.entries();!(l=u.next()).done;)if(!i.has(l.value[0]))return!1;for(u=t.entries();!(l=u.next()).done;)if(!e(l.value[1],i.get(l.value[0])))return!1;return!0}if(a&&t instanceof Set&&i instanceof Set){if(t.size!==i.size)return!1;for(u=t.entries();!(l=u.next()).done;)if(!i.has(l.value[0]))return!1;return!0}if(c&&ArrayBuffer.isView(t)&&ArrayBuffer.isView(i)){if((o=t.length)!=i.length)return!1;for(l=o;0!=l--;)if(t[l]!==i[l])return!1;return!0}if(t.constructor===RegExp)return t.source===i.source&&t.flags===i.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===i.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===i.toString();if((o=(s=Object.keys(t)).length)!==Object.keys(i).length)return!1;for(l=o;0!=l--;)if(!Object.prototype.hasOwnProperty.call(i,s[l]))return!1;if(n&&t instanceof Element)return!1;for(l=o;0!=l--;)if(("_owner"!==s[l]&&"__v"!==s[l]&&"__o"!==s[l]||!t.$$typeof)&&!e(t[s[l]],i[s[l]]))return!1;return!0}return t!=t&&i!=i}(e,t)}catch(i){if((i.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw i}}},dURY:function(e,t,n){e.exports=n.p+"static/S-logo-7330c183159dedc100d7a37463c15722.png"},ignT:function(e,t,n){e.exports={logo:"topNav-module--logo--2eN_7",navbarBurger:"topNav-module--navbar-burger--3FE-b",navbar:"topNav-module--navbar--3aZKX"}},qhky:function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return de}));var r,a,c,i,o=n("17x9"),l=n.n(o),s=n("8+s/"),u=n.n(s),f=n("ZhWT"),p=n.n(f),h=n("q1tI"),m=n.n(h),d=n("6qGY"),v=n.n(d),y="bodyAttributes",b="htmlAttributes",g="titleAttributes",w={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},T=(Object.keys(w).map((function(e){return w[e]})),"charset"),E="cssText",C="href",A="http-equiv",S="innerHTML",O="itemprop",L="name",M="property",k="rel",z="src",j="target",x={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},N="defaultTitle",I="defer",P="encodeSpecialCharacters",V="onChangeClientState",B="titleTemplate",H=Object.keys(x).reduce((function(e,t){return e[x[t]]=t,e}),{}),R=[w.NOSCRIPT,w.SCRIPT,w.STYLE],q="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},_=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},F=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),Y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},D=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n},U=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},K=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},W=function(e){var t=Z(e,w.TITLE),n=Z(e,B);if(n&&t)return n.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var r=Z(e,N);return t||r||void 0},G=function(e){return Z(e,V)||function(){}},Q=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return Y({},e,t)}),{})},J=function(e,t){return t.filter((function(e){return void 0!==e[w.BASE]})).map((function(e){return e[w.BASE]})).reverse().reduce((function(t,n){if(!t.length)for(var r=Object.keys(n),a=0;a<r.length;a++){var c=r[a].toLowerCase();if(-1!==e.indexOf(c)&&n[c])return t.concat(n)}return t}),[])},X=function(e,t,n){var r={};return n.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&re("Helmet: "+e+' should be of type "Array". Instead found type "'+q(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,n){var a={};n.filter((function(e){for(var n=void 0,c=Object.keys(e),i=0;i<c.length;i++){var o=c[i],l=o.toLowerCase();-1===t.indexOf(l)||n===k&&"canonical"===e[n].toLowerCase()||l===k&&"stylesheet"===e[l].toLowerCase()||(n=l),-1===t.indexOf(o)||o!==S&&o!==E&&o!==O||(n=o)}if(!n||!e[n])return!1;var s=e[n].toLowerCase();return r[n]||(r[n]={}),a[n]||(a[n]={}),!r[n][s]&&(a[n][s]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var c=Object.keys(a),i=0;i<c.length;i++){var o=c[i],l=v()({},r[o],a[o]);r[o]=l}return e}),[]).reverse()},Z=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},$=(r=Date.now(),function(e){var t=Date.now();t-r>16?(r=t,e(t)):setTimeout((function(){$(e)}),0)}),ee=function(e){return clearTimeout(e)},te="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||$:e.requestAnimationFrame||$,ne="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||ee:e.cancelAnimationFrame||ee,re=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},ae=null,ce=function(e,t){var n=e.baseTag,r=e.bodyAttributes,a=e.htmlAttributes,c=e.linkTags,i=e.metaTags,o=e.noscriptTags,l=e.onChangeClientState,s=e.scriptTags,u=e.styleTags,f=e.title,p=e.titleAttributes;le(w.BODY,r),le(w.HTML,a),oe(f,p);var h={baseTag:se(w.BASE,n),linkTags:se(w.LINK,c),metaTags:se(w.META,i),noscriptTags:se(w.NOSCRIPT,o),scriptTags:se(w.SCRIPT,s),styleTags:se(w.STYLE,u)},m={},d={};Object.keys(h).forEach((function(e){var t=h[e],n=t.newTags,r=t.oldTags;n.length&&(m[e]=n),r.length&&(d[e]=h[e].oldTags)})),t&&t(),l(e,m,d)},ie=function(e){return Array.isArray(e)?e.join(""):e},oe=function(e,t){void 0!==e&&document.title!==e&&(document.title=ie(e)),le(w.TITLE,t)},le=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute("data-react-helmet"),a=r?r.split(","):[],c=[].concat(a),i=Object.keys(t),o=0;o<i.length;o++){var l=i[o],s=t[l]||"";n.getAttribute(l)!==s&&n.setAttribute(l,s),-1===a.indexOf(l)&&a.push(l);var u=c.indexOf(l);-1!==u&&c.splice(u,1)}for(var f=c.length-1;f>=0;f--)n.removeAttribute(c[f]);a.length===c.length?n.removeAttribute("data-react-helmet"):n.getAttribute("data-react-helmet")!==i.join(",")&&n.setAttribute("data-react-helmet",i.join(","))}},se=function(e,t){var n=document.head||document.querySelector(w.HEAD),r=n.querySelectorAll(e+"[data-react-helmet]"),a=Array.prototype.slice.call(r),c=[],i=void 0;return t&&t.length&&t.forEach((function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===S)n.innerHTML=t.innerHTML;else if(r===E)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var o=void 0===t[r]?"":t[r];n.setAttribute(r,o)}n.setAttribute("data-react-helmet","true"),a.some((function(e,t){return i=t,n.isEqualNode(e)}))?a.splice(i,1):c.push(n)})),a.forEach((function(e){return e.parentNode.removeChild(e)})),c.forEach((function(e){return n.appendChild(e)})),{oldTags:a,newTags:c}},ue=function(e){return Object.keys(e).reduce((function(t,n){var r=void 0!==e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r}),"")},fe=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[x[n]||n]=e[n],t}),t)},pe=function(e,t,n){switch(e){case w.TITLE:return{toComponent:function(){return e=t.title,n=t.titleAttributes,(r={key:e})["data-react-helmet"]=!0,a=fe(n,r),[m.a.createElement(w.TITLE,a,e)];var e,n,r,a},toString:function(){return function(e,t,n,r){var a=ue(n),c=ie(t);return a?"<"+e+' data-react-helmet="true" '+a+">"+K(c,r)+"</"+e+">":"<"+e+' data-react-helmet="true">'+K(c,r)+"</"+e+">"}(e,t.title,t.titleAttributes,n)}};case y:case b:return{toComponent:function(){return fe(t)},toString:function(){return ue(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,n){var r,a=((r={key:n})["data-react-helmet"]=!0,r);return Object.keys(t).forEach((function(e){var n=x[e]||e;if(n===S||n===E){var r=t.innerHTML||t.cssText;a.dangerouslySetInnerHTML={__html:r}}else a[n]=t[e]})),m.a.createElement(e,a)}))}(e,t)},toString:function(){return function(e,t,n){return t.reduce((function(t,r){var a=Object.keys(r).filter((function(e){return!(e===S||e===E)})).reduce((function(e,t){var a=void 0===r[t]?t:t+'="'+K(r[t],n)+'"';return e?e+" "+a:a}),""),c=r.innerHTML||r.cssText||"",i=-1===R.indexOf(e);return t+"<"+e+' data-react-helmet="true" '+a+(i?"/>":">"+c+"</"+e+">")}),"")}(e,t,n)}}}},he=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,a=e.htmlAttributes,c=e.linkTags,i=e.metaTags,o=e.noscriptTags,l=e.scriptTags,s=e.styleTags,u=e.title,f=void 0===u?"":u,p=e.titleAttributes;return{base:pe(w.BASE,t,r),bodyAttributes:pe(y,n,r),htmlAttributes:pe(b,a,r),link:pe(w.LINK,c,r),meta:pe(w.META,i,r),noscript:pe(w.NOSCRIPT,o,r),script:pe(w.SCRIPT,l,r),style:pe(w.STYLE,s,r),title:pe(w.TITLE,{title:f,titleAttributes:p},r)}},me=u()((function(e){return{baseTag:J([C,j],e),bodyAttributes:Q(y,e),defer:Z(e,I),encode:Z(e,P),htmlAttributes:Q(b,e),linkTags:X(w.LINK,[k,C],e),metaTags:X(w.META,[L,T,A,M,O],e),noscriptTags:X(w.NOSCRIPT,[S],e),onChangeClientState:G(e),scriptTags:X(w.SCRIPT,[z,S],e),styleTags:X(w.STYLE,[E],e),title:W(e),titleAttributes:Q(g,e)}}),(function(e){ae&&ne(ae),e.defer?ae=te((function(){ce(e,(function(){ae=null}))})):(ce(e),ae=null)}),he)((function(){return null})),de=(a=me,i=c=function(e){function t(){return _(this,t),U(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!p()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case w.SCRIPT:case w.NOSCRIPT:return{innerHTML:t};case w.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,r=e.arrayTypeChildren,a=e.newChildProps,c=e.nestedChildren;return Y({},r,((t={})[n.type]=[].concat(r[n.type]||[],[Y({},a,this.mapNestedChildrenToProps(n,c))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,n,r=e.child,a=e.newProps,c=e.newChildProps,i=e.nestedChildren;switch(r.type){case w.TITLE:return Y({},a,((t={})[r.type]=i,t.titleAttributes=Y({},c),t));case w.BODY:return Y({},a,{bodyAttributes:Y({},c)});case w.HTML:return Y({},a,{htmlAttributes:Y({},c)})}return Y({},a,((n={})[r.type]=Y({},c),n))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=Y({},t);return Object.keys(e).forEach((function(t){var r;n=Y({},n,((r={})[t]=e[t],r))})),n},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var n=this,r={};return m.a.Children.forEach(e,(function(e){if(e&&e.props){var a=e.props,c=a.children,i=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[H[n]||n]=e[n],t}),t)}(D(a,["children"]));switch(n.warnOnInvalidChildren(e,c),e.type){case w.LINK:case w.META:case w.NOSCRIPT:case w.SCRIPT:case w.STYLE:r=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:r,newChildProps:i,nestedChildren:c});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:i,nestedChildren:c})}}})),t=this.mapArrayTypeChildrenToProps(r,t)},t.prototype.render=function(){var e=this.props,t=e.children,n=D(e,["children"]),r=Y({},n);return t&&(r=this.mapChildrenToProps(t,r)),m.a.createElement(a,r)},F(t,null,[{key:"canUseDOM",set:function(e){a.canUseDOM=e}}]),t}(m.a.Component),c.propTypes={base:l.a.object,bodyAttributes:l.a.object,children:l.a.oneOfType([l.a.arrayOf(l.a.node),l.a.node]),defaultTitle:l.a.string,defer:l.a.bool,encodeSpecialCharacters:l.a.bool,htmlAttributes:l.a.object,link:l.a.arrayOf(l.a.object),meta:l.a.arrayOf(l.a.object),noscript:l.a.arrayOf(l.a.object),onChangeClientState:l.a.func,script:l.a.arrayOf(l.a.object),style:l.a.arrayOf(l.a.object),title:l.a.string,titleAttributes:l.a.object,titleTemplate:l.a.string},c.defaultProps={defer:!0,encodeSpecialCharacters:!0},c.peek=a.peek,c.rewind=function(){var e=a.rewind();return e||(e=he({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},i);de.renderStatic=de.rewind}).call(this,n("yLpj"))},vrFN:function(e,t,n){"use strict";var r=n("q1tI"),a=n.n(r),c=n("qhky"),i=n("Wbzz");function o(e){var t=e.description,n=e.lang,r=e.meta,o=e.title,l=Object(i.useStaticQuery)("63159454").site,s=t||l.siteMetadata.description;return a.a.createElement(c.a,{htmlAttributes:{lang:n},title:o,titleTemplate:"%s | "+l.siteMetadata.title,meta:[{name:"description",content:s},{property:"og:title",content:o},{property:"og:description",content:s},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:l.siteMetadata.author},{name:"twitter:title",content:o},{name:"twitter:description",content:s}].concat(r)})}o.defaultProps={lang:"en",meta:[],description:""},t.a=o},wwL4:function(e,t,n){e.exports={socialContainer:"social-links-module--social-container--gw5ms",socialList:"social-links-module--social-list--oOjv2",socialListItem:"social-links-module--social-list-item--2qdgf",socialLink:"social-links-module--social-link--u9CSQ",socialIcon:"social-links-module--social-icon--1wGV7"}},yLpj:function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(r){"object"==typeof window&&(n=window)}e.exports=n}}]);
//# sourceMappingURL=commons-ef9f1a23ecba8beb42c5.js.map