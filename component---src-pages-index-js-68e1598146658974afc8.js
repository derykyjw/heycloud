"use strict";(self.webpackChunkgatsby_starter_hello_world=self.webpackChunkgatsby_starter_hello_world||[]).push([[678],{72:function(e){var t=function(e,t){if("string"!=typeof e&&!Array.isArray(e))throw new TypeError("Expected the input to be `string | string[]`");t=Object.assign({pascalCase:!1},t);var r;return e=Array.isArray(e)?e.map((function(e){return e.trim()})).filter((function(e){return e.length})).join("-"):e.trim(),0===e.length?"":1===e.length?t.pascalCase?e.toUpperCase():e.toLowerCase():(e!==e.toLowerCase()&&(e=function(e){for(var t=!1,r=!1,a=!1,n=0;n<e.length;n++){var i=e[n];t&&/[a-zA-Z]/.test(i)&&i.toUpperCase()===i?(e=e.slice(0,n)+"-"+e.slice(n),t=!1,a=r,r=!0,n++):r&&a&&/[a-zA-Z]/.test(i)&&i.toLowerCase()===i?(e=e.slice(0,n-1)+"-"+e.slice(n-1),a=r,r=!1,t=!0):(t=i.toLowerCase()===i&&i.toUpperCase()!==i,a=r,r=i.toUpperCase()===i&&i.toLowerCase()!==i)}return e}(e)),e=e.replace(/^[_.\- ]+/,"").toLowerCase().replace(/[_.\- ]+(\w|$)/g,(function(e,t){return t.toUpperCase()})).replace(/\d+(\w|$)/g,(function(e){return e.toUpperCase()})),r=e,t.pascalCase?r.charAt(0).toUpperCase()+r.slice(1):r)};e.exports=t,e.exports.default=t},1046:function(e,t,r){r.d(t,{w_:function(){return c}});var a=r(7294),n={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},i=a.createContext&&a.createContext(n),o=function(){return o=Object.assign||function(e){for(var t,r=1,a=arguments.length;r<a;r++)for(var n in t=arguments[r])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e},o.apply(this,arguments)},s=function(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(a=Object.getOwnPropertySymbols(e);n<a.length;n++)t.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(e,a[n])&&(r[a[n]]=e[a[n]])}return r};function l(e){return e&&e.map((function(e,t){return a.createElement(e.tag,o({key:t},e.attr),l(e.child))}))}function c(e){return function(t){return a.createElement(u,o({attr:o({},e.attr)},t),l(e.child))}}function u(e){var t=function(t){var r,n=e.attr,i=e.size,l=e.title,c=s(e,["attr","size","title"]),u=i||t.size||"1em";return t.className&&(r=t.className),e.className&&(r=(r?r+" ":"")+e.className),a.createElement("svg",o({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,n,c,{className:r,style:o(o({color:e.color||t.color},t.style),e.style),height:u,width:u,xmlns:"http://www.w3.org/2000/svg"}),l&&a.createElement("title",null,l),e.children)};return void 0!==i?a.createElement(i.Consumer,null,(function(e){return t(e)})):t(n)}},3723:function(e,t,r){r.d(t,{G:function(){return T},L:function(){return g},M:function(){return E},P:function(){return w},S:function(){return A},_:function(){return s},a:function(){return o},b:function(){return c},g:function(){return u},h:function(){return l}});var a=r(7294),n=(r(72),r(5697)),i=r.n(n);function o(){return o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},o.apply(this,arguments)}function s(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)t.indexOf(r=i[a])>=0||(n[r]=e[r]);return n}var l=function(){return"undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype};function c(e,t,r,a,n){return void 0===n&&(n={}),o({},r,{loading:a,shouldLoad:e,"data-main-image":"",style:o({},n,{opacity:t?1:0})})}function u(e,t,r,a,n,i,s,l){var c={};i&&(c.backgroundColor=i,"fixed"===r?(c.width=a,c.height=n,c.backgroundColor=i,c.position="relative"):("constrained"===r||"fullWidth"===r)&&(c.position="absolute",c.top=0,c.left=0,c.bottom=0,c.right=0)),s&&(c.objectFit=s),l&&(c.objectPosition=l);var u=o({},e,{"aria-hidden":!0,"data-placeholder-image":"",style:o({opacity:t?0:1,transition:"opacity 500ms linear"},c)});return u}var d,m=["children"],p=function(e){var t=e.layout,r=e.width,n=e.height;return"fullWidth"===t?a.createElement("div",{"aria-hidden":!0,style:{paddingTop:n/r*100+"%"}}):"constrained"===t?a.createElement("div",{style:{maxWidth:r,display:"block"}},a.createElement("img",{alt:"",role:"presentation","aria-hidden":"true",src:"data:image/svg+xml;charset=utf-8,%3Csvg height='"+n+"' width='"+r+"' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E",style:{maxWidth:"100%",display:"block",position:"static"}})):null},g=function(e){var t=e.children,r=s(e,m);return a.createElement(a.Fragment,null,a.createElement(p,o({},r)),t,null)},f=["src","srcSet","loading","alt","shouldLoad"],h=["fallback","sources","shouldLoad"],v=function(e){var t=e.src,r=e.srcSet,n=e.loading,i=e.alt,l=void 0===i?"":i,c=e.shouldLoad,u=s(e,f);return a.createElement("img",o({},u,{decoding:"async",loading:n,src:c?t:void 0,"data-src":c?void 0:t,srcSet:c?r:void 0,"data-srcset":c?void 0:r,alt:l}))},y=function(e){var t=e.fallback,r=e.sources,n=void 0===r?[]:r,i=e.shouldLoad,l=void 0===i||i,c=s(e,h),u=c.sizes||(null==t?void 0:t.sizes),d=a.createElement(v,o({},c,t,{sizes:u,shouldLoad:l}));return n.length?a.createElement("picture",null,n.map((function(e){var t=e.media,r=e.srcSet,n=e.type;return a.createElement("source",{key:t+"-"+n+"-"+r,type:n,media:t,srcSet:l?r:void 0,"data-srcset":l?void 0:r,sizes:u})})),d):d};v.propTypes={src:n.string.isRequired,alt:n.string.isRequired,sizes:n.string,srcSet:n.string,shouldLoad:n.bool},y.displayName="Picture",y.propTypes={alt:n.string.isRequired,shouldLoad:n.bool,fallback:n.exact({src:n.string.isRequired,srcSet:n.string,sizes:n.string}),sources:n.arrayOf(n.oneOfType([n.exact({media:n.string.isRequired,type:n.string,sizes:n.string,srcSet:n.string.isRequired}),n.exact({media:n.string,type:n.string.isRequired,sizes:n.string,srcSet:n.string.isRequired})]))};var b=["fallback"],w=function(e){var t=e.fallback,r=s(e,b);return t?a.createElement(y,o({},r,{fallback:{src:t},"aria-hidden":!0,alt:""})):a.createElement("div",o({},r))};w.displayName="Placeholder",w.propTypes={fallback:n.string,sources:null==(d=y.propTypes)?void 0:d.sources,alt:function(e,t,r){return e[t]?new Error("Invalid prop `"+t+"` supplied to `"+r+"`. Validation failed."):null}};var E=function(e){return a.createElement(a.Fragment,null,a.createElement(y,o({},e)),a.createElement("noscript",null,a.createElement(y,o({},e,{shouldLoad:!0}))))};E.displayName="MainImage",E.propTypes=y.propTypes;var C,k,N=function(e,t,r){for(var a=arguments.length,n=new Array(a>3?a-3:0),o=3;o<a;o++)n[o-3]=arguments[o];return e.alt||""===e.alt?i().string.apply(i(),[e,t,r].concat(n)):new Error('The "alt" prop is required in '+r+'. If the image is purely presentational then pass an empty string: e.g. alt="". Learn more: https://a11y-style-guide.com/style-guide/section-media.html')},L={image:i().object.isRequired,alt:N},x=["as","image","style","backgroundColor","className","class","onStartLoad","onLoad","onError"],O=["style","className"],S=new Set,j=function(e){var t=e.as,n=void 0===t?"div":t,i=e.image,c=e.style,u=e.backgroundColor,d=e.className,m=e.class,p=e.onStartLoad,g=e.onLoad,f=e.onError,h=s(e,x),v=i.width,y=i.height,b=i.layout,w=function(e,t,r){var a={},n="gatsby-image-wrapper";return"fixed"===r?(a.width=e,a.height=t):"constrained"===r&&(n="gatsby-image-wrapper gatsby-image-wrapper-constrained"),{className:n,"data-gatsby-image-wrapper":"",style:a}}(v,y,b),E=w.style,N=w.className,L=s(w,O),j=(0,a.useRef)(),T=(0,a.useMemo)((function(){return JSON.stringify(i.images)}),[i.images]);m&&(d=m);var _=function(e,t,r){var a="";return"fullWidth"===e&&(a='<div aria-hidden="true" style="padding-top: '+r/t*100+'%;"></div>'),"constrained"===e&&(a='<div style="max-width: '+t+'px; display: block;"><img alt="" role="presentation" aria-hidden="true" src="data:image/svg+xml;charset=utf-8,%3Csvg height=\''+r+"' width='"+t+"' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E\" style=\"max-width: 100%; display: block; position: static;\"></div>"),a}(b,v,y);return(0,a.useEffect)((function(){C||(C=Promise.all([r.e(774),r.e(217)]).then(r.bind(r,9217)).then((function(e){var t=e.renderImageToString,r=e.swapPlaceholderImage;return k=t,{renderImageToString:t,swapPlaceholderImage:r}})));var e,t,a=j.current.querySelector("[data-gatsby-image-ssr]");return a&&l()?(a.complete?(null==p||p({wasCached:!0}),null==g||g({wasCached:!0}),setTimeout((function(){a.removeAttribute("data-gatsby-image-ssr")}),0)):(null==p||p({wasCached:!0}),a.addEventListener("load",(function e(){a.removeEventListener("load",e),null==g||g({wasCached:!0}),setTimeout((function(){a.removeAttribute("data-gatsby-image-ssr")}),0)}))),void S.add(T)):k&&S.has(T)?void 0:(C.then((function(r){var a=r.renderImageToString,n=r.swapPlaceholderImage;j.current&&(j.current.innerHTML=a(o({isLoading:!0,isLoaded:S.has(T),image:i},h)),S.has(T)||(e=requestAnimationFrame((function(){j.current&&(t=n(j.current,T,S,c,p,g,f))}))))})),function(){e&&cancelAnimationFrame(e),t&&t()})}),[i]),(0,a.useLayoutEffect)((function(){S.has(T)&&k&&(j.current.innerHTML=k(o({isLoading:S.has(T),isLoaded:S.has(T),image:i},h)),null==p||p({wasCached:!0}),null==g||g({wasCached:!0}))}),[i]),(0,a.createElement)(n,o({},L,{style:o({},E,c,{backgroundColor:u}),className:N+(d?" "+d:""),ref:j,dangerouslySetInnerHTML:{__html:_},suppressHydrationWarning:!0}))},T=(0,a.memo)((function(e){return e.image?(0,a.createElement)(j,e):null}));T.propTypes=L,T.displayName="GatsbyImage";var _,z=["src","__imageData","__error","width","height","aspectRatio","tracedSVGOptions","placeholder","formats","quality","transformOptions","jpgOptions","pngOptions","webpOptions","avifOptions","blurredOptions","breakpoints","outputPixelDensities"],I=function(e,t){for(var r=arguments.length,a=new Array(r>2?r-2:0),n=2;n<r;n++)a[n-2]=arguments[n];return"fullWidth"!==e.layout||"width"!==t&&"height"!==t||!e[t]?i().number.apply(i(),[e,t].concat(a)):new Error('"'+t+'" '+e[t]+" may not be passed when layout is fullWidth.")},q=new Set(["fixed","fullWidth","constrained"]),P={src:i().string.isRequired,alt:N,width:I,height:I,sizes:i().string,layout:function(e){if(void 0!==e.layout&&!q.has(e.layout))return new Error("Invalid value "+e.layout+'" provided for prop "layout". Defaulting to "constrained". Valid values are "fixed", "fullWidth" or "constrained".')}},A=(_=T,function(e){var t=e.src,r=e.__imageData,n=e.__error,i=s(e,z);return n&&console.warn(n),r?a.createElement(_,o({image:r},i)):(console.warn("Image not loaded",t),null)});A.displayName="StaticImage",A.propTypes=P},8661:function(e,t,r){r.d(t,{Z:function(){return c}});var a=r(7294),n=r(1082),i=r(3201),o=r.p+"static/logo-eb84f29552ccf652e0cb1e1f07450b4d.png";function s(){var e=(0,a.useState)(!1),t=e[0],r=e[1];return a.createElement("nav",{className:"navbar"},a.createElement("div",{className:"nav-center"},a.createElement("div",{className:"nav-header"},a.createElement(n.rU,{to:"/"},a.createElement("img",{src:o,alt:"HeyCloud"})),a.createElement("button",{className:"nav-btn",onClick:function(){return r(!t)}},a.createElement(i.jw0,null))),a.createElement("div",{className:t?"nav-links show-links":"nav-links"},a.createElement(n.rU,{to:"/",className:"nav-link",activeClassName:"active-link",onClick:function(){return r(!1)}},"Home"),a.createElement(n.rU,{to:"/about",className:"nav-link",activeClassName:"active-link",onClick:function(){return r(!1)}},"About"),a.createElement(n.rU,{to:"/contact",className:"nav-link",activeClassName:"active-link",onClick:function(){return r(!1)}},"Contact"))))}function l(){return a.createElement("footer",{className:"page-footer"},a.createElement("p",null,"© ",(new Date).getFullYear(),a.createElement("span",null," HeyCloud")),a.createElement("div",null,a.createElement("a",{href:"https://www.vecteezy.com/free-vector/cloud-computing"},"Cloud Computing Vectors by Vecteezy")))}function c(e){var t=e.children;return a.createElement(a.Fragment,null," ",a.createElement(s,null),t," ",a.createElement(l,null))}},6558:function(e,t,r){r.r(t),r.d(t,{default:function(){return o}});var a=r(7294),n=r(8661),i=r(3723);function o(e){var t=e.data;return a.createElement(n.Z,null,a.createElement("main",{className:"home-main"},a.createElement("section",{className:"home-section"},a.createElement("div",{className:"home-body"},a.createElement("div",null,a.createElement("h2",null,"Cloud Solutions"),a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.")),a.createElement("div",null,a.createElement(i.G,{image:t.file.childImageSharp.gatsbyImageData})))),a.createElement("section",{className:"home-partners"},a.createElement("div",null,a.createElement("h3",null,"Our Partners:")),a.createElement("div",null,a.createElement(i.S,{src:"../assets/images/toyotsu.jpg",alt:"toyotsu",__imageData:r(3445)})))))}},3445:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#f8f8f8","images":{"fallback":{"src":"/static/b5826111798dfec55506de0cd992dd1b/0f1ae/toyotsu.jpg","srcSet":"/static/b5826111798dfec55506de0cd992dd1b/317a7/toyotsu.jpg 106w,\\n/static/b5826111798dfec55506de0cd992dd1b/1f4ea/toyotsu.jpg 211w,\\n/static/b5826111798dfec55506de0cd992dd1b/0f1ae/toyotsu.jpg 422w","sizes":"(min-width: 422px) 422px, 100vw"},"sources":[{"srcSet":"/static/b5826111798dfec55506de0cd992dd1b/3bcbb/toyotsu.webp 106w,\\n/static/b5826111798dfec55506de0cd992dd1b/77f35/toyotsu.webp 211w,\\n/static/b5826111798dfec55506de0cd992dd1b/258cd/toyotsu.webp 422w","type":"image/webp","sizes":"(min-width: 422px) 422px, 100vw"}]},"width":422,"height":224}')}}]);
//# sourceMappingURL=component---src-pages-index-js-68e1598146658974afc8.js.map