(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{126:function(e,t,r){"use strict";r.d(t,"a",(function(){return l})),r.d(t,"b",(function(){return h}));var n=r(0),a=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function b(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=a.a.createContext({}),p=function(e){var t=a.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):b(b({},t),e)),r},l=function(e){var t=p(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},g=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),l=p(r),g=n,h=l["".concat(c,".").concat(g)]||l[g]||s[g]||i;return r?a.a.createElement(h,b(b({ref:t},u),{},{components:r})):a.a.createElement(h,b({ref:t},u))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,c=new Array(i);c[0]=g;var b={};for(var o in t)hasOwnProperty.call(t,o)&&(b[o]=t[o]);b.originalType=e,b.mdxType="string"==typeof e?e:n,c[1]=b;for(var u=2;u<i;u++)c[u]=r[u];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,r)}g.displayName="MDXCreateElement"},92:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return b})),r.d(t,"toc",(function(){return o})),r.d(t,"default",(function(){return p}));var n=r(3),a=r(7),i=(r(0),r(126)),c={id:"github",title:"Github","sidebar-title":"Github"},b={unversionedId:"learning/prepare/github",id:"learning/prepare/github",isDocsHomePage:!1,title:"Github",description:"Github\u306fGit\u30b7\u30b9\u30c6\u30e0\u3092\u63d0\u4f9b\u3059\u308b\u30a6\u30a7\u30d6\u30b5\u30fc\u30d3\u30b9\u3067\u3059\u3002",source:"@site/docs/learning/prepare/github.md",slug:"/learning/prepare/github",permalink:"/tuttacatter/learning/prepare/github",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/learning/prepare/github.md",version:"current",sidebar:"learn",previous:{title:"\u74b0\u5883\u69cb\u7bc9",permalink:"/tuttacatter/learning/prepare/environment"},next:{title:"\u8ab2\u984c\u306b\u3064\u3044\u3066",permalink:"/tuttacatter/learning/tasks/about"}},o=[{value:"Git",id:"git",children:[]},{value:"SSH key\u306e\u751f\u6210",id:"ssh-key\u306e\u751f\u6210",children:[]},{value:"Github\u3078\u9375\u306e\u767b\u9332",id:"github\u3078\u9375\u306e\u767b\u9332",children:[]}],u={toc:o};function p(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,Object(i.b)("a",{parentName:"p",href:"https://github.com/"},"Github"),"\u306fGit\u30b7\u30b9\u30c6\u30e0\u3092\u63d0\u4f9b\u3059\u308b\u30a6\u30a7\u30d6\u30b5\u30fc\u30d3\u30b9\u3067\u3059\u3002  "),Object(i.b)("p",null,"github\u3092\u4f7f\u3048\u3070\u81ea\u5206\u306e\u30bd\u30fc\u30b9\u30b3\u30fc\u30c9\u3092\u30a6\u30a7\u30d6\u4e0a\u3067\u7ba1\u7406\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002\u5f93\u6765\u306f\u30d7\u30e9\u30a4\u30d9\u30fc\u30c8\u30ec\u30dd\u30b8\u30c8\u30ea\u306a\u3069\u3092\u5229\u7528\u3059\u308b\u5834\u5408\u306f\u6709\u6599\u30d7\u30e9\u30f3\u304c\u5fc5\u8981\u3067\u3057\u305f\u304c\u3001",Object(i.b)("br",{parentName:"p"}),"\n","microsoft\u306b\u8cb7\u53ce\u3055\u308c\u3066\u304b\u3089\u3001\u30d5\u30ea\u30fc\u30d7\u30e9\u30f3\u306e\u81ea\u7531\u5ea6\u304c\u683c\u6bb5\u306b\u4e0a\u304c\u308a\u307e\u3057\u305f\u3002  "),Object(i.b)("h3",{id:"git"},"Git"),Object(i.b)("p",null,"Git\u30b7\u30b9\u30c6\u30e0\u3068\u306f\u3001\u30bd\u30fc\u30b9\u30b3\u30fc\u30c9\u306e\u30d0\u30fc\u30b8\u30e7\u30f3\u3092\u7ba1\u7406\u3067\u304d\u308b\u30b7\u30b9\u30c6\u30e0\u306e\u3053\u3068\u3067\u3059\u3002",Object(i.b)("br",{parentName:"p"}),"\n","\u30b3\u30de\u30f3\u30c9\u3092\u901a\u3058\u3066\u3001\u30bd\u30fc\u30b9\u30b3\u30fc\u30c9\u3092\u7ba1\u7406\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002",Object(i.b)("br",{parentName:"p"}),"\n","Git\u30b7\u30b9\u30c6\u30e0\u3092\u30a6\u30a7\u30d6\u3092\u901a\u3058\u3066\u63d0\u4f9b\u3057\u3066\u3044\u308b\u30b5\u30fc\u30d3\u30b9\u306e\u4e00\u3064\u304cGithub\u3067\u3059\u3002",Object(i.b)("br",{parentName:"p"}),"\n","\u3044\u308d\u3044\u308d\u306a\u4f1a\u793e\u304c\u540c\u69d8\u306e\u30b5\u30fc\u30d3\u30b9\u3092\u63d0\u4f9b\u3057\u3066\u304a\u308a\u3001GitLab\u3084backlog\u306a\u3069\u3082\u8a72\u5f53\u3057\u307e\u3059\u3002  "),Object(i.b)("p",null,"\u5229\u7528\u3059\u308b\u30b5\u30fc\u30d3\u30b9\u306f\u7570\u306a\u3063\u3066\u3044\u3066\u3082\u3001\u6271\u3046git\u30b3\u30de\u30f3\u30c9\u306f\u5171\u901a\u3067\u3059\u3002",Object(i.b)("br",{parentName:"p"}),"\n","\u73fe\u5728\u306e\u30c1\u30fc\u30e0\u958b\u767a\u306e\u5834\u9762\u306b\u304a\u3044\u3066git\u3092\u4f7f\u3063\u3066\u3044\u306a\u3044\u3068\u3044\u3046\u3053\u3068\u306f\u307b\u307c\u306a\u3044\u3067\u3057\u3087\u3046\u3002",Object(i.b)("br",{parentName:"p"}),"\n","\u4e3b\u8981\u306a\u30b3\u30de\u30f3\u30c9\u306a\u3069\u3092\u899a\u3048\u3066\u3001\u7c21\u5358\u306b\u4f7f\u3063\u3066\u307f\u307e\u3057\u3087\u3046\u3002  "),Object(i.b)("h2",{id:"ssh-key\u306e\u751f\u6210"},"SSH key\u306e\u751f\u6210"),Object(i.b)("p",null,"\u30ed\u30fc\u30ab\u30eb\u306e\u30b3\u30de\u30f3\u30c9\u30e9\u30a4\u30f3\u3067\u79d8\u5bc6\u9375\u3068\u516c\u958b\u9375\u3092\u4f5c\u6210\u3057\u307e\u3059\u3002"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"ssh-keygen -t rsa\n")),Object(i.b)("p",null,"SSH\u9375\u306e\u4f5c\u6210\u306b\u3064\u3044\u3066\u306e",Object(i.b)("a",{parentName:"p",href:"https://qiita.com/digdagdag/items/9e5c061e7d86e0af9a57"},"\u53c2\u8003\u8a18\u4e8b")),Object(i.b)("h2",{id:"github\u3078\u9375\u306e\u767b\u9332"},"Github\u3078\u9375\u306e\u767b\u9332"),Object(i.b)("p",null,"\u9375\u3092\u751f\u6210\u3057\u305f\u3089\u3001\u4e0b\u8a18\u30ea\u30f3\u30af\u3092\u53c2\u8003\u306bgithub\u306b\u767b\u9332\u3057\u307e\u3057\u3087\u3046\u3002"),Object(i.b)("p",null,Object(i.b)("a",{parentName:"p",href:"https://docs.github.com/ja/github/authenticating-to-github/adding-a-new-ssh-key-to-your-github-account"},"https://docs.github.com/ja/github/authenticating-to-github/adding-a-new-ssh-key-to-your-github-account")),Object(i.b)("p",null,"\u516c\u958b\u9375\u3092github\u306b\u767b\u9332\u3059\u308b\u3053\u3068\u3067\u3001\u30b3\u30de\u30f3\u30c9\u30e9\u30a4\u30f3\u4e0a\u306a\u3069\u3067\u8a8d\u8a3c\u306e\u30d5\u30ed\u30fc\u3092\u7c21\u7565\u5316\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u308b\u307e\u3059\u3002",Object(i.b)("br",{parentName:"p"}),"\n","\u767b\u9332\u3057\u3066\u3044\u306a\u3044\u5834\u5408\u3001\u8a8d\u8a3c\u8981\u6c42\u6642\u306b\u6bce\u56de\u30d1\u30b9\u30ef\u30fc\u30c9\u3092\u5165\u529b\u3059\u308b\u5fc5\u8981\u304c\u3042\u308b\u306e\u3067\u7559\u610f\u3002  "))}p.isMDXComponent=!0}}]);