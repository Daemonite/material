/*!
 * tether 1.3.1
 * http://github.hubspot.com/tether/
 */
!function(t,e){"function"==typeof define&&define.amd?define(e):"object"==typeof exports?module.exports=e(require,exports,module):t.Tether=e()}(this,function(t,e,o){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t){var e=getComputedStyle(t)||{},o=e.position,n=[];if("fixed"===o)return[t];for(var i=t;(i=i.parentNode)&&i&&1===i.nodeType;){var r=void 0;try{r=getComputedStyle(i)}catch(s){}if("undefined"==typeof r||null===r)return n.push(i),n;var a=r,f=a.overflow,l=a.overflowX,h=a.overflowY;/(auto|scroll)/.test(f+h+l)&&("absolute"!==o||["relative","absolute","fixed"].indexOf(r.position)>=0)&&n.push(i)}return n.push(document.body),n}function r(){x&&document.body.removeChild(x),x=null}function s(t){var e=void 0;t===document?(e=document,t=document.documentElement):e=t.ownerDocument;var o=e.documentElement,n={},i=t.getBoundingClientRect();for(var r in i)n[r]=i[r];var s=S();return n.top-=s.top,n.left-=s.left,"undefined"==typeof n.width&&(n.width=document.body.scrollWidth-n.left-n.right),"undefined"==typeof n.height&&(n.height=document.body.scrollHeight-n.top-n.bottom),n.top=n.top-o.clientTop,n.left=n.left-o.clientLeft,n.right=e.body.clientWidth-n.width-n.left,n.bottom=e.body.clientHeight-n.height-n.top,n}function a(t){return t.offsetParent||document.documentElement}function f(){var t=document.createElement("div");t.style.width="100%",t.style.height="200px";var e=document.createElement("div");l(e.style,{position:"absolute",top:0,left:0,pointerEvents:"none",visibility:"hidden",width:"200px",height:"150px",overflow:"hidden"}),e.appendChild(t),document.body.appendChild(e);var o=t.offsetWidth;e.style.overflow="scroll";var n=t.offsetWidth;o===n&&(n=e.clientWidth),document.body.removeChild(e);var i=o-n;return{width:i,height:i}}function l(){var t=arguments.length<=0||void 0===arguments[0]?{}:arguments[0],e=[];return Array.prototype.push.apply(e,arguments),e.slice(1).forEach(function(e){if(e)for(var o in e)({}).hasOwnProperty.call(e,o)&&(t[o]=e[o])}),t}function h(t,e){if("undefined"!=typeof t.classList)e.split(" ").forEach(function(e){e.trim()&&t.classList.remove(e)});else{var o=new RegExp("(^| )"+e.split(" ").join("|")+"( |$)","gi"),n=p(t).replace(o," ");c(t,n)}}function d(t,e){if("undefined"!=typeof t.classList)e.split(" ").forEach(function(e){e.trim()&&t.classList.add(e)});else{h(t,e);var o=p(t)+(" "+e);c(t,o)}}function u(t,e){if("undefined"!=typeof t.classList)return t.classList.contains(e);var o=p(t);return new RegExp("(^| )"+e+"( |$)","gi").test(o)}function p(t){return t.className instanceof SVGAnimatedString?t.className.baseVal:t.className}function c(t,e){t.setAttribute("class",e)}function g(t,e,o){o.forEach(function(o){-1===e.indexOf(o)&&u(t,o)&&h(t,o)}),e.forEach(function(e){u(t,e)||d(t,e)})}function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function m(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}function v(t,e){var o=arguments.length<=2||void 0===arguments[2]?1:arguments[2];return t+o>=e&&e>=t-o}function y(){return"undefined"!=typeof performance&&"undefined"!=typeof performance.now?performance.now():+new Date}function b(){for(var t={top:0,left:0},e=arguments.length,o=Array(e),n=0;e>n;n++)o[n]=arguments[n];return o.forEach(function(e){var o=e.top,n=e.left;"string"==typeof o&&(o=parseFloat(o,10)),"string"==typeof n&&(n=parseFloat(n,10)),t.top+=o,t.left+=n}),t}function w(t,e){return"string"==typeof t.left&&-1!==t.left.indexOf("%")&&(t.left=parseFloat(t.left,10)/100*e.width),"string"==typeof t.top&&-1!==t.top.indexOf("%")&&(t.top=parseFloat(t.top,10)/100*e.height),t}function C(t,e){return"scrollParent"===e?e=t.scrollParents[0]:"window"===e&&(e=[pageXOffset,pageYOffset,innerWidth+pageXOffset,innerHeight+pageYOffset]),e===document&&(e=e.documentElement),"undefined"!=typeof e.nodeType&&!function(){var t=s(e),o=t,n=getComputedStyle(e);e=[o.left,o.top,t.width+o.left,t.height+o.top],V.forEach(function(t,o){t=t[0].toUpperCase()+t.substr(1),"Top"===t||"Left"===t?e[o]+=parseFloat(n["border"+t+"Width"]):e[o]-=parseFloat(n["border"+t+"Width"])})}(),e}var O=function(){function t(t,e){for(var o=0;o<e.length;o++){var n=e[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,o,n){return o&&t(e.prototype,o),n&&t(e,n),e}}(),E=void 0;"undefined"==typeof E&&(E={modules:[]});var x=null,T=function(){var t=0;return function(){return++t}}(),A={},S=function(){var t=x;t||(t=document.createElement("div"),t.setAttribute("data-tether-id",T()),l(t.style,{top:0,left:0,position:"absolute"}),document.body.appendChild(t),x=t);var e=t.getAttribute("data-tether-id");if("undefined"==typeof A[e]){A[e]={};var o=t.getBoundingClientRect();for(var n in o)A[e][n]=o[n];W(function(){delete A[e]})}return A[e]},P=[],W=function(t){P.push(t)},M=function(){for(var t=void 0;t=P.pop();)t()},_=function(){function t(){n(this,t)}return O(t,[{key:"on",value:function(t,e,o){var n=arguments.length<=3||void 0===arguments[3]?!1:arguments[3];"undefined"==typeof this.bindings&&(this.bindings={}),"undefined"==typeof this.bindings[t]&&(this.bindings[t]=[]),this.bindings[t].push({handler:e,ctx:o,once:n})}},{key:"once",value:function(t,e,o){this.on(t,e,o,!0)}},{key:"off",value:function(t,e){if("undefined"==typeof this.bindings||"undefined"==typeof this.bindings[t])if("undefined"==typeof e)delete this.bindings[t];else for(var o=0;o<this.bindings[t].length;)this.bindings[t][o].handler===e?this.bindings[t].splice(o,1):++o}},{key:"trigger",value:function(t){if("undefined"!=typeof this.bindings&&this.bindings[t]){for(var e=0,o=arguments.length,n=Array(o>1?o-1:0),i=1;o>i;i++)n[i-1]=arguments[i];for(;e<this.bindings[t].length;){var r=this.bindings[t][e],s=r.handler,a=r.ctx,f=r.once,l=a;"undefined"==typeof l&&(l=this),s.apply(l,n),f?this.bindings[t].splice(e,1):++e}}}}]),t}();E.Utils={getScrollParents:i,getBounds:s,getOffsetParent:a,extend:l,addClass:d,removeClass:h,hasClass:u,updateClasses:g,defer:W,flush:M,uniqueId:T,Evented:_,getScrollBarSize:f,removeUtilElements:r};var k=function(){function t(t,e){var o=[],n=!0,i=!1,r=void 0;try{for(var s,a=t[Symbol.iterator]();!(n=(s=a.next()).done)&&(o.push(s.value),!e||o.length!==e);n=!0);}catch(f){i=!0,r=f}finally{try{!n&&a["return"]&&a["return"]()}finally{if(i)throw r}}return o}return function(e,o){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return t(e,o);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),O=function(){function t(t,e){for(var o=0;o<e.length;o++){var n=e[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,o,n){return o&&t(e.prototype,o),n&&t(e,n),e}}(),B=function(t,e,o){for(var n=!0;n;){var i=t,r=e,s=o;n=!1,null===i&&(i=Function.prototype);var a=Object.getOwnPropertyDescriptor(i,r);if(void 0!==a){if("value"in a)return a.value;var f=a.get;if(void 0===f)return;return f.call(s)}var l=Object.getPrototypeOf(i);if(null===l)return;t=l,e=r,o=s,n=!0,a=l=void 0}};if("undefined"==typeof E)throw new Error("You must include the utils.js file before tether.js");var z=E.Utils,i=z.getScrollParents,s=z.getBounds,a=z.getOffsetParent,l=z.extend,d=z.addClass,h=z.removeClass,g=z.updateClasses,W=z.defer,M=z.flush,f=z.getScrollBarSize,r=z.removeUtilElements,j=function(){if("undefined"==typeof document)return"";for(var t=document.createElement("div"),e=["transform","webkitTransform","OTransform","MozTransform","msTransform"],o=0;o<e.length;++o){var n=e[o];if(void 0!==t.style[n])return n}}(),L=[],Y=function(){L.forEach(function(t){t.position(!1)}),M()};!function(){var t=null,e=null,o=null,n=function i(){return"undefined"!=typeof e&&e>16?(e=Math.min(e-16,250),void(o=setTimeout(i,250))):void("undefined"!=typeof t&&y()-t<10||(null!=o&&(clearTimeout(o),o=null),t=y(),Y(),e=y()-t))};"undefined"!=typeof window&&"undefined"!=typeof window.addEventListener&&["resize","scroll","touchmove"].forEach(function(t){window.addEventListener(t,n)})}();var F={center:"center",left:"right",right:"left"},H={middle:"middle",top:"bottom",bottom:"top"},X={top:0,left:0,middle:"50%",center:"50%",bottom:"100%",right:"100%"},N=function(t,e){var o=t.left,n=t.top;return"auto"===o&&(o=F[e.left]),"auto"===n&&(n=H[e.top]),{left:o,top:n}},U=function(t){var e=t.left,o=t.top;return"undefined"!=typeof X[t.left]&&(e=X[t.left]),"undefined"!=typeof X[t.top]&&(o=X[t.top]),{left:e,top:o}},R=function(t){var e=t.split(" "),o=k(e,2),n=o[0],i=o[1];return{top:n,left:i}},q=R,D=function(t){function e(t){var o=this;n(this,e),B(Object.getPrototypeOf(e.prototype),"constructor",this).call(this),this.position=this.position.bind(this),L.push(this),this.history=[],this.setOptions(t,!1),E.modules.forEach(function(t){"undefined"!=typeof t.initialize&&t.initialize.call(o)}),this.position()}return m(e,t),O(e,[{key:"getClass",value:function(){var t=arguments.length<=0||void 0===arguments[0]?"":arguments[0],e=this.options.classes;return"undefined"!=typeof e&&e[t]?this.options.classes[t]:this.options.classPrefix?this.options.classPrefix+"-"+t:t}},{key:"setOptions",value:function(t){var e=this,o=arguments.length<=1||void 0===arguments[1]?!0:arguments[1],n={offset:"0 0",targetOffset:"0 0",targetAttachment:"auto auto",classPrefix:"tether"};this.options=l(n,t);var r=this.options,s=r.element,a=r.target,f=r.targetModifier;if(this.element=s,this.target=a,this.targetModifier=f,"viewport"===this.target?(this.target=document.body,this.targetModifier="visible"):"scroll-handle"===this.target&&(this.target=document.body,this.targetModifier="scroll-handle"),["element","target"].forEach(function(t){if("undefined"==typeof e[t])throw new Error("Tether Error: Both element and target must be defined");"undefined"!=typeof e[t].jquery?e[t]=e[t][0]:"string"==typeof e[t]&&(e[t]=document.querySelector(e[t]))}),d(this.element,this.getClass("element")),this.options.addTargetClasses!==!1&&d(this.target,this.getClass("target")),!this.options.attachment)throw new Error("Tether Error: You must provide an attachment");this.targetAttachment=q(this.options.targetAttachment),this.attachment=q(this.options.attachment),this.offset=R(this.options.offset),this.targetOffset=R(this.options.targetOffset),"undefined"!=typeof this.scrollParents&&this.disable(),"scroll-handle"===this.targetModifier?this.scrollParents=[this.target]:this.scrollParents=i(this.target),this.options.enabled!==!1&&this.enable(o)}},{key:"getTargetBounds",value:function(){if("undefined"==typeof this.targetModifier)return s(this.target);if("visible"===this.targetModifier){if(this.target===document.body)return{top:pageYOffset,left:pageXOffset,height:innerHeight,width:innerWidth};var t=s(this.target),e={height:t.height,width:t.width,top:t.top,left:t.left};return e.height=Math.min(e.height,t.height-(pageYOffset-t.top)),e.height=Math.min(e.height,t.height-(t.top+t.height-(pageYOffset+innerHeight))),e.height=Math.min(innerHeight,e.height),e.height-=2,e.width=Math.min(e.width,t.width-(pageXOffset-t.left)),e.width=Math.min(e.width,t.width-(t.left+t.width-(pageXOffset+innerWidth))),e.width=Math.min(innerWidth,e.width),e.width-=2,e.top<pageYOffset&&(e.top=pageYOffset),e.left<pageXOffset&&(e.left=pageXOffset),e}if("scroll-handle"===this.targetModifier){var t=void 0,o=this.target;o===document.body?(o=document.documentElement,t={left:pageXOffset,top:pageYOffset,height:innerHeight,width:innerWidth}):t=s(o);var n=getComputedStyle(o),i=o.scrollWidth>o.clientWidth||[n.overflow,n.overflowX].indexOf("scroll")>=0||this.target!==document.body,r=0;i&&(r=15);var a=t.height-parseFloat(n.borderTopWidth)-parseFloat(n.borderBottomWidth)-r,e={width:15,height:.975*a*(a/o.scrollHeight),left:t.left+t.width-parseFloat(n.borderLeftWidth)-15},f=0;408>a&&this.target===document.body&&(f=-11e-5*Math.pow(a,2)-.00727*a+22.58),this.target!==document.body&&(e.height=Math.max(e.height,24));var l=this.target.scrollTop/(o.scrollHeight-a);return e.top=l*(a-e.height-f)+t.top+parseFloat(n.borderTopWidth),this.target===document.body&&(e.height=Math.max(e.height,24)),e}}},{key:"clearCache",value:function(){this._cache={}}},{key:"cache",value:function(t,e){return"undefined"==typeof this._cache&&(this._cache={}),"undefined"==typeof this._cache[t]&&(this._cache[t]=e.call(this)),this._cache[t]}},{key:"enable",value:function(){var t=this,e=arguments.length<=0||void 0===arguments[0]?!0:arguments[0];this.options.addTargetClasses!==!1&&d(this.target,this.getClass("enabled")),d(this.element,this.getClass("enabled")),this.enabled=!0,this.scrollParents.forEach(function(e){e!==document&&e.addEventListener("scroll",t.position)}),e&&this.position()}},{key:"disable",value:function(){var t=this;h(this.target,this.getClass("enabled")),h(this.element,this.getClass("enabled")),this.enabled=!1,"undefined"!=typeof this.scrollParents&&this.scrollParents.forEach(function(e){e.removeEventListener("scroll",t.position)})}},{key:"destroy",value:function(){var t=this;this.disable(),L.forEach(function(e,o){e===t&&L.splice(o,1)}),0===L.length&&r()}},{key:"updateAttachClasses",value:function(t,e){var o=this;t=t||this.attachment,e=e||this.targetAttachment;var n=["left","top","bottom","right","middle","center"];"undefined"!=typeof this._addAttachClasses&&this._addAttachClasses.length&&this._addAttachClasses.splice(0,this._addAttachClasses.length),"undefined"==typeof this._addAttachClasses&&(this._addAttachClasses=[]);var i=this._addAttachClasses;t.top&&i.push(this.getClass("element-attached")+"-"+t.top),t.left&&i.push(this.getClass("element-attached")+"-"+t.left),e.top&&i.push(this.getClass("target-attached")+"-"+e.top),e.left&&i.push(this.getClass("target-attached")+"-"+e.left);var r=[];n.forEach(function(t){r.push(o.getClass("element-attached")+"-"+t),r.push(o.getClass("target-attached")+"-"+t)}),W(function(){"undefined"!=typeof o._addAttachClasses&&(g(o.element,o._addAttachClasses,r),o.options.addTargetClasses!==!1&&g(o.target,o._addAttachClasses,r),delete o._addAttachClasses)})}},{key:"position",value:function(){var t=this,e=arguments.length<=0||void 0===arguments[0]?!0:arguments[0];if(this.enabled){this.clearCache();var o=N(this.targetAttachment,this.attachment);this.updateAttachClasses(this.attachment,o);var n=this.cache("element-bounds",function(){return s(t.element)}),i=n.width,r=n.height;if(0===i&&0===r&&"undefined"!=typeof this.lastSize){var l=this.lastSize;i=l.width,r=l.height}else this.lastSize={width:i,height:r};var h=this.cache("target-bounds",function(){return t.getTargetBounds()}),d=h,u=w(U(this.attachment),{width:i,height:r}),p=w(U(o),d),c=w(this.offset,{width:i,height:r}),g=w(this.targetOffset,d);u=b(u,c),p=b(p,g);for(var m=h.left+p.left-u.left,v=h.top+p.top-u.top,y=0;y<E.modules.length;++y){var C=E.modules[y],O=C.position.call(this,{left:m,top:v,targetAttachment:o,targetPos:h,elementPos:n,offset:u,targetOffset:p,manualOffset:c,manualTargetOffset:g,scrollbarSize:T,attachment:this.attachment});if(O===!1)return!1;"undefined"!=typeof O&&"object"==typeof O&&(v=O.top,m=O.left)}var x={page:{top:v,left:m},viewport:{top:v-pageYOffset,bottom:pageYOffset-v-r+innerHeight,left:m-pageXOffset,right:pageXOffset-m-i+innerWidth}},T=void 0;return document.body.scrollWidth>window.innerWidth&&(T=this.cache("scrollbar-size",f),x.viewport.bottom-=T.height),document.body.scrollHeight>window.innerHeight&&(T=this.cache("scrollbar-size",f),x.viewport.right-=T.width),(-1===["","static"].indexOf(document.body.style.position)||-1===["","static"].indexOf(document.body.parentElement.style.position))&&(x.page.bottom=document.body.scrollHeight-v-r,x.page.right=document.body.scrollWidth-m-i),"undefined"!=typeof this.options.optimizations&&this.options.optimizations.moveElement!==!1&&"undefined"==typeof this.targetModifier&&!function(){var e=t.cache("target-offsetparent",function(){return a(t.target)}),o=t.cache("target-offsetparent-bounds",function(){return s(e)}),n=getComputedStyle(e),i=o,r={};if(["Top","Left","Bottom","Right"].forEach(function(t){r[t.toLowerCase()]=parseFloat(n["border"+t+"Width"])}),o.right=document.body.scrollWidth-o.left-i.width+r.right,o.bottom=document.body.scrollHeight-o.top-i.height+r.bottom,x.page.top>=o.top+r.top&&x.page.bottom>=o.bottom&&x.page.left>=o.left+r.left&&x.page.right>=o.right){var f=e.scrollTop,l=e.scrollLeft;x.offset={top:x.page.top-o.top+f-r.top,left:x.page.left-o.left+l-r.left}}}(),this.move(x),this.history.unshift(x),this.history.length>3&&this.history.pop(),e&&M(),!0}}},{key:"move",value:function(t){var e=this;if("undefined"!=typeof this.element.parentNode){var o={};for(var n in t){o[n]={};for(var i in t[n]){for(var r=!1,s=0;s<this.history.length;++s){var f=this.history[s];if("undefined"!=typeof f[n]&&!v(f[n][i],t[n][i])){r=!0;break}}r||(o[n][i]=!0)}}var h={top:"",left:"",right:"",bottom:""},d=function(t,o){var n="undefined"!=typeof e.options.optimizations,i=n?e.options.optimizations.gpu:null;if(i!==!1){var r=void 0,s=void 0;t.top?(h.top=0,r=o.top):(h.bottom=0,r=-o.bottom),t.left?(h.left=0,s=o.left):(h.right=0,s=-o.right),h[j]="translateX("+Math.round(s)+"px) translateY("+Math.round(r)+"px)","msTransform"!==j&&(h[j]+=" translateZ(0)")}else t.top?h.top=o.top+"px":h.bottom=o.bottom+"px",t.left?h.left=o.left+"px":h.right=o.right+"px"},u=!1;if((o.page.top||o.page.bottom)&&(o.page.left||o.page.right)?(h.position="absolute",d(o.page,t.page)):(o.viewport.top||o.viewport.bottom)&&(o.viewport.left||o.viewport.right)?(h.position="fixed",d(o.viewport,t.viewport)):"undefined"!=typeof o.offset&&o.offset.top&&o.offset.left?!function(){h.position="absolute";var n=e.cache("target-offsetparent",function(){return a(e.target)});a(e.element)!==n&&W(function(){e.element.parentNode.removeChild(e.element),n.appendChild(e.element)}),d(o.offset,t.offset),u=!0}():(h.position="absolute",d({top:!0,left:!0},t.page)),!u){for(var p=!0,c=this.element.parentNode;c&&1===c.nodeType&&"BODY"!==c.tagName;){if("static"!==getComputedStyle(c).position){p=!1;break}c=c.parentNode}p||(this.element.parentNode.removeChild(this.element),document.body.appendChild(this.element))}var g={},m=!1;for(var i in h){var y=h[i],b=this.element.style[i];b!==y&&(m=!0,g[i]=y)}m&&W(function(){l(e.element.style,g)})}}}]),e}(_);D.modules=[],E.position=Y;var I=l(D,E),k=function(){function t(t,e){var o=[],n=!0,i=!1,r=void 0;try{for(var s,a=t[Symbol.iterator]();!(n=(s=a.next()).done)&&(o.push(s.value),!e||o.length!==e);n=!0);}catch(f){i=!0,r=f}finally{try{!n&&a["return"]&&a["return"]()}finally{if(i)throw r}}return o}return function(e,o){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return t(e,o);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),z=E.Utils,s=z.getBounds,l=z.extend,g=z.updateClasses,W=z.defer,V=["left","top","right","bottom"];E.modules.push({position:function(t){var e=this,o=t.top,n=t.left,i=t.targetAttachment;if(!this.options.constraints)return!0;var r=this.cache("element-bounds",function(){return s(e.element)}),a=r.height,f=r.width;if(0===f&&0===a&&"undefined"!=typeof this.lastSize){var h=this.lastSize;f=h.width,a=h.height}var d=this.cache("target-bounds",function(){return e.getTargetBounds()}),u=d.height,p=d.width,c=[this.getClass("pinned"),this.getClass("out-of-bounds")];this.options.constraints.forEach(function(t){var e=t.outOfBoundsClass,o=t.pinnedClass;e&&c.push(e),o&&c.push(o)}),c.forEach(function(t){["left","top","right","bottom"].forEach(function(e){c.push(t+"-"+e)})});var m=[],v=l({},i),y=l({},this.attachment);return this.options.constraints.forEach(function(t){var r=t.to,s=t.attachment,l=t.pin;"undefined"==typeof s&&(s="");var h=void 0,d=void 0;if(s.indexOf(" ")>=0){var c=s.split(" "),g=k(c,2);d=g[0],h=g[1]}else h=d=s;var b=C(e,r);("target"===d||"both"===d)&&(o<b[1]&&"top"===v.top&&(o+=u,v.top="bottom"),o+a>b[3]&&"bottom"===v.top&&(o-=u,v.top="top")),"together"===d&&("top"===v.top&&("bottom"===y.top&&o<b[1]?(o+=u,v.top="bottom",o+=a,y.top="top"):"top"===y.top&&o+a>b[3]&&o-(a-u)>=b[1]&&(o-=a-u,v.top="bottom",y.top="bottom")),"bottom"===v.top&&("top"===y.top&&o+a>b[3]?(o-=u,v.top="top",o-=a,y.top="bottom"):"bottom"===y.top&&o<b[1]&&o+(2*a-u)<=b[3]&&(o+=a-u,v.top="top",y.top="top")),"middle"===v.top&&(o+a>b[3]&&"top"===y.top?(o-=a,y.top="bottom"):o<b[1]&&"bottom"===y.top&&(o+=a,y.top="top"))),("target"===h||"both"===h)&&(n<b[0]&&"left"===v.left&&(n+=p,v.left="right"),n+f>b[2]&&"right"===v.left&&(n-=p,v.left="left")),"together"===h&&(n<b[0]&&"left"===v.left?"right"===y.left?(n+=p,v.left="right",n+=f,y.left="left"):"left"===y.left&&(n+=p,v.left="right",n-=f,y.left="right"):n+f>b[2]&&"right"===v.left?"left"===y.left?(n-=p,v.left="left",n-=f,y.left="right"):"right"===y.left&&(n-=p,v.left="left",n+=f,y.left="left"):"center"===v.left&&(n+f>b[2]&&"left"===y.left?(n-=f,y.left="right"):n<b[0]&&"right"===y.left&&(n+=f,y.left="left"))),("element"===d||"both"===d)&&(o<b[1]&&"bottom"===y.top&&(o+=a,y.top="top"),o+a>b[3]&&"top"===y.top&&(o-=a,y.top="bottom")),("element"===h||"both"===h)&&(n<b[0]&&("right"===y.left?(n+=f,y.left="left"):"center"===y.left&&(n+=f/2,y.left="left")),n+f>b[2]&&("left"===y.left?(n-=f,y.left="right"):"center"===y.left&&(n-=f/2,y.left="right"))),"string"==typeof l?l=l.split(",").map(function(t){return t.trim()}):l===!0&&(l=["top","left","right","bottom"]),l=l||[];var w=[],O=[];o<b[1]&&(l.indexOf("top")>=0?(o=b[1],w.push("top")):O.push("top")),o+a>b[3]&&(l.indexOf("bottom")>=0?(o=b[3]-a,w.push("bottom")):O.push("bottom")),n<b[0]&&(l.indexOf("left")>=0?(n=b[0],w.push("left")):O.push("left")),n+f>b[2]&&(l.indexOf("right")>=0?(n=b[2]-f,w.push("right")):O.push("right")),w.length&&!function(){var t=void 0;t="undefined"!=typeof e.options.pinnedClass?e.options.pinnedClass:e.getClass("pinned"),m.push(t),w.forEach(function(e){m.push(t+"-"+e)})}(),O.length&&!function(){var t=void 0;t="undefined"!=typeof e.options.outOfBoundsClass?e.options.outOfBoundsClass:e.getClass("out-of-bounds"),m.push(t),O.forEach(function(e){m.push(t+"-"+e)})}(),(w.indexOf("left")>=0||w.indexOf("right")>=0)&&(y.left=v.left=!1),(w.indexOf("top")>=0||w.indexOf("bottom")>=0)&&(y.top=v.top=!1),(v.top!==i.top||v.left!==i.left||y.top!==e.attachment.top||y.left!==e.attachment.left)&&(e.updateAttachClasses(y,v),e.trigger("update",{attachment:y,targetAttachment:v}))}),W(function(){e.options.addTargetClasses!==!1&&g(e.target,m,c),g(e.element,m,c)}),{top:o,left:n}}});var z=E.Utils,s=z.getBounds,g=z.updateClasses,W=z.defer;E.modules.push({position:function(t){var e=this,o=t.top,n=t.left,i=this.cache("element-bounds",function(){return s(e.element)}),r=i.height,a=i.width,f=this.getTargetBounds(),l=o+r,h=n+a,d=[];o<=f.bottom&&l>=f.top&&["left","right"].forEach(function(t){var e=f[t];(e===n||e===h)&&d.push(t)}),n<=f.right&&h>=f.left&&["top","bottom"].forEach(function(t){var e=f[t];(e===o||e===l)&&d.push(t)});var u=[],p=[],c=["left","top","right","bottom"];return u.push(this.getClass("abutted")),c.forEach(function(t){u.push(e.getClass("abutted")+"-"+t)}),d.length&&p.push(this.getClass("abutted")),d.forEach(function(t){p.push(e.getClass("abutted")+"-"+t)}),W(function(){e.options.addTargetClasses!==!1&&g(e.target,p,u),g(e.element,p,u)}),!0}});var k=function(){function t(t,e){var o=[],n=!0,i=!1,r=void 0;try{for(var s,a=t[Symbol.iterator]();!(n=(s=a.next()).done)&&(o.push(s.value),!e||o.length!==e);n=!0);}catch(f){i=!0,r=f}finally{try{!n&&a["return"]&&a["return"]()}finally{if(i)throw r}}return o}return function(e,o){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return t(e,o);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}();return E.modules.push({position:function(t){var e=t.top,o=t.left;if(this.options.shift){var n=this.options.shift;"function"==typeof this.options.shift&&(n=this.options.shift.call(this,{top:e,left:o}));var i=void 0,r=void 0;if("string"==typeof n){n=n.split(" "),n[1]=n[1]||n[0];var s=n,a=k(s,2);i=a[0],r=a[1],i=parseFloat(i,10),r=parseFloat(r,10)}else i=n.top,r=n.left;return e+=i,o+=r,{top:e,left:o}}}}),I});

/*!
 * Bootstrap v4.0.0-alpha.2 (http://getbootstrap.com)
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */
if("undefined"==typeof jQuery)throw new Error("Bootstrap's JavaScript requires jQuery");+function(a){var b=a.fn.jquery.split(" ")[0].split(".");if(b[0]<2&&b[1]<9||1==b[0]&&9==b[1]&&b[2]<1||b[0]>=3)throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v3.0.0")}(jQuery),+function(a){"use strict";function b(a,b){if("function"!=typeof b&&null!==b)throw new TypeError("Super expression must either be null or a function, not "+typeof b);a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),b&&(Object.setPrototypeOf?Object.setPrototypeOf(a,b):a.__proto__=b)}function c(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}var d=function(a,b,c){for(var d=!0;d;){var e=a,f=b,g=c;d=!1,null===e&&(e=Function.prototype);var h=Object.getOwnPropertyDescriptor(e,f);if(void 0!==h){if("value"in h)return h.value;var i=h.get;if(void 0===i)return;return i.call(g)}var j=Object.getPrototypeOf(e);if(null===j)return;a=j,b=f,c=g,d=!0,h=j=void 0}},e=function(){function a(a,b){for(var c=0;c<b.length;c++){var d=b[c];d.enumerable=d.enumerable||!1,d.configurable=!0,"value"in d&&(d.writable=!0),Object.defineProperty(a,d.key,d)}}return function(b,c,d){return c&&a(b.prototype,c),d&&a(b,d),b}}(),f=function(a){function b(a){return{}.toString.call(a).match(/\s([a-zA-Z]+)/)[1].toLowerCase()}function c(a){return(a[0]||a).nodeType}function d(){return{bindType:h.end,delegateType:h.end,handle:function(b){return a(b.target).is(this)?b.handleObj.handler.apply(this,arguments):void 0}}}function e(){if(window.QUnit)return!1;var a=document.createElement("bootstrap");for(var b in i)if(void 0!==a.style[b])return{end:i[b]};return!1}function f(b){var c=this,d=!1;return a(this).one(j.TRANSITION_END,function(){d=!0}),setTimeout(function(){d||j.triggerTransitionEnd(c)},b),this}function g(){h=e(),a.fn.emulateTransitionEnd=f,j.supportsTransitionEnd()&&(a.event.special[j.TRANSITION_END]=d())}var h=!1,i={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"},j={TRANSITION_END:"bsTransitionEnd",getUID:function(a){do a+=~~(1e6*Math.random());while(document.getElementById(a));return a},getSelectorFromElement:function(a){var b=a.getAttribute("data-target");return b||(b=a.getAttribute("href")||"",b=/^#[a-z]/i.test(b)?b:null),b},reflow:function(a){new Function("bs","return bs")(a.offsetHeight)},triggerTransitionEnd:function(b){a(b).trigger(h.end)},supportsTransitionEnd:function(){return Boolean(h)},typeCheckConfig:function(a,d,e){for(var f in e)if(e.hasOwnProperty(f)){var g=e[f],h=d[f],i=void 0;if(i=h&&c(h)?"element":b(h),!new RegExp(g).test(i))throw new Error(a.toUpperCase()+": "+('Option "'+f+'" provided type "'+i+'" ')+('but expected type "'+g+'".'))}}};return g(),j}(jQuery),g=(function(a){var b="alert",d="4.0.0-alpha",g="bs.alert",h="."+g,i=".data-api",j=a.fn[b],k=150,l={DISMISS:'[data-dismiss="alert"]'},m={CLOSE:"close"+h,CLOSED:"closed"+h,CLICK_DATA_API:"click"+h+i},n={ALERT:"alert",FADE:"fade",IN:"in"},o=function(){function b(a){c(this,b),this._element=a}return e(b,[{key:"close",value:function(a){a=a||this._element;var b=this._getRootElement(a),c=this._triggerCloseEvent(b);c.isDefaultPrevented()||this._removeElement(b)}},{key:"dispose",value:function(){a.removeData(this._element,g),this._element=null}},{key:"_getRootElement",value:function(b){var c=f.getSelectorFromElement(b),d=!1;return c&&(d=a(c)[0]),d||(d=a(b).closest("."+n.ALERT)[0]),d}},{key:"_triggerCloseEvent",value:function(b){var c=a.Event(m.CLOSE);return a(b).trigger(c),c}},{key:"_removeElement",value:function(b){return a(b).removeClass(n.IN),f.supportsTransitionEnd()&&a(b).hasClass(n.FADE)?void a(b).one(f.TRANSITION_END,a.proxy(this._destroyElement,this,b)).emulateTransitionEnd(k):void this._destroyElement(b)}},{key:"_destroyElement",value:function(b){a(b).detach().trigger(m.CLOSED).remove()}}],[{key:"_jQueryInterface",value:function(c){return this.each(function(){var d=a(this),e=d.data(g);e||(e=new b(this),d.data(g,e)),"close"===c&&e[c](this)})}},{key:"_handleDismiss",value:function(a){return function(b){b&&b.preventDefault(),a.close(this)}}},{key:"VERSION",get:function(){return d}}]),b}();return a(document).on(m.CLICK_DATA_API,l.DISMISS,o._handleDismiss(new o)),a.fn[b]=o._jQueryInterface,a.fn[b].Constructor=o,a.fn[b].noConflict=function(){return a.fn[b]=j,o._jQueryInterface},o}(jQuery),function(a){var b="button",d="4.0.0-alpha",f="bs.button",g="."+f,h=".data-api",i=a.fn[b],j={ACTIVE:"active",BUTTON:"btn",FOCUS:"focus"},k={DATA_TOGGLE_CARROT:'[data-toggle^="button"]',DATA_TOGGLE:'[data-toggle="buttons"]',INPUT:"input",ACTIVE:".active",BUTTON:".btn"},l={CLICK_DATA_API:"click"+g+h,FOCUS_BLUR_DATA_API:"focus"+g+h+" "+("blur"+g+h)},m=function(){function b(a){c(this,b),this._element=a}return e(b,[{key:"toggle",value:function(){var b=!0,c=a(this._element).closest(k.DATA_TOGGLE)[0];if(c){var d=a(this._element).find(k.INPUT)[0];if(d){if("radio"===d.type)if(d.checked&&a(this._element).hasClass(j.ACTIVE))b=!1;else{var e=a(c).find(k.ACTIVE)[0];e&&a(e).removeClass(j.ACTIVE)}b&&(d.checked=!a(this._element).hasClass(j.ACTIVE),a(this._element).trigger("change"))}}else this._element.setAttribute("aria-pressed",!a(this._element).hasClass(j.ACTIVE));b&&a(this._element).toggleClass(j.ACTIVE)}},{key:"dispose",value:function(){a.removeData(this._element,f),this._element=null}}],[{key:"_jQueryInterface",value:function(c){return this.each(function(){var d=a(this).data(f);d||(d=new b(this),a(this).data(f,d)),"toggle"===c&&d[c]()})}},{key:"VERSION",get:function(){return d}}]),b}();return a(document).on(l.CLICK_DATA_API,k.DATA_TOGGLE_CARROT,function(b){b.preventDefault();var c=b.target;a(c).hasClass(j.BUTTON)||(c=a(c).closest(k.BUTTON)),m._jQueryInterface.call(a(c),"toggle")}).on(l.FOCUS_BLUR_DATA_API,k.DATA_TOGGLE_CARROT,function(b){var c=a(b.target).closest(k.BUTTON)[0];a(c).toggleClass(j.FOCUS,/^focus(in)?$/.test(b.type))}),a.fn[b]=m._jQueryInterface,a.fn[b].Constructor=m,a.fn[b].noConflict=function(){return a.fn[b]=i,m._jQueryInterface},m}(jQuery),function(a){var b="carousel",d="4.0.0-alpha",g="bs.carousel",h="."+g,i=".data-api",j=a.fn[b],k=600,l={interval:5e3,keyboard:!0,slide:!1,pause:"hover",wrap:!0},m={interval:"(number|boolean)",keyboard:"boolean",slide:"(boolean|string)",pause:"(string|boolean)",wrap:"boolean"},n={NEXT:"next",PREVIOUS:"prev"},o={SLIDE:"slide"+h,SLID:"slid"+h,KEYDOWN:"keydown"+h,MOUSEENTER:"mouseenter"+h,MOUSELEAVE:"mouseleave"+h,LOAD_DATA_API:"load"+h+i,CLICK_DATA_API:"click"+h+i},p={CAROUSEL:"carousel",ACTIVE:"active",SLIDE:"slide",RIGHT:"right",LEFT:"left",ITEM:"carousel-item"},q={ACTIVE:".active",ACTIVE_ITEM:".active.carousel-item",ITEM:".carousel-item",NEXT_PREV:".next, .prev",INDICATORS:".carousel-indicators",DATA_SLIDE:"[data-slide], [data-slide-to]",DATA_RIDE:'[data-ride="carousel"]'},r=function(){function i(b,d){c(this,i),this._items=null,this._interval=null,this._activeElement=null,this._isPaused=!1,this._isSliding=!1,this._config=this._getConfig(d),this._element=a(b)[0],this._indicatorsElement=a(this._element).find(q.INDICATORS)[0],this._addEventListeners()}return e(i,[{key:"next",value:function(){this._isSliding||this._slide(n.NEXT)}},{key:"nextWhenVisible",value:function(){document.hidden||this.next()}},{key:"prev",value:function(){this._isSliding||this._slide(n.PREVIOUS)}},{key:"pause",value:function(b){b||(this._isPaused=!0),a(this._element).find(q.NEXT_PREV)[0]&&f.supportsTransitionEnd()&&(f.triggerTransitionEnd(this._element),this.cycle(!0)),clearInterval(this._interval),this._interval=null}},{key:"cycle",value:function(b){b||(this._isPaused=!1),this._interval&&(clearInterval(this._interval),this._interval=null),this._config.interval&&!this._isPaused&&(this._interval=setInterval(a.proxy(document.visibilityState?this.nextWhenVisible:this.next,this),this._config.interval))}},{key:"to",value:function(b){var c=this;this._activeElement=a(this._element).find(q.ACTIVE_ITEM)[0];var d=this._getItemIndex(this._activeElement);if(!(b>this._items.length-1||0>b)){if(this._isSliding)return void a(this._element).one(o.SLID,function(){return c.to(b)});if(d===b)return this.pause(),void this.cycle();var e=b>d?n.NEXT:n.PREVIOUS;this._slide(e,this._items[b])}}},{key:"dispose",value:function(){a(this._element).off(h),a.removeData(this._element,g),this._items=null,this._config=null,this._element=null,this._interval=null,this._isPaused=null,this._isSliding=null,this._activeElement=null,this._indicatorsElement=null}},{key:"_getConfig",value:function(c){return c=a.extend({},l,c),f.typeCheckConfig(b,c,m),c}},{key:"_addEventListeners",value:function(){this._config.keyboard&&a(this._element).on(o.KEYDOWN,a.proxy(this._keydown,this)),"hover"!==this._config.pause||"ontouchstart"in document.documentElement||a(this._element).on(o.MOUSEENTER,a.proxy(this.pause,this)).on(o.MOUSELEAVE,a.proxy(this.cycle,this))}},{key:"_keydown",value:function(a){if(a.preventDefault(),!/input|textarea/i.test(a.target.tagName))switch(a.which){case 37:this.prev();break;case 39:this.next();break;default:return}}},{key:"_getItemIndex",value:function(b){return this._items=a.makeArray(a(b).parent().find(q.ITEM)),this._items.indexOf(b)}},{key:"_getItemByDirection",value:function(a,b){var c=a===n.NEXT,d=a===n.PREVIOUS,e=this._getItemIndex(b),f=this._items.length-1,g=d&&0===e||c&&e===f;if(g&&!this._config.wrap)return b;var h=a===n.PREVIOUS?-1:1,i=(e+h)%this._items.length;return-1===i?this._items[this._items.length-1]:this._items[i]}},{key:"_triggerSlideEvent",value:function(b,c){var d=a.Event(o.SLIDE,{relatedTarget:b,direction:c});return a(this._element).trigger(d),d}},{key:"_setActiveIndicatorElement",value:function(b){if(this._indicatorsElement){a(this._indicatorsElement).find(q.ACTIVE).removeClass(p.ACTIVE);var c=this._indicatorsElement.children[this._getItemIndex(b)];c&&a(c).addClass(p.ACTIVE)}}},{key:"_slide",value:function(b,c){var d=this,e=a(this._element).find(q.ACTIVE_ITEM)[0],g=c||e&&this._getItemByDirection(b,e),h=Boolean(this._interval),i=b===n.NEXT?p.LEFT:p.RIGHT;if(g&&a(g).hasClass(p.ACTIVE))return void(this._isSliding=!1);var j=this._triggerSlideEvent(g,i);if(!j.isDefaultPrevented()&&e&&g){this._isSliding=!0,h&&this.pause(),this._setActiveIndicatorElement(g);var l=a.Event(o.SLID,{relatedTarget:g,direction:i});f.supportsTransitionEnd()&&a(this._element).hasClass(p.SLIDE)?(a(g).addClass(b),f.reflow(g),a(e).addClass(i),a(g).addClass(i),a(e).one(f.TRANSITION_END,function(){a(g).removeClass(i).removeClass(b),a(g).addClass(p.ACTIVE),a(e).removeClass(p.ACTIVE).removeClass(b).removeClass(i),d._isSliding=!1,setTimeout(function(){return a(d._element).trigger(l)},0)}).emulateTransitionEnd(k)):(a(e).removeClass(p.ACTIVE),a(g).addClass(p.ACTIVE),this._isSliding=!1,a(this._element).trigger(l)),h&&this.cycle()}}}],[{key:"_jQueryInterface",value:function(b){return this.each(function(){var c=a(this).data(g),d=a.extend({},l,a(this).data());"object"==typeof b&&a.extend(d,b);var e="string"==typeof b?b:d.slide;if(c||(c=new i(this,d),a(this).data(g,c)),"number"==typeof b)c.to(b);else if("string"==typeof e){if(void 0===c[e])throw new Error('No method named "'+e+'"');c[e]()}else d.interval&&(c.pause(),c.cycle())})}},{key:"_dataApiClickHandler",value:function(b){var c=f.getSelectorFromElement(this);if(c){var d=a(c)[0];if(d&&a(d).hasClass(p.CAROUSEL)){var e=a.extend({},a(d).data(),a(this).data()),h=this.getAttribute("data-slide-to");h&&(e.interval=!1),i._jQueryInterface.call(a(d),e),h&&a(d).data(g).to(h),b.preventDefault()}}}},{key:"VERSION",get:function(){return d}},{key:"Default",get:function(){return l}}]),i}();return a(document).on(o.CLICK_DATA_API,q.DATA_SLIDE,r._dataApiClickHandler),a(window).on(o.LOAD_DATA_API,function(){a(q.DATA_RIDE).each(function(){var b=a(this);r._jQueryInterface.call(b,b.data())})}),a.fn[b]=r._jQueryInterface,a.fn[b].Constructor=r,a.fn[b].noConflict=function(){return a.fn[b]=j,r._jQueryInterface},r}(jQuery),function(a){var b="collapse",d="4.0.0-alpha",g="bs.collapse",h="."+g,i=".data-api",j=a.fn[b],k=600,l={toggle:!0,parent:""},m={toggle:"boolean",parent:"string"},n={SHOW:"show"+h,SHOWN:"shown"+h,HIDE:"hide"+h,HIDDEN:"hidden"+h,CLICK_DATA_API:"click"+h+i},o={IN:"in",COLLAPSE:"collapse",COLLAPSING:"collapsing",COLLAPSED:"collapsed"},p={WIDTH:"width",HEIGHT:"height"},q={ACTIVES:".panel > .in, .panel > .collapsing",DATA_TOGGLE:'[data-toggle="collapse"]'},r=function(){function h(b,d){c(this,h),this._isTransitioning=!1,this._element=b,this._config=this._getConfig(d),this._triggerArray=a.makeArray(a('[data-toggle="collapse"][href="#'+b.id+'"],'+('[data-toggle="collapse"][data-target="#'+b.id+'"]'))),this._parent=this._config.parent?this._getParent():null,this._config.parent||this._addAriaAndCollapsedClass(this._element,this._triggerArray),this._config.toggle&&this.toggle()}return e(h,[{key:"toggle",value:function(){a(this._element).hasClass(o.IN)?this.hide():this.show()}},{key:"show",value:function(){var b=this;if(!this._isTransitioning&&!a(this._element).hasClass(o.IN)){var c=void 0,d=void 0;if(this._parent&&(c=a.makeArray(a(q.ACTIVES)),c.length||(c=null)),!(c&&(d=a(c).data(g),d&&d._isTransitioning))){var e=a.Event(n.SHOW);if(a(this._element).trigger(e),!e.isDefaultPrevented()){c&&(h._jQueryInterface.call(a(c),"hide"),d||a(c).data(g,null));var i=this._getDimension();a(this._element).removeClass(o.COLLAPSE).addClass(o.COLLAPSING),this._element.style[i]=0,this._element.setAttribute("aria-expanded",!0),this._triggerArray.length&&a(this._triggerArray).removeClass(o.COLLAPSED).attr("aria-expanded",!0),this.setTransitioning(!0);var j=function(){a(b._element).removeClass(o.COLLAPSING).addClass(o.COLLAPSE).addClass(o.IN),b._element.style[i]="",b.setTransitioning(!1),a(b._element).trigger(n.SHOWN)};if(!f.supportsTransitionEnd())return void j();var l=i[0].toUpperCase()+i.slice(1),m="scroll"+l;a(this._element).one(f.TRANSITION_END,j).emulateTransitionEnd(k),this._element.style[i]=this._element[m]+"px"}}}}},{key:"hide",value:function(){var b=this;if(!this._isTransitioning&&a(this._element).hasClass(o.IN)){var c=a.Event(n.HIDE);if(a(this._element).trigger(c),!c.isDefaultPrevented()){var d=this._getDimension(),e=d===p.WIDTH?"offsetWidth":"offsetHeight";this._element.style[d]=this._element[e]+"px",f.reflow(this._element),a(this._element).addClass(o.COLLAPSING).removeClass(o.COLLAPSE).removeClass(o.IN),this._element.setAttribute("aria-expanded",!1),this._triggerArray.length&&a(this._triggerArray).addClass(o.COLLAPSED).attr("aria-expanded",!1),this.setTransitioning(!0);var g=function(){b.setTransitioning(!1),a(b._element).removeClass(o.COLLAPSING).addClass(o.COLLAPSE).trigger(n.HIDDEN)};return this._element.style[d]=0,f.supportsTransitionEnd()?void a(this._element).one(f.TRANSITION_END,g).emulateTransitionEnd(k):void g()}}}},{key:"setTransitioning",value:function(a){this._isTransitioning=a}},{key:"dispose",value:function(){a.removeData(this._element,g),this._config=null,this._parent=null,this._element=null,this._triggerArray=null,this._isTransitioning=null}},{key:"_getConfig",value:function(c){return c=a.extend({},l,c),c.toggle=Boolean(c.toggle),f.typeCheckConfig(b,c,m),c}},{key:"_getDimension",value:function(){var b=a(this._element).hasClass(p.WIDTH);return b?p.WIDTH:p.HEIGHT}},{key:"_getParent",value:function(){var b=this,c=a(this._config.parent)[0],d='[data-toggle="collapse"][data-parent="'+this._config.parent+'"]';return a(c).find(d).each(function(a,c){b._addAriaAndCollapsedClass(h._getTargetFromElement(c),[c])}),c}},{key:"_addAriaAndCollapsedClass",value:function(b,c){if(b){var d=a(b).hasClass(o.IN);b.setAttribute("aria-expanded",d),c.length&&a(c).toggleClass(o.COLLAPSED,!d).attr("aria-expanded",d)}}}],[{key:"_getTargetFromElement",value:function(b){var c=f.getSelectorFromElement(b);return c?a(c)[0]:null}},{key:"_jQueryInterface",value:function(b){return this.each(function(){var c=a(this),d=c.data(g),e=a.extend({},l,c.data(),"object"==typeof b&&b);if(!d&&e.toggle&&/show|hide/.test(b)&&(e.toggle=!1),d||(d=new h(this,e),c.data(g,d)),"string"==typeof b){if(void 0===d[b])throw new Error('No method named "'+b+'"');d[b]()}})}},{key:"VERSION",get:function(){return d}},{key:"Default",get:function(){return l}}]),h}();return a(document).on(n.CLICK_DATA_API,q.DATA_TOGGLE,function(b){b.preventDefault();var c=r._getTargetFromElement(this),d=a(c).data(g),e=d?"toggle":a(this).data();r._jQueryInterface.call(a(c),e)}),a.fn[b]=r._jQueryInterface,a.fn[b].Constructor=r,a.fn[b].noConflict=function(){return a.fn[b]=j,r._jQueryInterface},r}(jQuery),function(a){var b="dropdown",d="4.0.0-alpha",g="bs.dropdown",h="."+g,i=".data-api",j=a.fn[b],k={HIDE:"hide"+h,HIDDEN:"hidden"+h,SHOW:"show"+h,SHOWN:"shown"+h,CLICK:"click"+h,CLICK_DATA_API:"click"+h+i,KEYDOWN_DATA_API:"keydown"+h+i},l={BACKDROP:"dropdown-backdrop",DISABLED:"disabled",OPEN:"open"},m={BACKDROP:".dropdown-backdrop",DATA_TOGGLE:'[data-toggle="dropdown"]',FORM_CHILD:".dropdown form",ROLE_MENU:'[role="menu"]',ROLE_LISTBOX:'[role="listbox"]',NAVBAR_NAV:".navbar-nav",VISIBLE_ITEMS:'[role="menu"] li:not(.disabled) a, [role="listbox"] li:not(.disabled) a'},n=function(){function b(a){c(this,b),this._element=a,this._addEventListeners()}return e(b,[{key:"toggle",value:function(){if(this.disabled||a(this).hasClass(l.DISABLED))return!1;var c=b._getParentFromElement(this),d=a(c).hasClass(l.OPEN);if(b._clearMenus(),d)return!1;if("ontouchstart"in document.documentElement&&!a(c).closest(m.NAVBAR_NAV).length){var e=document.createElement("div");e.className=l.BACKDROP,a(e).insertBefore(this),a(e).on("click",b._clearMenus)}var f={relatedTarget:this},g=a.Event(k.SHOW,f);return a(c).trigger(g),g.isDefaultPrevented()?!1:(this.focus(),this.setAttribute("aria-expanded","true"),a(c).toggleClass(l.OPEN),a(c).trigger(a.Event(k.SHOWN,f)),!1)}},{key:"dispose",value:function(){a.removeData(this._element,g),a(this._element).off(h),this._element=null}},{key:"_addEventListeners",value:function(){a(this._element).on(k.CLICK,this.toggle)}}],[{key:"_jQueryInterface",value:function(c){return this.each(function(){var d=a(this).data(g);if(d||a(this).data(g,d=new b(this)),"string"==typeof c){if(void 0===d[c])throw new Error('No method named "'+c+'"');d[c].call(this)}})}},{key:"_clearMenus",value:function(c){if(!c||3!==c.which){var d=a(m.BACKDROP)[0];d&&d.parentNode.removeChild(d);for(var e=a.makeArray(a(m.DATA_TOGGLE)),f=0;f<e.length;f++){var g=b._getParentFromElement(e[f]),h={relatedTarget:e[f]};if(a(g).hasClass(l.OPEN)&&!(c&&"click"===c.type&&/input|textarea/i.test(c.target.tagName)&&a.contains(g,c.target))){var i=a.Event(k.HIDE,h);a(g).trigger(i),i.isDefaultPrevented()||(e[f].setAttribute("aria-expanded","false"),a(g).removeClass(l.OPEN).trigger(a.Event(k.HIDDEN,h)))}}}}},{key:"_getParentFromElement",value:function(b){var c=void 0,d=f.getSelectorFromElement(b);return d&&(c=a(d)[0]),c||b.parentNode}},{key:"_dataApiKeydownHandler",value:function(c){if(/(38|40|27|32)/.test(c.which)&&!/input|textarea/i.test(c.target.tagName)&&(c.preventDefault(),c.stopPropagation(),!this.disabled&&!a(this).hasClass(l.DISABLED))){var d=b._getParentFromElement(this),e=a(d).hasClass(l.OPEN);if(!e&&27!==c.which||e&&27===c.which){if(27===c.which){var f=a(d).find(m.DATA_TOGGLE)[0];a(f).trigger("focus")}return void a(this).trigger("click")}var g=a.makeArray(a(m.VISIBLE_ITEMS));if(g=g.filter(function(a){return a.offsetWidth||a.offsetHeight}),g.length){var h=g.indexOf(c.target);38===c.which&&h>0&&h--,40===c.which&&h<g.length-1&&h++,~h||(h=0),g[h].focus()}}}},{key:"VERSION",get:function(){return d}}]),b}();return a(document).on(k.KEYDOWN_DATA_API,m.DATA_TOGGLE,n._dataApiKeydownHandler).on(k.KEYDOWN_DATA_API,m.ROLE_MENU,n._dataApiKeydownHandler).on(k.KEYDOWN_DATA_API,m.ROLE_LISTBOX,n._dataApiKeydownHandler).on(k.CLICK_DATA_API,n._clearMenus).on(k.CLICK_DATA_API,m.DATA_TOGGLE,n.prototype.toggle).on(k.CLICK_DATA_API,m.FORM_CHILD,function(a){a.stopPropagation()}),a.fn[b]=n._jQueryInterface,a.fn[b].Constructor=n,a.fn[b].noConflict=function(){return a.fn[b]=j,n._jQueryInterface},n}(jQuery),function(a){var b="modal",d="4.0.0-alpha",g="bs.modal",h="."+g,i=".data-api",j=a.fn[b],k=300,l=150,m={backdrop:!0,keyboard:!0,focus:!0,show:!0},n={backdrop:"(boolean|string)",keyboard:"boolean",focus:"boolean",show:"boolean"},o={HIDE:"hide"+h,HIDDEN:"hidden"+h,SHOW:"show"+h,SHOWN:"shown"+h,FOCUSIN:"focusin"+h,RESIZE:"resize"+h,CLICK_DISMISS:"click.dismiss"+h,KEYDOWN_DISMISS:"keydown.dismiss"+h,MOUSEUP_DISMISS:"mouseup.dismiss"+h,MOUSEDOWN_DISMISS:"mousedown.dismiss"+h,CLICK_DATA_API:"click"+h+i},p={SCROLLBAR_MEASURER:"modal-scrollbar-measure",BACKDROP:"modal-backdrop",OPEN:"modal-open",FADE:"fade",IN:"in"},q={DIALOG:".modal-dialog",DATA_TOGGLE:'[data-toggle="modal"]',DATA_DISMISS:'[data-dismiss="modal"]',FIXED_CONTENT:".navbar-fixed-top, .navbar-fixed-bottom, .is-fixed"},r=function(){function i(b,d){c(this,i),this._config=this._getConfig(d),this._element=b,this._dialog=a(b).find(q.DIALOG)[0],this._backdrop=null,this._isShown=!1,this._isBodyOverflowing=!1,this._ignoreBackdropClick=!1,this._originalBodyPadding=0,this._scrollbarWidth=0}return e(i,[{key:"toggle",value:function(a){return this._isShown?this.hide():this.show(a)}},{key:"show",value:function(b){var c=this,d=a.Event(o.SHOW,{relatedTarget:b});a(this._element).trigger(d),this._isShown||d.isDefaultPrevented()||(this._isShown=!0,this._checkScrollbar(),this._setScrollbar(),a(document.body).addClass(p.OPEN),this._setEscapeEvent(),this._setResizeEvent(),a(this._element).on(o.CLICK_DISMISS,q.DATA_DISMISS,a.proxy(this.hide,this)),a(this._dialog).on(o.MOUSEDOWN_DISMISS,function(){a(c._element).one(o.MOUSEUP_DISMISS,function(b){a(b.target).is(c._element)&&(c._ignoreBackdropClick=!0)})}),this._showBackdrop(a.proxy(this._showElement,this,b)))}},{key:"hide",value:function(b){b&&b.preventDefault();var c=a.Event(o.HIDE);a(this._element).trigger(c),this._isShown&&!c.isDefaultPrevented()&&(this._isShown=!1,this._setEscapeEvent(),this._setResizeEvent(),a(document).off(o.FOCUSIN),a(this._element).removeClass(p.IN),a(this._element).off(o.CLICK_DISMISS),a(this._dialog).off(o.MOUSEDOWN_DISMISS),f.supportsTransitionEnd()&&a(this._element).hasClass(p.FADE)?a(this._element).one(f.TRANSITION_END,a.proxy(this._hideModal,this)).emulateTransitionEnd(k):this._hideModal())}},{key:"dispose",value:function(){a.removeData(this._element,g),a(window).off(h),a(document).off(h),a(this._element).off(h),a(this._backdrop).off(h),this._config=null,this._element=null,this._dialog=null,this._backdrop=null,this._isShown=null,this._isBodyOverflowing=null,this._ignoreBackdropClick=null,this._originalBodyPadding=null,this._scrollbarWidth=null}},{key:"_getConfig",value:function(c){return c=a.extend({},m,c),f.typeCheckConfig(b,c,n),c}},{key:"_showElement",value:function(b){var c=this,d=f.supportsTransitionEnd()&&a(this._element).hasClass(p.FADE);this._element.parentNode&&this._element.parentNode.nodeType===Node.ELEMENT_NODE||document.body.appendChild(this._element),this._element.style.display="block",this._element.scrollTop=0,d&&f.reflow(this._element),a(this._element).addClass(p.IN),this._config.focus&&this._enforceFocus();var e=a.Event(o.SHOWN,{relatedTarget:b}),g=function(){c._config.focus&&c._element.focus(),a(c._element).trigger(e)};d?a(this._dialog).one(f.TRANSITION_END,g).emulateTransitionEnd(k):g()}},{key:"_enforceFocus",value:function(){var b=this;a(document).off(o.FOCUSIN).on(o.FOCUSIN,function(c){b._element===c.target||a(b._element).has(c.target).length||b._element.focus()})}},{key:"_setEscapeEvent",value:function(){var b=this;this._isShown&&this._config.keyboard?a(this._element).on(o.KEYDOWN_DISMISS,function(a){27===a.which&&b.hide()}):this._isShown||a(this._element).off(o.KEYDOWN_DISMISS)}},{key:"_setResizeEvent",value:function(){this._isShown?a(window).on(o.RESIZE,a.proxy(this._handleUpdate,this)):a(window).off(o.RESIZE)}},{key:"_hideModal",value:function(){var b=this;this._element.style.display="none",this._showBackdrop(function(){a(document.body).removeClass(p.OPEN),b._resetAdjustments(),b._resetScrollbar(),a(b._element).trigger(o.HIDDEN)})}},{key:"_removeBackdrop",value:function(){this._backdrop&&(a(this._backdrop).remove(),this._backdrop=null)}},{key:"_showBackdrop",value:function(b){var c=this,d=a(this._element).hasClass(p.FADE)?p.FADE:"";if(this._isShown&&this._config.backdrop){var e=f.supportsTransitionEnd()&&d;if(this._backdrop=document.createElement("div"),this._backdrop.className=p.BACKDROP,d&&a(this._backdrop).addClass(d),a(this._backdrop).appendTo(document.body),a(this._element).on(o.CLICK_DISMISS,function(a){return c._ignoreBackdropClick?void(c._ignoreBackdropClick=!1):void(a.target===a.currentTarget&&("static"===c._config.backdrop?c._element.focus():c.hide()))}),e&&f.reflow(this._backdrop),a(this._backdrop).addClass(p.IN),!b)return;if(!e)return void b();a(this._backdrop).one(f.TRANSITION_END,b).emulateTransitionEnd(l)}else if(!this._isShown&&this._backdrop){a(this._backdrop).removeClass(p.IN);var g=function(){c._removeBackdrop(),b&&b()};f.supportsTransitionEnd()&&a(this._element).hasClass(p.FADE)?a(this._backdrop).one(f.TRANSITION_END,g).emulateTransitionEnd(l):g()}else b&&b()}},{key:"_handleUpdate",value:function(){this._adjustDialog()}},{key:"_adjustDialog",value:function(){var a=this._element.scrollHeight>document.documentElement.clientHeight;!this._isBodyOverflowing&&a&&(this._element.style.paddingLeft=this._scrollbarWidth+"px"),this._isBodyOverflowing&&!a&&(this._element.style.paddingRight=this._scrollbarWidth+"px~")}},{key:"_resetAdjustments",value:function(){this._element.style.paddingLeft="",this._element.style.paddingRight=""}},{key:"_checkScrollbar",value:function(){var a=window.innerWidth;if(!a){var b=document.documentElement.getBoundingClientRect();a=b.right-Math.abs(b.left)}this._isBodyOverflowing=document.body.clientWidth<a,this._scrollbarWidth=this._getScrollbarWidth()}},{key:"_setScrollbar",value:function(){var b=parseInt(a(q.FIXED_CONTENT).css("padding-right")||0,10);this._originalBodyPadding=document.body.style.paddingRight||"",this._isBodyOverflowing&&(document.body.style.paddingRight=b+this._scrollbarWidth+"px")}},{key:"_resetScrollbar",value:function(){document.body.style.paddingRight=this._originalBodyPadding}},{key:"_getScrollbarWidth",value:function(){var a=document.createElement("div");a.className=p.SCROLLBAR_MEASURER,document.body.appendChild(a);var b=a.offsetWidth-a.clientWidth;return document.body.removeChild(a),b}}],[{key:"_jQueryInterface",value:function(b,c){return this.each(function(){var d=a(this).data(g),e=a.extend({},i.Default,a(this).data(),"object"==typeof b&&b);if(d||(d=new i(this,e),a(this).data(g,d)),"string"==typeof b){if(void 0===d[b])throw new Error('No method named "'+b+'"');d[b](c)}else e.show&&d.show(c)})}},{key:"VERSION",get:function(){return d}},{key:"Default",get:function(){return m}}]),i}();return a(document).on(o.CLICK_DATA_API,q.DATA_TOGGLE,function(b){var c=this,d=void 0,e=f.getSelectorFromElement(this);e&&(d=a(e)[0]);var h=a(d).data(g)?"toggle":a.extend({},a(d).data(),a(this).data());"A"===this.tagName&&b.preventDefault();var i=a(d).one(o.SHOW,function(b){b.isDefaultPrevented()||i.one(o.HIDDEN,function(){a(c).is(":visible")&&c.focus()})});r._jQueryInterface.call(a(d),h,this)}),a.fn[b]=r._jQueryInterface,a.fn[b].Constructor=r,a.fn[b].noConflict=function(){return a.fn[b]=j,r._jQueryInterface},r}(jQuery),function(a){var b="scrollspy",d="4.0.0-alpha",g="bs.scrollspy",h="."+g,i=".data-api",j=a.fn[b],k={offset:10,method:"auto",target:""},l={offset:"number",method:"string",target:"(string|element)"},m={ACTIVATE:"activate"+h,SCROLL:"scroll"+h,LOAD_DATA_API:"load"+h+i},n={DROPDOWN_ITEM:"dropdown-item",DROPDOWN_MENU:"dropdown-menu",NAV_LINK:"nav-link",NAV:"nav",ACTIVE:"active"},o={DATA_SPY:'[data-spy="scroll"]',ACTIVE:".active",LIST_ITEM:".list-item",LI:"li",LI_DROPDOWN:"li.dropdown",NAV_LINKS:".nav-link",DROPDOWN:".dropdown",DROPDOWN_ITEMS:".dropdown-item",DROPDOWN_TOGGLE:".dropdown-toggle"},p={OFFSET:"offset",POSITION:"position"},q=function(){function i(b,d){c(this,i),this._element=b,this._scrollElement="BODY"===b.tagName?window:b,this._config=this._getConfig(d),this._selector=this._config.target+" "+o.NAV_LINKS+","+(this._config.target+" "+o.DROPDOWN_ITEMS),this._offsets=[],this._targets=[],this._activeTarget=null,this._scrollHeight=0,a(this._scrollElement).on(m.SCROLL,a.proxy(this._process,this)),this.refresh(),this._process()}return e(i,[{key:"refresh",value:function(){var b=this,c=this._scrollElement!==this._scrollElement.window?p.POSITION:p.OFFSET,d="auto"===this._config.method?c:this._config.method,e=d===p.POSITION?this._getScrollTop():0;this._offsets=[],this._targets=[],this._scrollHeight=this._getScrollHeight();var g=a.makeArray(a(this._selector));g.map(function(b){var c=void 0,g=f.getSelectorFromElement(b);return g&&(c=a(g)[0]),c&&(c.offsetWidth||c.offsetHeight)?[a(c)[d]().top+e,g]:void 0}).filter(function(a){return a}).sort(function(a,b){return a[0]-b[0]}).forEach(function(a){b._offsets.push(a[0]),b._targets.push(a[1])})}},{key:"dispose",value:function(){a.removeData(this._element,g),a(this._scrollElement).off(h),this._element=null,this._scrollElement=null,this._config=null,this._selector=null,this._offsets=null,this._targets=null,this._activeTarget=null,this._scrollHeight=null}},{key:"_getConfig",value:function(c){if(c=a.extend({},k,c),"string"!=typeof c.target){var d=a(c.target).attr("id");d||(d=f.getUID(b),a(c.target).attr("id",d)),c.target="#"+d}return f.typeCheckConfig(b,c,l),c}},{key:"_getScrollTop",value:function(){return this._scrollElement===window?this._scrollElement.scrollY:this._scrollElement.scrollTop}},{key:"_getScrollHeight",value:function(){return this._scrollElement.scrollHeight||Math.max(document.body.scrollHeight,document.documentElement.scrollHeight)}},{key:"_process",value:function(){var a=this._getScrollTop()+this._config.offset,b=this._getScrollHeight(),c=this._config.offset+b-this._scrollElement.offsetHeight;if(this._scrollHeight!==b&&this.refresh(),a>=c){var d=this._targets[this._targets.length-1];this._activeTarget!==d&&this._activate(d)}if(this._activeTarget&&a<this._offsets[0])return this._activeTarget=null,void this._clear();for(var e=this._offsets.length;e--;){var f=this._activeTarget!==this._targets[e]&&a>=this._offsets[e]&&(void 0===this._offsets[e+1]||a<this._offsets[e+1]);f&&this._activate(this._targets[e])}}},{key:"_activate",value:function(b){this._activeTarget=b,this._clear();var c=this._selector.split(",");c=c.map(function(a){return a+'[data-target="'+b+'"],'+(a+'[href="'+b+'"]')});var d=a(c.join(","));d.hasClass(n.DROPDOWN_ITEM)?(d.closest(o.DROPDOWN).find(o.DROPDOWN_TOGGLE).addClass(n.ACTIVE),d.addClass(n.ACTIVE)):d.parents(o.LI).find(o.NAV_LINKS).addClass(n.ACTIVE),a(this._scrollElement).trigger(m.ACTIVATE,{relatedTarget:b})}},{key:"_clear",value:function(){a(this._selector).filter(o.ACTIVE).removeClass(n.ACTIVE)}}],[{key:"_jQueryInterface",value:function(b){return this.each(function(){var c=a(this).data(g),d="object"==typeof b&&b||null;if(c||(c=new i(this,d),a(this).data(g,c)),"string"==typeof b){if(void 0===c[b])throw new Error('No method named "'+b+'"');c[b]()}})}},{key:"VERSION",get:function(){return d}},{key:"Default",get:function(){return k}}]),i}();return a(window).on(m.LOAD_DATA_API,function(){for(var b=a.makeArray(a(o.DATA_SPY)),c=b.length;c--;){var d=a(b[c]);q._jQueryInterface.call(d,d.data())}}),a.fn[b]=q._jQueryInterface,a.fn[b].Constructor=q,a.fn[b].noConflict=function(){return a.fn[b]=j,q._jQueryInterface},q}(jQuery),function(a){var b="tab",d="4.0.0-alpha",g="bs.tab",h="."+g,i=".data-api",j=a.fn[b],k=150,l={HIDE:"hide"+h,HIDDEN:"hidden"+h,SHOW:"show"+h,SHOWN:"shown"+h,CLICK_DATA_API:"click"+h+i},m={DROPDOWN_MENU:"dropdown-menu",ACTIVE:"active",FADE:"fade",IN:"in"},n={A:"a",LI:"li",DROPDOWN:".dropdown",UL:"ul:not(.dropdown-menu)",FADE_CHILD:"> .nav-item .fade, > .fade",ACTIVE:".active",ACTIVE_CHILD:"> .nav-item > .active, > .active",
DATA_TOGGLE:'[data-toggle="tab"], [data-toggle="pill"]',DROPDOWN_TOGGLE:".dropdown-toggle",DROPDOWN_ACTIVE_CHILD:"> .dropdown-menu .active"},o=function(){function b(a){c(this,b),this._element=a}return e(b,[{key:"show",value:function(){var b=this;if(!this._element.parentNode||this._element.parentNode.nodeType!==Node.ELEMENT_NODE||!a(this._element).hasClass(m.ACTIVE)){var c=void 0,d=void 0,e=a(this._element).closest(n.UL)[0],g=f.getSelectorFromElement(this._element);e&&(d=a.makeArray(a(e).find(n.ACTIVE)),d=d[d.length-1]);var h=a.Event(l.HIDE,{relatedTarget:this._element}),i=a.Event(l.SHOW,{relatedTarget:d});if(d&&a(d).trigger(h),a(this._element).trigger(i),!i.isDefaultPrevented()&&!h.isDefaultPrevented()){g&&(c=a(g)[0]),this._activate(this._element,e);var j=function(){var c=a.Event(l.HIDDEN,{relatedTarget:b._element}),e=a.Event(l.SHOWN,{relatedTarget:d});a(d).trigger(c),a(b._element).trigger(e)};c?this._activate(c,c.parentNode,j):j()}}}},{key:"dispose",value:function(){a.removeClass(this._element,g),this._element=null}},{key:"_activate",value:function(b,c,d){var e=a(c).find(n.ACTIVE_CHILD)[0],g=d&&f.supportsTransitionEnd()&&(e&&a(e).hasClass(m.FADE)||Boolean(a(c).find(n.FADE_CHILD)[0])),h=a.proxy(this._transitionComplete,this,b,e,g,d);e&&g?a(e).one(f.TRANSITION_END,h).emulateTransitionEnd(k):h(),e&&a(e).removeClass(m.IN)}},{key:"_transitionComplete",value:function(b,c,d,e){if(c){a(c).removeClass(m.ACTIVE);var g=a(c).find(n.DROPDOWN_ACTIVE_CHILD)[0];g&&a(g).removeClass(m.ACTIVE),c.setAttribute("aria-expanded",!1)}if(a(b).addClass(m.ACTIVE),b.setAttribute("aria-expanded",!0),d?(f.reflow(b),a(b).addClass(m.IN)):a(b).removeClass(m.FADE),b.parentNode&&a(b.parentNode).hasClass(m.DROPDOWN_MENU)){var h=a(b).closest(n.DROPDOWN)[0];h&&a(h).find(n.DROPDOWN_TOGGLE).addClass(m.ACTIVE),b.setAttribute("aria-expanded",!0)}e&&e()}}],[{key:"_jQueryInterface",value:function(c){return this.each(function(){var d=a(this),e=d.data(g);if(e||(e=e=new b(this),d.data(g,e)),"string"==typeof c){if(void 0===e[c])throw new Error('No method named "'+c+'"');e[c]()}})}},{key:"VERSION",get:function(){return d}}]),b}();return a(document).on(l.CLICK_DATA_API,n.DATA_TOGGLE,function(b){b.preventDefault(),o._jQueryInterface.call(a(this),"show")}),a.fn[b]=o._jQueryInterface,a.fn[b].Constructor=o,a.fn[b].noConflict=function(){return a.fn[b]=j,o._jQueryInterface},o}(jQuery),function(a){if(void 0===window.Tether)throw new Error("Bootstrap tooltips require Tether (http://github.hubspot.com/tether/)");var b="tooltip",d="4.0.0-alpha",g="bs.tooltip",h="."+g,i=a.fn[b],j=150,k="bs-tether",l={animation:!0,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,selector:!1,placement:"top",offset:"0 0",constraints:[]},m={animation:"boolean",template:"string",title:"(string|element|function)",trigger:"string",delay:"(number|object)",html:"boolean",selector:"(string|boolean)",placement:"(string|function)",offset:"string",constraints:"array"},n={TOP:"bottom center",RIGHT:"middle left",BOTTOM:"top center",LEFT:"middle right"},o={IN:"in",OUT:"out"},p={HIDE:"hide"+h,HIDDEN:"hidden"+h,SHOW:"show"+h,SHOWN:"shown"+h,INSERTED:"inserted"+h,CLICK:"click"+h,FOCUSIN:"focusin"+h,FOCUSOUT:"focusout"+h,MOUSEENTER:"mouseenter"+h,MOUSELEAVE:"mouseleave"+h},q={FADE:"fade",IN:"in"},r={TOOLTIP:".tooltip",TOOLTIP_INNER:".tooltip-inner"},s={element:!1,enabled:!1},t={HOVER:"hover",FOCUS:"focus",CLICK:"click",MANUAL:"manual"},u=function(){function i(a,b){c(this,i),this._isEnabled=!0,this._timeout=0,this._hoverState="",this._activeTrigger={},this._tether=null,this.element=a,this.config=this._getConfig(b),this.tip=null,this._setListeners()}return e(i,[{key:"enable",value:function(){this._isEnabled=!0}},{key:"disable",value:function(){this._isEnabled=!1}},{key:"toggleEnabled",value:function(){this._isEnabled=!this._isEnabled}},{key:"toggle",value:function(b){if(b){var c=this.constructor.DATA_KEY,d=a(b.currentTarget).data(c);d||(d=new this.constructor(b.currentTarget,this._getDelegateConfig()),a(b.currentTarget).data(c,d)),d._activeTrigger.click=!d._activeTrigger.click,d._isWithActiveTrigger()?d._enter(null,d):d._leave(null,d)}else{if(a(this.getTipElement()).hasClass(q.IN))return void this._leave(null,this);this._enter(null,this)}}},{key:"dispose",value:function(){clearTimeout(this._timeout),this.cleanupTether(),a.removeData(this.element,this.constructor.DATA_KEY),a(this.element).off(this.constructor.EVENT_KEY),this.tip&&a(this.tip).remove(),this._isEnabled=null,this._timeout=null,this._hoverState=null,this._activeTrigger=null,this._tether=null,this.element=null,this.config=null,this.tip=null}},{key:"show",value:function(){var b=this,c=a.Event(this.constructor.Event.SHOW);if(this.isWithContent()&&this._isEnabled){a(this.element).trigger(c);var d=a.contains(this.element.ownerDocument.documentElement,this.element);if(c.isDefaultPrevented()||!d)return;var e=this.getTipElement(),g=f.getUID(this.constructor.NAME);e.setAttribute("id",g),this.element.setAttribute("aria-describedby",g),this.setContent(),this.config.animation&&a(e).addClass(q.FADE);var h="function"==typeof this.config.placement?this.config.placement.call(this,e,this.element):this.config.placement,j=this._getAttachment(h);a(e).data(this.constructor.DATA_KEY,this).appendTo(document.body),a(this.element).trigger(this.constructor.Event.INSERTED),this._tether=new Tether({attachment:j,element:e,target:this.element,classes:s,classPrefix:k,offset:this.config.offset,constraints:this.config.constraints,addTargetClasses:!1}),f.reflow(e),this._tether.position(),a(e).addClass(q.IN);var l=function(){var c=b._hoverState;b._hoverState=null,a(b.element).trigger(b.constructor.Event.SHOWN),c===o.OUT&&b._leave(null,b)};if(f.supportsTransitionEnd()&&a(this.tip).hasClass(q.FADE))return void a(this.tip).one(f.TRANSITION_END,l).emulateTransitionEnd(i._TRANSITION_DURATION);l()}}},{key:"hide",value:function(b){var c=this,d=this.getTipElement(),e=a.Event(this.constructor.Event.HIDE),g=function(){c._hoverState!==o.IN&&d.parentNode&&d.parentNode.removeChild(d),c.element.removeAttribute("aria-describedby"),a(c.element).trigger(c.constructor.Event.HIDDEN),c.cleanupTether(),b&&b()};a(this.element).trigger(e),e.isDefaultPrevented()||(a(d).removeClass(q.IN),f.supportsTransitionEnd()&&a(this.tip).hasClass(q.FADE)?a(d).one(f.TRANSITION_END,g).emulateTransitionEnd(j):g(),this._hoverState="")}},{key:"isWithContent",value:function(){return Boolean(this.getTitle())}},{key:"getTipElement",value:function(){return this.tip=this.tip||a(this.config.template)[0]}},{key:"setContent",value:function(){var b=a(this.getTipElement());this.setElementContent(b.find(r.TOOLTIP_INNER),this.getTitle()),b.removeClass(q.FADE).removeClass(q.IN),this.cleanupTether()}},{key:"setElementContent",value:function(b,c){var d=this.config.html;"object"==typeof c&&(c.nodeType||c.jquery)?d?a(c).parent().is(b)||b.empty().append(c):b.text(a(c).text()):b[d?"html":"text"](c)}},{key:"getTitle",value:function(){var a=this.element.getAttribute("data-original-title");return a||(a="function"==typeof this.config.title?this.config.title.call(this.element):this.config.title),a}},{key:"cleanupTether",value:function(){this._tether&&this._tether.destroy()}},{key:"_getAttachment",value:function(a){return n[a.toUpperCase()]}},{key:"_setListeners",value:function(){var b=this,c=this.config.trigger.split(" ");c.forEach(function(c){if("click"===c)a(b.element).on(b.constructor.Event.CLICK,b.config.selector,a.proxy(b.toggle,b));else if(c!==t.MANUAL){var d=c===t.HOVER?b.constructor.Event.MOUSEENTER:b.constructor.Event.FOCUSIN,e=c===t.HOVER?b.constructor.Event.MOUSELEAVE:b.constructor.Event.FOCUSOUT;a(b.element).on(d,b.config.selector,a.proxy(b._enter,b)).on(e,b.config.selector,a.proxy(b._leave,b))}}),this.config.selector?this.config=a.extend({},this.config,{trigger:"manual",selector:""}):this._fixTitle()}},{key:"_fixTitle",value:function(){var a=typeof this.element.getAttribute("data-original-title");(this.element.getAttribute("title")||"string"!==a)&&(this.element.setAttribute("data-original-title",this.element.getAttribute("title")||""),this.element.setAttribute("title",""))}},{key:"_enter",value:function(b,c){var d=this.constructor.DATA_KEY;return c=c||a(b.currentTarget).data(d),c||(c=new this.constructor(b.currentTarget,this._getDelegateConfig()),a(b.currentTarget).data(d,c)),b&&(c._activeTrigger["focusin"===b.type?t.FOCUS:t.HOVER]=!0),a(c.getTipElement()).hasClass(q.IN)||c._hoverState===o.IN?void(c._hoverState=o.IN):(clearTimeout(c._timeout),c._hoverState=o.IN,c.config.delay&&c.config.delay.show?void(c._timeout=setTimeout(function(){c._hoverState===o.IN&&c.show()},c.config.delay.show)):void c.show())}},{key:"_leave",value:function(b,c){var d=this.constructor.DATA_KEY;return c=c||a(b.currentTarget).data(d),c||(c=new this.constructor(b.currentTarget,this._getDelegateConfig()),a(b.currentTarget).data(d,c)),b&&(c._activeTrigger["focusout"===b.type?t.FOCUS:t.HOVER]=!1),c._isWithActiveTrigger()?void 0:(clearTimeout(c._timeout),c._hoverState=o.OUT,c.config.delay&&c.config.delay.hide?void(c._timeout=setTimeout(function(){c._hoverState===o.OUT&&c.hide()},c.config.delay.hide)):void c.hide())}},{key:"_isWithActiveTrigger",value:function(){for(var a in this._activeTrigger)if(this._activeTrigger[a])return!0;return!1}},{key:"_getConfig",value:function(c){return c=a.extend({},this.constructor.Default,a(this.element).data(),c),c.delay&&"number"==typeof c.delay&&(c.delay={show:c.delay,hide:c.delay}),f.typeCheckConfig(b,c,this.constructor.DefaultType),c}},{key:"_getDelegateConfig",value:function(){var a={};if(this.config)for(var b in this.config)this.constructor.Default[b]!==this.config[b]&&(a[b]=this.config[b]);return a}}],[{key:"_jQueryInterface",value:function(b){return this.each(function(){var c=a(this).data(g),d="object"==typeof b?b:null;if((c||!/destroy|hide/.test(b))&&(c||(c=new i(this,d),a(this).data(g,c)),"string"==typeof b)){if(void 0===c[b])throw new Error('No method named "'+b+'"');c[b]()}})}},{key:"VERSION",get:function(){return d}},{key:"Default",get:function(){return l}},{key:"NAME",get:function(){return b}},{key:"DATA_KEY",get:function(){return g}},{key:"Event",get:function(){return p}},{key:"EVENT_KEY",get:function(){return h}},{key:"DefaultType",get:function(){return m}}]),i}();return a.fn[b]=u._jQueryInterface,a.fn[b].Constructor=u,a.fn[b].noConflict=function(){return a.fn[b]=i,u._jQueryInterface},u}(jQuery));(function(a){var f="popover",h="4.0.0-alpha",i="bs.popover",j="."+i,k=a.fn[f],l=a.extend({},g.Default,{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'}),m=a.extend({},g.DefaultType,{content:"(string|element|function)"}),n={FADE:"fade",IN:"in"},o={TITLE:".popover-title",CONTENT:".popover-content",ARROW:".popover-arrow"},p={HIDE:"hide"+j,HIDDEN:"hidden"+j,SHOW:"show"+j,SHOWN:"shown"+j,INSERTED:"inserted"+j,CLICK:"click"+j,FOCUSIN:"focusin"+j,FOCUSOUT:"focusout"+j,MOUSEENTER:"mouseenter"+j,MOUSELEAVE:"mouseleave"+j},q=function(g){function k(){c(this,k),d(Object.getPrototypeOf(k.prototype),"constructor",this).apply(this,arguments)}return b(k,g),e(k,[{key:"isWithContent",value:function(){return this.getTitle()||this._getContent()}},{key:"getTipElement",value:function(){return this.tip=this.tip||a(this.config.template)[0]}},{key:"setContent",value:function(){var b=a(this.getTipElement());this.setElementContent(b.find(o.TITLE),this.getTitle()),this.setElementContent(b.find(o.CONTENT),this._getContent()),b.removeClass(n.FADE).removeClass(n.IN),this.cleanupTether()}},{key:"_getContent",value:function(){return this.element.getAttribute("data-content")||("function"==typeof this.config.content?this.config.content.call(this.element):this.config.content)}}],[{key:"_jQueryInterface",value:function(b){return this.each(function(){var c=a(this).data(i),d="object"==typeof b?b:null;if((c||!/destroy|hide/.test(b))&&(c||(c=new k(this,d),a(this).data(i,c)),"string"==typeof b)){if(void 0===c[b])throw new Error('No method named "'+b+'"');c[b]()}})}},{key:"VERSION",get:function(){return h}},{key:"Default",get:function(){return l}},{key:"NAME",get:function(){return f}},{key:"DATA_KEY",get:function(){return i}},{key:"Event",get:function(){return p}},{key:"EVENT_KEY",get:function(){return j}},{key:"DefaultType",get:function(){return m}}]),k}(g);return a.fn[f]=q._jQueryInterface,a.fn[f].Constructor=q,a.fn[f].noConflict=function(){return a.fn[f]=k,q._jQueryInterface},q})(jQuery)}(jQuery);

/*! 
 * modernizr 3.3.0 (Custom Build) | MIT
 * http://modernizr.com/download/?-touchevents-setclasses
 */
!function(e,n,t){function o(e,n){return typeof e===n}function s(){var e,n,t,s,a,i,r;for(var l in c)if(c.hasOwnProperty(l)){if(e=[],n=c[l],n.name&&(e.push(n.name.toLowerCase()),n.options&&n.options.aliases&&n.options.aliases.length))for(t=0;t<n.options.aliases.length;t++)e.push(n.options.aliases[t].toLowerCase());for(s=o(n.fn,"function")?n.fn():n.fn,a=0;a<e.length;a++)i=e[a],r=i.split("."),1===r.length?Modernizr[r[0]]=s:(!Modernizr[r[0]]||Modernizr[r[0]]instanceof Boolean||(Modernizr[r[0]]=new Boolean(Modernizr[r[0]])),Modernizr[r[0]][r[1]]=s),f.push((s?"":"no-")+r.join("-"))}}function a(e){var n=u.className,t=Modernizr._config.classPrefix||"";if(p&&(n=n.baseVal),Modernizr._config.enableJSClass){var o=new RegExp("(^|\\s)"+t+"no-js(\\s|$)");n=n.replace(o,"$1"+t+"js$2")}Modernizr._config.enableClasses&&(n+=" "+t+e.join(" "+t),p?u.className.baseVal=n:u.className=n)}function i(){return"function"!=typeof n.createElement?n.createElement(arguments[0]):p?n.createElementNS.call(n,"http://www.w3.org/2000/svg",arguments[0]):n.createElement.apply(n,arguments)}function r(){var e=n.body;return e||(e=i(p?"svg":"body"),e.fake=!0),e}function l(e,t,o,s){var a,l,f,c,d="modernizr",p=i("div"),h=r();if(parseInt(o,10))for(;o--;)f=i("div"),f.id=s?s[o]:d+(o+1),p.appendChild(f);return a=i("style"),a.type="text/css",a.id="s"+d,(h.fake?h:p).appendChild(a),h.appendChild(p),a.styleSheet?a.styleSheet.cssText=e:a.appendChild(n.createTextNode(e)),p.id=d,h.fake&&(h.style.background="",h.style.overflow="hidden",c=u.style.overflow,u.style.overflow="hidden",u.appendChild(h)),l=t(p,e),h.fake?(h.parentNode.removeChild(h),u.style.overflow=c,u.offsetHeight):p.parentNode.removeChild(p),!!l}var f=[],c=[],d={_version:"3.3.0",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,n){var t=this;setTimeout(function(){n(t[e])},0)},addTest:function(e,n,t){c.push({name:e,fn:n,options:t})},addAsyncTest:function(e){c.push({name:null,fn:e})}},Modernizr=function(){};Modernizr.prototype=d,Modernizr=new Modernizr;var u=n.documentElement,p="svg"===u.nodeName.toLowerCase(),h=d._config.usePrefixes?" -webkit- -moz- -o- -ms- ".split(" "):[];d._prefixes=h;var m=d.testStyles=l;Modernizr.addTest("touchevents",function(){var t;if("ontouchstart"in e||e.DocumentTouch&&n instanceof DocumentTouch)t=!0;else{var o=["@media (",h.join("touch-enabled),("),"heartz",")","{#modernizr{top:9px;position:absolute}}"].join("");m(o,function(e){t=9===e.offsetTop})}return t}),s(),a(f),delete d.addTest,delete d.addAsyncTest;for(var v=0;v<Modernizr._q.length;v++)Modernizr._q[v]();e.Modernizr=Modernizr}(window,document);

/*!
 * pickadate v3.5.6
 * http://amsul.ca/pickadate.js/
 */
!function(a){"function"==typeof define&&define.amd?define("picker",["jquery"],a):"object"==typeof exports?module.exports=a(require("jquery")):this.Picker=a(jQuery)}(function(a){function b(f,g,i,m){function n(){return b._.node("div",b._.node("div",b._.node("div",b._.node("div",B.component.nodes(w.open),y.box),y.wrap),y.frame),y.holder,'tabindex="-1"')}function o(){z.data(g,B).addClass(y.input).val(z.data("value")?B.get("select",x.format):f.value),x.editable||z.on("focus."+w.id+" click."+w.id,function(a){a.preventDefault(),B.open()}).on("keydown."+w.id,u),e(f,{haspopup:!0,expanded:!1,readonly:!1,owns:f.id+"_root"})}function p(){e(B.$root[0],"hidden",!0)}function q(){B.$holder.on({keydown:u,"focus.toOpen":t,blur:function(){z.removeClass(y.target)},focusin:function(a){B.$root.removeClass(y.focused),a.stopPropagation()},"mousedown click":function(b){var c=b.target;c!=B.$holder[0]&&(b.stopPropagation(),"mousedown"!=b.type||a(c).is("input, select, textarea, button, option")||(b.preventDefault(),B.$holder[0].focus()))}}).on("click","[data-pick], [data-nav], [data-clear], [data-close]",function(){var b=a(this),c=b.data(),d=b.hasClass(y.navDisabled)||b.hasClass(y.disabled),e=h();e=e&&(e.type||e.href),(d||e&&!a.contains(B.$root[0],e))&&B.$holder[0].focus(),!d&&c.nav?B.set("highlight",B.component.item.highlight,{nav:c.nav}):!d&&"pick"in c?(B.set("select",c.pick),x.closeOnSelect&&B.close(!0)):c.clear?(B.clear(),x.closeOnClear&&B.close(!0)):c.close&&B.close(!0)})}function r(){var b;x.hiddenName===!0?(b=f.name,f.name=""):(b=["string"==typeof x.hiddenPrefix?x.hiddenPrefix:"","string"==typeof x.hiddenSuffix?x.hiddenSuffix:"_submit"],b=b[0]+f.name+b[1]),B._hidden=a('<input type=hidden name="'+b+'"'+(z.data("value")||f.value?' value="'+B.get("select",x.formatSubmit)+'"':"")+">")[0],z.on("change."+w.id,function(){B._hidden.value=f.value?B.get("select",x.formatSubmit):""})}function s(){v&&l?B.$holder.find("."+y.frame).one("transitionend",function(){B.$holder[0].focus()}):B.$holder[0].focus()}function t(a){a.stopPropagation(),z.addClass(y.target),B.$root.addClass(y.focused),B.open()}function u(a){var b=a.keyCode,c=/^(8|46)$/.test(b);return 27==b?(B.close(!0),!1):void((32==b||c||!w.open&&B.component.key[b])&&(a.preventDefault(),a.stopPropagation(),c?B.clear().close():B.open()))}if(!f)return b;var v=!1,w={id:f.id||"P"+Math.abs(~~(Math.random()*new Date))},x=i?a.extend(!0,{},i.defaults,m):m||{},y=a.extend({},b.klasses(),x.klass),z=a(f),A=function(){return this.start()},B=A.prototype={constructor:A,$node:z,start:function(){return w&&w.start?B:(w.methods={},w.start=!0,w.open=!1,w.type=f.type,f.autofocus=f==h(),f.readOnly=!x.editable,f.id=f.id||w.id,"text"!=f.type&&(f.type="text"),B.component=new i(B,x),B.$root=a('<div class="'+y.picker+'" id="'+f.id+'_root" />'),p(),B.$holder=a(n()).appendTo(B.$root),q(),x.formatSubmit&&r(),o(),x.containerHidden?a(x.containerHidden).append(B._hidden):z.after(B._hidden),x.container?a(x.container).append(B.$root):z.after(B.$root),B.on({start:B.component.onStart,render:B.component.onRender,stop:B.component.onStop,open:B.component.onOpen,close:B.component.onClose,set:B.component.onSet}).on({start:x.onStart,render:x.onRender,stop:x.onStop,open:x.onOpen,close:x.onClose,set:x.onSet}),v=c(B.$holder[0]),f.autofocus&&B.open(),B.trigger("start").trigger("render"))},render:function(b){return b?(B.$holder=a(n()),q(),B.$root.html(B.$holder)):B.$root.find("."+y.box).html(B.component.nodes(w.open)),B.trigger("render")},stop:function(){return w.start?(B.close(),B._hidden&&B._hidden.parentNode.removeChild(B._hidden),B.$root.remove(),z.removeClass(y.input).removeData(g),setTimeout(function(){z.off("."+w.id)},0),f.type=w.type,f.readOnly=!1,B.trigger("stop"),w.methods={},w.start=!1,B):B},open:function(c){return w.open?B:(z.addClass(y.active),e(f,"expanded",!0),setTimeout(function(){B.$root.addClass(y.opened),e(B.$root[0],"hidden",!1)},0),c!==!1&&(w.open=!0,v&&k.css("overflow","hidden").css("padding-right","+="+d()),s(),j.on("click."+w.id+" focusin."+w.id,function(a){var b=a.target;b!=f&&b!=document&&3!=a.which&&B.close(b===B.$holder[0])}).on("keydown."+w.id,function(c){var d=c.keyCode,e=B.component.key[d],f=c.target;27==d?B.close(!0):f!=B.$holder[0]||!e&&13!=d?a.contains(B.$root[0],f)&&13==d&&(c.preventDefault(),f.click()):(c.preventDefault(),e?b._.trigger(B.component.key.go,B,[b._.trigger(e)]):B.$root.find("."+y.highlighted).hasClass(y.disabled)||(B.set("select",B.component.item.highlight),x.closeOnSelect&&B.close(!0)))})),B.trigger("open"))},close:function(a){return a&&(x.editable?f.focus():(B.$holder.off("focus.toOpen").focus(),setTimeout(function(){B.$holder.on("focus.toOpen",t)},0))),z.removeClass(y.active),e(f,"expanded",!1),setTimeout(function(){B.$root.removeClass(y.opened+" "+y.focused),e(B.$root[0],"hidden",!0)},0),w.open?(w.open=!1,v&&k.css("overflow","").css("padding-right","-="+d()),j.off("."+w.id),B.trigger("close")):B},clear:function(a){return B.set("clear",null,a)},set:function(b,c,d){var e,f,g=a.isPlainObject(b),h=g?b:{};if(d=g&&a.isPlainObject(c)?c:d||{},b){g||(h[b]=c);for(e in h)f=h[e],e in B.component.item&&(void 0===f&&(f=null),B.component.set(e,f,d)),("select"==e||"clear"==e)&&z.val("clear"==e?"":B.get(e,x.format)).trigger("change");B.render()}return d.muted?B:B.trigger("set",h)},get:function(a,c){if(a=a||"value",null!=w[a])return w[a];if("valueSubmit"==a){if(B._hidden)return B._hidden.value;a="value"}if("value"==a)return f.value;if(a in B.component.item){if("string"==typeof c){var d=B.component.get(a);return d?b._.trigger(B.component.formats.toString,B.component,[c,d]):""}return B.component.get(a)}},on:function(b,c,d){var e,f,g=a.isPlainObject(b),h=g?b:{};if(b){g||(h[b]=c);for(e in h)f=h[e],d&&(e="_"+e),w.methods[e]=w.methods[e]||[],w.methods[e].push(f)}return B},off:function(){var a,b,c=arguments;for(a=0,namesCount=c.length;a<namesCount;a+=1)b=c[a],b in w.methods&&delete w.methods[b];return B},trigger:function(a,c){var d=function(a){var d=w.methods[a];d&&d.map(function(a){b._.trigger(a,B,[c])})};return d("_"+a),d(a),B}};return new A}function c(a){var b,c="position";return a.currentStyle?b=a.currentStyle[c]:window.getComputedStyle&&(b=getComputedStyle(a)[c]),"fixed"==b}function d(){if(k.height()<=i.height())return 0;var b=a('<div style="visibility:hidden;width:100px" />').appendTo("body"),c=b[0].offsetWidth;b.css("overflow","scroll");var d=a('<div style="width:100%" />').appendTo(b),e=d[0].offsetWidth;return b.remove(),c-e}function e(b,c,d){if(a.isPlainObject(c))for(var e in c)f(b,e,c[e]);else f(b,c,d)}function f(a,b,c){a.setAttribute(("role"==b?"":"aria-")+b,c)}function g(b,c){a.isPlainObject(b)||(b={attribute:c}),c="";for(var d in b){var e=("role"==d?"":"aria-")+d,f=b[d];c+=null==f?"":e+'="'+b[d]+'"'}return c}function h(){try{return document.activeElement}catch(a){}}var i=a(window),j=a(document),k=a(document.documentElement),l=null!=document.documentElement.style.transition;return b.klasses=function(a){return a=a||"picker",{picker:a,opened:a+"--opened",focused:a+"--focused",input:a+"__input",active:a+"__input--active",target:a+"__input--target",holder:a+"__holder",frame:a+"__frame",wrap:a+"__wrap",box:a+"__box"}},b._={group:function(a){for(var c,d="",e=b._.trigger(a.min,a);e<=b._.trigger(a.max,a,[e]);e+=a.i)c=b._.trigger(a.item,a,[e]),d+=b._.node(a.node,c[0],c[1],c[2]);return d},node:function(b,c,d,e){return c?(c=a.isArray(c)?c.join(""):c,d=d?' class="'+d+'"':"",e=e?" "+e:"","<"+b+d+e+">"+c+"</"+b+">"):""},lead:function(a){return(10>a?"0":"")+a},trigger:function(a,b,c){return"function"==typeof a?a.apply(b,c||[]):a},digits:function(a){return/\d/.test(a[1])?2:1},isDate:function(a){return{}.toString.call(a).indexOf("Date")>-1&&this.isInteger(a.getDate())},isInteger:function(a){return{}.toString.call(a).indexOf("Number")>-1&&a%1===0},ariaAttr:g},b.extend=function(c,d){a.fn[c]=function(e,f){var g=this.data(c);return"picker"==e?g:g&&"string"==typeof e?b._.trigger(g[e],g,[f]):this.each(function(){var f=a(this);f.data(c)||new b(this,c,d,e)})},a.fn[c].defaults=d.defaults},b});

!function(a){"function"==typeof define&&define.amd?define(["picker","jquery"],a):"object"==typeof exports?module.exports=a(require("./picker.js"),require("jquery")):a(Picker,jQuery)}(function(a,b){function c(a,b){var c=this,d=a.$node[0],e=d.value,f=a.$node.data("value"),g=f||e,h=f?b.formatSubmit:b.format,i=function(){return d.currentStyle?"rtl"==d.currentStyle.direction:"rtl"==getComputedStyle(a.$root[0]).direction};c.settings=b,c.$node=a.$node,c.queue={min:"measure create",max:"measure create",now:"now create",select:"parse create validate",highlight:"parse navigate create validate",view:"parse create validate viewset",disable:"deactivate",enable:"activate"},c.item={},c.item.clear=null,c.item.disable=(b.disable||[]).slice(0),c.item.enable=-function(a){return a[0]===!0?a.shift():-1}(c.item.disable),c.set("min",b.min).set("max",b.max).set("now"),g?c.set("select",g,{format:h,defaultValue:!0}):c.set("select",null).set("highlight",c.item.now),c.key={40:7,38:-7,39:function(){return i()?-1:1},37:function(){return i()?1:-1},go:function(a){var b=c.item.highlight,d=new Date(b.year,b.month,b.date+a);c.set("highlight",d,{interval:a}),this.render()}},a.on("render",function(){a.$root.find("."+b.klass.selectMonth).on("change",function(){var c=this.value;c&&(a.set("highlight",[a.get("view").year,c,a.get("highlight").date]),a.$root.find("."+b.klass.selectMonth).trigger("focus"))}),a.$root.find("."+b.klass.selectYear).on("change",function(){var c=this.value;c&&(a.set("highlight",[c,a.get("view").month,a.get("highlight").date]),a.$root.find("."+b.klass.selectYear).trigger("focus"))})},1).on("open",function(){var d="";c.disabled(c.get("now"))&&(d=":not(."+b.klass.buttonToday+")"),a.$root.find("button"+d+", select").attr("disabled",!1)},1).on("close",function(){a.$root.find("button, select").attr("disabled",!0)},1)}var d=7,e=6,f=a._;c.prototype.set=function(a,b,c){var d=this,e=d.item;return null===b?("clear"==a&&(a="select"),e[a]=b,d):(e["enable"==a?"disable":"flip"==a?"enable":a]=d.queue[a].split(" ").map(function(e){return b=d[e](a,b,c)}).pop(),"select"==a?d.set("highlight",e.select,c):"highlight"==a?d.set("view",e.highlight,c):a.match(/^(flip|min|max|disable|enable)$/)&&(e.select&&d.disabled(e.select)&&d.set("select",e.select,c),e.highlight&&d.disabled(e.highlight)&&d.set("highlight",e.highlight,c)),d)},c.prototype.get=function(a){return this.item[a]},c.prototype.create=function(a,c,d){var e,g=this;return c=void 0===c?a:c,c==-(1/0)||c==1/0?e=c:b.isPlainObject(c)&&f.isInteger(c.pick)?c=c.obj:b.isArray(c)?(c=new Date(c[0],c[1],c[2]),c=f.isDate(c)?c:g.create().obj):c=f.isInteger(c)||f.isDate(c)?g.normalize(new Date(c),d):g.now(a,c,d),{year:e||c.getFullYear(),month:e||c.getMonth(),date:e||c.getDate(),day:e||c.getDay(),obj:e||c,pick:e||c.getTime()}},c.prototype.createRange=function(a,c){var d=this,e=function(a){return a===!0||b.isArray(a)||f.isDate(a)?d.create(a):a};return f.isInteger(a)||(a=e(a)),f.isInteger(c)||(c=e(c)),f.isInteger(a)&&b.isPlainObject(c)?a=[c.year,c.month,c.date+a]:f.isInteger(c)&&b.isPlainObject(a)&&(c=[a.year,a.month,a.date+c]),{from:e(a),to:e(c)}},c.prototype.withinRange=function(a,b){return a=this.createRange(a.from,a.to),b.pick>=a.from.pick&&b.pick<=a.to.pick},c.prototype.overlapRanges=function(a,b){var c=this;return a=c.createRange(a.from,a.to),b=c.createRange(b.from,b.to),c.withinRange(a,b.from)||c.withinRange(a,b.to)||c.withinRange(b,a.from)||c.withinRange(b,a.to)},c.prototype.now=function(a,b,c){return b=new Date,c&&c.rel&&b.setDate(b.getDate()+c.rel),this.normalize(b,c)},c.prototype.navigate=function(a,c,d){var e,f,g,h,i=b.isArray(c),j=b.isPlainObject(c),k=this.item.view;if(i||j){for(j?(f=c.year,g=c.month,h=c.date):(f=+c[0],g=+c[1],h=+c[2]),d&&d.nav&&k&&k.month!==g&&(f=k.year,g=k.month),e=new Date(f,g+(d&&d.nav?d.nav:0),1),f=e.getFullYear(),g=e.getMonth();new Date(f,g,h).getMonth()!==g;)h-=1;c=[f,g,h]}return c},c.prototype.normalize=function(a){return a.setHours(0,0,0,0),a},c.prototype.measure=function(a,b){var c=this;return b?"string"==typeof b?b=c.parse(a,b):f.isInteger(b)&&(b=c.now(a,b,{rel:b})):b="min"==a?-(1/0):1/0,b},c.prototype.viewset=function(a,b){return this.create([b.year,b.month,1])},c.prototype.validate=function(a,c,d){var e,g,h,i,j=this,k=c,l=d&&d.interval?d.interval:1,m=-1===j.item.enable,n=j.item.min,o=j.item.max,p=m&&j.item.disable.filter(function(a){if(b.isArray(a)){var d=j.create(a).pick;d<c.pick?e=!0:d>c.pick&&(g=!0)}return f.isInteger(a)}).length;if((!d||!d.nav&&!d.defaultValue)&&(!m&&j.disabled(c)||m&&j.disabled(c)&&(p||e||g)||!m&&(c.pick<=n.pick||c.pick>=o.pick)))for(m&&!p&&(!g&&l>0||!e&&0>l)&&(l*=-1);j.disabled(c)&&(Math.abs(l)>1&&(c.month<k.month||c.month>k.month)&&(c=k,l=l>0?1:-1),c.pick<=n.pick?(h=!0,l=1,c=j.create([n.year,n.month,n.date+(c.pick===n.pick?0:-1)])):c.pick>=o.pick&&(i=!0,l=-1,c=j.create([o.year,o.month,o.date+(c.pick===o.pick?0:1)])),!h||!i);)c=j.create([c.year,c.month,c.date+l]);return c},c.prototype.disabled=function(a){var c=this,d=c.item.disable.filter(function(d){return f.isInteger(d)?a.day===(c.settings.firstDay?d:d-1)%7:b.isArray(d)||f.isDate(d)?a.pick===c.create(d).pick:b.isPlainObject(d)?c.withinRange(d,a):void 0});return d=d.length&&!d.filter(function(a){return b.isArray(a)&&"inverted"==a[3]||b.isPlainObject(a)&&a.inverted}).length,-1===c.item.enable?!d:d||a.pick<c.item.min.pick||a.pick>c.item.max.pick},c.prototype.parse=function(a,b,c){var d=this,e={};return b&&"string"==typeof b?(c&&c.format||(c=c||{},c.format=d.settings.format),d.formats.toArray(c.format).map(function(a){var c=d.formats[a],g=c?f.trigger(c,d,[b,e]):a.replace(/^!/,"").length;c&&(e[a]=b.substr(0,g)),b=b.substr(g)}),[e.yyyy||e.yy,+(e.mm||e.m)-1,e.dd||e.d]):b},c.prototype.formats=function(){function a(a,b,c){var d=a.match(/[^\x00-\x7F]+|\w+/)[0];return c.mm||c.m||(c.m=b.indexOf(d)+1),d.length}function b(a){return a.match(/\w+/)[0].length}return{d:function(a,b){return a?f.digits(a):b.date},dd:function(a,b){return a?2:f.lead(b.date)},ddd:function(a,c){return a?b(a):this.settings.weekdaysShort[c.day]},dddd:function(a,c){return a?b(a):this.settings.weekdaysFull[c.day]},m:function(a,b){return a?f.digits(a):b.month+1},mm:function(a,b){return a?2:f.lead(b.month+1)},mmm:function(b,c){var d=this.settings.monthsShort;return b?a(b,d,c):d[c.month]},mmmm:function(b,c){var d=this.settings.monthsFull;return b?a(b,d,c):d[c.month]},yy:function(a,b){return a?2:(""+b.year).slice(2)},yyyy:function(a,b){return a?4:b.year},toArray:function(a){return a.split(/(d{1,4}|m{1,4}|y{4}|yy|!.)/g)},toString:function(a,b){var c=this;return c.formats.toArray(a).map(function(a){return f.trigger(c.formats[a],c,[0,b])||a.replace(/^!/,"")}).join("")}}}(),c.prototype.isDateExact=function(a,c){var d=this;return f.isInteger(a)&&f.isInteger(c)||"boolean"==typeof a&&"boolean"==typeof c?a===c:(f.isDate(a)||b.isArray(a))&&(f.isDate(c)||b.isArray(c))?d.create(a).pick===d.create(c).pick:b.isPlainObject(a)&&b.isPlainObject(c)?d.isDateExact(a.from,c.from)&&d.isDateExact(a.to,c.to):!1},c.prototype.isDateOverlap=function(a,c){var d=this,e=d.settings.firstDay?1:0;return f.isInteger(a)&&(f.isDate(c)||b.isArray(c))?(a=a%7+e,a===d.create(c).day+1):f.isInteger(c)&&(f.isDate(a)||b.isArray(a))?(c=c%7+e,c===d.create(a).day+1):b.isPlainObject(a)&&b.isPlainObject(c)?d.overlapRanges(a,c):!1},c.prototype.flipEnable=function(a){var b=this.item;b.enable=a||(-1==b.enable?1:-1)},c.prototype.deactivate=function(a,c){var d=this,e=d.item.disable.slice(0);return"flip"==c?d.flipEnable():c===!1?(d.flipEnable(1),e=[]):c===!0?(d.flipEnable(-1),e=[]):c.map(function(a){for(var c,g=0;g<e.length;g+=1)if(d.isDateExact(a,e[g])){c=!0;break}c||(f.isInteger(a)||f.isDate(a)||b.isArray(a)||b.isPlainObject(a)&&a.from&&a.to)&&e.push(a)}),e},c.prototype.activate=function(a,c){var d=this,e=d.item.disable,g=e.length;return"flip"==c?d.flipEnable():c===!0?(d.flipEnable(1),e=[]):c===!1?(d.flipEnable(-1),e=[]):c.map(function(a){var c,h,i,j;for(i=0;g>i;i+=1){if(h=e[i],d.isDateExact(h,a)){c=e[i]=null,j=!0;break}if(d.isDateOverlap(h,a)){b.isPlainObject(a)?(a.inverted=!0,c=a):b.isArray(a)?(c=a,c[3]||c.push("inverted")):f.isDate(a)&&(c=[a.getFullYear(),a.getMonth(),a.getDate(),"inverted"]);break}}if(c)for(i=0;g>i;i+=1)if(d.isDateExact(e[i],a)){e[i]=null;break}if(j)for(i=0;g>i;i+=1)if(d.isDateOverlap(e[i],a)){e[i]=null;break}c&&e.push(c)}),e.filter(function(a){return null!=a})},c.prototype.nodes=function(a){var b=this,c=b.settings,g=b.item,h=g.now,i=g.select,j=g.highlight,k=g.view,l=g.disable,m=g.min,n=g.max,o=function(a,b){return c.firstDay&&(a.push(a.shift()),b.push(b.shift())),f.node("thead",f.node("tr",f.group({min:0,max:d-1,i:1,node:"th",item:function(d){return[a[d],c.klass.weekdays,'scope=col title="'+b[d]+'"']}})))}((c.showWeekdaysFull?c.weekdaysFull:c.weekdaysShort).slice(0),c.weekdaysFull.slice(0)),p=function(a){return f.node("div"," ",c.klass["nav"+(a?"Next":"Prev")]+(a&&k.year>=n.year&&k.month>=n.month||!a&&k.year<=m.year&&k.month<=m.month?" "+c.klass.navDisabled:""),"data-nav="+(a||-1)+" "+f.ariaAttr({role:"button",controls:b.$node[0].id+"_table"})+' title="'+(a?c.labelMonthNext:c.labelMonthPrev)+'"')},q=function(){var d=c.showMonthsShort?c.monthsShort:c.monthsFull;return c.selectMonths?f.node("select",f.group({min:0,max:11,i:1,node:"option",item:function(a){return[d[a],0,"value="+a+(k.month==a?" selected":"")+(k.year==m.year&&a<m.month||k.year==n.year&&a>n.month?" disabled":"")]}}),c.klass.selectMonth,(a?"":"disabled")+" "+f.ariaAttr({controls:b.$node[0].id+"_table"})+' title="'+c.labelMonthSelect+'"'):f.node("div",d[k.month],c.klass.month)},r=function(){var d=k.year,e=c.selectYears===!0?5:~~(c.selectYears/2);if(e){var g=m.year,h=n.year,i=d-e,j=d+e;if(g>i&&(j+=g-i,i=g),j>h){var l=i-g,o=j-h;i-=l>o?o:l,j=h}return f.node("select",f.group({min:i,max:j,i:1,node:"option",item:function(a){return[a,0,"value="+a+(d==a?" selected":"")]}}),c.klass.selectYear,(a?"":"disabled")+" "+f.ariaAttr({controls:b.$node[0].id+"_table"})+' title="'+c.labelYearSelect+'"')}return f.node("div",d,c.klass.year)};return f.node("div",(c.selectYears?r()+q():q()+r())+p()+p(1),c.klass.header)+f.node("table",o+f.node("tbody",f.group({min:0,max:e-1,i:1,node:"tr",item:function(a){var e=c.firstDay&&0===b.create([k.year,k.month,1]).day?-7:0;return[f.group({min:d*a-k.day+e+1,max:function(){return this.min+d-1},i:1,node:"td",item:function(a){a=b.create([k.year,k.month,a+(c.firstDay?1:0)]);var d=i&&i.pick==a.pick,e=j&&j.pick==a.pick,g=l&&b.disabled(a)||a.pick<m.pick||a.pick>n.pick,o=f.trigger(b.formats.toString,b,[c.format,a]);return[f.node("div",a.date,function(b){return b.push(k.month==a.month?c.klass.infocus:c.klass.outfocus),h.pick==a.pick&&b.push(c.klass.now),d&&b.push(c.klass.selected),e&&b.push(c.klass.highlighted),g&&b.push(c.klass.disabled),b.join(" ")}([c.klass.day]),"data-pick="+a.pick+" "+f.ariaAttr({role:"gridcell",label:o,selected:d&&b.$node.val()===o?!0:null,activedescendant:e?!0:null,disabled:g?!0:null})),"",f.ariaAttr({role:"presentation"})]}})]}})),c.klass.table,'id="'+b.$node[0].id+'_table" '+f.ariaAttr({role:"grid",controls:b.$node[0].id,readonly:!0}))+f.node("div",f.node("button",c.today,c.klass.buttonToday,"type=button data-pick="+h.pick+(a&&!b.disabled(h)?"":" disabled")+" "+f.ariaAttr({controls:b.$node[0].id}))+f.node("button",c.clear,c.klass.buttonClear,"type=button data-clear=1"+(a?"":" disabled")+" "+f.ariaAttr({controls:b.$node[0].id}))+f.node("button",c.close,c.klass.buttonClose,"type=button data-close=true "+(a?"":" disabled")+" "+f.ariaAttr({controls:b.$node[0].id})),c.klass.footer)},c.defaults=function(a){return{labelMonthNext:"Next month",labelMonthPrev:"Previous month",labelMonthSelect:"Select a month",labelYearSelect:"Select a year",monthsFull:["January","February","March","April","May","June","July","August","September","October","November","December"],monthsShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],weekdaysFull:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],weekdaysShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],today:"Today",clear:"Clear",close:"Close",closeOnSelect:!0,closeOnClear:!0,format:"d mmmm, yyyy",klass:{table:a+"table",header:a+"header",navPrev:a+"nav--prev",navNext:a+"nav--next",navDisabled:a+"nav--disabled",month:a+"month",year:a+"year",selectMonth:a+"select--month",selectYear:a+"select--year",weekdays:a+"weekday",day:a+"day",disabled:a+"day--disabled",selected:a+"day--selected",highlighted:a+"day--highlighted",now:a+"day--today",infocus:a+"day--infocus",outfocus:a+"day--outfocus",footer:a+"footer",buttonClear:a+"button--clear",buttonToday:a+"button--today",buttonClose:a+"button--close"}}}(a.klasses().picker+"__"),a.extend("pickadate",c)});

/*!
 * textarea autosize v0.4.0
 * https://github.com/javierjulio/textarea-autosize
 */
!function(t,e){function i(e){this.element=e,this.$element=t(e),this.init()}var n="textareaAutoSize",h="plugin_"+n,s=function(t){return t.replace(/\s/g,"").length>0};i.prototype={init:function(){var i=(this.$element.outerHeight(),parseInt(this.$element.css("paddingBottom"))+parseInt(this.$element.css("paddingTop")));s(this.element.value)&&this.$element.height(this.element.scrollHeight-i),this.$element.on("input keyup",function(){var n=t(e),h=n.scrollTop();t(this).height(0).height(this.scrollHeight-i),n.scrollTop(h)})}},t.fn[n]=function(e){return this.each(function(){t.data(this,h)||t.data(this,h,new i(this,e))}),this}}(jQuery,window,document);

/*!
 * waves v0.7.4
 * http://fian.my.id/Waves
 */
!function(a,b){"use strict";"function"==typeof define&&define.amd?define([],function(){return b.apply(a)}):"object"==typeof exports?module.exports=b.call(a):a.Waves=b.call(a)}("object"==typeof global?global:this,function(){"use strict";function e(a){return null!==a&&a===a.window}function f(a){return e(a)?a:9===a.nodeType&&a.defaultView}function g(a){var b=typeof a;return"function"===b||"object"===b&&!!a}function h(a){return g(a)&&a.nodeType>0}function i(a){var d=c.call(a);return"[object String]"===d?b(a):g(a)&&/^\[object (HTMLCollection|NodeList|Object)\]$/.test(d)&&a.hasOwnProperty("length")?a:h(a)?[a]:[]}function j(a){var b,c,d={top:0,left:0},e=a&&a.ownerDocument;return b=e.documentElement,"undefined"!=typeof a.getBoundingClientRect&&(d=a.getBoundingClientRect()),c=f(e),{top:d.top+c.pageYOffset-b.clientTop,left:d.left+c.pageXOffset-b.clientLeft}}function k(a){var b="";for(var c in a)a.hasOwnProperty(c)&&(b+=c+":"+a[c]+";");return b}function n(a,b,c,d){if(c){d.classList.remove("waves-wrapping"),c.classList.remove("waves-rippling");var e=c.getAttribute("data-x"),f=c.getAttribute("data-y"),g=c.getAttribute("data-scale"),h=c.getAttribute("data-translate"),i=Date.now()-Number(c.getAttribute("data-hold")),j=350-i;0>j&&(j=0),"mousemove"===a.type&&(j=150);var m="mousemove"===a.type?2500:l.duration;setTimeout(function(){var a={top:f+"px",left:e+"px",opacity:"0","-webkit-transition-duration":m+"ms","-moz-transition-duration":m+"ms","-o-transition-duration":m+"ms","transition-duration":m+"ms","-webkit-transform":g+" "+h,"-moz-transform":g+" "+h,"-ms-transform":g+" "+h,"-o-transform":g+" "+h,transform:g+" "+h};c.setAttribute("style",k(a)),setTimeout(function(){try{d.removeChild(c),b.removeChild(d)}catch(a){return!1}},m)},j)}}function p(a){if(o.allowEvent(a)===!1)return null;for(var b=null,c=a.target||a.srcElement;null!==c.parentElement;){if(c.classList.contains("waves-effect")&&!(c instanceof SVGElement)){b=c;break}c=c.parentElement}return b}function q(a){var b=p(a);if(null!==b){if(b.disabled||b.getAttribute("disabled")||b.classList.contains("disabled"))return;if(o.registerEvent(a),"touchstart"===a.type&&l.delay){var c=!1,e=setTimeout(function(){e=null,l.show(a,b)},l.delay),f=function(d){e&&(clearTimeout(e),e=null,l.show(a,b)),c||(c=!0,l.hide(d,b))},g=function(a){e&&(clearTimeout(e),e=null),f(a)};b.addEventListener("touchmove",g,!1),b.addEventListener("touchend",f,!1),b.addEventListener("touchcancel",f,!1)}else l.show(a,b),d&&(b.addEventListener("touchend",l.hide,!1),b.addEventListener("touchcancel",l.hide,!1)),b.addEventListener("mouseup",l.hide,!1),b.addEventListener("mouseleave",l.hide,!1)}}var a=a||{},b=document.querySelectorAll.bind(document),c=Object.prototype.toString,d="ontouchstart"in window,l={duration:750,delay:200,show:function(a,b,c){if(2===a.button)return!1;b=b||this;var d=document.createElement("div");d.className="waves-wrap waves-wrapping",b.appendChild(d);var e=document.createElement("div");e.className="waves-ripple waves-rippling",d.appendChild(e);var f=j(b),g=0,h=0;"touches"in a&&a.touches.length?(g=a.touches[0].pageY-f.top,h=a.touches[0].pageX-f.left):(g=a.pageY-f.top,h=a.pageX-f.left),h=h>=0?h:0,g=g>=0?g:0;var i="scale("+b.clientWidth/100*3+")",m="translate(0,0)";c&&(m="translate("+c.x+"px, "+c.y+"px)"),e.setAttribute("data-hold",Date.now()),e.setAttribute("data-x",h),e.setAttribute("data-y",g),e.setAttribute("data-scale",i),e.setAttribute("data-translate",m);var n={top:g+"px",left:h+"px"};e.classList.add("waves-notransition"),e.setAttribute("style",k(n)),e.classList.remove("waves-notransition"),n["-webkit-transform"]=i+" "+m,n["-moz-transform"]=i+" "+m,n["-ms-transform"]=i+" "+m,n["-o-transform"]=i+" "+m,n.transform=i+" "+m,n.opacity="1";var o="mousemove"===a.type?2500:l.duration;n["-webkit-transition-duration"]=o+"ms",n["-moz-transition-duration"]=o+"ms",n["-o-transition-duration"]=o+"ms",n["transition-duration"]=o+"ms",e.setAttribute("style",k(n))},hide:function(a,b){b=b||this;for(var c=b.getElementsByClassName("waves-wrapping"),d=b.getElementsByClassName("waves-rippling"),e=0,f=d.length;f>e;e++)n(a,b,d[e],c[e])}},m={input:function(a){var b=a.parentNode;if("i"!==b.tagName.toLowerCase()||!b.classList.contains("waves-effect")){var c=document.createElement("i");c.className=a.className+" waves-input-wrapper",a.className="waves-button-input",b.replaceChild(c,a),c.appendChild(a);var d=window.getComputedStyle(a,null),e=d.color,f=d.backgroundColor;c.setAttribute("style","color:"+e+";background:"+f),a.setAttribute("style","background-color:rgba(0,0,0,0);")}},img:function(a){var b=a.parentNode;if("i"!==b.tagName.toLowerCase()||!b.classList.contains("waves-effect")){var c=document.createElement("i");b.replaceChild(c,a),c.appendChild(a)}}},o={touches:0,allowEvent:function(a){var b=!0;return/^(mousedown|mousemove)$/.test(a.type)&&o.touches&&(b=!1),b},registerEvent:function(a){var b=a.type;"touchstart"===b?o.touches+=1:/^(touchend|touchcancel)$/.test(b)&&setTimeout(function(){o.touches&&(o.touches-=1)},500)}};return a.init=function(a){var b=document.body;a=a||{},"duration"in a&&(l.duration=a.duration),"delay"in a&&(l.delay=a.delay),d&&(b.addEventListener("touchstart",q,!1),b.addEventListener("touchcancel",o.registerEvent,!1),b.addEventListener("touchend",o.registerEvent,!1)),b.addEventListener("mousedown",q,!1)},a.attach=function(a,b){a=i(a),"[object Array]"===c.call(b)&&(b=b.join(" ")),b=b?" "+b:"";for(var d,e,f=0,g=a.length;g>f;f++)d=a[f],e=d.tagName.toLowerCase(),-1!==["input","img"].indexOf(e)&&(m[e](d),d=d.parentElement),-1===d.className.indexOf("waves-effect")&&(d.className+=" waves-effect"+b)},a.ripple=function(a,b){a=i(a);var c=a.length;if(b=b||{},b.wait=b.wait||0,b.position=b.position||null,c)for(var d,e,f,g={},h=0,k={type:"mousedown",button:1},m=function(a,b){return function(){l.hide(a,b)}};c>h;h++)if(d=a[h],e=b.position||{x:d.clientWidth/2,y:d.clientHeight/2},f=j(d),g.x=f.left+e.x,g.y=f.top+e.y,k.pageX=g.x,k.pageY=g.y,l.show(k,d),b.wait>=0&&null!==b.wait){var n={type:"mouseup",button:1};setTimeout(m(n,d),b.wait)}},a.calm=function(a){a=i(a);for(var b={type:"mouseup",button:1},c=0,d=a.length;d>c;c++)l.hide(b,a[c])},a.displayEffect=function(b){console.error("Waves.displayEffect() has been deprecated and will be removed in future version. Please use Waves.init() to initialize Waves effect"),a.init(b)},a});

/*!
 * Material
 */
if (typeof jQuery === 'undefined') {
	throw new Error('Material\'s JavaScript requires jQuery')
}

+function ($) {
	var version = $.fn.jquery.split(' ')[0].split('.')
	if ((version[0] < 2 && version[1] < 9) || (version[0] == 1 && version[1] == 9 && version[2] < 1) || (version[0] >= 3)) {
		throw new Error('Material\'s JavaScript requires at least jQuery v1.9.1 but less than v3.0.0')
	}
}(jQuery);

+function ($) {
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*!
 * dialogs are displayed centered vertically on the screen
 * based on Bootstrap's (v4.0.0-alpha.2) modal.js
 */
$(document).on('hidden.bs.modal', '.modal-va-middle', function () {
  $(this).removeClass('modal-va-middle-show');
});

$(document).on('show.bs.modal', '.modal-va-middle', function () {
  $(this).addClass('modal-va-middle-show');
});

/*!
 * waterfall header:
 * header is initially presented as seamed,
 * but then separates to form the step
 *
 * waterfall toggle binds to JavaScript's scroll event
 * since Bootstrap (v4.0.0-alpha.2) removes affix.js
 */
var $headerWaterfall = $('.header-waterfall');

if ($headerWaterfall.length) {
  $(window).on('scroll', function () {
    if ($(this).scrollTop() > 1) {
      $headerWaterfall.addClass('affix');
    } else {
      $headerWaterfall.removeClass('affix');
    };
  });
};

/*!
 * customise pickadate js for material
 * based on pickadate.js
 */
var Datepicker = function Datepicker(element, options) {
  this._element = element;
  this._options = options;
};

if (typeof $.fn.pickadate === 'undefined') {
  throw new Error('Material\'s JavaScript requires pickadate.js');
};

Datepicker.DEFAULTS = {
  cancel: 'Cancel',
  closeOnCancel: true,
  closeOnSelect: false,
  container: 'body',
  disable: [],
  firstDay: 0,
  format: 'd/m/yyyy',
  formatSubmit: '',
  max: false,
  min: false,
  monthsFull: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
  monthsShort: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  ok: 'OK',
  onClose: false,
  onOpen: false,
  onRender: false,
  onSet: false,
  onStart: false,
  onStop: false,
  selectMonths: false,
  selectYears: false,
  today: 'Today',
  weekdaysFull: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
  weekdaysShort: ['S', 'M', 'T', 'W', 'T', 'F', 'S']
};

Datepicker.prototype.display = function (datepickerApi, datepickerRoot, datepickerValue) {
  $('.picker__date-display', datepickerRoot).remove();

  $('.picker__wrap', datepickerRoot).prepend('<div class="picker__date-display">' + '<div class="picker__date-display-top">' + '<span class="picker__year-display">' + datepickerApi.get(datepickerValue, 'yyyy') + '</span>' + '</div>' + '<div class="picker__date-display-bottom">' + '<span class="picker__weekday-display">' + datepickerApi.get(datepickerValue, 'dddd') + '</span>' + '<span class="picker__day-display">' + datepickerApi.get(datepickerValue, 'd') + '</span>' + '<span class="picker__month-display">' + datepickerApi.get(datepickerValue, 'mmm') + '</span>' + '</div>' + '</div>');
};

Datepicker.prototype.show = function () {
  var that = this;

  $(this._element).pickadate({
    clear: that._options.cancel,
    close: that._options.ok,
    closeOnClear: that._options.closeOnCancel,
    closeOnSelect: that._options.closeOnSelect,
    container: that._options.container,
    disable: that._options.disable,
    firstDay: that._options.firstDay,
    format: that._options.format,
    formatSubmit: that._options.formatSubmit,
    klass: {
      buttonClear: 'btn btn-flat btn-brand picker__button--clear',
      buttonClose: 'btn btn-flat btn-brand picker__button--close',
      buttonToday: 'btn btn-flat btn-brand picker__button--today',
      navPrev: 'icon icon-lg picker__nav--prev',
      navNext: 'icon icon-lg picker__nav--next'
    },
    max: that._options.max,
    min: that._options.min,
    monthsFull: that._options.monthsFull,
    monthsShort: that._options.monthsShort,
    onClose: that._options.onClose,
    onOpen: that._options.onOpen,
    onRender: that._options.onRender,
    onSet: that._options.onSet,
    onStart: that._options.onStart,
    onStop: that._options.onStop,
    selectMonths: that._options.selectMonths,
    selectYears: that._options.selectYears,
    today: that._options.today,
    weekdaysFull: that._options.weekdaysFull,
    weekdaysShort: that._options.weekdaysShort
  });

  var datepickerApi = $(this._element).pickadate('picker'),
      datepickerNode = datepickerApi.$node,
      datepickerRoot = datepickerApi.$root;

  datepickerApi.on({
    close: function close() {
      $(document.activeElement).blur();
    },
    open: function open() {
      if (!$('.picker__date-display', datepickerRoot).length) {
        that.display(datepickerApi, datepickerRoot, 'highlight');
      };
    },
    set: function set() {
      if (datepickerApi.get('select') !== null) {
        that.display(datepickerApi, datepickerRoot, 'select');
      };
    }
  });
};

function Plugin(option) {
  return this.each(function () {
    var data = $(this).data('bs.pickdate');
    var options = $.extend({}, Datepicker.DEFAULTS, $(this).data(), (typeof option === 'undefined' ? 'undefined' : _typeof(option)) == 'object' && option);

    if (!data) {
      $(this).data('bs.pickdate', data = new Datepicker(this, options));
    };

    data.show();
  });
};

var old = $.fn.pickdate;

$.fn.pickdate = Plugin;
$.fn.pickdate.Constructor = Datepicker;

$.fn.pickdate.noConflict = function () {
  $.fn.pickdate = old;
  return this;
};

/*!
 * activate textarea-autosize for material
 * based on textarea-autosize.js
 */
if ($('.textarea-autosize').length && typeof $.fn.textareaAutoSize !== 'undefined') {
  $('.textarea-autosize').textareaAutoSize();
};

/*!
 * activate waves for material
 * requires waves.js
 */
if ($('.waves-attach').length && typeof Waves !== 'undefined') {
  Waves.attach('.waves-attach');
  Waves.init();
};

/*!
 * floating label:
 * when a user engages with the text input field,
 * the floating inline labels move to float above the field
 */
var Floatinglabel = function ($) {
  // constants >>>
  var DATA_API_KEY = '.data-api';
  var DATA_KEY = 'md.floatinglabel';
  var EVENT_KEY = '.' + DATA_KEY;
  var NAME = 'floatinglabel';
  var NO_CONFLICT = $.fn[NAME];

  var ClassName = {
    IS_FOCUSED: 'is-focused',
    HAS_VALUE: 'has-value'
  };

  var Event = {
    CHANGE_DATA_API: 'change' + EVENT_KEY + DATA_API_KEY,
    FOCUSIN_DATA_API: 'focusin' + EVENT_KEY + DATA_API_KEY,
    FOCUSOUT_DATA_API: 'focusout' + EVENT_KEY + DATA_API_KEY
  };

  var Selector = {
    DATA_PARENT: '.floating-label',
    DATA_TOGGLE: '.floating-label .form-control'
  };
  // <<< constants

  var Floatinglabel = function () {
    function Floatinglabel(element) {
      _classCallCheck(this, Floatinglabel);

      this._element = element;
    }

    _createClass(Floatinglabel, [{
      key: 'change',
      value: function change(relatedTarget) {
        if ($(this._element).val() || $(this._element).is('select') && $('option:first-child', $(this._element)).html().replace(' ', '') !== '') {
          $(relatedTarget).addClass(ClassName.HAS_VALUE);
        } else {
          $(relatedTarget).removeClass(ClassName.HAS_VALUE);
        }
      }
    }, {
      key: 'focusin',
      value: function focusin(relatedTarget) {
        $(relatedTarget).addClass(ClassName.IS_FOCUSED);
      }
    }, {
      key: 'focusout',
      value: function focusout(relatedTarget) {
        $(relatedTarget).removeClass(ClassName.IS_FOCUSED);
      }
    }], [{
      key: '_jQueryInterface',
      value: function _jQueryInterface(event) {
        return this.each(function () {
          var data = $(this).data(DATA_KEY);
          var _event = event ? event : 'change';

          if (!data) {
            data = new Floatinglabel(this);
            $(this).data(DATA_KEY, data);
          }

          if (typeof _event === 'string') {
            if (data[_event] === undefined) {
              throw new Error('No method named "' + _event + '"');
            }

            data[_event]($(this).parent(Selector.DATA_PARENT));
          }
        });
      }
    }]);

    return Floatinglabel;
  }();

  $(document).on(Event.CHANGE_DATA_API + ' ' + Event.FOCUSIN_DATA_API + ' ' + Event.FOCUSOUT_DATA_API, Selector.DATA_TOGGLE, function (event) {
    var data = $(this).data(DATA_KEY);

    Floatinglabel._jQueryInterface.call($(this), event.type);
  });

  $.fn[NAME] = Floatinglabel._jQueryInterface;
  $.fn[NAME].Constructor = Floatinglabel;
  $.fn[NAME].noConflict = function () {
    $.fn[NAME] = NO_CONFLICT;
    return Floatinglabel._jQueryInterface;
  };

  return Floatinglabel;
}(jQuery);

/*!
 * navigation drawer
 * based on Bootstrap's (v4.0.0-alpha.2) modal.js
 */
var NavDrawer = function ($) {
  // constants >>>
  var DATA_API_KEY = '.data-api';
  var DATA_KEY = 'md.navdrawer';
  var EVENT_KEY = '.' + DATA_KEY;
  var NAME = 'navdrawer';
  var NO_CONFLICT = $.fn[NAME];
  var TRANSITION_DURATION = 300;
  var TRANSITION_DURATION_BACKDROP = 150;

  var ClassName = {
    BACKDROP: 'navdrawer-backdrop',
    IN: 'in',
    OPEN: 'navdrawer-open'
  };

  var Default = {
    keyboard: true,
    show: true,
    type: 'temporary'
  };

  var DefaultType = {
    keyboard: 'boolean',
    show: 'boolean',
    type: 'string'
  };

  var Event = {
    CLICK_DATA_API: 'click' + EVENT_KEY + DATA_API_KEY,
    CLICK_DISMISS: 'click.dismiss' + EVENT_KEY,
    FOCUSIN: 'focusin' + EVENT_KEY,
    HIDDEN: 'hidden' + EVENT_KEY,
    HIDE: 'hide' + EVENT_KEY,
    KEYDOWN_DISMISS: 'keydown.dismiss' + EVENT_KEY,
    MOUSEDOWN_DISMISS: 'mousedown.dismiss' + EVENT_KEY,
    MOUSEUP_DISMISS: 'mouseup.dismiss' + EVENT_KEY,
    SHOW: 'show' + EVENT_KEY,
    SHOWN: 'shown' + EVENT_KEY
  };

  var Selector = {
    CONTENT: '.navdrawer-scroll',
    DATA_DISMISS: '[data-dismiss="navdrawer"]',
    DATA_TOGGLE: '[data-toggle="navdrawer"]'
  };
  // <<< constants

  var NavDrawer = function () {
    function NavDrawer(element, config) {
      _classCallCheck(this, NavDrawer);

      this._backdrop = null;
      this._config = this._getConfig(config);
      this._content = $(element).find(Selector.CONTENT)[0];
      this._element = element;
      this._ignoreBackdropClick = false;
      this._isShown = false;
    }

    _createClass(NavDrawer, [{
      key: 'hide',
      value: function hide(event) {
        if (event) {
          event.preventDefault();
        }

        var hideClassName = ClassName.OPEN + '-' + this._config.type;
        var hideEvent = $.Event(Event.HIDE);

        $(this._element).trigger(hideEvent);

        if (!this._isShown || hideEvent.isDefaultPrevented()) {
          return;
        }

        this._isShown = false;
        this._setEscapeEvent();
        $(document).off(Event.FOCUSIN);
        $(this._content).off(Event.MOUSEDOWN_DISMISS);

        $(this._element).off(Event.CLICK_DISMISS).removeClass(ClassName.IN);

        if (Util.supportsTransitionEnd()) {
          $(this._element).one(Util.TRANSITION_END, $.proxy(this._hideNavdrawer, this, hideClassName)).emulateTransitionEnd(TRANSITION_DURATION);
        } else {
          this._hideNavdrawer();
        }
      }
    }, {
      key: 'show',
      value: function show(relatedTarget) {
        var _this = this;

        var showEvent = $.Event(Event.SHOW, {
          relatedTarget: relatedTarget
        });

        $(this._element).trigger(showEvent);

        if (this._isShown || showEvent.isDefaultPrevented()) {
          return;
        }

        this._isShown = true;
        $(document.body).addClass(ClassName.OPEN + '-' + this._config.type);
        this._setEscapeEvent();
        $(this._element).addClass(NAME + '-' + this._config.type);
        $(this._element).on(Event.CLICK_DISMISS, Selector.DATA_DISMISS, $.proxy(this.hide, this));

        $(this._content).on(Event.MOUSEDOWN_DISMISS, function () {
          $(_this._element).one(Event.MOUSEUP_DISMISS, function (event) {
            if ($(event.target).is(_this._element)) {
              _this._ignoreBackdropClick = true;
            }
          });
        });

        this._showBackdrop($.proxy(this._showElement, this, relatedTarget));
      }
    }, {
      key: 'toggle',
      value: function toggle(relatedTarget) {
        return this._isShown ? this.hide() : this.show(relatedTarget);
      }
    }, {
      key: '_enforceFocus',
      value: function _enforceFocus() {
        var _this2 = this;

        $(document).off(Event.FOCUSIN).on(Event.FOCUSIN, function (event) {
          if (_this2._element !== event.target && !$(_this2._element).has(event.target).length) {
            _this2._element.focus();
          }
        });
      }
    }, {
      key: '_getConfig',
      value: function _getConfig(config) {
        config = $.extend({}, Default, config);
        Util.typeCheckConfig(NAME, config, DefaultType);
        return config;
      }
    }, {
      key: '_hideNavdrawer',
      value: function _hideNavdrawer(className) {
        var _this3 = this;

        this._element.style.display = 'none';

        this._showBackdrop(function () {
          $(document.body).removeClass(className);
          $(_this3._element).trigger(Event.HIDDEN);
        });
      }
    }, {
      key: '_removeBackdrop',
      value: function _removeBackdrop() {
        if (this._backdrop) {
          $(this._backdrop).remove();
          this._backdrop = null;
        }
      }
    }, {
      key: '_setEscapeEvent',
      value: function _setEscapeEvent() {
        var _this4 = this;

        if (this._isShown && this._config.keyboard) {
          $(this._element).on(Event.KEYDOWN_DISMISS, function (event) {
            if (event.which === 27) {
              _this4.hide();
            }
          });
        } else if (!this._isShown) {
          $(this._element).off(Event.KEYDOWN_DISMISS);
        }
      }
    }, {
      key: '_showBackdrop',
      value: function _showBackdrop(callback) {
        var _this5 = this;

        var supportsTransition = Util.supportsTransitionEnd();

        if (this._config.type === 'temporary' && this._isShown) {
          this._backdrop = document.createElement('div');

          $(this._backdrop).addClass(ClassName.BACKDROP).appendTo(document.body);

          $(this._element).on(Event.CLICK_DISMISS, function (event) {
            if (_this5._ignoreBackdropClick) {
              _this5._ignoreBackdropClick = false;
              return;
            }

            if (event.target !== event.currentTarget) {
              return;
            }

            _this5.hide();
          });

          if (supportsTransition) {
            Util.reflow(this._backdrop);
          }

          $(this._backdrop).addClass(ClassName.IN);

          if (!callback) {
            return;
          }

          if (!supportsTransition) {
            callback();
            return;
          }

          $(this._backdrop).one(Util.TRANSITION_END, callback).emulateTransitionEnd(TRANSITION_DURATION_BACKDROP);
        } else if (this._backdrop && !this._isShown) {
          $(this._backdrop).removeClass(ClassName.IN);

          var callbackRemove = function callbackRemove() {
            _this5._removeBackdrop();

            if (callback) {
              callback();
            }
          };

          if (supportsTransition) {
            $(this._backdrop).one(Util.TRANSITION_END, callbackRemove).emulateTransitionEnd(TRANSITION_DURATION_BACKDROP);
          } else {
            callbackRemove();
          }
        } else if (callback) {
          callback();
        }
      }
    }, {
      key: '_showElement',
      value: function _showElement(relatedTarget) {
        var _this6 = this;

        var supportsTransition = Util.supportsTransitionEnd();

        if (!this._element.parentNode || this._element.parentNode.nodeType !== Node.ELEMENT_NODE) {
          document.body.appendChild(this._element);
        }

        this._element.style.display = 'block';

        if (supportsTransition) {
          Util.reflow(this._element);
        }

        $(this._element).addClass(ClassName.IN);
        this._enforceFocus();

        var shownEvent = $.Event(Event.SHOWN, {
          relatedTarget: relatedTarget
        });

        var transitionComplete = function transitionComplete() {
          _this6._element.focus();
          $(_this6._element).trigger(shownEvent);
        };

        if (supportsTransition) {
          $(this._content).one(Util.TRANSITION_END, transitionComplete).emulateTransitionEnd(TRANSITION_DURATION);
        } else {
          transitionComplete();
        }
      }
    }], [{
      key: '_jQueryInterface',
      value: function _jQueryInterface(config, relatedTarget) {
        return this.each(function () {
          var data = $(this).data(DATA_KEY);
          var _config = $.extend({}, NavDrawer.Default, $(this).data(), (typeof config === 'undefined' ? 'undefined' : _typeof(config)) === 'object' && config);

          if (!data) {
            data = new NavDrawer(this, _config);
            $(this).data(DATA_KEY, data);
          }

          if (typeof config === 'string') {
            if (data[config] === undefined) {
              throw new Error('No method named "' + config + '"');
            }

            data[config](relatedTarget);
          } else if (_config.show) {
            data.show(relatedTarget);
          }
        });
      }
    }, {
      key: 'Default',
      get: function get() {
        return Default;
      }
    }]);

    return NavDrawer;
  }();

  $(document).on(Event.CLICK_DATA_API, Selector.DATA_TOGGLE, function (event) {
    var _this7 = this;

    var selector = Util.getSelectorFromElement(this);
    var target = void 0;

    if (selector) {
      target = $(selector)[0];
    }

    var config = $(target).data(DATA_KEY) ? 'toggle' : $.extend({}, $(target).data(), $(this).data());

    if (this.tagName === 'A') {
      event.preventDefault();
    }

    var $target = $(target).one(Event.SHOW, function (showEvent) {
      if (showEvent.isDefaultPrevented()) {
        return;
      }

      $target.one(Event.HIDDEN, function () {
        if ($(_this7).is(':visible')) {
          _this7.focus();
        }
      });
    });

    NavDrawer._jQueryInterface.call($(target), config, this);
  });

  $.fn[NAME] = NavDrawer._jQueryInterface;
  $.fn[NAME].Constructor = NavDrawer;
  $.fn[NAME].noConflict = function () {
    $.fn[NAME] = NO_CONFLICT;
    return NavDrawer._jQueryInterface;
  };

  return NavDrawer;
}(jQuery);

/*!
 * expansion panel
 * based on Bootstrap's (v4.0.0-alpha.2) collapse.js
 */
var Panel = function ($) {
  // constants >>>
  var DATA_API_KEY = '.data-api';
  var DATA_KEY = 'md.panel';
  var EVENT_KEY = '.' + DATA_KEY;
  var NAME = 'panel';
  var NO_CONFLICT = $.fn[NAME];
  var TRANSITION_DURATION = 300;

  var ClassName = {
    IN: 'in',
    COLLAPSE: 'collapse',
    COLLAPSING: 'collapsing',
    COLLAPSED: 'collapsed'
  };

  var Default = {
    keyboard: true,
    parent: ''
  };

  var DefaultType = {
    keyboard: 'boolean',
    parent: 'string'
  };

  var Dimension = {
    HEIGHT: 'height',
    WIDTH: 'width'
  };

  var Event = {
    CLICK_DATA_API: 'click' + EVENT_KEY + DATA_API_KEY,
    FOCUSIN: 'focusin' + EVENT_KEY,
    HIDDEN: 'hidden' + EVENT_KEY,
    HIDE: 'hide' + EVENT_KEY,
    KEYDOWN_DISMISS: 'keydown.dismiss' + EVENT_KEY,
    SHOW: 'show' + EVENT_KEY,
    SHOWN: 'shown' + EVENT_KEY
  };

  var Selector = {
    ACTIVES: '.tile-active-show.collapsing, .tile-active-show.in',
    DATA_TOGGLE: '[data-toggle="panel"]',
    PARENT: '.tile-collapse'
  };
  // <<< constants

  var Panel = function () {
    function Panel(element, config) {
      _classCallCheck(this, Panel);

      this._config = this._getConfig(config);
      this._element = element;
      this._isTransitioning = false;
      this._parent = this._config.parent ? this._getParent() : null;
      this._triggerArray = $.makeArray($('[data-toggle="panel"][data-target="#' + element.id + '"],' + '[data-toggle="panel"][href="#' + element.id + '"]'));

      if (!this._config.parent) {
        this._addAriaAndCollapsedClass(this._element, this._triggerArray);
      }

      this.toggle();
    }

    _createClass(Panel, [{
      key: 'hide',
      value: function hide() {
        var _this8 = this;

        if (this._isTransitioning || !$(this._element).hasClass(ClassName.IN)) {
          return;
        }

        var startEvent = $.Event(Event.HIDE);

        $(this._element).trigger(startEvent);

        if (startEvent.isDefaultPrevented()) {
          return;
        }

        var dimension = this._getDimension();
        var offsetDimension = dimension === Dimension.WIDTH ? 'offsetWidth' : 'offsetHeight';

        this._element.style[dimension] = this._element[offsetDimension] + 'px';
        Util.reflow(this._element);

        $(this._element).removeClass(ClassName.COLLAPSE).removeClass(ClassName.IN).addClass(ClassName.COLLAPSING);

        if (this._triggerArray.length) {
          $(this._triggerArray).addClass(ClassName.COLLAPSED).attr('aria-expanded', false);
        }

        this._isTransitioning = true;

        var complete = function complete() {
          _this8._isTransitioning = false;

          $(_this8._element).removeClass(ClassName.COLLAPSING).addClass(ClassName.COLLAPSE).trigger(Event.HIDDEN);

          _this8._setEscapeEvent();
          $(document).off(Event.FOCUSIN);
        };

        this._element.style[dimension] = 0;

        if (!Util.supportsTransitionEnd()) {
          complete();
          return;
        }

        $(this._element).one(Util.TRANSITION_END, complete).emulateTransitionEnd(TRANSITION_DURATION);
      }
    }, {
      key: 'show',
      value: function show() {
        var _this9 = this;

        if (this._isTransitioning || $(this._element).hasClass(ClassName.IN)) {
          return;
        }

        var actives = void 0;
        var activesData = void 0;

        if (this._parent) {
          actives = $.makeArray($(Selector.ACTIVES, this._parent));

          if (!actives.length) {
            actives = null;
          }
        }

        if (actives) {
          activesData = $(actives).data(DATA_KEY);

          if (activesData && activesData._isTransitioning) {
            return;
          }
        }

        var startEvent = $.Event(Event.SHOW);

        $(this._element).trigger(startEvent);

        if (startEvent.isDefaultPrevented()) {
          return;
        }

        if (actives) {
          Panel._jQueryInterface.call($(actives), 'hide');

          if (!activesData) {
            $(actives).data(DATA_KEY, null);
          }
        }

        var dimension = this._getDimension();

        $(this._element).removeClass(ClassName.COLLAPSE).addClass(ClassName.COLLAPSING);

        this._element.focus();
        this._element.style[dimension] = 0;

        if (this._triggerArray.length) {
          $(this._triggerArray).removeClass(ClassName.COLLAPSED).attr('aria-expanded', true);
        }

        this._isTransitioning = true;

        var complete = function complete() {
          $(_this9._element).removeClass(ClassName.COLLAPSING).addClass(ClassName.COLLAPSE).addClass(ClassName.IN);

          _this9._element.style[dimension] = '';
          _this9._isTransitioning = false;

          if (_this9._config.keyboard) {
            _this9._setEscapeEvent();
          };

          $(_this9._element).trigger(Event.SHOWN);
        };

        if (!Util.supportsTransitionEnd()) {
          complete();
          return;
        }

        var capitalizedDimension = dimension[0].toUpperCase() + dimension.slice(1);
        var scrollSize = 'scroll' + capitalizedDimension;

        $(this._element).one(Util.TRANSITION_END, complete).emulateTransitionEnd(TRANSITION_DURATION);

        this._element.style[dimension] = this._element[scrollSize] + 'px';
      }
    }, {
      key: 'toggle',
      value: function toggle() {
        if ($(this._element).hasClass(ClassName.IN)) {
          this.hide();
        } else {
          this.show();
        }
      }
    }, {
      key: '_addAriaAndCollapsedClass',
      value: function _addAriaAndCollapsedClass(element, triggerArray) {
        if (element) {
          var isOpen = $(element).hasClass(ClassName.IN);

          if (triggerArray.length) {
            $(triggerArray).toggleClass(ClassName.COLLAPSED, !isOpen).attr('aria-expanded', isOpen);
          }
        }
      }
    }, {
      key: '_getConfig',
      value: function _getConfig(config) {
        config = $.extend({}, Default, config);
        config.toggle = Boolean(config.toggle);
        Util.typeCheckConfig(NAME, config, DefaultType);
        return config;
      }
    }, {
      key: '_getDimension',
      value: function _getDimension() {
        var hasWidth = $(this._element).hasClass(Dimension.WIDTH);

        return hasWidth ? Dimension.WIDTH : Dimension.HEIGHT;
      }
    }, {
      key: '_getParent',
      value: function _getParent() {
        var _this10 = this;

        var parent = $(this._config.parent)[0];
        var selector = '[data-toggle="panel"][data-parent="' + this._config.parent + '"]';

        $(parent).find(selector).each(function (i, element) {
          _this10._addAriaAndCollapsedClass(Panel._getTargetFromElement(element), [element]);
        });

        return parent;
      }
    }, {
      key: '_setEscapeEvent',
      value: function _setEscapeEvent() {
        var _this11 = this;

        if ($(this._element).hasClass(ClassName.IN) && this._config.keyboard) {
          $(this._element).on(Event.KEYDOWN_DISMISS, function (event) {
            if (event.which === 27) {
              _this11.hide();
            }
          });
        } else if (!$(this._element).hasClass(ClassName.IN)) {
          $(this._element).off(Event.KEYDOWN_DISMISS);
        }
      }
    }], [{
      key: '_getTargetFromElement',
      value: function _getTargetFromElement(element) {
        var selector = Util.getSelectorFromElement(element);

        return selector ? $(selector)[0] : null;
      }
    }, {
      key: '_jQueryInterface',
      value: function _jQueryInterface(config) {
        return this.each(function () {
          var data = $(this).data(DATA_KEY);
          var _config = $.extend({}, Default, $(this).data(), (typeof config === 'undefined' ? 'undefined' : _typeof(config)) === 'object' && config);

          if (!data && _config.toggle && /show|hide/.test(config)) {
            _config.toggle = false;
          }

          if (!data) {
            data = new Panel(this, _config);
            $(this).data(DATA_KEY, data);
          }

          if (typeof config === 'string') {
            if (data[config] === undefined) {
              throw new Error('No method named "' + config + '"');
            }

            data[config]();
          }
        });
      }
    }, {
      key: 'Default',
      get: function get() {
        return Default;
      }
    }]);

    return Panel;
  }();

  $(document).on(Event.CLICK_DATA_API, Selector.DATA_TOGGLE, function (event) {
    event.preventDefault();

    var target = Panel._getTargetFromElement(this);
    var data = $(target).data(DATA_KEY);
    var config = data ? 'toggle' : $(this).data();

    Panel._jQueryInterface.call($(target), config);
  });

  $.fn[NAME] = Panel._jQueryInterface;
  $.fn[NAME].Constructor = Panel;
  $.fn[NAME].noConflict = function () {
    $.fn[NAME] = NO_CONFLICT;
    return Panel._jQueryInterface;
  };

  return Panel;
}(jQuery);

/*!
 * snackbar:
 * snackbars provide brief feedback about an operation
 * through a message at the bottom of the screen
 */
var Snackbar = function ($) {
  // constants >>>
  var DATA_API_KEY = '.data-api';
  var DATA_KEY = 'md.snackbar';
  var EVENT_KEY = '.' + DATA_KEY;
  var NAME = 'snackbar';
  var NO_CONFLICT = $.fn[NAME];
  var TRANSITION_DURATION = 300;

  var ClassName = {
    IN: 'in',
    INNER: 'snackbar-inner',
    SNACKBAR: 'snackbar'
  };

  var Default = {
    alive: 6000,
    content: '',
    hidden: function hidden() {},
    hide: function hide() {},
    show: function show() {},
    shown: function shown() {}
  };

  var DefaultType = {
    alive: 'integer',
    content: 'string',
    hidden: 'function',
    hide: 'function',
    show: 'function',
    shown: 'function'
  };

  var Event = {
    CLICK_DISMISS: 'click.dismiss' + EVENT_KEY,
    MOUSE_ENTER: 'mouseenter' + EVENT_KEY + DATA_API_KEY,
    MOUSE_LEAVE: 'mouseleave' + EVENT_KEY + DATA_API_KEY
  };

  var Selector = {
    DATA_DISMISS: '[data-dismiss="snackbar"]'
  };
  // <<< constants

  var Snackbar = function () {
    function Snackbar(element, config) {
      _classCallCheck(this, Snackbar);

      this._config = config;
      this._element = element;
      this._isShowing = false;
      this._snackbar = null;
      this._snackbarInner = null;
      this._timer = null;

      this.toggle();
    }

    _createClass(Snackbar, [{
      key: 'hide',
      value: function hide(callback) {
        var _this12 = this;

        if (!this._isShowing) {
          if (callback) {
            callback();
          }

          return;
        }

        this._config.hide.call(this._element);
        $(this._snackbarInner).removeClass(ClassName.IN);
        clearTimeout(this._timer);

        var complete = function complete() {
          _this12._isShowing = false;

          $(_this12._snackbarInner).remove();
          $(_this12._snackbar).remove();

          if (callback) {
            callback();
          }

          _this12._config.hidden.call(_this12._element);
        };

        if (!Util.supportsTransitionEnd()) {
          complete();
          return;
        }

        $(this._snackbarInner).one(Util.TRANSITION_END, complete).emulateTransitionEnd(TRANSITION_DURATION);
      }
    }, {
      key: 'show',
      value: function show() {
        var _this13 = this;

        if (this._isShowing || this._config.content === '') {
          return;
        }

        this._config.show.call(this._element);

        var supportsTransition = Util.supportsTransitionEnd();

        this._isShowing = true;
        this._snackbar = document.createElement('div');
        this._snackbarInner = document.createElement('div');

        $(this._snackbar).addClass(ClassName.SNACKBAR).appendTo(this._element);

        $(this._snackbarInner).addClass(ClassName.INNER).appendTo(this._snackbar).html(this._config.content).on(Event.CLICK_DISMISS, Selector.DATA_DISMISS, $.proxy(this.hide, this, undefined));

        if (supportsTransition) {
          Util.reflow(this._snackbarInner);
        }

        $(this._snackbarInner).addClass(ClassName.IN);

        var complete = function complete() {
          _this13._timer = setTimeout($.proxy(_this13.hide, _this13, undefined), _this13._config.alive);

          $(_this13._snackbarInner).on(Event.MOUSE_ENTER, function () {
            clearTimeout(_this13._timer);
          }).on(Event.MOUSE_LEAVE, function () {
            _this13._timer = setTimeout($.proxy(_this13.hide, _this13, undefined), _this13._config.alive);
          });

          _this13._config.shown.call(_this13._element);
        };

        if (!supportsTransition) {
          complete();
          return;
        }

        $(this._snackbarInner).one(Util.TRANSITION_END, complete).emulateTransitionEnd(TRANSITION_DURATION);
      }
    }, {
      key: 'toggle',
      value: function toggle() {
        if (this._isShowing) {
          this.hide();
        } else {
          this.show();
        }
      }
    }], [{
      key: '_jQueryInterface',
      value: function _jQueryInterface(config) {
        return this.each(function () {
          var body = $(document.body);
          var data = body.data(DATA_KEY);
          var _config = $.extend({}, Default, body.data(), (typeof config === 'undefined' ? 'undefined' : _typeof(config)) === 'object' && config);

          var configIsString = typeof config === 'string';

          var newSnackbar = function newSnackbar() {
            data = new Snackbar(body, _config);
            body.data(DATA_KEY, data);
          };

          if (!data) {
            newSnackbar();
          } else if (!configIsString) {
            data['hide']($.proxy(newSnackbar, body));
          }

          if (configIsString) {
            if (data[config] === undefined) {
              throw new Error('No method named "' + config + '"');
            }

            data[config]();
          }
        });
      }
    }]);

    return Snackbar;
  }();

  $.fn[NAME] = Snackbar._jQueryInterface;
  $.fn[NAME].Constructor = Snackbar;
  $.fn[NAME].noConflict = function () {
    $.fn[NAME] = NO_CONFLICT;
    return Snackbar._jQueryInterface;
  };

  return Snackbar;
}(jQuery);

/*!
 * tab indicator animation
 * works together with Bootstrap's (v4.0.0-alpha.2) tab.js
 */
var Tabswitch = function ($) {
  // constants >>>
  var DATA_KEY = 'md.tabswitch';
  var NAME = 'tabswitch';
  var NO_CONFLICT = $.fn[NAME];
  var TRANSITION_DURATION = 450;

  var ClassName = {
    ANIMATE: 'animate',
    IN: 'in',
    INDICATOR: 'tab-nav-indicator',
    REVERSE: 'reverse'
  };

  var Event = {
    SHOW_BS_TAB: 'show.bs.tab'
  };

  var Selector = {
    DATA_TOGGLE: '.tab-nav [data-toggle="tab"]',
    TAB_NAV: '.tab-nav'
  };
  // <<< constants

  var Tabswitch = function () {
    function Tabswitch(nav) {
      _classCallCheck(this, Tabswitch);

      if (typeof $.fn.tab === 'undefined') {
        throw new Error('Material\'s JavaScript requires Bootstrap\'s tab.js');
      };

      this._nav = nav;
      this._navindicator = null;
    }

    _createClass(Tabswitch, [{
      key: 'switch',
      value: function _switch(element, relatedTarget) {
        var _this14 = this;

        var supportsTransition = Util.supportsTransitionEnd();

        if (!this._navindicator) {
          this._createIndicator();
        }

        var left = $(element).offset().left;
        var width = $(element).outerWidth();
        var navLeft = $(this._nav).offset().left;
        var navWidth = $(this._nav).outerWidth();

        if (relatedTarget !== undefined) {
          var relatedLeft = $(relatedTarget).offset().left;
          var relatedWidth = $(relatedTarget).outerWidth();

          $(this._navindicator).css({
            left: relatedLeft - navLeft,
            right: navLeft + navWidth - relatedLeft - relatedWidth
          });

          if (supportsTransition) {
            $(this._navindicator).addClass(ClassName.ANIMATE);

            if (relatedLeft > left) {
              $(this._navindicator).addClass(ClassName.REVERSE);
            }
          }
        }

        $(this._navindicator).addClass(ClassName.IN).css({
          left: left - navLeft,
          right: navLeft + navWidth - left - width
        });

        var complete = function complete() {
          $(_this14._navindicator).removeClass(ClassName.ANIMATE).removeClass(ClassName.IN).removeClass(ClassName.REVERSE);
        };

        if (!supportsTransition) {
          complete();
          return;
        }

        $(this._navindicator).one(Util.TRANSITION_END, complete).emulateTransitionEnd(TRANSITION_DURATION);
      }
    }, {
      key: '_createIndicator',
      value: function _createIndicator() {
        this._navindicator = document.createElement('div');

        $(this._navindicator).addClass(ClassName.INDICATOR).appendTo(this._nav);
      }
    }], [{
      key: '_jQueryInterface',
      value: function _jQueryInterface(relatedTarget) {
        return this.each(function () {
          var nav = $(this).closest(Selector.TAB_NAV)[0];

          if (!nav) {
            return;
          }

          var data = $(nav).data(DATA_KEY);

          if (!data) {
            data = new Tabswitch(nav);
            $(nav).data(DATA_KEY, data);
          }

          data.switch(this, relatedTarget);
        });
      }
    }]);

    return Tabswitch;
  }();

  $(document).on(Event.SHOW_BS_TAB, Selector.DATA_TOGGLE, function (event) {
    Tabswitch._jQueryInterface.call($(event.target), event.relatedTarget);
  });

  $.fn[NAME] = Tabswitch._jQueryInterface;
  $.fn[NAME].Constructor = Tabswitch;
  $.fn[NAME].noConflict = function () {
    $.fn[NAME] = NO_CONFLICT;
    return Tabswitch._jQueryInterface;
  };

  return Tabswitch;
}(jQuery);

/*!
 * global util js
 * based on Bootstrap's (v4.0.0-alpha.2) util.js
 */
var Util = function ($) {
  var transition = false;

  var TransitionEndEvent = {
    WebkitTransition: 'webkitTransitionEnd',
    MozTransition: 'transitionend',
    OTransition: 'oTransitionEnd otransitionend',
    transition: 'transitionend'
  };

  function getSpecialTransitionEndEvent() {
    return {
      bindType: transition.end,
      delegateType: transition.end,
      handle: function handle(event) {
        if ($(event.target).is(this)) {
          return event.handleObj.handler.apply(this, arguments);
        }
      }
    };
  }

  function isElement(obj) {
    return (obj[0] || obj).nodeType;
  }

  function toType(obj) {
    return {}.toString.call(obj).match(/\s([a-zA-Z]+)/)[1].toLowerCase();
  }

  function transitionEndEmulator(duration) {
    var _this15 = this;

    var called = false;

    $(this).one(Util.TRANSITION_END, function () {
      called = true;
    });

    setTimeout(function () {
      if (!called) {
        Util.triggerTransitionEnd(_this15);
      }
    }, duration);

    return this;
  }

  function setTransitionEndSupport() {
    transition = transitionEndTest();

    $.fn.emulateTransitionEnd = transitionEndEmulator;

    if (Util.supportsTransitionEnd()) {
      $.event.special[Util.TRANSITION_END] = getSpecialTransitionEndEvent();
    }
  }

  function transitionEndTest() {
    if (window.QUnit) {
      return false;
    }

    var el = document.createElement('material');

    for (var name in TransitionEndEvent) {
      if (el.style[name] !== undefined) {
        return { end: TransitionEndEvent[name] };
      }
    };

    return false;
  }

  var Util = {
    TRANSITION_END: 'mdTransitionEnd',

    getSelectorFromElement: function getSelectorFromElement(element) {
      var selector = element.getAttribute('data-target');

      if (!selector) {
        selector = element.getAttribute('href') || '';
        selector = /^#[a-z]/i.test(selector) ? selector : null;
      }

      return selector;
    },
    getUID: function getUID(prefix) {
      do {
        prefix += ~ ~(Math.random() * 1000000);
      } while (document.getElementById(prefix));
      return prefix;
    },
    reflow: function reflow(element) {
      new Function('md', 'return md')(element.offsetHeight);
    },
    supportsTransitionEnd: function supportsTransitionEnd() {
      return Boolean(transition);
    },
    triggerTransitionEnd: function triggerTransitionEnd(element) {
      $(element).trigger(transition.end);
    },
    typeCheckConfig: function typeCheckConfig(componentName, config, configTypes) {
      for (var property in configTypes) {
        if (configTypes.hasOwnProperty(property)) {
          var expectedTypes = configTypes[property];
          var value = config[property];
          var valueType = void 0;

          if (value && isElement(value)) {
            valueType = 'element';
          } else {
            valueType = toType(value);
          }

          if (!new RegExp(expectedTypes).test(valueType)) {
            throw new Error(componentName.toUpperCase() + ': ' + ('Option "' + property + '" provided type "' + valueType + '" ') + ('but expected type "' + expectedTypes + '".'));
          }
        }
      };
    }
  };

  setTransitionEndSupport();

  return Util;
}(jQuery);

}(jQuery);