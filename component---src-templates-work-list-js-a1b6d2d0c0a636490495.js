(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"6l5j":function(e,a,t){e.exports={linkContainer:"post-link-module--link-container--2kcQZ",linkTitle:"post-link-module--link-title--17aTZ",excerpt:"post-link-module--excerpt--9A5O0"}},"LF+6":function(e,a,t){"use strict";t.d(a,"a",(function(){return c}));var n=t("q1tI"),i=t.n(n),l=t("Wbzz"),r=t("6l5j"),o=t.n(r);function c(e){var a=e.post;return i.a.createElement("div",{className:o.a.linkContainer},i.a.createElement(l.Link,{className:o.a.linkTitle,to:a.fields.slug},a.frontmatter.title),i.a.createElement("p",{className:o.a.excerpt},a.excerpt&&a.excerpt))}},Ul2p:function(e,a,t){e.exports={blogMain:"list-module--blog-main--3BFol",pageNavContainer:"list-module--page-nav-container--IYUVO",paginationControl:"list-module--pagination-control--2yO49"}},lJ5m:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return p}));var n=t("q1tI"),i=t.n(n),l=t("Wbzz"),r=t("vrFN"),o=t("Bl7J"),c=t("LF+6"),s=t("Ul2p"),m=t.n(s);function p(e){var a=e.data,t=e.pageContext,n=a.allMarkdownRemark.edges.map((function(e){var a=e.node;return i.a.createElement(c.a,{key:a.id,post:a})})),s=t.currentPage,p=t.numPages,u=1===s,g=s===p,k=s-1==1?"":(s-1).toString(),d=(s+1).toString();return i.a.createElement(o.a,null,i.a.createElement(r.a,{title:"Work"}),i.a.createElement("section",{className:"section has-text-centered "+m.a.blogMain},i.a.createElement("div",{className:"container "},i.a.createElement("h1",{className:"title"},"Work"),n),p>1?i.a.createElement("div",{className:m.a.pageNavContainer},i.a.createElement("nav",{className:"pagination is-centered "+m.a.paginationControl,role:"navigation","aria-label":"pagination"},!u&&i.a.createElement(l.Link,{className:"pagination-previous",to:"/work/"+k},"← Previous Page"),i.a.createElement("ul",{className:"pagination-list"},Array.from({length:p},(function(e,a){return i.a.createElement("li",{key:"pagination-number"+(a+1)},i.a.createElement(l.Link,{className:"pagination-link",to:"/work/"+(0===a?"":a+1)},a+1," "))}))),!g&&i.a.createElement(l.Link,{className:"pagination-next",to:"/work/"+d},"Next Page →"))):null))}}}]);
//# sourceMappingURL=component---src-templates-work-list-js-a1b6d2d0c0a636490495.js.map