webpackJsonp([0],Array(105).concat([function(e,t,n){n(307);var o=n(10)(n(292),n(317),"data-v-019f5e48",null);e.exports=o.exports},function(e,t,n){n(313);var o=n(10)(n(293),n(324),"data-v-de598fe6",null);e.exports=o.exports},function(e,t,n){n(312);var o=n(10)(n(294),n(323),null,null);e.exports=o.exports},function(e,t,n){n(308);var o=n(10)(n(295),n(318),"data-v-0597d35b",null);e.exports=o.exports},function(e,t,n){var o=n(10)(n(296),n(321),null,null);e.exports=o.exports},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(e,t,n){var o=n(10)(n(240),n(275),null,null);e.exports=o.exports},function(e,t,n){n(259);var o=n(10)(n(237),n(278),"data-v-327d98b3",null);e.exports=o.exports},function(e,t,n){n(258);var o=n(10)(n(244),n(277),"data-v-20e11ed0",null);e.exports=o.exports},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(267),r=n.n(o),i=n(264),a=n.n(i),s=n(266),l=n.n(s),c=n(265),d=n.n(c),u=n(263),p=n.n(u);t.default={props:{card:{type:Object,default:function(){return{}}}},computed:{cardBodyFlex:function(){return this.card.body.flex||"xs12"},cardMediaFlex:function(){return this.card.media?this.card.media.flex||"xs12":"xs12"},cardMediaHeight:function(){return this.card.media?"min-height: "+(this.card.media.height||"200px"):"200px"}},watch:{cardBodyHeight:function(e){return alert(e),e}},components:{"alex-card-toolbar":r.a,"alex-card-body":a.a,"alex-card-media":l.a,"alex-card-actions":p.a,"alex-card-details":d.a}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(268),r=n.n(o);t.default={props:{actions:{type:Array,required:!0},details:{type:Object}},components:{"alex-details-button":r.a}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(234),r=n.n(o);t.default={props:{body:{type:Object}},components:{"alex-card-content":r.a}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(272),r=n.n(o),i=n(270),a=n.n(i),s=n(269),l=n.n(s),c=n(274),d=n.n(c);t.default={props:{content:{type:Object,required:!0}},components:{"alex-list":r.a,"alex-chips":a.a,"alex-form":l.a,"alex-rotate-progress":d.a}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(234),r=n.n(o);t.default={props:{details:{type:Object}},components:{"alex-card-content":r.a}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:{media:{type:Object}},data:function(){return{mediaStyle:{height:"100%",position:"absolute",top:0,left:0,right:0,bottom:0},mediaTextClasses:"headline ml-2 white--text"}},computed:{mediaClasses:function(){return this.media?this.media.color||"primary":"accent"},source:function(){return this.media?this.media.src:""},contained:function(){return this.media?this.media.contain:""},icon:function(){return this.media?this.media.icon:""},iconSize:function(){return this.media?"icon--"+this.media.icon.size||"icon--x-large":""},backgroundSource:function(){return'url("'+this.source+'")'},backgroundSize:function(){return this.contained?"contain":"cover"},mediaBackgroundStyle:function(){return console.log(this.backgroundSource),{"background-image":this.backgroundSource,"background-size":this.backgroundSize,"background-position":"center center","background-repeat":"no-repeat no-repeat"}},mediaTitleStyle:function(){return{position:"absolute",bottom:"10px",left:0}}}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:{toolbar:{type:Object}}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(235),r=n.n(o),i=n(262);n.n(i);t.default={props:{cards:{type:Array,required:!0}},components:{"alex-presentation-card":r.a},mounted:function(){i({reset:!0}).reveal(".card",{duration:200,delay:250,scale:.9,easing:"cubic-bezier(0.6, 0.2, 0.1, 1)",mobile:!0,useDelay:"once",opacity:0})}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(271),r=n.n(o);t.default={computed:{buttonClasses:function(){return this.actions.length>1?"hidden-xs-only":""},menuClasses:function(){return this.actions.length>1?"hidden-sm-and-up":"hidden-xs-only hidden-sm-and-up"},actionTextColor:function(){return this.$store.getters.theme.actionColor+"--text"}},props:{actions:{type:Array,required:!0}},components:{"alex-dropdown-menu":r.a}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:{form:{type:[Object,Array]}},data:function(){return{email:"",rules:{required:function(e){return!!e||"Required."}}}}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:{chips:{type:Array,required:!0}}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={computed:{actionTextColor:function(){return this.$store.getters.theme.actionColor+"--text"}},props:{actions:{type:Array,required:!0}}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(273),r=n.n(o);t.default={props:{list:{type:[Array,Object]}},components:{"alex-list-tile":r.a}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:{tile:{required:!0}},created:function(){console.log(this.tile)}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:{progress:{type:Object}}}},function(e,t,n){t=e.exports=n(232)(!0),t.push([e.i,".layout .flex.md3{width:25%}div.card__media{height:100%;min-height:200px}div.media-icon{margin:auto;text-align:center}sm6{width:33.333%}","",{version:3,sources:["/Users/alexng/WebstormProjects/portfolio-website/src/components/cards/CardMedia.vue"],names:[],mappings:"AACA,kBACE,SAAW,CACZ,AACD,gBACE,YAAa,AACb,gBAAkB,CACnB,AACD,eAAiB,YAAa,AAAC,iBAAmB,CACjD,AACD,IACE,aAAe,CAChB",file:"CardMedia.vue",sourcesContent:["\n.layout .flex.md3 {\n  width: 25%;\n}\ndiv.card__media {\n  height: 100%;\n  min-height: 200px;\n}\ndiv.media-icon { margin: auto; text-align: center;\n}\nsm6 {\n  width: 33.333%;\n}\n"],sourceRoot:""}])},function(e,t,n){t=e.exports=n(232)(!0),t.push([e.i,"div.flex.xs12[data-v-20e11ed0]{display:inline-block;margin:0 0 1em}","",{version:3,sources:["/Users/alexng/WebstormProjects/portfolio-website/src/components/cards/Cards.vue"],names:[],mappings:"AACA,+BACE,qBAAsB,AACtB,cAAgB,CACjB",file:"Cards.vue",sourcesContent:["\ndiv.flex.xs12[data-v-20e11ed0] {\n  display: inline-block;\n  margin: 0 0 1em;\n}\n"],sourceRoot:""}])},function(e,t,n){t=e.exports=n(232)(!0),t.push([e.i,"div.container[data-v-327d98b3],div.flex[data-v-327d98b3],div.row[data-v-327d98b3]{padding:0;margin:0}div.card__actions[data-v-327d98b3]{margin-top:auto}","",{version:3,sources:["/Users/alexng/WebstormProjects/portfolio-website/src/components/cards/Card.vue"],names:[],mappings:"AACA,kFAEE,UAAa,AACb,QAAY,CACb,AACD,mCAAqC,eAAiB,CACrD",file:"Card.vue",sourcesContent:["\ndiv.container[data-v-327d98b3], div.row[data-v-327d98b3], div.flex[data-v-327d98b3]\n{\n  padding: 0px;\n  margin: 0px;\n}\ndiv.card__actions[data-v-327d98b3] { margin-top: auto;\n}\n"],sourceRoot:""}])},function(e,t,n){t=e.exports=n(232)(!0),t.push([e.i,"p{margin-bottom:0}","",{version:3,sources:["/Users/alexng/WebstormProjects/portfolio-website/src/components/lists/Tile.vue"],names:[],mappings:"AACA,EACE,eAAmB,CACpB",file:"Tile.vue",sourcesContent:["\np {\n  margin-bottom: 0px;\n}\n"],sourceRoot:""}])},function(e,t,n){t=e.exports=n(232)(!0),t.push([e.i,"div.card-content[data-v-b973e016]{margin:auto;width:100%}@media only screen and (min-width:992px){div.card-content[data-v-b973e016]{margin:5px}}","",{version:3,sources:["/Users/alexng/WebstormProjects/portfolio-website/src/components/cards/CardBody.vue"],names:[],mappings:"AA2BA,kCAAoC,YAAa,AAAC,UAAY,CAC7D,AAED,yCACA,kCAAoC,UAAY,CAC/C,CACA",file:"CardBody.vue",sourcesContent:["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/* Extra small devices */\ndiv.card-content[data-v-b973e016] { margin: auto; width: 100%;\n}\n/* Medium devices */\n@media only screen and (min-width: 992px) {\ndiv.card-content[data-v-b973e016] { margin: 5px;\n}\n}\n"],sourceRoot:""}])},function(e,t,n){var o=n(252);"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);n(233)("71198a34",o,!0)},function(e,t,n){var o=n(253);"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);n(233)("50a61418",o,!0)},function(e,t,n){var o=n(254);"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);n(233)("09f43fca",o,!0)},function(e,t,n){var o=n(255);"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);n(233)("00dd7242",o,!0)},function(e,t,n){var o=n(256);"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);n(233)("db7ed480",o,!0)},function(e,t,n){var o;!function(){"use strict";function r(e){return void 0===this||Object.getPrototypeOf(this)!==r.prototype?new r(e):(E=this,E.version="3.3.6",E.tools=new O,E.isSupported()?(E.tools.extend(E.defaults,e||{}),E.defaults.container=i(E.defaults),E.store={elements:{},containers:[]},E.sequences={},E.history=[],E.uid=0,E.initialized=!1):"undefined"!=typeof console&&null!==console&&console.log("ScrollReveal is not supported in this browser."),E)}function i(e){if(e&&e.container){if("string"==typeof e.container)return window.document.documentElement.querySelector(e.container);if(E.tools.isNode(e.container))return e.container;console.log('ScrollReveal: invalid container "'+e.container+'" provided.'),console.log("ScrollReveal: falling back to default container.")}return E.defaults.container}function a(e,t){return"string"==typeof e?Array.prototype.slice.call(t.querySelectorAll(e)):E.tools.isNode(e)?[e]:E.tools.isNodeList(e)?Array.prototype.slice.call(e):[]}function s(){return++E.uid}function l(e,t,n){t.container&&(t.container=n),e.config?e.config=E.tools.extendClone(e.config,t):e.config=E.tools.extendClone(E.defaults,t),"top"===e.config.origin||"bottom"===e.config.origin?e.config.axis="Y":e.config.axis="X"}function c(e){var t=window.getComputedStyle(e.domEl);e.styles||(e.styles={transition:{},transform:{},computed:{}},e.styles.inline=e.domEl.getAttribute("style")||"",e.styles.inline+="; visibility: visible; ",e.styles.computed.opacity=t.opacity,t.transition&&"all 0s ease 0s"!==t.transition?e.styles.computed.transition=t.transition+", ":e.styles.computed.transition=""),e.styles.transition.instant=d(e,0),e.styles.transition.delayed=d(e,e.config.delay),e.styles.transform.initial=" -webkit-transform:",e.styles.transform.target=" -webkit-transform:",u(e),e.styles.transform.initial+="transform:",e.styles.transform.target+="transform:",u(e)}function d(e,t){var n=e.config;return"-webkit-transition: "+e.styles.computed.transition+"-webkit-transform "+n.duration/1e3+"s "+n.easing+" "+t/1e3+"s, opacity "+n.duration/1e3+"s "+n.easing+" "+t/1e3+"s; transition: "+e.styles.computed.transition+"transform "+n.duration/1e3+"s "+n.easing+" "+t/1e3+"s, opacity "+n.duration/1e3+"s "+n.easing+" "+t/1e3+"s; "}function u(e){var t,n=e.config,o=e.styles.transform;t="top"===n.origin||"left"===n.origin?/^-/.test(n.distance)?n.distance.substr(1):"-"+n.distance:n.distance,parseInt(n.distance)&&(o.initial+=" translate"+n.axis+"("+t+")",o.target+=" translate"+n.axis+"(0)"),n.scale&&(o.initial+=" scale("+n.scale+")",o.target+=" scale(1)"),n.rotate.x&&(o.initial+=" rotateX("+n.rotate.x+"deg)",o.target+=" rotateX(0)"),n.rotate.y&&(o.initial+=" rotateY("+n.rotate.y+"deg)",o.target+=" rotateY(0)"),n.rotate.z&&(o.initial+=" rotateZ("+n.rotate.z+"deg)",o.target+=" rotateZ(0)"),o.initial+="; opacity: "+n.opacity+";",o.target+="; opacity: "+e.styles.computed.opacity+";"}function p(e){var t=e.config.container;t&&-1===E.store.containers.indexOf(t)&&E.store.containers.push(e.config.container),E.store.elements[e.id]=e}function f(e,t,n){var o={target:e,config:t,interval:n};E.history.push(o)}function m(){if(E.isSupported()){b();for(var e=0;e<E.store.containers.length;e++)E.store.containers[e].addEventListener("scroll",v),E.store.containers[e].addEventListener("resize",v);E.initialized||(window.addEventListener("scroll",v),window.addEventListener("resize",v),E.initialized=!0)}return E}function v(){S(b)}function g(){var e,t,n,o;E.tools.forOwn(E.sequences,function(r){o=E.sequences[r],e=!1;for(var i=0;i<o.elemIds.length;i++)n=o.elemIds[i],t=E.store.elements[n],j(t)&&!e&&(e=!0);o.active=e})}function b(){var e,t;g(),E.tools.forOwn(E.store.elements,function(n){t=E.store.elements[n],e=_(t),y(t)?(t.config.beforeReveal(t.domEl),e?t.domEl.setAttribute("style",t.styles.inline+t.styles.transform.target+t.styles.transition.delayed):t.domEl.setAttribute("style",t.styles.inline+t.styles.transform.target+t.styles.transition.instant),x("reveal",t,e),t.revealing=!0,t.seen=!0,t.sequence&&h(t,e)):w(t)&&(t.config.beforeReset(t.domEl),t.domEl.setAttribute("style",t.styles.inline+t.styles.transform.initial+t.styles.transition.instant),x("reset",t),t.revealing=!1)})}function h(e,t){var n=0,o=0,r=E.sequences[e.sequence.id];r.blocked=!0,t&&"onload"===e.config.useDelay&&(o=e.config.delay),e.sequence.timer&&(n=Math.abs(e.sequence.timer.started-new Date),window.clearTimeout(e.sequence.timer)),e.sequence.timer={started:new Date},e.sequence.timer.clock=window.setTimeout(function(){r.blocked=!1,e.sequence.timer=null,v()},Math.abs(r.interval)+o-n)}function x(e,t,n){var o=0,r=0,i="after";switch(e){case"reveal":r=t.config.duration,n&&(r+=t.config.delay),i+="Reveal";break;case"reset":r=t.config.duration,i+="Reset"}t.timer&&(o=Math.abs(t.timer.started-new Date),window.clearTimeout(t.timer.clock)),t.timer={started:new Date},t.timer.clock=window.setTimeout(function(){t.config[i](t.domEl),t.timer=null},r-o)}function y(e){if(e.sequence){var t=E.sequences[e.sequence.id];return t.active&&!t.blocked&&!e.revealing&&!e.disabled}return j(e)&&!e.revealing&&!e.disabled}function _(e){var t=e.config.useDelay;return"always"===t||"onload"===t&&!E.initialized||"once"===t&&!e.seen}function w(e){if(e.sequence){return!E.sequences[e.sequence.id].active&&e.config.reset&&e.revealing&&!e.disabled}return!j(e)&&e.config.reset&&e.revealing&&!e.disabled}function A(e){return{width:e.clientWidth,height:e.clientHeight}}function C(e){if(e&&e!==window.document.documentElement){var t=k(e);return{x:e.scrollLeft+t.left,y:e.scrollTop+t.top}}return{x:window.pageXOffset,y:window.pageYOffset}}function k(e){var t=0,n=0,o=e.offsetHeight,r=e.offsetWidth;do{isNaN(e.offsetTop)||(t+=e.offsetTop),isNaN(e.offsetLeft)||(n+=e.offsetLeft),e=e.offsetParent}while(e);return{top:t,left:n,height:o,width:r}}function j(e){var t=k(e.domEl),n=A(e.config.container),o=C(e.config.container),r=e.config.viewFactor,i=t.height,a=t.width,s=t.top,l=t.left,c=s+i,d=l+a;return function(){var t=s+i*r,u=l+a*r,p=c-i*r,f=d-a*r,m=o.y+e.config.viewOffset.top,v=o.x+e.config.viewOffset.left,g=o.y-e.config.viewOffset.bottom+n.height,b=o.x-e.config.viewOffset.right+n.width;return t<g&&p>m&&u<b&&f>v}()||function(){return"fixed"===window.getComputedStyle(e.domEl).position}()}function O(){}var E,S;r.prototype.defaults={origin:"bottom",distance:"20px",duration:500,delay:0,rotate:{x:0,y:0,z:0},opacity:0,scale:.9,easing:"cubic-bezier(0.6, 0.2, 0.1, 1)",container:window.document.documentElement,mobile:!0,reset:!1,useDelay:"always",viewFactor:.2,viewOffset:{top:0,right:0,bottom:0,left:0},beforeReveal:function(e){},beforeReset:function(e){},afterReveal:function(e){},afterReset:function(e){}},r.prototype.isSupported=function(){var e=document.documentElement.style;return"WebkitTransition"in e&&"WebkitTransform"in e||"transition"in e&&"transform"in e},r.prototype.reveal=function(e,t,n,o){var r,d,u,v,g,b;if(void 0!==t&&"number"==typeof t?(n=t,t={}):void 0!==t&&null!==t||(t={}),r=i(t),d=a(e,r),!d.length)return console.log('ScrollReveal: reveal on "'+e+'" failed, no elements found.'),E;n&&"number"==typeof n&&(b=s(),g=E.sequences[b]={id:b,interval:n,elemIds:[],active:!1});for(var h=0;h<d.length;h++)v=d[h].getAttribute("data-sr-id"),v?u=E.store.elements[v]:(u={id:s(),domEl:d[h],seen:!1,revealing:!1},u.domEl.setAttribute("data-sr-id",u.id)),g&&(u.sequence={id:g.id,index:g.elemIds.length},g.elemIds.push(u.id)),l(u,t,r),c(u),p(u),E.tools.isMobile()&&!u.config.mobile||!E.isSupported()?(u.domEl.setAttribute("style",u.styles.inline),u.disabled=!0):u.revealing||u.domEl.setAttribute("style",u.styles.inline+u.styles.transform.initial);return!o&&E.isSupported()&&(f(e,t,n),E.initTimeout&&window.clearTimeout(E.initTimeout),E.initTimeout=window.setTimeout(m,0)),E},r.prototype.sync=function(){if(E.history.length&&E.isSupported()){for(var e=0;e<E.history.length;e++){var t=E.history[e];E.reveal(t.target,t.config,t.interval,!0)}m()}else console.log("ScrollReveal: sync failed, no reveals found.");return E},O.prototype.isObject=function(e){return null!==e&&"object"==typeof e&&e.constructor===Object},O.prototype.isNode=function(e){return"object"==typeof window.Node?e instanceof window.Node:e&&"object"==typeof e&&"number"==typeof e.nodeType&&"string"==typeof e.nodeName},O.prototype.isNodeList=function(e){var t=Object.prototype.toString.call(e),n=/^\[object (HTMLCollection|NodeList|Object)\]$/;return"object"==typeof window.NodeList?e instanceof window.NodeList:e&&"object"==typeof e&&n.test(t)&&"number"==typeof e.length&&(0===e.length||this.isNode(e[0]))},O.prototype.forOwn=function(e,t){if(!this.isObject(e))throw new TypeError('Expected "object", but received "'+typeof e+'".');for(var n in e)e.hasOwnProperty(n)&&t(n)},O.prototype.extend=function(e,t){return this.forOwn(t,function(n){this.isObject(t[n])?(e[n]&&this.isObject(e[n])||(e[n]={}),this.extend(e[n],t[n])):e[n]=t[n]}.bind(this)),e},O.prototype.extendClone=function(e,t){return this.extend(this.extend({},e),t)},O.prototype.isMobile=function(){return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)},S=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(e){window.setTimeout(e,1e3/60)},void 0!==(o=function(){return r}.call(t,n,t,e))&&(e.exports=o)}()},function(e,t,n){var o=n(10)(n(238),n(283),null,null);e.exports=o.exports},function(e,t,n){n(261);var o=n(10)(n(239),n(285),"data-v-b973e016",null);e.exports=o.exports},function(e,t,n){var o=n(10)(n(241),n(286),null,null);e.exports=o.exports},function(e,t,n){n(257);var o=n(10)(n(242),n(276),null,null);e.exports=o.exports},function(e,t,n){var o=n(10)(n(243),n(289),null,null);e.exports=o.exports},function(e,t,n){var o=n(10)(n(245),n(287),null,null);e.exports=o.exports},function(e,t,n){var o=n(10)(n(246),n(284),null,null);e.exports=o.exports},function(e,t,n){var o=n(10)(n(247),n(281),null,null);e.exports=o.exports},function(e,t,n){var o=n(10)(n(248),n(288),null,null);e.exports=o.exports},function(e,t,n){var o=n(10)(n(249),n(279),null,null);e.exports=o.exports},function(e,t,n){n(260);var o=n(10)(n(250),n(282),null,null);e.exports=o.exports},function(e,t,n){var o=n(10)(n(251),n(280),null,null);e.exports=o.exports},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",["string"==typeof e.content?n("span",[e._v(e._s(e.content))]):n("div",{class:e.content.textalign||"text-xs-center text-md-left"},[e.content.title?n("span",{staticClass:"grey--text"},[e._v(e._s(e.content.title))]):e._e(),e.content.title?n("br"):e._e(),e._v(" "),e.content.summary?n("span",[e._v(e._s(e.content.summary))]):e._e(),e.content.summary?n("br"):e._e(),e._v(" "),e.content.chips?n("alex-chips",{attrs:{chips:e.content.chips}}):e._e(),e._v(" "),e.content.form?n("alex-form",{attrs:{form:e.content.form}}):e._e(),e._v(" "),e.content.progress?n("alex-rotate-progress",{attrs:{progress:e.content.progress}}):e._e(),e._v(" "),e.content.list?n("alex-list",{attrs:{list:e.content.list}}):e._e(),e._v(" "),e._t("default"),e._v(" "),e._l(e.content.buttons,function(t){return e.content.buttons?n("v-btn",{attrs:{outline:"",info:"",dark:"",to:t.link,href:t.href}},[e._v("\n      "+e._s(t.label)+"\n      "),n("v-icon",{staticClass:"info--text",attrs:{right:""}},[e._v(e._s(t.icon||"link"))])],1):e._e()})],2)])},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.media?n("div",{class:e.mediaClasses+" card__media",style:e.mediaStyle},[n("div",{staticClass:"card__media__background",style:e.mediaBackgroundStyle}),e._v(" "),n("div",{staticClass:"card__media__content"},[n("v-container",{attrs:{"fill-height":"",fluid:""}},[n("v-layout",{attrs:{"fill-height":"","pa-1":""}},[e.source?n("v-flex",{style:e.mediaTitleStyle,attrs:{xs12:"","align-end":"",flexbox:""}},[n("span",{class:e.mediaTextClasses},[e._v(e._s(e.media.title))])]):e._e(),e._v(" "),e.icon?n("v-container",{staticClass:"media-icon",attrs:{xs12:"","align-center":"","text-xs-center":""}},[n("v-icon",{class:e.iconSize,attrs:{dark:""}},[e._v("\n            "+e._s(e.media.icon.name)+"\n          ")]),e._v(" "),n("p",{class:e.mediaTextClasses},[e._v(e._s(e.media.title))])],1):e._e()],1)],1)],1)]):e._e()},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-layout",{attrs:{row:"",wrap:""}},e._l(e.cards,function(t,o){return n("v-flex",e._b({},"v-flex",(r={},r["sm"+t.flex+" xs12"]=!0,r),!1),[n("v-flex",{key:t.title},[n("alex-presentation-card",{attrs:{card:t}})],1)],1);var r}))},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-card",{staticClass:"mb-1 elevation-6"},[e.card.toolbar?n("alex-card-toolbar",{attrs:{toolbar:e.card.toolbar}}):e._e(),e._v(" "),n("v-container",[n("v-layout",{attrs:{row:"",wrap:""}},[n("v-flex",{class:e.cardMediaFlex,staticStyle:{position:"relative"},style:e.cardMediaHeight},[n("alex-card-media",{attrs:{media:e.card.media}},[e._t("media")],2)],1),e._v(" "),n("v-flex",{staticClass:"card-body",class:e.cardBodyFlex},[n("alex-card-body",{attrs:{body:e.card.body||{}}},[e._t("default")],2),e._v(" "),e.card&&e.card.actions?n("v-divider"):e._e(),e._v(" "),e.card&&e.card.actions?n("alex-card-actions",{attrs:{actions:e.card.actions,details:e.card.details}}):e._e()],1),e._v(" "),e.card&&e.card.details?n("alex-card-details",{attrs:{details:e.card.details}}):e._e()],1)],1)],1)},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-list",{attrs:{"two-line":"",subheader:""}},[n("v-subheader",[e._v(e._s(e.list.title))]),e._v(" "),e._l(e.list.tiles,function(e){return n("alex-list-tile",{attrs:{tile:e}})})],2)},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",[n("v-progress-circular",{staticClass:"info--text",attrs:{size:e.progress.size,rotate:-90,width:e.progress.width,value:e.progress.value}},[e._v("\n    "+e._s(e.progress.value)+" %\n  ")])],1)},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"text-xs-center text-md-left"},e._l(e.chips,function(t){return n("v-chip",{staticClass:"white--text elevation-5",class:t.color},[n("v-avatar",{staticClass:"darken-4",class:t.color},[n("v-icon",[e._v(e._s(t.icon))])],1),e._v("\n    "+e._s(t.label)+"\n  ")],1)}))},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-list-tile",{attrs:{avatar:""}},[n("v-list-tile-action",[n("v-checkbox",{staticClass:"primary--text",model:{value:e.tile.model,callback:function(t){e.tile.model=t},expression:"tile.model"}})],1),e._v(" "),n("v-list-tile-content",{on:{click:function(t){e.tile.action(e.tile)}}},[n("p",[e._v(e._s(e.tile.note))])])],1)},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-flex",{attrs:{xs12:""}},[e.actions?n("v-card-actions",[n("alex-details-button",{attrs:{actions:e.actions}}),e._v(" "),n("v-spacer"),e._v(" "),n("v-btn",{directives:[{name:"tooltip",rawName:"v-tooltip:top",value:{html:"details"},expression:"{ html: 'details' }",arg:"top"}],attrs:{icon:""},on:{click:function(t){e.details.showDetails=!e.details.showDetails}}},[e.details?n("v-icon",[e._v(e._s(e.details.showDetails?"keyboard_arrow_up":"keyboard_arrow_down"))]):e._e()],1)],1):e._e()],1)},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("form",[n("v-flex",{staticClass:"text-xs-center text-md-left card-text",attrs:{xs12:""}},[e._l(e.form.inputs,function(t){return n("v-text-field",{attrs:{label:t.label,"multi-line":t.multiline,rules:[e.rules.required],max:t.max,counter:""},model:{value:t.model,callback:function(e){t.model=e},expression:"input.model"}})}),e._v(" "),n("v-btn",{attrs:{type:"submit",primary:""},on:{click:function(t){t.preventDefault(),e.form.action.click(t)}}},[e._v(e._s(e.form.action.label)+" "),n("v-icon",{attrs:{right:"",dark:""}},[e._v(e._s(e.form.action.icon))])],1)],2)],1)},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-card-title",[n("div",{staticClass:"text-xs-center text-md-left card-content"},[n("alex-card-content",{attrs:{content:e.body}},[e._t("default")],2)],1)])},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-flex",{attrs:{xs12:""}},[e.details.showDetails?n("v-divider"):e._e(),e._v(" "),n("v-slide-y-transition",[n("v-card-text",{directives:[{name:"show",rawName:"v-show",value:e.details.showDetails,expression:"details.showDetails"}],staticClass:"text-xs-bottom"},[n("alex-card-content",{attrs:{content:e.details}})],1)],1)],1)},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("span",[e._l(e.actions,function(t){return n("v-btn",{class:[e.actionTextColor,e.buttonClasses],attrs:{flat:"",href:t.href,to:t.link}},[e._v("\n    "+e._s(t.label)+"\n    "),n("v-icon",{staticClass:"info--text",attrs:{right:""}},[e._v(e._s(t.icon||"keyboard_arrow_right"))])],1)}),e._v(" "),n("alex-dropdown-menu",{class:e.menuClasses,attrs:{actions:e.actions}})],2)},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-menu",{attrs:{"offset-y":""}},[n("v-btn",{staticClass:"info--text",attrs:{dark:"",flat:""},slot:"activator"},[e._v("\n    Actions\n    "),n("v-icon",{staticClass:"info--text",attrs:{right:""}},[e._v("keyboard_arrow_down")])],1),e._v(" "),n("v-list",e._l(e.actions,function(t){return n("v-list-tile",{key:t.label},[n("v-list-tile-title",[t.link?n("router-link",{class:e.actionTextColor,attrs:{to:t.link}},[e._v("\n          "+e._s(t.label)+"\n        ")]):e._e(),e._v(" "),t.href?n("a",{class:e.actionTextColor,attrs:{href:t.href}},[e._v("\n          "+e._s(t.label)+"\n        ")]):e._e()],1)],1)}))],1)},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-toolbar",{class:e.toolbar.color,attrs:{dark:""}},[n("v-toolbar-title",[e._v(e._s(e.toolbar.title))]),e._v(" "),n("v-spacer"),e._v(" "),n("v-btn",{attrs:{dark:"",icon:""}},[n("v-icon",[e._v("more_vert")])],1)],1)},staticRenderFns:[]}},,,function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(236),r=n.n(o);t.default={data:function(){return{cards:[{name:"ignite",media:{title:"Ignite - online web game",src:"/static/images/projects/ignite/preview-min.png",flex:"xs12",height:"200px"},body:{title:"Ignite - online web game",summary:"Operation ignition is a online web base real time multiplayer, RPG game. Ignite is played from a 2D top down camera, with dynamically generated terrain. (WIP) Our game encourages teamwork with 9 unique classes, guilds, and party system.",buttons:[]},details:{showDetails:!1,chips:[{label:"NodeJS",icon:"device_hub",color:"green"},{label:"AngularJS",icon:"pageview",color:"red"},{label:"SocketJS",icon:"rss_feed",color:"blue"},{label:"TravisCI",icon:"rss_feed",color:"amber"},{label:"PhaserJS",icon:"videogame_asset",color:"purple"}],buttons:[{label:"Details",link:"/projects/ignite",icon:"link"}]},actions:[{label:"Go to ignite",href:"http://ignite.zapto.org"},{label:"View on Github",href:"http://ignite.zapto.org",icon:"code"}]},{name:"mazeproject",media:{title:"Random maze generation project",src:"/static/images/projects/maze-project/preview-full-min.png",flex:"xs12",height:"200px"},body:{title:"Random maze generation project",summary:"My grade 12 Computer Science project featuring perfect maze random generation and a simple recursive backtracker solution. This project was written in Java using the growing tree algorithm. It also features many Object oriented programming techniques like inheritance and polymorphism.",buttons:[]},details:{showDetails:!1,chips:[{label:"Java",icon:"computer",color:"red"},{label:"OOP",icon:"extension",color:"blue"},{label:"Growing tree algorithm",icon:"call_split",color:"green"}],buttons:[{label:"More on perfect mazes",href:"http://www.astrolog.org/labyrnth/algrithm.htm",icon:"link"}]},actions:[{label:"View on github",href:"https://github.com/CynicalBird/mazeproject",icon:"code"},{label:"Download Jar",href:"https://github.com/CynicalBird/mazeproject/releases",icon:"cloud_download"}]},{name:"stock-trader-app",media:{title:"Stock trader web app",color:"secondary",icon:{size:"x-large",name:"swap_horiz"},flex:"xs12",height:"200px"},body:{title:"Stock trader web app",summary:"You can buy and sell stocks - App is hosted with Heroku free dynos first loads may be slower than expected."},details:{showDetails:!1,chips:[{label:"VueJS",icon:"pageview",color:"teal"},{label:"Animations",icon:"directions_run",color:"orange"},{label:"Vuex",icon:"memory",color:"light-blue"},{label:"Vuetify",icon:"star",color:"blue"},{label:"Heroku",icon:"cloud",color:"purple"}]},actions:[{label:"Go to stock trading app",href:"https://alex-stock-trading.herokuapp.com"},{label:"View on github",href:"https://github.com/aa-ng/StockTrader",icon:"code"}]},{name:"noteapp",media:{title:"Note taking web app",color:"accent",icon:{size:"x-large",name:"note"},flex:"xs12",height:"200px"},body:{title:"Note taking web app",summary:"A simple note taking app using VueJS - WIP"},details:{showDetails:!1,chips:[{label:"VueJS",icon:"pageview",color:"teal"},{label:"Animations",icon:"directions_run",color:"orange"},{label:"Vuetify",icon:"star",color:"blue"}]},actions:[{label:"Go to note taking app",link:"/projects/webdev/notes"},{label:"View on github",href:"https://github.com/aa-ng/portfolio-website-front/blob/master/src/components/pages/projects/webdev/Notes.vue",icon:"code"}]},{name:"SvgAnimation",media:{title:"SVG Animation",icon:{size:"x-large",name:"border_color"},flex:"xs12",height:"200px"},body:{title:"SVG Animation / Manipulation",summary:"Adding animations to a SVG image"},actions:[{label:"View",link:"/projects/webdev/svg-animation"},{label:"View on github",href:"https://github.com/aa-ng/portfolio-website-front/blob/master/static/images/logos/chrome.svg?short_path=af42474#L6-L38",icon:"code"}]}]}},components:{"alex-presentation-cards":r.a}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(235),r=n.n(o);t.default={components:{"alex-card":r.a},data:function(){return{map:{}}},created:function(){}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(236),r=n.n(o);t.default={data:function(){return{maxNotes:3,currentNote:{label:"Note",required:!0,model:"",max:110,multiline:!0},notes:[]}},methods:{saveNote:function(){console.log(this.currentNote.model.length>0),this.currentNote.model.length>0&&this.notes.length<this.maxNotes?(this.notes.push({note:this.currentNote.model,model:!1,action:this.deleteNote}),this.currentNote.model=""):this.notes.length===this.maxNotes?alert("Maximum note space exceeded"):alert("Can not save empty note")},deleteNote:function(e){this.notes.length>0&&this.notes.splice(this.notes.indexOf(e),1)}},computed:{progress:function(){return{value:Math.floor(this.notes.length/this.maxNotes*100),width:15,size:100}},cards:function(){return[{toolbar:{title:"Notes overview",color:"accent"},body:{flex:12,title:"Notes app",summary:"Welcome to my notes app!",textalign:"text-xs-center",progress:this.progress}},{toolbar:{title:"Add a note",color:"accent"},body:{flex:12,title:"Add a note",form:{inputs:[this.currentNote],action:{label:"Save note",icon:"save",click:this.saveNote}}}},{toolbar:{title:"Edit saved notes",color:"accent"},body:{flex:12,list:{title:"Saved notes",tiles:this.notes},buttons:[{label:"Delete selected notes",action:"test"}]}}]}},components:{"alex-note-cards":r.a}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:{primaryDrawer:{type:Object,default:{model:!0,type:"persistent",clipped:!1,floating:!1,mini:!1}},drawers:{type:Array,default:["Permanent","Persistent","Temporary"]},footer:{type:Object,default:{fixed:!1}},theme:{type:Object,default:{dark:!0}}},computed:{themeLabel:function(){return!0===this.theme.dark?"Dark":"Light"}}}},,,function(e,t,n){t=e.exports=n(232)(!0),t.push([e.i,".container[data-v-019f5e48]{padding:16px 8px}","",{version:3,sources:["/Users/alexng/WebstormProjects/portfolio-website/src/components/pages/Projects.vue"],names:[],mappings:"AACA,4BAA8B,gBAAkB,CAC/C",file:"Projects.vue",sourcesContent:["\n.container[data-v-019f5e48] { padding: 16px 8px;\n}\n"],sourceRoot:""}])},function(e,t,n){t=e.exports=n(232)(!0),t.push([e.i,"a.footer[data-v-0597d35b],p.footer[data-v-0597d35b]{background-color:transparent}","",{version:3,sources:["/Users/alexng/WebstormProjects/portfolio-website/src/components/pages/projects/webdev/SvgAnimation.vue"],names:[],mappings:"AACA,oDAAuD,4BAA8B,CACpF",file:"SvgAnimation.vue",sourcesContent:["\np.footer[data-v-0597d35b], a.footer[data-v-0597d35b] { background-color: transparent;\n}\n"],sourceRoot:""}])},,,,function(e,t,n){t=e.exports=n(232)(!0),t.push([e.i,".container{padding:16px 8px}","",{version:3,sources:["/Users/alexng/WebstormProjects/portfolio-website/src/components/pages/projects/webdev/Notes.vue"],names:[],mappings:"AACA,WAAa,gBAAkB,CAC9B",file:"Notes.vue",sourcesContent:["\n.container { padding: 16px 8px;\n}\n"],sourceRoot:""}])},function(e,t,n){t=e.exports=n(232)(!0),t.push([e.i,"#map[data-v-de598fe6]{height:200px;background-color:#000}.map-container[data-v-de598fe6]{width:100%;height:100%}body[data-v-de598fe6],html[data-v-de598fe6]{height:100%;margin:0;padding:0}","",{version:3,sources:["/Users/alexng/WebstormProjects/portfolio-website/src/components/pages/projects/Ignite.vue"],names:[],mappings:"AAsCA,sBACE,aAAc,AACd,qBAAwB,CACzB,AACD,gCACE,WAAY,AACZ,WAAa,CACd,AAED,4CACE,YAAa,AACb,SAAU,AACV,SAAW,CACZ",file:"Ignite.vue",sourcesContent:["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/* Always set the map height explicitly to define the size of the div\n * element that contains the map. */\n#map[data-v-de598fe6] {\n  height: 200px;\n  background-color: black;\n}\n.map-container[data-v-de598fe6] {\n  width: 100%;\n  height: 100%;\n}\n/* Optional: Makes the sample page fill the window. */\nhtml[data-v-de598fe6], body[data-v-de598fe6] {\n  height: 100%;\n  margin: 0;\n  padding: 0;\n}\n"],sourceRoot:""}])},,function(e,t,n){var o=n(299);"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);n(233)("5e397337",o,!0)},function(e,t,n){var o=n(300);"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);n(233)("61fd50ae",o,!0)},,,,function(e,t,n){var o=n(304);"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);n(233)("52ad614a",o,!0)},function(e,t,n){var o=n(305);"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);n(233)("76cba8f8",o,!0)},,,,function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",[n("v-layout",{attrs:{"align-center":"","justify-center":"",row:"",wrap:""}},[n("v-flex",{attrs:{xs12:"",md10:""}},[n("v-layout",{attrs:{column:""}},[n("v-container",{attrs:{"grid-list-md":""}},[n("alex-presentation-cards",{attrs:{cards:e.cards}})],1)],1)],1)],1)],1)},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",[n("object",{staticClass:"logo my-3",attrs:{type:"image/svg+xml",data:"/static/images/logos/chrome.svg"}}),e._v(" "),n("p",{staticClass:"footer"},[e._v("Icon By "),n("a",{staticClass:"footer",attrs:{href:"http://www.flaticon.com/authors/pixel-buddha"}},[e._v("Pixel Budda")])])])},staticRenderFns:[]}},,,function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-card",[n("v-card-text",[n("v-layout",{attrs:{row:"",wrap:""}},[n("v-flex",{attrs:{xs12:"",md6:"","mt-1":""}},[n("span",[e._v("Theme")]),e._v(" "),n("v-switch",{attrs:{primary:"",label:e.themeLabel,color:"accent"},model:{value:e.theme.dark,callback:function(t){e.theme.dark=t},expression:"theme.dark"}})],1),e._v(" "),n("v-flex",{attrs:{xs12:"",md6:""}},[n("span",[e._v("Drawer")]),e._v(" "),e._l(e.drawers,function(t){return n("v-radio",{key:t,attrs:{primary:"",label:t,value:t.toLowerCase(),color:"accent"},model:{value:e.primaryDrawer.type,callback:function(t){e.primaryDrawer.type=t},expression:"primaryDrawer.type"}})}),e._v(" "),n("v-switch",{attrs:{label:"Clipped",primary:"",color:"accent"},model:{value:e.primaryDrawer.clipped,callback:function(t){e.primaryDrawer.clipped=t},expression:"primaryDrawer.clipped"}}),e._v(" "),n("v-switch",{attrs:{label:"Floating",primary:"",color:"accent"},model:{value:e.primaryDrawer.floating,callback:function(t){e.primaryDrawer.floating=t},expression:"primaryDrawer.floating"}}),e._v(" "),n("v-switch",{attrs:{label:"Mini",primary:"",color:"accent"},model:{value:e.primaryDrawer.mini,callback:function(t){e.primaryDrawer.mini=t},expression:"primaryDrawer.mini"}})],2),e._v(" "),n("v-flex",{attrs:{xs12:"",md6:""}},[n("span",[e._v("Footer")]),e._v(" "),n("v-switch",{attrs:{label:"Fixed",primary:""},model:{value:e.footer.fixed,callback:function(t){e.footer.fixed=t},expression:"footer.fixed"}})],1)],1)],1),e._v(" "),n("v-card-actions",[n("v-spacer"),e._v(" "),n("v-btn",{attrs:{flat:""}},[e._v("Cancel")]),e._v(" "),n("v-btn",{attrs:{flat:"",primary:""}},[e._v("Submit")])],1)],1)},staticRenderFns:[]}},,function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",[n("v-layout",{attrs:{"align-center":"","justify-center":"",row:"",wrap:""}},[n("v-flex",{attrs:{xs12:"",md10:""}},[n("v-layout",{attrs:{column:""}},[n("v-container",{attrs:{"grid-list-md":""}},[n("alex-note-cards",{attrs:{cards:e.cards}})],1)],1)],1)],1)],1)},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",[n("v-layout",{attrs:{"align-center":"","justify-center":"",row:"",wrap:""}},[n("v-flex",{attrs:{xs12:"",md10:""}},[n("v-layout",{attrs:{column:""}},[n("v-container",{attrs:{"grid-list-md":""}},[n("v-layout",{staticClass:"mt-5",attrs:{row:"",wrap:""}},[n("alex-card",[n("h1",[e._v("Hello world")])])],1)],1)],1)],1)],1)],1)},staticRenderFns:[]}}]));
//# sourceMappingURL=0.6c8cf0a6d79718dd789f.js.map