// modernizr v2.8.3
// http://modernizr.com/download/#-backgroundsize-boxshadow-flexbox-flexboxlegacy-csstransforms-csstransforms3d-touch-cssclasses-teststyles-testprop-testallprops-prefixes-domprefixes
;window.Modernizr=function(a,b,c){function z(a){j.cssText=a}function A(a,b){return z(m.join(a+";")+(b||""))}function B(a,b){return typeof a===b}function C(a,b){return!!~(""+a).indexOf(b)}function D(a,b){for(var d in a){var e=a[d];if(!C(e,"-")&&j[e]!==c)return b=="pfx"?e:!0}return!1}function E(a,b,d){for(var e in a){var f=b[a[e]];if(f!==c)return d===!1?a[e]:B(f,"function")?f.bind(d||b):f}return!1}function F(a,b,c){var d=a.charAt(0).toUpperCase()+a.slice(1),e=(a+" "+o.join(d+" ")+d).split(" ");return B(b,"string")||B(b,"undefined")?D(e,b):(e=(a+" "+p.join(d+" ")+d).split(" "),E(e,b,c))}var d="2.8.3",e={},f=!0,g=b.documentElement,h="modernizr",i=b.createElement(h),j=i.style,k,l={}.toString,m=" -webkit- -moz- -o- -ms- ".split(" "),n="Webkit Moz O ms",o=n.split(" "),p=n.toLowerCase().split(" "),q={},r={},s={},t=[],u=t.slice,v,w=function(a,c,d,e){var f,i,j,k,l=b.createElement("div"),m=b.body,n=m||b.createElement("body");if(parseInt(d,10))while(d--)j=b.createElement("div"),j.id=e?e[d]:h+(d+1),l.appendChild(j);return f=["&#173;",'<style id="s',h,'">',a,"</style>"].join(""),l.id=h,(m?l:n).innerHTML+=f,n.appendChild(l),m||(n.style.background="",n.style.overflow="hidden",k=g.style.overflow,g.style.overflow="hidden",g.appendChild(n)),i=c(l,a),m?l.parentNode.removeChild(l):(n.parentNode.removeChild(n),g.style.overflow=k),!!i},x={}.hasOwnProperty,y;!B(x,"undefined")&&!B(x.call,"undefined")?y=function(a,b){return x.call(a,b)}:y=function(a,b){return b in a&&B(a.constructor.prototype[b],"undefined")},Function.prototype.bind||(Function.prototype.bind=function(b){var c=this;if(typeof c!="function")throw new TypeError;var d=u.call(arguments,1),e=function(){if(this instanceof e){var a=function(){};a.prototype=c.prototype;var f=new a,g=c.apply(f,d.concat(u.call(arguments)));return Object(g)===g?g:f}return c.apply(b,d.concat(u.call(arguments)))};return e}),q.flexbox=function(){return F("flexWrap")},q.flexboxlegacy=function(){return F("boxDirection")},q.touch=function(){var c;return"ontouchstart"in a||a.DocumentTouch&&b instanceof DocumentTouch?c=!0:w(["@media (",m.join("touch-enabled),("),h,")","{#modernizr{top:9px;position:absolute}}"].join(""),function(a){c=a.offsetTop===9}),c},q.backgroundsize=function(){return F("backgroundSize")},q.boxshadow=function(){return F("boxShadow")},q.csstransforms=function(){return!!F("transform")},q.csstransforms3d=function(){var a=!!F("perspective");return a&&"webkitPerspective"in g.style&&w("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}",function(b,c){a=b.offsetLeft===9&&b.offsetHeight===3}),a};for(var G in q)y(q,G)&&(v=G.toLowerCase(),e[v]=q[G](),t.push((e[v]?"":"no-")+v));return e.addTest=function(a,b){if(typeof a=="object")for(var d in a)y(a,d)&&e.addTest(d,a[d]);else{a=a.toLowerCase();if(e[a]!==c)return e;b=typeof b=="function"?b():b,typeof f!="undefined"&&f&&(g.className+=" "+(b?"":"no-")+a),e[a]=b}return e},z(""),i=k=null,e._version=d,e._prefixes=m,e._domPrefixes=p,e._cssomPrefixes=o,e.testProp=function(a){return D([a])},e.testAllProps=F,e.testStyles=w,g.className=g.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(f?" js "+t.join(" "):""),e}(this,this.document);
// bootstrap v3.3.4 | collapse, dropdown, modal, tab, tooltip, transition
// Twitter, Inc.: http://getbootstrap.com
if("undefined"==typeof jQuery)throw new Error("Bootstrap's JavaScript requires jQuery");+function(t){"use strict";var e=t.fn.jquery.split(" ")[0].split(".");if(e[0]<2&&e[1]<9||1==e[0]&&9==e[1]&&e[2]<1)throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher")}(jQuery),+function(t){"use strict";function e(e){e&&3===e.which||(t(n).remove(),t(s).each(function(){var o=t(this),n=i(o),s={relatedTarget:this};n.hasClass("open")&&(n.trigger(e=t.Event("hide.bs.dropdown",s)),e.isDefaultPrevented()||(o.attr("aria-expanded","false"),n.removeClass("open").trigger("hidden.bs.dropdown",s)))}))}function i(e){var i=e.attr("data-target");i||(i=e.attr("href"),i=i&&/#[A-Za-z]/.test(i)&&i.replace(/.*(?=#[^\s]*$)/,""));var o=i&&t(i);return o&&o.length?o:e.parent()}function o(e){return this.each(function(){var i=t(this),o=i.data("bs.dropdown");o||i.data("bs.dropdown",o=new a(this)),"string"==typeof e&&o[e].call(i)})}var n=".dropdown-backdrop",s='[data-toggle="dropdown"]',a=function(e){t(e).on("click.bs.dropdown",this.toggle)};a.VERSION="3.3.4",a.prototype.toggle=function(o){var n=t(this);if(!n.is(".disabled, :disabled")){var s=i(n),a=s.hasClass("open");if(e(),!a){"ontouchstart"in document.documentElement&&!s.closest(".navbar-nav").length&&t('<div class="dropdown-backdrop"/>').insertAfter(t(this)).on("click",e);var r={relatedTarget:this};if(s.trigger(o=t.Event("show.bs.dropdown",r)),o.isDefaultPrevented())return;n.trigger("focus").attr("aria-expanded","true"),s.toggleClass("open").trigger("shown.bs.dropdown",r)}return!1}},a.prototype.keydown=function(e){if(/(38|40|27|32)/.test(e.which)&&!/input|textarea/i.test(e.target.tagName)){var o=t(this);if(e.preventDefault(),e.stopPropagation(),!o.is(".disabled, :disabled")){var n=i(o),a=n.hasClass("open");if(!a&&27!=e.which||a&&27==e.which)return 27==e.which&&n.find(s).trigger("focus"),o.trigger("click");var r=" li:not(.disabled):visible a",l=n.find('[role="menu"]'+r+', [role="listbox"]'+r);if(l.length){var d=l.index(e.target);38==e.which&&d>0&&d--,40==e.which&&d<l.length-1&&d++,~d||(d=0),l.eq(d).trigger("focus")}}}};var r=t.fn.dropdown;t.fn.dropdown=o,t.fn.dropdown.Constructor=a,t.fn.dropdown.noConflict=function(){return t.fn.dropdown=r,this},t(document).on("click.bs.dropdown.data-api",e).on("click.bs.dropdown.data-api",".dropdown form",function(t){t.stopPropagation()}).on("click.bs.dropdown.data-api",s,a.prototype.toggle).on("keydown.bs.dropdown.data-api",s,a.prototype.keydown).on("keydown.bs.dropdown.data-api",'[role="menu"]',a.prototype.keydown).on("keydown.bs.dropdown.data-api",'[role="listbox"]',a.prototype.keydown)}(jQuery),+function(t){"use strict";function e(e,o){return this.each(function(){var n=t(this),s=n.data("bs.modal"),a=t.extend({},i.DEFAULTS,n.data(),"object"==typeof e&&e);s||n.data("bs.modal",s=new i(this,a)),"string"==typeof e?s[e](o):a.show&&s.show(o)})}var i=function(e,i){this.options=i,this.$body=t(document.body),this.$element=t(e),this.$dialog=this.$element.find(".modal-dialog"),this.$backdrop=null,this.isShown=null,this.originalBodyPad=null,this.scrollbarWidth=0,this.ignoreBackdropClick=!1,this.options.remote&&this.$element.find(".modal-content").load(this.options.remote,t.proxy(function(){this.$element.trigger("loaded.bs.modal")},this))};i.VERSION="3.3.4",i.TRANSITION_DURATION=300,i.BACKDROP_TRANSITION_DURATION=150,i.DEFAULTS={backdrop:!0,keyboard:!0,show:!0},i.prototype.toggle=function(t){return this.isShown?this.hide():this.show(t)},i.prototype.show=function(e){var o=this,n=t.Event("show.bs.modal",{relatedTarget:e});this.$element.trigger(n),this.isShown||n.isDefaultPrevented()||(this.isShown=!0,this.checkScrollbar(),this.setScrollbar(),this.$body.addClass("modal-open"),this.escape(),this.resize(),this.$element.on("click.dismiss.bs.modal",'[data-dismiss="modal"]',t.proxy(this.hide,this)),this.$dialog.on("mousedown.dismiss.bs.modal",function(){o.$element.one("mouseup.dismiss.bs.modal",function(e){t(e.target).is(o.$element)&&(o.ignoreBackdropClick=!0)})}),this.backdrop(function(){var n=t.support.transition&&o.$element.hasClass("fade");o.$element.parent().length||o.$element.appendTo(o.$body),o.$element.show().scrollTop(0),o.adjustDialog(),n&&o.$element[0].offsetWidth,o.$element.addClass("in").attr("aria-hidden",!1),o.enforceFocus();var s=t.Event("shown.bs.modal",{relatedTarget:e});n?o.$dialog.one("bsTransitionEnd",function(){o.$element.trigger("focus").trigger(s)}).emulateTransitionEnd(i.TRANSITION_DURATION):o.$element.trigger("focus").trigger(s)}))},i.prototype.hide=function(e){e&&e.preventDefault(),e=t.Event("hide.bs.modal"),this.$element.trigger(e),this.isShown&&!e.isDefaultPrevented()&&(this.isShown=!1,this.escape(),this.resize(),t(document).off("focusin.bs.modal"),this.$element.removeClass("in").attr("aria-hidden",!0).off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"),this.$dialog.off("mousedown.dismiss.bs.modal"),t.support.transition&&this.$element.hasClass("fade")?this.$element.one("bsTransitionEnd",t.proxy(this.hideModal,this)).emulateTransitionEnd(i.TRANSITION_DURATION):this.hideModal())},i.prototype.enforceFocus=function(){t(document).off("focusin.bs.modal").on("focusin.bs.modal",t.proxy(function(t){this.$element[0]===t.target||this.$element.has(t.target).length||this.$element.trigger("focus")},this))},i.prototype.escape=function(){this.isShown&&this.options.keyboard?this.$element.on("keydown.dismiss.bs.modal",t.proxy(function(t){27==t.which&&this.hide()},this)):this.isShown||this.$element.off("keydown.dismiss.bs.modal")},i.prototype.resize=function(){this.isShown?t(window).on("resize.bs.modal",t.proxy(this.handleUpdate,this)):t(window).off("resize.bs.modal")},i.prototype.hideModal=function(){var t=this;this.$element.hide(),this.backdrop(function(){t.$body.removeClass("modal-open"),t.resetAdjustments(),t.resetScrollbar(),t.$element.trigger("hidden.bs.modal")})},i.prototype.removeBackdrop=function(){this.$backdrop&&this.$backdrop.remove(),this.$backdrop=null},i.prototype.backdrop=function(e){var o=this,n=this.$element.hasClass("fade")?"fade":"";if(this.isShown&&this.options.backdrop){var s=t.support.transition&&n;if(this.$backdrop=t('<div class="modal-backdrop '+n+'" />').appendTo(this.$body),this.$element.on("click.dismiss.bs.modal",t.proxy(function(t){return this.ignoreBackdropClick?void(this.ignoreBackdropClick=!1):void(t.target===t.currentTarget&&("static"==this.options.backdrop?this.$element[0].focus():this.hide()))},this)),s&&this.$backdrop[0].offsetWidth,this.$backdrop.addClass("in"),!e)return;s?this.$backdrop.one("bsTransitionEnd",e).emulateTransitionEnd(i.BACKDROP_TRANSITION_DURATION):e()}else if(!this.isShown&&this.$backdrop){this.$backdrop.removeClass("in");var a=function(){o.removeBackdrop(),e&&e()};t.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one("bsTransitionEnd",a).emulateTransitionEnd(i.BACKDROP_TRANSITION_DURATION):a()}else e&&e()},i.prototype.handleUpdate=function(){this.adjustDialog()},i.prototype.adjustDialog=function(){var t=this.$element[0].scrollHeight>document.documentElement.clientHeight;this.$element.css({paddingLeft:!this.bodyIsOverflowing&&t?this.scrollbarWidth:"",paddingRight:this.bodyIsOverflowing&&!t?this.scrollbarWidth:""})},i.prototype.resetAdjustments=function(){this.$element.css({paddingLeft:"",paddingRight:""})},i.prototype.checkScrollbar=function(){var t=window.innerWidth;if(!t){var e=document.documentElement.getBoundingClientRect();t=e.right-Math.abs(e.left)}this.bodyIsOverflowing=document.body.clientWidth<t,this.scrollbarWidth=this.measureScrollbar()},i.prototype.setScrollbar=function(){var t=parseInt(this.$body.css("padding-right")||0,10);this.originalBodyPad=document.body.style.paddingRight||"",this.bodyIsOverflowing&&this.$body.css("padding-right",t+this.scrollbarWidth)},i.prototype.resetScrollbar=function(){this.$body.css("padding-right",this.originalBodyPad)},i.prototype.measureScrollbar=function(){var t=document.createElement("div");t.className="modal-scrollbar-measure",this.$body.append(t);var e=t.offsetWidth-t.clientWidth;return this.$body[0].removeChild(t),e};var o=t.fn.modal;t.fn.modal=e,t.fn.modal.Constructor=i,t.fn.modal.noConflict=function(){return t.fn.modal=o,this},t(document).on("click.bs.modal.data-api",'[data-toggle="modal"]',function(i){var o=t(this),n=o.attr("href"),s=t(o.attr("data-target")||n&&n.replace(/.*(?=#[^\s]+$)/,"")),a=s.data("bs.modal")?"toggle":t.extend({remote:!/#/.test(n)&&n},s.data(),o.data());o.is("a")&&i.preventDefault(),s.one("show.bs.modal",function(t){t.isDefaultPrevented()||s.one("hidden.bs.modal",function(){o.is(":visible")&&o.trigger("focus")})}),e.call(s,a,this)})}(jQuery),+function(t){"use strict";function e(e){return this.each(function(){var o=t(this),n=o.data("bs.tooltip"),s="object"==typeof e&&e;(n||!/destroy|hide/.test(e))&&(n||o.data("bs.tooltip",n=new i(this,s)),"string"==typeof e&&n[e]())})}var i=function(t,e){this.type=null,this.options=null,this.enabled=null,this.timeout=null,this.hoverState=null,this.$element=null,this.init("tooltip",t,e)};i.VERSION="3.3.4",i.TRANSITION_DURATION=150,i.DEFAULTS={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,container:!1,viewport:{selector:"body",padding:0}},i.prototype.init=function(e,i,o){if(this.enabled=!0,this.type=e,this.$element=t(i),this.options=this.getOptions(o),this.$viewport=this.options.viewport&&t(this.options.viewport.selector||this.options.viewport),this.$element[0]instanceof document.constructor&&!this.options.selector)throw new Error("`selector` option must be specified when initializing "+this.type+" on the window.document object!");for(var n=this.options.trigger.split(" "),s=n.length;s--;){var a=n[s];if("click"==a)this.$element.on("click."+this.type,this.options.selector,t.proxy(this.toggle,this));else if("manual"!=a){var r="hover"==a?"mouseenter":"focusin",l="hover"==a?"mouseleave":"focusout";this.$element.on(r+"."+this.type,this.options.selector,t.proxy(this.enter,this)),this.$element.on(l+"."+this.type,this.options.selector,t.proxy(this.leave,this))}}this.options.selector?this._options=t.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},i.prototype.getDefaults=function(){return i.DEFAULTS},i.prototype.getOptions=function(e){return e=t.extend({},this.getDefaults(),this.$element.data(),e),e.delay&&"number"==typeof e.delay&&(e.delay={show:e.delay,hide:e.delay}),e},i.prototype.getDelegateOptions=function(){var e={},i=this.getDefaults();return this._options&&t.each(this._options,function(t,o){i[t]!=o&&(e[t]=o)}),e},i.prototype.enter=function(e){var i=e instanceof this.constructor?e:t(e.currentTarget).data("bs."+this.type);return i&&i.$tip&&i.$tip.is(":visible")?void(i.hoverState="in"):(i||(i=new this.constructor(e.currentTarget,this.getDelegateOptions()),t(e.currentTarget).data("bs."+this.type,i)),clearTimeout(i.timeout),i.hoverState="in",i.options.delay&&i.options.delay.show?void(i.timeout=setTimeout(function(){"in"==i.hoverState&&i.show()},i.options.delay.show)):i.show())},i.prototype.leave=function(e){var i=e instanceof this.constructor?e:t(e.currentTarget).data("bs."+this.type);return i||(i=new this.constructor(e.currentTarget,this.getDelegateOptions()),t(e.currentTarget).data("bs."+this.type,i)),clearTimeout(i.timeout),i.hoverState="out",i.options.delay&&i.options.delay.hide?void(i.timeout=setTimeout(function(){"out"==i.hoverState&&i.hide()},i.options.delay.hide)):i.hide()},i.prototype.show=function(){var e=t.Event("show.bs."+this.type);if(this.hasContent()&&this.enabled){this.$element.trigger(e);var o=t.contains(this.$element[0].ownerDocument.documentElement,this.$element[0]);if(e.isDefaultPrevented()||!o)return;var n=this,s=this.tip(),a=this.getUID(this.type);this.setContent(),s.attr("id",a),this.$element.attr("aria-describedby",a),this.options.animation&&s.addClass("fade");var r="function"==typeof this.options.placement?this.options.placement.call(this,s[0],this.$element[0]):this.options.placement,l=/\s?auto?\s?/i,d=l.test(r);d&&(r=r.replace(l,"")||"top"),s.detach().css({top:0,left:0,display:"block"}).addClass(r).data("bs."+this.type,this),this.options.container?s.appendTo(this.options.container):s.insertAfter(this.$element);var h=this.getPosition(),p=s[0].offsetWidth,c=s[0].offsetHeight;if(d){var f=r,u=this.options.container?t(this.options.container):this.$element.parent(),g=this.getPosition(u);r="bottom"==r&&h.bottom+c>g.bottom?"top":"top"==r&&h.top-c<g.top?"bottom":"right"==r&&h.right+p>g.width?"left":"left"==r&&h.left-p<g.left?"right":r,s.removeClass(f).addClass(r)}var m=this.getCalculatedOffset(r,h,p,c);this.applyPlacement(m,r);var v=function(){var t=n.hoverState;n.$element.trigger("shown.bs."+n.type),n.hoverState=null,"out"==t&&n.leave(n)};t.support.transition&&this.$tip.hasClass("fade")?s.one("bsTransitionEnd",v).emulateTransitionEnd(i.TRANSITION_DURATION):v()}},i.prototype.applyPlacement=function(e,i){var o=this.tip(),n=o[0].offsetWidth,s=o[0].offsetHeight,a=parseInt(o.css("margin-top"),10),r=parseInt(o.css("margin-left"),10);isNaN(a)&&(a=0),isNaN(r)&&(r=0),e.top=e.top+a,e.left=e.left+r,t.offset.setOffset(o[0],t.extend({using:function(t){o.css({top:Math.round(t.top),left:Math.round(t.left)})}},e),0),o.addClass("in");var l=o[0].offsetWidth,d=o[0].offsetHeight;"top"==i&&d!=s&&(e.top=e.top+s-d);var h=this.getViewportAdjustedDelta(i,e,l,d);h.left?e.left+=h.left:e.top+=h.top;var p=/top|bottom/.test(i),c=p?2*h.left-n+l:2*h.top-s+d,f=p?"offsetWidth":"offsetHeight";o.offset(e),this.replaceArrow(c,o[0][f],p)},i.prototype.replaceArrow=function(t,e,i){this.arrow().css(i?"left":"top",50*(1-t/e)+"%").css(i?"top":"left","")},i.prototype.setContent=function(){var t=this.tip(),e=this.getTitle();t.find(".tooltip-inner")[this.options.html?"html":"text"](e),t.removeClass("fade in top bottom left right")},i.prototype.hide=function(e){function o(){"in"!=n.hoverState&&s.detach(),n.$element.removeAttr("aria-describedby").trigger("hidden.bs."+n.type),e&&e()}var n=this,s=t(this.$tip),a=t.Event("hide.bs."+this.type);return this.$element.trigger(a),a.isDefaultPrevented()?void 0:(s.removeClass("in"),t.support.transition&&s.hasClass("fade")?s.one("bsTransitionEnd",o).emulateTransitionEnd(i.TRANSITION_DURATION):o(),this.hoverState=null,this)},i.prototype.fixTitle=function(){var t=this.$element;(t.attr("title")||"string"!=typeof t.attr("data-original-title"))&&t.attr("data-original-title",t.attr("title")||"").attr("title","")},i.prototype.hasContent=function(){return this.getTitle()},i.prototype.getPosition=function(e){e=e||this.$element;var i=e[0],o="BODY"==i.tagName,n=i.getBoundingClientRect();null==n.width&&(n=t.extend({},n,{width:n.right-n.left,height:n.bottom-n.top}));var s=o?{top:0,left:0}:e.offset(),a={scroll:o?document.documentElement.scrollTop||document.body.scrollTop:e.scrollTop()},r=o?{width:t(window).width(),height:t(window).height()}:null;return t.extend({},n,a,r,s)},i.prototype.getCalculatedOffset=function(t,e,i,o){return"bottom"==t?{top:e.top+e.height,left:e.left+e.width/2-i/2}:"top"==t?{top:e.top-o,left:e.left+e.width/2-i/2}:"left"==t?{top:e.top+e.height/2-o/2,left:e.left-i}:{top:e.top+e.height/2-o/2,left:e.left+e.width}},i.prototype.getViewportAdjustedDelta=function(t,e,i,o){var n={top:0,left:0};if(!this.$viewport)return n;var s=this.options.viewport&&this.options.viewport.padding||0,a=this.getPosition(this.$viewport);if(/right|left/.test(t)){var r=e.top-s-a.scroll,l=e.top+s-a.scroll+o;r<a.top?n.top=a.top-r:l>a.top+a.height&&(n.top=a.top+a.height-l)}else{var d=e.left-s,h=e.left+s+i;d<a.left?n.left=a.left-d:h>a.width&&(n.left=a.left+a.width-h)}return n},i.prototype.getTitle=function(){var t,e=this.$element,i=this.options;return t=e.attr("data-original-title")||("function"==typeof i.title?i.title.call(e[0]):i.title)},i.prototype.getUID=function(t){do t+=~~(1e6*Math.random());while(document.getElementById(t));return t},i.prototype.tip=function(){return this.$tip=this.$tip||t(this.options.template)},i.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")},i.prototype.enable=function(){this.enabled=!0},i.prototype.disable=function(){this.enabled=!1},i.prototype.toggleEnabled=function(){this.enabled=!this.enabled},i.prototype.toggle=function(e){var i=this;e&&(i=t(e.currentTarget).data("bs."+this.type),i||(i=new this.constructor(e.currentTarget,this.getDelegateOptions()),t(e.currentTarget).data("bs."+this.type,i))),i.tip().hasClass("in")?i.leave(i):i.enter(i)},i.prototype.destroy=function(){var t=this;clearTimeout(this.timeout),this.hide(function(){t.$element.off("."+t.type).removeData("bs."+t.type)})};var o=t.fn.tooltip;t.fn.tooltip=e,t.fn.tooltip.Constructor=i,t.fn.tooltip.noConflict=function(){return t.fn.tooltip=o,this}}(jQuery),+function(t){"use strict";function e(e){return this.each(function(){var o=t(this),n=o.data("bs.tab");n||o.data("bs.tab",n=new i(this)),"string"==typeof e&&n[e]()})}var i=function(e){this.element=t(e)};i.VERSION="3.3.4",i.TRANSITION_DURATION=150,i.prototype.show=function(){var e=this.element,i=e.closest("ul:not(.dropdown-menu)"),o=e.data("target");if(o||(o=e.attr("href"),o=o&&o.replace(/.*(?=#[^\s]*$)/,"")),!e.parent("li").hasClass("active")){var n=i.find(".active:last a"),s=t.Event("hide.bs.tab",{relatedTarget:e[0]}),a=t.Event("show.bs.tab",{relatedTarget:n[0]});if(n.trigger(s),e.trigger(a),!a.isDefaultPrevented()&&!s.isDefaultPrevented()){var r=t(o);this.activate(e.closest("li"),i),this.activate(r,r.parent(),function(){n.trigger({type:"hidden.bs.tab",relatedTarget:e[0]}),e.trigger({type:"shown.bs.tab",relatedTarget:n[0]})})}}},i.prototype.activate=function(e,o,n){function s(){a.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!1),e.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded",!0),r?(e[0].offsetWidth,e.addClass("in")):e.removeClass("fade"),e.parent(".dropdown-menu").length&&e.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!0),n&&n()}var a=o.find("> .active"),r=n&&t.support.transition&&(a.length&&a.hasClass("fade")||!!o.find("> .fade").length);a.length&&r?a.one("bsTransitionEnd",s).emulateTransitionEnd(i.TRANSITION_DURATION):s(),a.removeClass("in")};var o=t.fn.tab;t.fn.tab=e,t.fn.tab.Constructor=i,t.fn.tab.noConflict=function(){return t.fn.tab=o,this};var n=function(i){i.preventDefault(),e.call(t(this),"show")};t(document).on("click.bs.tab.data-api",'[data-toggle="tab"]',n).on("click.bs.tab.data-api",'[data-toggle="pill"]',n)}(jQuery),+function(t){"use strict";function e(e){var i,o=e.attr("data-target")||(i=e.attr("href"))&&i.replace(/.*(?=#[^\s]+$)/,"");return t(o)}function i(e){return this.each(function(){var i=t(this),n=i.data("bs.collapse"),s=t.extend({},o.DEFAULTS,i.data(),"object"==typeof e&&e);!n&&s.toggle&&/show|hide/.test(e)&&(s.toggle=!1),n||i.data("bs.collapse",n=new o(this,s)),"string"==typeof e&&n[e]()})}var o=function(e,i){this.$element=t(e),this.options=t.extend({},o.DEFAULTS,i),this.$trigger=t('[data-toggle="collapse"][href="#'+e.id+'"],[data-toggle="collapse"][data-target="#'+e.id+'"]'),this.transitioning=null,this.options.parent?this.$parent=this.getParent():this.addAriaAndCollapsedClass(this.$element,this.$trigger),this.options.toggle&&this.toggle()};o.VERSION="3.3.4",o.TRANSITION_DURATION=350,o.DEFAULTS={toggle:!0},o.prototype.dimension=function(){var t=this.$element.hasClass("width");return t?"width":"height"},o.prototype.show=function(){if(!this.transitioning&&!this.$element.hasClass("in")){var e,n=this.$parent&&this.$parent.find(".tile-collapse").children(".in, .collapsing");if(!(n&&n.length&&(e=n.data("bs.collapse"),e&&e.transitioning))){var s=t.Event("show.bs.collapse");if(this.$element.trigger(s),!s.isDefaultPrevented()){n&&n.length&&(i.call(n,"hide"),e||n.data("bs.collapse",null));var a=this.dimension();this.$element.removeClass("collapse").addClass("collapsing")[a](0).attr("aria-expanded",!0),this.$trigger.removeClass("collapsed").attr("aria-expanded",!0),this.transitioning=1;var r=function(){this.$element.removeClass("collapsing").addClass("collapse in")[a](""),this.transitioning=0,this.$element.trigger("shown.bs.collapse")};if(!t.support.transition)return r.call(this);var l=t.camelCase(["scroll",a].join("-"));this.$element.one("bsTransitionEnd",t.proxy(r,this)).emulateTransitionEnd(o.TRANSITION_DURATION)[a](this.$element[0][l])}}}},o.prototype.hide=function(){if(!this.transitioning&&this.$element.hasClass("in")){var e=t.Event("hide.bs.collapse");if(this.$element.trigger(e),!e.isDefaultPrevented()){var i=this.dimension();this.$element[i](this.$element[i]())[0].offsetHeight,this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded",!1),this.$trigger.addClass("collapsed").attr("aria-expanded",!1),this.transitioning=1;var n=function(){this.transitioning=0,this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")};return t.support.transition?void this.$element[i](0).one("bsTransitionEnd",t.proxy(n,this)).emulateTransitionEnd(o.TRANSITION_DURATION):n.call(this)}}},o.prototype.toggle=function(){this[this.$element.hasClass("in")?"hide":"show"]()},o.prototype.getParent=function(){return t(this.options.parent).find('[data-toggle="collapse"][data-parent="'+this.options.parent+'"]').each(t.proxy(function(i,o){var n=t(o);this.addAriaAndCollapsedClass(e(n),n)},this)).end()},o.prototype.addAriaAndCollapsedClass=function(t,e){var i=t.hasClass("in");t.attr("aria-expanded",i),e.toggleClass("collapsed",!i).attr("aria-expanded",i)};var n=t.fn.collapse;t.fn.collapse=i,t.fn.collapse.Constructor=o,t.fn.collapse.noConflict=function(){return t.fn.collapse=n,this},t(document).on("click.bs.collapse.data-api",'[data-toggle="collapse"]',function(o){var n=t(this);n.attr("data-target")||o.preventDefault();var s=e(n),a=s.data("bs.collapse"),r=a?"toggle":n.data();i.call(s,r)})}(jQuery),+function(t){"use strict";function e(){var t=document.createElement("bootstrap"),e={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var i in e)if(void 0!==t.style[i])return{end:e[i]};return!1}t.fn.emulateTransitionEnd=function(e){var i=!1,o=this;t(this).one("bsTransitionEnd",function(){i=!0});var n=function(){i||t(o).trigger(t.support.transition.end)};return setTimeout(n,e),this},t(function(){t.support.transition=e(),t.support.transition&&(t.event.special.bsTransitionEnd={bindType:t.support.transition.end,delegateType:t.support.transition.end,handle:function(e){return t(e.target).is(this)?e.handleObj.handler.apply(this,arguments):void 0}})})}(jQuery);
// fixed left/right hand side column affix
	var contentPadding = 0,
	    footerOffset = 0;

	if ($('.content').length) {
		contentPadding = parseInt($('.content').css('padding-bottom').replace('px', ''));
	};

	$(window).on('scroll', function() {
		$('.content-fix').each(function(index) {
			if ($(this).outerHeight() < $(this).closest('.row-fix').outerHeight()) {
				contentFix($(this));
			}
		});
	});

	contentFix = function (content) {
		var scrolled = window.innerHeight + window.pageYOffset;

		if (window.pageYOffset >= (content.offset().top - headerHeight)) {
			if ((content.is('[class*="col-xx"]')) || (content.is('[class*="col-xs"]') && $(window).width() >= 480) || (content.is('[class*="col-sm"]') && $(window).width() >= 768) || (content.is('[class*="col-md"]') && $(window).width() >= 992) || (content.is('[class*="col-lg"]') && $(window).width() >= 1440)) {
				if (!content.hasClass('fixed')) {
					content.addClass('fixed');
					$('.content-fix-wrap', content).scrollTop(0);
				};
				if (footerOffset != 0 && footerOffset <= scrolled) {
					$('.content-fix-inner', content).css('padding-bottom', (scrolled - footerOffset + contentPadding));
				};
			};
		} else {
			content.removeClass('fixed');
			$('.content-fix-inner', content).css('padding-bottom', '');
		}
	}

// fixed left/right hand side column padding bottom and width
	contentFixPushCal = function () {
		$('.content-fix-scroll').each(function(index) {
			$(this).css('width', $(this).closest('.content-fix').outerWidth());
			$('.content-fix-inner', $(this)).css('width', $(this).closest('.content-fix').width());
		});

		if ($('.footer').length) {
			footerOffset = $('.footer').offset().top;
		};
	}
// pickadate v3.5.5
// Amsul: http://amsul.ca
!function(a){"function"==typeof define&&define.amd?define("picker",["jquery"],a):"object"==typeof exports?module.exports=a(require("jquery")):this.Picker=a(jQuery)}(function(a){function f(b,d,e,i){function r(){return f._.node("div",f._.node("div",f._.node("div",f._.node("div",q.component.nodes(l.open),n.box),n.wrap),n.frame),n.holder,'tabindex="-1"')}function s(){o.data(d,q).addClass(n.input).val(o.data("value")?q.get("select",m.format):b.value),m.editable||o.on("focus."+l.id+" click."+l.id,function(a){a.preventDefault(),q.open()}).on("keydown."+l.id,x),h(b,{haspopup:!0,expanded:!1,readonly:!1,owns:b.id+"_root"})}function t(){h(q.$root[0],"hidden",!0)}function u(){q.$holder.on({keydown:x,"focus.toOpen":w,blur:function(){o.removeClass(n.target)},focusin:function(a){q.$root.removeClass(n.focused),a.stopPropagation()},"mousedown click":function(b){var c=b.target;c!=q.$holder[0]&&(b.stopPropagation(),"mousedown"!=b.type||a(c).is("input, select, textarea, button, option")||(b.preventDefault(),q.$holder[0].focus()))}}).on("click","[data-pick], [data-nav], [data-clear], [data-close]",function(){var b=a(this),c=b.data(),d=b.hasClass(n.navDisabled)||b.hasClass(n.disabled),e=k();e=e&&(e.type||e.href),(d||e&&!a.contains(q.$root[0],e))&&q.$holder[0].focus(),!d&&c.nav?q.set("highlight",q.component.item.highlight,{nav:c.nav}):!d&&"pick"in c?(q.set("select",c.pick),m.closeOnSelect&&q.close(!0)):c.clear?(q.clear(),m.closeOnClear&&q.close(!0)):c.close&&q.close(!0)})}function v(){var c;m.hiddenName===!0?(c=b.name,b.name=""):(c=["string"==typeof m.hiddenPrefix?m.hiddenPrefix:"","string"==typeof m.hiddenSuffix?m.hiddenSuffix:"_submit"],c=c[0]+b.name+c[1]),q._hidden=a('<input type=hidden name="'+c+'"'+(o.data("value")||b.value?' value="'+q.get("select",m.formatSubmit)+'"':"")+">")[0],o.on("change."+l.id,function(){q._hidden.value=b.value?q.get("select",m.formatSubmit):""})}function w(a){a.stopPropagation(),o.addClass(n.target),q.$root.addClass(n.focused),q.open()}function x(a){var b=a.keyCode,c=/^(8|46)$/.test(b);return 27==b?(q.close(!0),!1):((32==b||c||!l.open&&q.component.key[b])&&(a.preventDefault(),a.stopPropagation(),c?q.clear().close():q.open()),void 0)}if(!b)return f;var j=!1,l={id:b.id||"P"+Math.abs(~~(Math.random()*new Date))},m=e?a.extend(!0,{},e.defaults,i):i||{},n=a.extend({},f.klasses(),m.klass),o=a(b),p=function(){return this.start()},q=p.prototype={constructor:p,$node:o,start:function(){return l&&l.start?q:(l.methods={},l.start=!0,l.open=!1,l.type=b.type,b.autofocus=b==k(),b.readOnly=!m.editable,b.id=b.id||l.id,"text"!=b.type&&(b.type="text"),q.component=new e(q,m),q.$root=a('<div class="'+n.picker+'" id="'+b.id+'_root" />'),t(),q.$holder=a(r()).appendTo(q.$root),u(),m.formatSubmit&&v(),s(),m.containerHidden?a(m.containerHidden).append(q._hidden):o.after(q._hidden),m.container?a(m.container).append(q.$root):o.after(q.$root),q.on({start:q.component.onStart,render:q.component.onRender,stop:q.component.onStop,open:q.component.onOpen,close:q.component.onClose,set:q.component.onSet}).on({start:m.onStart,render:m.onRender,stop:m.onStop,open:m.onOpen,close:m.onClose,set:m.onSet}),j=g(q.$holder[0]),b.autofocus&&q.open(),q.trigger("start").trigger("render"))},render:function(a){return a?(q.$holder=r(),q.$root.html(q.$holder)):q.$root.find("."+n.box).html(q.component.nodes(l.open)),q.trigger("render")},stop:function(){return l.start?(q.close(),q._hidden&&q._hidden.parentNode.removeChild(q._hidden),q.$root.remove(),o.removeClass(n.input).removeData(d),setTimeout(function(){o.off("."+l.id)},0),b.type=l.type,b.readOnly=!1,q.trigger("stop"),l.methods={},l.start=!1,q):q},open:function(d){return l.open?q:(o.addClass(n.active),h(b,"expanded",!0),setTimeout(function(){q.$root.addClass(n.opened),h(q.$root[0],"hidden",!1)},0),d!==!1&&(l.open=!0,q.$holder[0].focus(),c.on("click."+l.id+" focusin."+l.id,function(a){var c=a.target;c!=b&&c!=document&&3!=a.which&&q.close(c===q.$holder[0])}).on("keydown."+l.id,function(b){var c=b.keyCode,d=q.component.key[c],e=b.target;27==c?q.close(!0):e!=q.$holder[0]||!d&&13!=c?a.contains(q.$root[0],e)&&13==c&&(b.preventDefault(),e.click()):(b.preventDefault(),d?f._.trigger(q.component.key.go,q,[f._.trigger(d)]):q.$root.find("."+n.highlighted).hasClass(n.disabled)||(q.set("select",q.component.item.highlight),m.closeOnSelect&&q.close(!0)))})),q.trigger("open"))},close:function(a){return a&&(m.editable?b.focus():(q.$holder.off("focus.toOpen").focus(),setTimeout(function(){q.$holder.on("focus.toOpen",w)},0))),o.removeClass(n.active),h(b,"expanded",!1),setTimeout(function(){q.$root.removeClass(n.opened+" "+n.focused),h(q.$root[0],"hidden",!0)},0),l.open?(l.open=!1,c.off("."+l.id),q.trigger("close")):q},clear:function(a){return q.set("clear",null,a)},set:function(b,c,d){var e,f,g=a.isPlainObject(b),h=g?b:{};if(d=g&&a.isPlainObject(c)?c:d||{},b){g||(h[b]=c);for(e in h)f=h[e],e in q.component.item&&(void 0===f&&(f=null),q.component.set(e,f,d)),("select"==e||"clear"==e)&&o.val("clear"==e?"":q.get(e,m.format)).trigger("change");q.render()}return d.muted?q:q.trigger("set",h)},get:function(a,c){if(a=a||"value",null!=l[a])return l[a];if("valueSubmit"==a){if(q._hidden)return q._hidden.value;a="value"}if("value"==a)return b.value;if(a in q.component.item){if("string"==typeof c){var d=q.component.get(a);return d?f._.trigger(q.component.formats.toString,q.component,[c,d]):""}return q.component.get(a)}},on:function(b,c,d){var e,f,g=a.isPlainObject(b),h=g?b:{};if(b){g||(h[b]=c);for(e in h)f=h[e],d&&(e="_"+e),l.methods[e]=l.methods[e]||[],l.methods[e].push(f)}return q},off:function(){var a,b,c=arguments;for(a=0,namesCount=c.length;namesCount>a;a+=1)b=c[a],b in l.methods&&delete l.methods[b];return q},trigger:function(a,b){var c=function(a){var c=l.methods[a];c&&c.map(function(a){f._.trigger(a,q,[b])})};return c("_"+a),c(a),q}};return new p}function g(a){var b,c="position";return a.currentStyle?b=a.currentStyle[c]:window.getComputedStyle&&(b=getComputedStyle(a)[c]),"fixed"==b}function h(b,c,d){if(a.isPlainObject(c))for(var e in c)i(b,e,c[e]);else i(b,c,d)}function i(a,b,c){a.setAttribute(("role"==b?"":"aria-")+b,c)}function j(b,c){a.isPlainObject(b)||(b={attribute:c}),c="";for(var d in b){var e=("role"==d?"":"aria-")+d,f=b[d];c+=null==f?"":e+'="'+b[d]+'"'}return c}function k(){try{return document.activeElement}catch(a){}}a(window);var c=a(document);return a(document.documentElement),null!=document.body.style.transition,f.klasses=function(a){return a=a||"picker",{picker:a,opened:a+"--opened",focused:a+"--focused",input:a+"__input",active:a+"__input--active",target:a+"__input--target",holder:a+"__holder",frame:a+"__frame",wrap:a+"__wrap",box:a+"__box"}},f._={group:function(a){for(var b,c="",d=f._.trigger(a.min,a);d<=f._.trigger(a.max,a,[d]);d+=a.i)b=f._.trigger(a.item,a,[d]),c+=f._.node(a.node,b[0],b[1],b[2]);return c},node:function(b,c,d,e){return c?(c=a.isArray(c)?c.join(""):c,d=d?' class="'+d+'"':"",e=e?" "+e:"","<"+b+d+e+">"+c+"</"+b+">"):""},lead:function(a){return(10>a?"0":"")+a},trigger:function(a,b,c){return"function"==typeof a?a.apply(b,c||[]):a},digits:function(a){return/\d/.test(a[1])?2:1},isDate:function(a){return{}.toString.call(a).indexOf("Date")>-1&&this.isInteger(a.getDate())},isInteger:function(a){return{}.toString.call(a).indexOf("Number")>-1&&0===a%1},ariaAttr:j},f.extend=function(b,c){a.fn[b]=function(d,e){var g=this.data(b);return"picker"==d?g:g&&"string"==typeof d?f._.trigger(g[d],g,[e]):this.each(function(){var e=a(this);e.data(b)||new f(this,b,c,d)})},a.fn[b].defaults=c.defaults},f});
!function(a){"function"==typeof define&&define.amd?define(["picker","jquery"],a):"object"==typeof exports?module.exports=a(require("./picker.js"),require("jquery")):a(Picker,jQuery)}(function(a,b){function f(a,b){var c=this,d=a.$node[0],e=d.value,f=a.$node.data("value"),g=f?b.formatSubmit:b.format,h=f||e,i=function(){return d.currentStyle?"rtl"==d.currentStyle.direction:"rtl"==getComputedStyle(a.$root[0]).direction};c.settings=b,c.$node=a.$node,c.queue={min:"measure create",max:"measure create",now:"now create",select:"parse create validate",highlight:"parse navigate create validate",view:"parse create validate viewset",disable:"deactivate",enable:"activate"},c.item={},c.item.clear=null,c.item.disable=(b.disable||[]).slice(0),c.item.enable=-function(a){return a[0]===!0?a.shift():-1}(c.item.disable),c.set("min",b.min).set("max",b.max).set("now"),h?c.set("select",h,{format:g,defaultValue:!0}):c.set("select",null).set("highlight",c.item.now),c.key={40:7,38:-7,39:function(){return i()?-1:1},37:function(){return i()?1:-1},go:function(a){var b=c.item.highlight,d=new Date(b.year,b.month,b.date+a);c.set("highlight",d,{interval:a}),this.render()}},a.on("render",function(){a.$root.find("."+b.klass.selectMonth).on("change",function(){var c=this.value;c&&(a.set("highlight",[a.get("view").year,c,a.get("highlight").date]),a.$root.find("."+b.klass.selectMonth).trigger("focus"))}),a.$root.find("."+b.klass.selectYear).on("change",function(){var c=this.value;c&&(a.set("highlight",[c,a.get("view").month,a.get("highlight").date]),a.$root.find("."+b.klass.selectYear).trigger("focus"))})},1).on("open",function(){var d="";c.disabled(c.get("now"))&&(d=":not(."+b.klass.buttonToday+")"),a.$root.find("button"+d+", select").attr("disabled",!1)},1).on("close",function(){a.$root.find("button, select").attr("disabled",!0)},1)}var c=7,d=6,e=a._;f.prototype.set=function(a,b,c){var d=this,e=d.item;return null===b?("clear"==a&&(a="select"),e[a]=b,d):(e["enable"==a?"disable":"flip"==a?"enable":a]=d.queue[a].split(" ").map(function(e){return b=d[e](a,b,c)}).pop(),"select"==a?d.set("highlight",e.select,c):"highlight"==a?d.set("view",e.highlight,c):a.match(/^(flip|min|max|disable|enable)$/)&&(e.select&&d.disabled(e.select)&&d.set("select",e.select,c),e.highlight&&d.disabled(e.highlight)&&d.set("highlight",e.highlight,c)),d)},f.prototype.get=function(a){return this.item[a]},f.prototype.create=function(a,c,d){var f,g=this;return c=void 0===c?a:c,c==-1/0||1/0==c?f=c:b.isPlainObject(c)&&e.isInteger(c.pick)?c=c.obj:b.isArray(c)?(c=new Date(c[0],c[1],c[2]),c=e.isDate(c)?c:g.create().obj):c=e.isInteger(c)||e.isDate(c)?g.normalize(new Date(c),d):g.now(a,c,d),{year:f||c.getFullYear(),month:f||c.getMonth(),date:f||c.getDate(),day:f||c.getDay(),obj:f||c,pick:f||c.getTime()}},f.prototype.createRange=function(a,c){var d=this,f=function(a){return a===!0||b.isArray(a)||e.isDate(a)?d.create(a):a};return e.isInteger(a)||(a=f(a)),e.isInteger(c)||(c=f(c)),e.isInteger(a)&&b.isPlainObject(c)?a=[c.year,c.month,c.date+a]:e.isInteger(c)&&b.isPlainObject(a)&&(c=[a.year,a.month,a.date+c]),{from:f(a),to:f(c)}},f.prototype.withinRange=function(a,b){return a=this.createRange(a.from,a.to),b.pick>=a.from.pick&&b.pick<=a.to.pick},f.prototype.overlapRanges=function(a,b){var c=this;return a=c.createRange(a.from,a.to),b=c.createRange(b.from,b.to),c.withinRange(a,b.from)||c.withinRange(a,b.to)||c.withinRange(b,a.from)||c.withinRange(b,a.to)},f.prototype.now=function(a,b,c){return b=new Date,c&&c.rel&&b.setDate(b.getDate()+c.rel),this.normalize(b,c)},f.prototype.navigate=function(a,c,d){var e,f,g,h,i=b.isArray(c),j=b.isPlainObject(c),k=this.item.view;if(i||j){for(j?(f=c.year,g=c.month,h=c.date):(f=+c[0],g=+c[1],h=+c[2]),d&&d.nav&&k&&k.month!==g&&(f=k.year,g=k.month),e=new Date(f,g+(d&&d.nav?d.nav:0),1),f=e.getFullYear(),g=e.getMonth();new Date(f,g,h).getMonth()!==g;)h-=1;c=[f,g,h]}return c},f.prototype.normalize=function(a){return a.setHours(0,0,0,0),a},f.prototype.measure=function(a,b){var c=this;return b?"string"==typeof b?b=c.parse(a,b):e.isInteger(b)&&(b=c.now(a,b,{rel:b})):b="min"==a?-1/0:1/0,b},f.prototype.viewset=function(a,b){return this.create([b.year,b.month,1])},f.prototype.validate=function(a,c,d){var j,k,n,o,f=this,g=c,h=d&&d.interval?d.interval:1,i=-1===f.item.enable,l=f.item.min,m=f.item.max,p=i&&f.item.disable.filter(function(a){if(b.isArray(a)){var d=f.create(a).pick;d<c.pick?j=!0:d>c.pick&&(k=!0)}return e.isInteger(a)}).length;if((!d||!d.nav&&!d.defaultValue)&&(!i&&f.disabled(c)||i&&f.disabled(c)&&(p||j||k)||!i&&(c.pick<=l.pick||c.pick>=m.pick)))for(i&&!p&&(!k&&h>0||!j&&0>h)&&(h*=-1);f.disabled(c)&&(Math.abs(h)>1&&(c.month<g.month||c.month>g.month)&&(c=g,h=h>0?1:-1),c.pick<=l.pick?(n=!0,h=1,c=f.create([l.year,l.month,l.date+(c.pick===l.pick?0:-1)])):c.pick>=m.pick&&(o=!0,h=-1,c=f.create([m.year,m.month,m.date+(c.pick===m.pick?0:1)])),!n||!o);)c=f.create([c.year,c.month,c.date+h]);return c},f.prototype.disabled=function(a){var c=this,d=c.item.disable.filter(function(d){return e.isInteger(d)?a.day===(c.settings.firstDay?d:d-1)%7:b.isArray(d)||e.isDate(d)?a.pick===c.create(d).pick:b.isPlainObject(d)?c.withinRange(d,a):void 0});return d=d.length&&!d.filter(function(a){return b.isArray(a)&&"inverted"==a[3]||b.isPlainObject(a)&&a.inverted}).length,-1===c.item.enable?!d:d||a.pick<c.item.min.pick||a.pick>c.item.max.pick},f.prototype.parse=function(a,b,c){var d=this,f={};return b&&"string"==typeof b?(c&&c.format||(c=c||{},c.format=d.settings.format),d.formats.toArray(c.format).map(function(a){var c=d.formats[a],g=c?e.trigger(c,d,[b,f]):a.replace(/^!/,"").length;c&&(f[a]=b.substr(0,g)),b=b.substr(g)}),[f.yyyy||f.yy,+(f.mm||f.m)-1,f.dd||f.d]):b},f.prototype.formats=function(){function a(a,b,c){var d=a.match(/[^\x00-\x7F]+|\w+/)[0];return c.mm||c.m||(c.m=b.indexOf(d)+1),d.length}function b(a){return a.match(/\w+/)[0].length}return{d:function(a,b){return a?e.digits(a):b.date},dd:function(a,b){return a?2:e.lead(b.date)},ddd:function(a,c){return a?b(a):this.settings.weekdaysShort[c.day]},dddd:function(a,c){return a?b(a):this.settings.weekdaysFull[c.day]},m:function(a,b){return a?e.digits(a):b.month+1},mm:function(a,b){return a?2:e.lead(b.month+1)},mmm:function(b,c){var d=this.settings.monthsShort;return b?a(b,d,c):d[c.month]},mmmm:function(b,c){var d=this.settings.monthsFull;return b?a(b,d,c):d[c.month]},yy:function(a,b){return a?2:(""+b.year).slice(2)},yyyy:function(a,b){return a?4:b.year},toArray:function(a){return a.split(/(d{1,4}|m{1,4}|y{4}|yy|!.)/g)},toString:function(a,b){var c=this;return c.formats.toArray(a).map(function(a){return e.trigger(c.formats[a],c,[0,b])||a.replace(/^!/,"")}).join("")}}}(),f.prototype.isDateExact=function(a,c){var d=this;return e.isInteger(a)&&e.isInteger(c)||"boolean"==typeof a&&"boolean"==typeof c?a===c:(e.isDate(a)||b.isArray(a))&&(e.isDate(c)||b.isArray(c))?d.create(a).pick===d.create(c).pick:b.isPlainObject(a)&&b.isPlainObject(c)?d.isDateExact(a.from,c.from)&&d.isDateExact(a.to,c.to):!1},f.prototype.isDateOverlap=function(a,c){var d=this,f=d.settings.firstDay?1:0;return e.isInteger(a)&&(e.isDate(c)||b.isArray(c))?(a=a%7+f,a===d.create(c).day+1):e.isInteger(c)&&(e.isDate(a)||b.isArray(a))?(c=c%7+f,c===d.create(a).day+1):b.isPlainObject(a)&&b.isPlainObject(c)?d.overlapRanges(a,c):!1},f.prototype.flipEnable=function(a){var b=this.item;b.enable=a||(-1==b.enable?1:-1)},f.prototype.deactivate=function(a,c){var d=this,f=d.item.disable.slice(0);return"flip"==c?d.flipEnable():c===!1?(d.flipEnable(1),f=[]):c===!0?(d.flipEnable(-1),f=[]):c.map(function(a){for(var c,g=0;g<f.length;g+=1)if(d.isDateExact(a,f[g])){c=!0;break}c||(e.isInteger(a)||e.isDate(a)||b.isArray(a)||b.isPlainObject(a)&&a.from&&a.to)&&f.push(a)}),f},f.prototype.activate=function(a,c){var d=this,f=d.item.disable,g=f.length;return"flip"==c?d.flipEnable():c===!0?(d.flipEnable(1),f=[]):c===!1?(d.flipEnable(-1),f=[]):c.map(function(a){var c,h,i,j;for(i=0;g>i;i+=1){if(h=f[i],d.isDateExact(h,a)){c=f[i]=null,j=!0;break}if(d.isDateOverlap(h,a)){b.isPlainObject(a)?(a.inverted=!0,c=a):b.isArray(a)?(c=a,c[3]||c.push("inverted")):e.isDate(a)&&(c=[a.getFullYear(),a.getMonth(),a.getDate(),"inverted"]);break}}if(c)for(i=0;g>i;i+=1)if(d.isDateExact(f[i],a)){f[i]=null;break}if(j)for(i=0;g>i;i+=1)if(d.isDateOverlap(f[i],a)){f[i]=null;break}c&&f.push(c)}),f.filter(function(a){return null!=a})},f.prototype.nodes=function(a){var b=this,f=b.settings,g=b.item,h=g.now,i=g.select,j=g.highlight,k=g.view,l=g.disable,m=g.min,n=g.max,o=function(a,b){return f.firstDay&&(a.push(a.shift()),b.push(b.shift())),e.node("thead",e.node("tr",e.group({min:0,max:c-1,i:1,node:"th",item:function(c){return[a[c],f.klass.weekdays,'scope=col title="'+b[c]+'"']}})))}((f.showWeekdaysFull?f.weekdaysFull:f.weekdaysLetter).slice(0),f.weekdaysFull.slice(0)),p=function(a){return e.node("div"," ",f.klass["nav"+(a?"Next":"Prev")]+(a&&k.year>=n.year&&k.month>=n.month||!a&&k.year<=m.year&&k.month<=m.month?" "+f.klass.navDisabled:""),"data-nav="+(a||-1)+" "+e.ariaAttr({role:"button",controls:b.$node[0].id+"_table"})+" "+'title="'+(a?f.labelMonthNext:f.labelMonthPrev)+'"')},q=function(c){var d=f.showMonthsShort?f.monthsShort:f.monthsFull;return"short_months"==c&&(d=f.monthsShort),f.selectMonths&&void 0==c?e.node("select",e.group({min:0,max:11,i:1,node:"option",item:function(a){return[d[a],0,"value="+a+(k.month==a?" selected":"")+(k.year==m.year&&a<m.month||k.year==n.year&&a>n.month?" disabled":"")]}}),f.klass.selectMonth+" browser-default",(a?"":"disabled")+" "+e.ariaAttr({controls:b.$node[0].id+"_table"})+" "+'title="'+f.labelMonthSelect+'"'):"short_months"==c?null!=i?e.node("div",d[i.month]):e.node("div",d[k.month]):e.node("div",d[k.month],f.klass.month)},r=function(c){var d=k.year,g=f.selectYears===!0?5:~~(f.selectYears/2);if(g){var h=m.year,i=n.year,j=d-g,l=d+g;if(h>j&&(l+=h-j,j=h),l>i){var o=j-h,p=l-i;j-=o>p?p:o,l=i}if(f.selectYears&&void 0==c)return e.node("select",e.group({min:j,max:l,i:1,node:"option",item:function(a){return[a,0,"value="+a+(d==a?" selected":"")]}}),f.klass.selectYear+" browser-default",(a?"":"disabled")+" "+e.ariaAttr({controls:b.$node[0].id+"_table"})+" "+'title="'+f.labelYearSelect+'"')}return"raw"==c?e.node("div",d):e.node("div",d,f.klass.year)};return createDayLabel=function(){return null!=i?e.node("div",i.date):e.node("div",h.date)},createWeekdayLabel=function(){var a;a=null!=i?i.day:h.day;var b=f.weekdaysFull[a];return b},e.node("div",e.node("div",createWeekdayLabel(),"picker__weekday-display")+e.node("div",q("short_months"),f.klass.month_display)+e.node("div",createDayLabel(),f.klass.day_display)+e.node("div",r("raw"),f.klass.year_display),f.klass.date_display)+e.node("div",(f.selectYears?r()+q():q()+r())+p()+p(1),f.klass.header)+e.node("table",o+e.node("tbody",e.group({min:0,max:d-1,i:1,node:"tr",item:function(a){var d=f.firstDay&&0===b.create([k.year,k.month,1]).day?-7:0;return[e.group({min:c*a-k.day+d+1,max:function(){return this.min+c-1},i:1,node:"td",item:function(a){a=b.create([k.year,k.month,a+(f.firstDay?1:0)]);var c=i&&i.pick==a.pick,d=j&&j.pick==a.pick,g=l&&b.disabled(a)||a.pick<m.pick||a.pick>n.pick,o=e.trigger(b.formats.toString,b,[f.format,a]);return[e.node("div",a.date,function(b){return b.push(k.month==a.month?f.klass.infocus:f.klass.outfocus),h.pick==a.pick&&b.push(f.klass.now),c&&b.push(f.klass.selected),d&&b.push(f.klass.highlighted),g&&b.push(f.klass.disabled),b.join(" ")}([f.klass.day]),"data-pick="+a.pick+" "+e.ariaAttr({role:"gridcell",label:o,selected:c&&b.$node.val()===o?!0:null,activedescendant:d?!0:null,disabled:g?!0:null})),"",e.ariaAttr({role:"presentation"})]}})]}})),f.klass.table,'id="'+b.$node[0].id+"_table"+'" '+e.ariaAttr({role:"grid",controls:b.$node[0].id,readonly:!0}))+e.node("div",e.node("button",f.today,f.klass.buttonToday,"type=button data-pick="+h.pick+(a&&!b.disabled(h)?"":" disabled")+" "+e.ariaAttr({controls:b.$node[0].id}))+e.node("button",f.clear,f.klass.buttonClear,"type=button data-clear=1"+(a?"":" disabled")+" "+e.ariaAttr({controls:b.$node[0].id}))+e.node("button",f.close,f.klass.buttonClose,"type=button data-close=true "+(a?"":" disabled")+" "+e.ariaAttr({controls:b.$node[0].id})),f.klass.footer)},f.defaults=function(a){return{labelMonthNext:"Next month",labelMonthPrev:"Previous month",labelMonthSelect:"Select a month",labelYearSelect:"Select a year",monthsFull:["January","February","March","April","May","June","July","August","September","October","November","December"],monthsShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],weekdaysFull:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],weekdaysShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],weekdaysLetter:["S","M","T","W","T","F","S"],today:"Today",clear:"Cancel",close:"OK",closeOnClear:!0,format:"d/m/yyyy",klass:{table:a+"table",header:a+"header",date_display:a+"date-display",day_display:a+"day-display",month_display:a+"month-display",year_display:a+"year-display",calendar_container:a+"calendar-container",navPrev:a+"nav--prev icon icon-keyboard-arrow-left",navNext:a+"nav--next icon icon-keyboard-arrow-right",navDisabled:a+"nav--disabled",month:a+"month",year:a+"year",selectMonth:a+"select--month",selectYear:a+"select--year",weekdays:a+"weekday",day:a+"day",disabled:a+"day--disabled",selected:a+"day--selected",highlighted:a+"day--highlighted",now:a+"day--today",infocus:a+"day--infocus",outfocus:a+"day--outfocus",footer:a+"footer",buttonClear:a+"button--clear btn btn-flat btn-alt",buttonToday:a+"button--today btn btn-flat btn-alt",buttonClose:a+"button--close btn btn-flat btn-alt"}}}(a.klasses().picker+"__"),a.extend("pickadate",f)});

// default datepicker
	$('.datepicker-adv-default').each(function(index) {
		var datepickerAdv = $(this).pickadate({container: 'body'}),
		    datepickerApi = datepickerAdv.pickadate('picker');

		datepickerApi.on({
			close: function() {
				$(document.activeElement).blur();
			},
			open: function() {
				datepickerApi.set('select', datepickerApi.get(), {format: 'd/m/yyyy'});
			}
		});
	});
// dropdown menu show
	$(document).on('show.bs.dropdown', '.dropdown', function() {
		var $dropdownMenu = $('.dropdown-menu', $(this)),
		    $dropdownToggle = $('[class*="dropdown-toggle"]', $(this)),
		    dropdownPadding = $('a', $dropdownMenu).css('padding-left').replace('px', ''),
		    dropdownWidth;

		if ($dropdownMenu.length && $dropdownToggle.length) {
			// dropdown menu max width
				if ($dropdownMenu.hasClass('dropdown-menu-right') || $dropdownMenu.parents('.nav.pull-right').length) {
					dropdownWidth = $dropdownToggle.offset().left + $dropdownToggle.outerWidth() - dropdownPadding;
				} else {
					dropdownWidth = window.innerWidth - $dropdownToggle.offset().left - dropdownPadding;
				}

				$dropdownMenu.css('max-width', dropdownWidth);
		};
	});

// close menu and/or tile if esc key is pressed
	$(document).keyup(function(e) {
		if (e.which == '27') {
			if ($('.menu.open').length) {
				mReset();
			} else if (!$('body').hasClass('modal-open')) {
				tReset();
			}
		};
	});
// footer push
	footerPush = function () {
		if ($('.footer').length) {
			$('body').css('margin-bottom', $('.footer').outerHeight());
		};
	}
// checkbox & radio
	$('.checkbox-adv').each(function() {
		$('label', $(this)).append('<span class="circle"></span><span class="circle-check"></span><span class="circle-icon icon icon-done"></span>');
	});

	$('.radio-adv').each(function() {
		$('label', $(this)).append('<span class="circle"></span><span class="circle-check"></span>');
	});

// floating label
	if($('.form-group-label').length) {
		$('.form-group-label .form-control').each(function() {
			floatingLabel($(this));
		});
	};

	$(document).on('change', '.form-group-label .form-control', function() {
		floatingLabel($(this));
	});

	$(document).on('focusin', '.form-group-label .form-control', function() {
		$(this).closest('.form-group-label').addClass('control-focus');
	});

	$(document).on('focusout', '.form-group-label .form-control', function() {
		$(this).closest('.form-group-label').removeClass('control-focus');
	});

	function floatingLabel(input) {
		var parent = input.closest('.form-group-label');

		if(input.val()) {
			parent.addClass('control-highlight');
		} else {
			parent.removeClass('control-highlight');
		}
	}

// icon label
	$(document).on('focusin', '.form-group-icon .form-control', function() {
		$(this).closest('.form-group-icon').addClass('control-focus');
	});

	$(document).on('focusout', '.form-group-icon .form-control', function() {
		$(this).closest('.form-group-icon').removeClass('control-focus');
	});

// switch
	$(document).on('click', '.switch-toggle', function() {
		var $this = $(this);

		if (!$this.hasClass('switch-toggle-on')) {
			$this.addClass('switch-toggle-on');
			setTimeout(function() {
				$this.removeClass('switch-toggle-on');
			}, 300);
		};
	});

// textarea autosize v0.4.0
// Javier Julio: https://github.com/javierjulio/textarea-autosize
	!function(t,e){function i(e){this.element=e,this.$element=t(e),this.init()}var n="textareaAutoSize",h="plugin_"+n,s=function(t){return t.replace(/\s/g,"").length>0};i.prototype={init:function(){var i=(this.$element.outerHeight(),parseInt(this.$element.css("paddingBottom"))+parseInt(this.$element.css("paddingTop")));s(this.element.value)&&this.$element.height(this.element.scrollHeight-i),this.$element.on("input keyup",function(){var n=t(e),h=n.scrollTop();t(this).height(0).height(this.scrollHeight-i),n.scrollTop(h)})}},t.fn[n]=function(e){return this.each(function(){t.data(this,h)||t.data(this,h,new i(this,e))}),this}}(jQuery,window,document);

	$('.textarea-autosize').textareaAutoSize();
// get target from trigger
	getTargetFromTrigger = function(trigger) {
		var href;
		var target = trigger.attr('data-target')
		    || (href = trigger.attr('href')) && href.replace(/.*(?=#[^\s]+$)/, '');

		return target;
	}
// header
	var $header = $('.header'),
	    headerHeight,
	    headerNavMinWidth = 0;

// header affix
	$(window).on('scroll', function() {
		if ($('.header').length) {
			if (window.pageYOffset > headerHeight) {
				$header.addClass('fixed');
			} else {
				$header.removeClass('fixed');
			}
		};
	});

// header height
	headerHeightCal = function () {
		if ($('.header').length) {
			headerHeight = $header.height();
		};
	}
// menu close
	$(document).on('click touchend', function(e) {
		var $target = $(e.target);

		if ($('.menu.open').length && !$target.is('.fbtn-container *, .menu-scroll *')) {
			mReset();
		};
	});
	
	mReset = function () {
		var $bd = $('body');

		if ($bd.hasClass('nav-drawer-open')) {
			$bd.removeClass('nav-drawer-open');
		};

		$('[data-toggle="menu"]').closest('.active').removeClass('active');
		$('.menu.open').removeClass('open');
	}

// menu open
	$(document).on('click', '[data-toggle="menu"]', function(e) {
		e.preventDefault();
		e.stopPropagation();

		var $this = $(this),
		    $thisLi = $this.parent(),
		    $thisMenu = $(getTargetFromTrigger($this));

		if ($thisLi.hasClass('active')) {
			mReset();
		} else {
			mReset();

			if ($thisMenu.hasClass('nav-drawer')) {
				$('body').addClass('nav-drawer-open');
			}

			$thisLi.addClass('active');
			$thisMenu.addClass('open');
		}
	});
// modal iframe
	$(document).on('click', '.modal-close-iframe', function(e) {
		e.preventDefault();

		window.parent.closeModal(getTargetFromTrigger($(this)));
	});

	window.closeModal = function(iframe) {
		$(iframe).modal('hide');
	};
// sortable v1.1.1
// git://github.com/rubaxa/Sortable.git
	!function(a){"use strict";"function"==typeof define&&define.amd?define(["jquery"],a):a(jQuery)}(function(a){"use strict";function b(a,b){this.el=a,this.options=b=b||{};var c={group:Math.random(),sort:!0,disabled:!1,store:null,handle:null,scroll:!0,scrollSensitivity:30,scrollSpeed:10,draggable:/[uo]l/i.test(a.nodeName)?"li":">*",ghostClass:"sortable-ghost",ignore:"a, img",filter:null,animation:0,setData:function(a,b){a.setData("Text",b.textContent)},dropBubble:!1,dragoverBubble:!1};for(var e in c)!(e in b)&&(b[e]=c[e]);var f=b.group;f&&"object"==typeof f||(f=b.group={name:f}),["pull","put"].forEach(function(a){a in f||(f[a]=!0)}),N.forEach(function(c){b[c]=d(this,b[c]||O),g(a,c.substr(2).toLowerCase(),b[c])},this),b.groups=" "+f.name+(f.put.join?" "+f.put.join(" "):"")+" ",a[G]=b;for(var h in this)"_"===h.charAt(0)&&(this[h]=d(this,this[h]));g(a,"mousedown",this._onTapStart),g(a,"touchstart",this._onTapStart),g(a,"dragover",this),g(a,"dragenter",this),R.push(this._onDragOver),b.store&&this.sort(b.store.get(this))}function c(a){t&&t.state!==a&&(j(t,"display",a?"none":""),!a&&t.state&&u.insertBefore(t,r),t.state=a)}function d(a,b){var c=Q.call(arguments,2);return b.bind?b.bind.apply(b,[a].concat(c)):function(){return b.apply(a,c.concat(Q.call(arguments)))}}function e(a,b,c){if(a){c=c||I,b=b.split(".");var d=b.shift().toUpperCase(),e=new RegExp("\\s("+b.join("|")+")\\s","g");do if(">*"===d&&a.parentNode===c||(""===d||a.nodeName.toUpperCase()==d)&&(!b.length||((" "+a.className+" ").match(e)||[]).length==b.length))return a;while(a!==c&&(a=a.parentNode))}return null}function f(a){a.dataTransfer.dropEffect="move",a.preventDefault()}function g(a,b,c){a.addEventListener(b,c,!1)}function h(a,b,c){a.removeEventListener(b,c,!1)}function i(a,b,c){if(a)if(a.classList)a.classList[c?"add":"remove"](b);else{var d=(" "+a.className+" ").replace(/\s+/g," ").replace(" "+b+" ","");a.className=d+(c?" "+b:"")}}function j(a,b,c){var d=a&&a.style;if(d){if(void 0===c)return I.defaultView&&I.defaultView.getComputedStyle?c=I.defaultView.getComputedStyle(a,""):a.currentStyle&&(c=a.currentStyle),void 0===b?c:c[b];b in d||(b="-webkit-"+b),d[b]=c+("string"==typeof c?"":"px")}}function k(a,b,c){if(a){var d=a.getElementsByTagName(b),e=0,f=d.length;if(c)for(;f>e;e++)c(d[e],e);return d}return[]}function l(a){a.draggable=!1}function m(){L=!1}function n(a,b){var c=a.lastElementChild,d=c.getBoundingClientRect();return b.clientY-(d.top+d.height)>5&&c}function o(a){for(var b=a.tagName+a.className+a.src+a.href+a.textContent,c=b.length,d=0;c--;)d+=b.charCodeAt(c);return d.toString(36)}function p(a){for(var b=0;a&&(a=a.previousElementSibling);)"TEMPLATE"!==a.nodeName.toUpperCase()&&b++;return b}function q(a,b){var c,d;return function(){void 0===c&&(c=arguments,d=this,setTimeout(function(){1===c.length?a.call(d,c[0]):a.apply(d,c),c=void 0},b))}}var r,s,t,u,v,w,x,y,z,A,B,C,D,E,F={},G="Sortable"+(new Date).getTime(),H=window,I=H.document,J=H.parseInt,K=!!("draggable"in I.createElement("div")),L=!1,M=function(a,b,c,d,e,f){var g=I.createEvent("Event");g.initEvent(b,!0,!0),g.item=c||a,g.from=d||a,g.clone=t,g.oldIndex=e,g.newIndex=f,a.dispatchEvent(g)},N="onAdd onUpdate onRemove onStart onEnd onFilter onSort".split(" "),O=function(){},P=Math.abs,Q=[].slice,R=[],S=q(function(a,b,c){if(c&&b.scroll){var d,e,f,g,h=b.scrollSensitivity,i=b.scrollSpeed,j=a.clientX,k=a.clientY,l=window.innerWidth,m=window.innerHeight;if(x!==c&&(w=b.scroll,x=c,w===!0)){w=c;do if(w.offsetWidth<w.scrollWidth||w.offsetHeight<w.scrollHeight)break;while(w=w.parentNode)}w&&(d=w,e=w.getBoundingClientRect(),f=(P(e.right-j)<=h)-(P(e.left-j)<=h),g=(P(e.bottom-k)<=h)-(P(e.top-k)<=h)),f||g||(f=(h>=l-j)-(h>=j),g=(h>=m-k)-(h>=k),(f||g)&&(d=H)),(F.vx!==f||F.vy!==g||F.el!==d)&&(F.el=d,F.vx=f,F.vy=g,clearInterval(F.pid),d&&(F.pid=setInterval(function(){d===H?H.scrollTo(H.scrollX+f*i,H.scrollY+g*i):(g&&(d.scrollTop+=g*i),f&&(d.scrollLeft+=f*i))},24)))}},30);b.prototype={constructor:b,_dragStarted:function(){u&&r&&(i(r,this.options.ghostClass,!0),b.active=this,M(u,"start",r,u,A))},_onTapStart:function(a){var b=a.type,c=a.touches&&a.touches[0],d=(c||a).target,f=d,h=this.options,i=this.el,j=h.filter;if(!("mousedown"===b&&0!==a.button||h.disabled)&&(d=e(d,h.draggable,i))){if(A=p(d),"function"==typeof j){if(j.call(this,a,d,this))return M(f,"filter",d,i,A),void a.preventDefault()}else if(j&&(j=j.split(",").some(function(a){return a=e(f,a.trim(),i),a?(M(a,"filter",d,i,A),!0):void 0})))return void a.preventDefault();if((!h.handle||e(f,h.handle,i))&&d&&!r&&d.parentNode===i){D=a,u=this.el,r=d,v=r.nextSibling,C=this.options.group,r.draggable=!0,h.ignore.split(",").forEach(function(a){k(d,a.trim(),l)}),c&&(D={target:d,clientX:c.clientX,clientY:c.clientY},this._onDragStart(D,"touch"),a.preventDefault()),g(I,"mouseup",this._onDrop),g(I,"touchend",this._onDrop),g(I,"touchcancel",this._onDrop),g(r,"dragend",this),g(u,"dragstart",this._onDragStart),K||this._onDragStart(D,!0);try{I.selection?I.selection.empty():window.getSelection().removeAllRanges()}catch(m){}}}},_emulateDragOver:function(){if(E){j(s,"display","none");var a=I.elementFromPoint(E.clientX,E.clientY),b=a,c=" "+this.options.group.name,d=R.length;if(b)do{if(b[G]&&b[G].groups.indexOf(c)>-1){for(;d--;)R[d]({clientX:E.clientX,clientY:E.clientY,target:a,rootEl:b});break}a=b}while(b=b.parentNode);j(s,"display","")}},_onTouchMove:function(a){if(D){var b=a.touches?a.touches[0]:a,c=b.clientX-D.clientX,d=b.clientY-D.clientY,e=a.touches?"translate3d("+c+"px,"+d+"px,0)":"translate("+c+"px,"+d+"px)";E=b,j(s,"webkitTransform",e),j(s,"mozTransform",e),j(s,"msTransform",e),j(s,"transform",e),a.preventDefault()}},_onDragStart:function(a,b){var c=a.dataTransfer,d=this.options;if(this._offUpEvents(),"clone"==C.pull&&(t=r.cloneNode(!0),j(t,"display","none"),u.insertBefore(t,r)),b){var e,f=r.getBoundingClientRect(),h=j(r);s=r.cloneNode(!0),j(s,"top",f.top-J(h.marginTop,10)),j(s,"left",f.left-J(h.marginLeft,10)),j(s,"width",f.width),j(s,"height",f.height),j(s,"opacity","0.8"),j(s,"position","fixed"),j(s,"zIndex","100000"),u.appendChild(s),e=s.getBoundingClientRect(),j(s,"width",2*f.width-e.width),j(s,"height",2*f.height-e.height),"touch"===b?(g(I,"touchmove",this._onTouchMove),g(I,"touchend",this._onDrop),g(I,"touchcancel",this._onDrop)):(g(I,"mousemove",this._onTouchMove),g(I,"mouseup",this._onDrop)),this._loopId=setInterval(this._emulateDragOver,150)}else c&&(c.effectAllowed="move",d.setData&&d.setData.call(this,c,r)),g(I,"drop",this);setTimeout(this._dragStarted,0)},_onDragOver:function(a){var b,d,f,g=this.el,h=this.options,i=h.group,k=i.put,l=C===i,o=h.sort;if(r&&(void 0!==a.preventDefault&&(a.preventDefault(),!h.dragoverBubble&&a.stopPropagation()),C&&!h.disabled&&(l?o||(f=!u.contains(r)):C.pull&&k&&(C.name===i.name||k.indexOf&&~k.indexOf(C.name)))&&(void 0===a.rootEl||a.rootEl===this.el))){if(S(a,h,this.el),L)return;if(b=e(a.target,h.draggable,g),d=r.getBoundingClientRect(),f)return c(!0),void(t||v?u.insertBefore(r,t||v):o||u.appendChild(r));if(0===g.children.length||g.children[0]===s||g===a.target&&(b=n(g,a))){if(b){if(b.animated)return;q=b.getBoundingClientRect()}c(l),g.appendChild(r),this._animate(d,r),b&&this._animate(q,b)}else if(b&&!b.animated&&b!==r&&void 0!==b.parentNode[G]){y!==b&&(y=b,z=j(b));var p,q=b.getBoundingClientRect(),w=q.right-q.left,x=q.bottom-q.top,A=/left|right|inline/.test(z.cssFloat+z.display),B=b.offsetWidth>r.offsetWidth,D=b.offsetHeight>r.offsetHeight,E=(A?(a.clientX-q.left)/w:(a.clientY-q.top)/x)>.5,F=b.nextElementSibling;L=!0,setTimeout(m,30),c(l),p=A?b.previousElementSibling===r&&!B||E&&B:F!==r&&!D||E&&D,p&&!F?g.appendChild(r):b.parentNode.insertBefore(r,p?F:b),this._animate(d,r),this._animate(q,b)}}},_animate:function(a,b){var c=this.options.animation;if(c){var d=b.getBoundingClientRect();j(b,"transition","none"),j(b,"transform","translate3d("+(a.left-d.left)+"px,"+(a.top-d.top)+"px,0)"),b.offsetWidth,j(b,"transition","all "+c+"ms"),j(b,"transform","translate3d(0,0,0)"),clearTimeout(b.animated),b.animated=setTimeout(function(){j(b,"transition",""),j(b,"transform",""),b.animated=!1},c)}},_offUpEvents:function(){h(I,"mouseup",this._onDrop),h(I,"touchmove",this._onTouchMove),h(I,"touchend",this._onDrop),h(I,"touchcancel",this._onDrop)},_onDrop:function(a){var c=this.el,d=this.options;clearInterval(this._loopId),clearInterval(F.pid),h(I,"drop",this),h(I,"mousemove",this._onTouchMove),h(c,"dragstart",this._onDragStart),this._offUpEvents(),a&&(a.preventDefault(),!d.dropBubble&&a.stopPropagation(),s&&s.parentNode.removeChild(s),r&&(h(r,"dragend",this),l(r),i(r,this.options.ghostClass,!1),u!==r.parentNode?(B=p(r),M(r.parentNode,"sort",r,u,A,B),M(u,"sort",r,u,A,B),M(r,"add",r,u,A,B),M(u,"remove",r,u,A,B)):(t&&t.parentNode.removeChild(t),r.nextSibling!==v&&(B=p(r),M(u,"update",r,u,A,B),M(u,"sort",r,u,A,B))),b.active&&M(u,"end",r,u,A,B)),u=r=s=v=t=w=x=D=E=y=z=C=b.active=null,this.save())},handleEvent:function(a){var b=a.type;"dragover"===b||"dragenter"===b?(this._onDragOver(a),f(a)):("drop"===b||"dragend"===b)&&this._onDrop(a)},toArray:function(){for(var a,b=[],c=this.el.children,d=0,f=c.length;f>d;d++)a=c[d],e(a,this.options.draggable,this.el)&&b.push(a.getAttribute("data-id")||o(a));return b},sort:function(a){var b={},c=this.el;this.toArray().forEach(function(a,d){var f=c.children[d];e(f,this.options.draggable,c)&&(b[a]=f)},this),a.forEach(function(a){b[a]&&(c.removeChild(b[a]),c.appendChild(b[a]))})},save:function(){var a=this.options.store;a&&a.set(this)},closest:function(a,b){return e(a,b||this.options.draggable,this.el)},option:function(a,b){var c=this.options;return void 0===b?c[a]:void(c[a]=b)},destroy:function(){var a=this.el,b=this.options;N.forEach(function(c){h(a,c.substr(2).toLowerCase(),b[c])}),h(a,"mousedown",this._onTapStart),h(a,"touchstart",this._onTapStart),h(a,"dragover",this),h(a,"dragenter",this),Array.prototype.forEach.call(a.querySelectorAll("[draggable]"),function(a){a.removeAttribute("draggable")}),R.splice(R.indexOf(this._onDragOver),1),this._onDrop(),this.el=null}},b.utils={on:g,off:h,css:j,find:k,bind:d,is:function(a,b){return!!e(a,b,a)},throttle:q,closest:e,toggleClass:i,dispatchEvent:M,index:p},b.version="1.1.1",b.create=function(a,c){return new b(a,c)},a.fn.sortable=function(c){var d;return this.each(function(){var e=a(this),f=e.data("sortable");if(f||!(c instanceof Object)&&c||(f=new b(this,c),e.data("sortable",f)),f){if("widget"===c)return f;"destroy"===c?(f.destroy(),e.removeData("sortable")):c in f&&(d=f[f].apply(f,[].slice.call(arguments,1)))}}),void 0===d?this:d}});

// default sortable list
	$('.sortable-list').sortable({
		draggable: '.sortable-item',
		ghostClass: 'sortable-ghost',
		handle: '.sortable-handle'
	});
// tab switch
	tabSwitch = function(newTab, oldTab) {
		var $nav = newTab.closest('.tab-nav'),
		    $navIndicator = $('.tab-nav-indicator', $nav),
		    navOffset = $nav.offset().left,
		    navWidth = $nav.width(),
		    newTabOffset = newTab.offset().left,
		    newTabWidth = newTab.outerWidth();

		if (oldTab != null && oldTab.offset().left > newTabOffset) {
			$navIndicator.addClass('reverse');
			setTimeout(function() {
				$navIndicator.removeClass('reverse');
			}, 450);
		};

		$navIndicator.css({
			left: (newTabOffset - navOffset),
			right: navOffset + navWidth - newTabOffset - newTabWidth
		});
	}

	$(document).on('show.bs.tab', '.tab-nav a[data-toggle="tab"]', function(e) {
	 	tabSwitch($(e.target), $(e.relatedTarget));
	});

// tab switch indicator
	$('.tab-nav').each(function() {
		$(this).append('<div class="tab-nav-indicator"></div>');
		tabSwitch($('.nav > li.active', $(this)), null);
	});
// tile
	$(document).on('click', function(e) {
		var $target = $(e.target);

		if ($target.is('[data-toggle="tile"], [data-toggle="tile"] *') && !$target.is('[data-ignore="tile"], [data-ignore="tile"] *')) {
			var $trigger = $target.closest('[data-toggle="tile"]');
			if ($trigger.attr('data-parent') != null) {
				$($trigger.attr('data-parent')).find('.tile-active-show').collapse('hide');
			};
			$(getTargetFromTrigger($trigger)).collapse('toggle');
		} else if ($target.is('[data-dismiss="tile"]')) {
			$target.closest('.tile-collapse').find('.tile-active-show').collapse('hide');
		} else if (!$target.is('.tile-collapse, .tile-collapse *')) {
			tReset();
		};
	});

	tReset = function () {
		$('.tile-collapse.active').each(function(index) {
			var $collapse = $('.tile-active-show', $(this));
			if (!$collapse.hasClass('tile-active-show-still')) {
				$collapse.collapse('hide');
			};
		});
	}

// tile hide
	$(document).on('hide.bs.collapse', '.tile-active-show', function() {
		$(this).closest('.tile-collapse').css({
			'-webkit-transition-delay': '',
			'transition-delay': ''
		}).removeClass('active');
	});

// tile show
	$(document).on('show.bs.collapse', '.tile-active-show', function() {
		$(this).closest('.tile-collapse').css({
			'-webkit-transition-delay': '',
			'transition-delay': ''
		}).addClass('active');
	});

// tile wrap animation
	$('.tile-wrap-animation').each(function(index) {
		var tileAnimationDelay = 0,
		    tileAnimationTransform = 100;

		$('> .tile', $(this)).each(function(index) {
			$(this).css({
				'-webkit-transform': 'translate(0, ' + tileAnimationTransform + '%)',
				'-ms-transform': 'translate(0, ' + tileAnimationTransform + '%)',
				'transform': 'translate(0, ' + tileAnimationTransform + '%)',
				'-webkit-transition-delay': tileAnimationDelay + 's',
				'transition-delay': tileAnimationDelay + 's'
			});

			tileAnimationDelay = tileAnimationDelay + 0.1;
			tileAnimationTransform = tileAnimationTransform + 10;
		});
	});

	$(window).on('DOMContentLoaded scroll', function() {
		tileInView();
	});

	tileInView = function () {
		$('.tile-wrap-animation:not(.isinview)').each(function() {
			var $this = $(this);
			if (tileInViewCheck($this) && (!$this.hasClass('avoid-fout') || ($this.hasClass('avoid-fout') && $this.hasClass('avoid-fout-done'))) && (!$this.hasClass('el-loading') || ($this.hasClass('el-loading') && $this.hasClass('el-loading-done'))) && !$this.parents('.avoid-fout:not(.avoid-fout-done)').length && !$this.parents('.el-loading:not(.el-loading-done)').length) {
				$this.addClass('isinview');
			};
		});
	}

	tileInViewCheck = function (tile) {
		tile = tile[0];

		var rect = tile.getBoundingClientRect();

		return (
			rect.top <= window.innerHeight &&
			rect.right >= 0 &&
			rect.bottom >= 0 &&
			rect.left <= window.innerWidth
		);
	}
// toast
	var toastTimeout;

	$('[data-toggle="toast"]').tooltip({
		animation: false,
		container: '.toast',
		html: true,
		placement: 'bottom',
		template: '<div class="tooltip"><div class="toast-inner tooltip-inner"></div></div>',
		trigger: 'manual'
	});

// toast dismiss
	$(document).on('click', '[data-dismiss="toast"]', function(e) {
		e.preventDefault();
		toastHide(0);
	});

	toastHide = function (timer, toast) {
		clearTimeout(toastTimeout);

		toastTimeout = setTimeout(function() {
			$('.toast').removeClass('toast-show');

			if ($('.fbtn-container').length) {
				$('.fbtn-container').css('margin-bottom', '');
			};

			$('.toast-inner').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(e) {
				$('.toast-toggled').tooltip('hide').removeClass('toast-toggled');

				if (toast !== null && toast !== undefined) {
					toast.tooltip('show').addClass('toast-toggled');
				} else {
					$('.toast').remove();
				}
			});
		}, timer);
	}

// toast hover
	$(document).on('mouseenter', '.toast', function() {
		clearTimeout(toastTimeout);
	});

	$(document).on('mouseleave', '.toast', function() {
		toastHide(6000);
	});

// toast show
	$(document).on('click', '[data-toggle="toast"]', function() {
		var $this = $(this);

		if (!$('.toast').length) {
			$('body').append('<div class="toast"></div>');
		};

		if (!$this.hasClass('toast-toggled')) {
			if ($('.toast').hasClass('toast-show')) {
				toastHide(0, $this);
			} else {
				$this.tooltip('show').addClass('toast-toggled');
			}
		};
	});

	$(document).on('shown.bs.tooltip', '[data-toggle="toast"]', function() {
		var $this = $(this);

		$('.toast').addClass('toast-show');

		if ($(window).width() < 768 && $('.fbtn-container').length) {
			$('.fbtn-container').css('margin-bottom', $('.toast').outerHeight());
		};

		$('.toast-inner').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(e) {
			toastHide(6000);
		});
	});
// waves v0.6.5
// http://fian.my.id/Waves
	!function(a,b){"use strict";"function"==typeof define&&define.amd?define([],function(){return b.apply(a)}):"object"==typeof exports?module.exports=b.call(a):a.Waves=b.call(a)}("object"==typeof global?global:this,function(){"use strict";function a(a){return null!==a&&a===a.window}function b(b){return a(b)?b:9===b.nodeType&&b.defaultView}function c(a){var c,d,e={top:0,left:0},f=a&&a.ownerDocument;return c=f.documentElement,"undefined"!=typeof a.getBoundingClientRect&&(e=a.getBoundingClientRect()),d=b(f),{top:e.top+d.pageYOffset-c.clientTop,left:e.left+d.pageXOffset-c.clientLeft}}function d(a){var b="";for(var c in a)a.hasOwnProperty(c)&&(b+=c+":"+a[c]+";");return b}function e(a){if(j.allowEvent(a)===!1)return null;for(var b=null,c=a.target||a.srcElement;null!==c.parentElement;){if(!(c instanceof SVGElement||-1===c.className.indexOf("waves-effect"))){b=c;break}if(c.classList.contains("waves-effect")){b=c;break}c=c.parentElement}return b}function f(a){var b=e(a);null!==b&&(i.show(a,b),"ontouchstart"in window&&(b.addEventListener("touchend",i.hide,!1),b.addEventListener("touchcancel",i.hide,!1)),b.addEventListener("mouseup",i.hide,!1),b.addEventListener("mouseleave",i.hide,!1))}var g=g||{},h=document.querySelectorAll.bind(document),i={duration:750,show:function(a,b){if(2===a.button)return!1;var e=b||this,f=document.createElement("div");f.className="waves-ripple",e.appendChild(f);var g=c(e),h=a.pageY-g.top,j=a.pageX-g.left,k="scale("+e.clientWidth/100*3+")";"touches"in a&&(h=a.touches[0].pageY-g.top,j=a.touches[0].pageX-g.left),f.setAttribute("data-hold",Date.now()),f.setAttribute("data-scale",k),f.setAttribute("data-x",j),f.setAttribute("data-y",h);var l={top:h+"px",left:j+"px"};f.className=f.className+" waves-notransition",f.setAttribute("style",d(l)),f.className=f.className.replace("waves-notransition",""),l["-webkit-transform"]=k,l["-moz-transform"]=k,l["-ms-transform"]=k,l["-o-transform"]=k,l.transform=k,l.opacity="1",l["-webkit-transition-duration"]=i.duration+"ms",l["-moz-transition-duration"]=i.duration+"ms",l["-o-transition-duration"]=i.duration+"ms",l["transition-duration"]=i.duration+"ms",f.setAttribute("style",d(l))},hide:function(a){j.touchup(a);var b=this,c=(1.4*b.clientWidth,null),e=b.getElementsByClassName("waves-ripple");if(!(e.length>0))return!1;c=e[e.length-1];var f=c.getAttribute("data-x"),g=c.getAttribute("data-y"),h=c.getAttribute("data-scale"),k=Date.now()-Number(c.getAttribute("data-hold")),l=350-k;0>l&&(l=0),setTimeout(function(){var a={top:g+"px",left:f+"px",opacity:"0","-webkit-transition-duration":i.duration+"ms","-moz-transition-duration":i.duration+"ms","-o-transition-duration":i.duration+"ms","transition-duration":i.duration+"ms","-webkit-transform":h,"-moz-transform":h,"-ms-transform":h,"-o-transform":h,transform:h};c.setAttribute("style",d(a)),setTimeout(function(){try{b.removeChild(c)}catch(a){return!1}},i.duration)},l)},wrapInput:function(a){for(var b=0;b<a.length;b++){var c=a[b];if("input"===c.tagName.toLowerCase()){var d=c.parentNode;if("i"===d.tagName.toLowerCase()&&-1!==d.className.indexOf("waves-effect"))continue;var e=document.createElement("i");e.className=c.className+" waves-input-wrapper";var f=c.getAttribute("style");f||(f=""),e.setAttribute("style",f),c.className="waves-button-input",c.removeAttribute("style"),d.replaceChild(e,c),e.appendChild(c)}}}},j={touches:0,allowEvent:function(a){var b=!0;return"touchstart"===a.type?j.touches+=1:"touchend"===a.type||"touchcancel"===a.type?setTimeout(function(){j.touches>0&&(j.touches-=1)},500):"mousedown"===a.type&&j.touches>0&&(b=!1),b},touchup:function(a){j.allowEvent(a)}};return g.displayEffect=function(a){a=a||{},"duration"in a&&(i.duration=a.duration),i.wrapInput(h(".waves-effect")),"ontouchstart"in window&&document.body.addEventListener("touchstart",f,!1),document.body.addEventListener("mousedown",f,!1)},g.attach=function(a){"input"===a.tagName.toLowerCase()&&(i.wrapInput([a]),a=a.parentElement),"ontouchstart"in window&&a.addEventListener("touchstart",f,!1),a.addEventListener("mousedown",f,!1)},g});

	Waves.displayEffect({
		duration: 900
	});
// webfont.js
	WebFontConfig = {
		classes: false,
		fontactive: function() {
			$('.avoid-fout').each(function(index) {
				$(this).addClass('avoid-fout-done');
			});

			// fixed left/right hand side column padding bottom and width
				contentFixPushCal();

			// footer push
				footerPush();

			// header height
				headerHeightCal();

			// tile wrap animation
				tileInView();
		},
		fontinactive: function() {
			$('.avoid-fout').each(function(index) {
				$(this).addClass('avoid-fout-done');
			});

			// tile wrap animation
				tileInView();
		},
		google: {
			families: ['Roboto:300,300italic,400,400italic,700,700italic']
		}
	};

	(function() {
		var wf = document.createElement('script');
		wf.src = ('https:' == document.location.protocol ? 'https' : 'http') + '://ajax.googleapis.com/ajax/libs/webfont/1.5.18/webfont.js';
		wf.type = 'text/javascript';
		wf.async = 'true';
		var s = document.getElementsByTagName('script')[0];
		s.parentNode.insertBefore(wf, s);
	})();
// window smart resize
	on_resize = function (c,t){onresize=function(){clearTimeout(t);t=setTimeout(c,100)};return c};

	on_resize(function() {
		// fixed left/right hand side column padding bottom and width
			contentFixPushCal();

		// footer push
			footerPush();

		// header height
			headerHeightCal();

		// header nav positioning
			if ($('.header-nav-scroll').length) {
				headerNavPos();
			};

		// tab switch
			$('.tab-nav').each(function() {
				tabSwitch($('.nav > li.active', $(this)), null);
			});

		// tile in view
			if ($('.tile-wrap-animation:not(.isinview)').length) {
				tileInView();
			};
	})();