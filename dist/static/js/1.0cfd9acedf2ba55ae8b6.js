webpackJsonp([1],{221:function(t,e,n){n(630);var a=n(10)(n(608),n(641),"data-v-62f3307e",null);t.exports=a.exports},537:function(t,e,n){n(573);var a=n(10)(n(546),n(593),"data-v-327d98b3",null);t.exports=a.exports},538:function(t,e,n){var a=n(10)(n(549),n(588),null,null);t.exports=a.exports},539:function(t,e,n){var a=n(10)(n(556),n(600),null,null);t.exports=a.exports},540:function(t,e,n){var a=n(10)(n(557),n(596),null,null);t.exports=a.exports},541:function(t,e,n){var a=n(10)(n(559),n(594),null,null);t.exports=a.exports},542:function(t,e,n){var a=n(10)(n(561),n(590),null,null);t.exports=a.exports},543:function(t,e,n){var a=n(10)(n(563),n(595),null,null);t.exports=a.exports},544:function(t,e,n){var a=n(10)(n(564),n(591),null,null);t.exports=a.exports},545:function(t,e,n){n(572);var a=n(10)(n(553),n(592),"data-v-20e11ed0",null);t.exports=a.exports},546:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a,i=n(22),o=n.n(i),r=n(582),s=n.n(r),c=n(579),l=n.n(c),d=n(581),u=n.n(d),f=n(580),p=n.n(f),v=n(578),m=n.n(v),b=n(54);e.default={props:{card:{type:Object,default:function(){return{}}}},computed:{cardBodyFlex:function(){return this.card.body.flex||"xs12"},cardMediaFlex:function(){return this.card.media?this.card.media.flex||"xs12":"xs12"},cardMediaHeight:function(){return this.card.media?"min-height: "+(this.card.media.height||"200px"):"200px"}},watch:{cardBodyHeight:function(t){return t}},components:(a={},o()(a,b.a.cardToolbar,s.a),o()(a,b.a.cardBody,l.a),o()(a,b.a.cardMedia,u.a),o()(a,b.a.cardActions,m.a),o()(a,b.a.cardDetails,p.a),a)}},547:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(583),i=n.n(a);e.default={props:{actions:{type:Array,required:!0},details:{type:Object}},components:{"alex-details-button":i.a}}},548:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a,i=n(22),o=n.n(i),r=n(587),s=n.n(r),c=n(538),l=n.n(c),d=n(544),u=n.n(d),f=n(541),p=n.n(f),v=n(540),m=n.n(v),b=n(539),x=n.n(b),y=n(543),g=n.n(y),_=n(542),h=n.n(_),A=n(54);e.default={props:{body:{type:Object}},computed:{bodyPadding:function(){return{padding:this.body.padding}}},methods:{componentBottomMargin:function(t){return{"margin-bottom":t===this.body.components.length-1?"0px":"10px"}}},components:(a={},o()(a,A.a.alert,s.a),o()(a,A.a.cardContent,l.a),o()(a,A.a.list,p.a),o()(a,A.a.chips,m.a),o()(a,A.a.form,x.a),o()(a,A.a.progressRotate,g.a),o()(a,A.a.article,u.a),o()(a,A.a.map,h.a),a)}},549:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{content:{type:Object,required:!0}},computed:{containerPadding:function(){return{padding:this.content.padding||"0"}}}}},550:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a,i=n(22),o=n.n(i),r=n(538),s=n.n(r),c=n(584),l=n.n(c),d=n(544),u=n.n(d),f=n(541),p=n.n(f),v=n(540),m=n.n(v),b=n(539),x=n.n(b),y=n(543),g=n.n(y),_=n(542),h=n.n(_),A=n(54);e.default={props:{details:{type:Object}},components:(a={},o()(a,A.a.cardContent,s.a),o()(a,A.a.button,l.a),o()(a,A.a.list,p.a),o()(a,A.a.chips,m.a),o()(a,A.a.form,x.a),o()(a,A.a.progressRotate,g.a),o()(a,A.a.article,u.a),o()(a,A.a.map,h.a),a)}},551:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{media:{type:Object}},data:function(){return{mediaStyle:{height:"100%",position:"absolute",top:0,left:0,right:0,bottom:0},mediaTextClasses:"headline ml-2 white--text"}},computed:{mediaClasses:function(){return this.media?this.media.color||"primary":"accent"},source:function(){return this.media?this.media.src:""},contained:function(){return this.media?this.media.contain:""},icon:function(){return this.media?this.media.icon:""},iconSize:function(){return this.media?"icon--"+this.media.icon.size||"icon--x-large":""},backgroundSource:function(){return'url("'+this.source+'")'},backgroundSize:function(){return this.contained?"contain":"cover"},mediaBackgroundStyle:function(){return{"background-image":this.backgroundSource,"background-size":this.backgroundSize,"background-position":"center center","background-repeat":"no-repeat no-repeat"}},mediaTitleStyle:function(){return{position:"absolute",bottom:"10px",left:0}}}}},552:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{toolbar:{type:Object}}}},553:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(22),i=n.n(a),o=n(537),r=n.n(o),s=n(577),c=(n.n(s),n(54));e.default={props:{cards:{type:[Array,Object],required:!0}},components:i()({},c.a.card,r.a),computed:{cardContainerFlex:function(){return this.card.flex?i()({},"sm"+this.card.flex+" xs12",!0):{xs12:!0}}},mounted:function(){s({reset:!1}).reveal(".card",{duration:200,delay:100,scale:.9,easing:"cubic-bezier(0.6, 0.2, 0.1, 1)",mobile:!0,useDelay:"once",opacity:0})}}},554:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(22),i=n.n(a),o=n(55),r=n.n(o),s=n(585),c=n.n(s),l=n(54),d=n(44),u=n(11);e.default={computed:r()({buttonClasses:function(){return this.actions.length>1?"hidden-xs-only":""},menuClasses:function(){return this.actions.length>1?"hidden-sm-and-up":"hidden-xs-only hidden-sm-and-up"}},n.i(d.a)([u.e]),{actionTextColor:function(){return this[u.e].actionColor+"--text"}}),props:{actions:{type:Array,required:!0}},components:i()({},l.a.dropdownMenu,c.a)}},555:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{data:{type:[Object,Array]}}}},556:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{data:{type:[Object,Array]}},data:function(){return{email:"",rules:{required:function(t){return!!t||"Required."}}}}}},557:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{data:{type:Array,required:!0}}}},558:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(55),i=n.n(a),o=n(44),r=n(11);e.default={computed:i()({},n.i(o.a)({theme:[r.e]}),{actionTextColor:function(){return this.theme.actionColor+"--text"}}),props:{actions:{type:Array,required:!0}}}},559:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(22),i=n.n(a),o=n(586),r=n.n(o),s=n(54);e.default={props:{data:{type:[Array,Object]}},components:i()({},s.a.listTile,r.a)}},560:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{tile:{required:!0}}}},561:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{options:{disableDefaultUI:!0,zoomControl:!1,draggable:!1}}},props:{data:{type:[Object]}}}},562:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(22),i=n.n(a);e.default={methods:{onClose:function(){this.$emit("dismissed")}},computed:{alertType:function(){return this.data.type?i()({},this.data.type,!0):{info:!0}}},props:["data"]}},563:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{data:{type:Object}}}},564:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{data:{type:[Object]}}}},565:function(t,e,n){e=t.exports=n(535)(!0),e.push([t.i,".layout .flex.md3[data-v-05fd39be]{width:25%}div.card__media[data-v-05fd39be]{height:100%;min-height:100px}div.media-icon[data-v-05fd39be]{margin:auto;text-align:center;padding:0}sm6[data-v-05fd39be]{width:33.333%}div.flex>span[data-v-05fd39be]{text-shadow:-1px 0 rgba(60,60,60,.8),0 1px rgba(60,60,60,.8),1px 0 rgba(60,60,60,.8),0 -1px rgba(60,60,60,.8);text-align:center}.fill[data-v-05fd39be]{position:absolute;left:0;right:0;top:0;bottom:0}","",{version:3,sources:["/Users/alexng/WebstormProjects/portfolio-website/src/components/cards/CardMedia.vue"],names:[],mappings:"AACA,mCACE,SAAW,CACZ,AACD,iCACE,YAAa,AACb,gBAAkB,CACnB,AACD,gCACE,YAAa,AACb,kBAAmB,AACnB,SAAa,CACd,AACD,qBACE,aAAe,CAChB,AACD,+BACE,8GAAkI,AAClI,iBAAmB,CACpB,AACD,uBACE,kBAAmB,AACnB,OAAQ,AACR,QAAS,AACT,MAAO,AACP,QAAU,CACX",file:"CardMedia.vue",sourcesContent:["\n.layout .flex.md3[data-v-05fd39be] {\n  width: 25%;\n}\ndiv.card__media[data-v-05fd39be] {\n  height: 100%;\n  min-height: 100px;\n}\ndiv.media-icon[data-v-05fd39be] {\n  margin: auto;\n  text-align: center;\n  padding: 0px;\n}\nsm6[data-v-05fd39be] {\n  width: 33.333%;\n}\ndiv.flex > span[data-v-05fd39be] {\n  text-shadow: -1px 0 rgba(60, 60, 60, 0.8), 0 1px rgba(60, 60, 60, 0.8), 1px 0 rgba(60, 60, 60, 0.8), 0 -1px rgba(60, 60, 60, 0.8);\n  text-align: center;\n}\n.fill[data-v-05fd39be] {\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n}\n"],sourceRoot:""}])},566:function(t,e,n){e=t.exports=n(535)(!0),e.push([t.i,"div.flex.xs12[data-v-20e11ed0]{display:inline-block;margin:0 0 1em}","",{version:3,sources:["/Users/alexng/WebstormProjects/portfolio-website/src/components/cards/Cards.vue"],names:[],mappings:"AACA,+BACE,qBAAsB,AACtB,cAAgB,CACjB",file:"Cards.vue",sourcesContent:["\ndiv.flex.xs12[data-v-20e11ed0] {\n  display: inline-block;\n  margin: 0 0 1em;\n}\n"],sourceRoot:""}])},567:function(t,e,n){e=t.exports=n(535)(!0),e.push([t.i,"div.card[data-v-327d98b3]{max-width:700px;margin:auto}div.container[data-v-327d98b3],div.flex[data-v-327d98b3],div.row[data-v-327d98b3]{padding:0;margin:0}div.card__actions[data-v-327d98b3]{margin-top:auto}","",{version:3,sources:["/Users/alexng/WebstormProjects/portfolio-website/src/components/cards/Card.vue"],names:[],mappings:"AACA,0BACE,gBAAiB,AACjB,WAAa,CACd,AACD,kFACE,UAAa,AACb,QAAY,CACb,AACD,mCAAqC,eAAiB,CACrD",file:"Card.vue",sourcesContent:["\ndiv.card[data-v-327d98b3] {\n  max-width: 700px;\n  margin: auto;\n}\ndiv.container[data-v-327d98b3], div.row[data-v-327d98b3], div.flex[data-v-327d98b3] {\n  padding: 0px;\n  margin: 0px;\n}\ndiv.card__actions[data-v-327d98b3] { margin-top: auto;\n}\n"],sourceRoot:""}])},568:function(t,e,n){e=t.exports=n(535)(!0),e.push([t.i,"div.alert{text-align:left}","",{version:3,sources:["/Users/alexng/WebstormProjects/portfolio-website/src/components/messages/Alert.vue"],names:[],mappings:"AACA,UACE,eAAiB,CAClB",file:"Alert.vue",sourcesContent:["\ndiv.alert {\n  text-align: left;\n}\n"],sourceRoot:""}])},569:function(t,e,n){e=t.exports=n(535)(!0),e.push([t.i,"p{margin-bottom:0}","",{version:3,sources:["/Users/alexng/WebstormProjects/portfolio-website/src/components/lists/Tile.vue"],names:[],mappings:"AACA,EACE,eAAmB,CACpB",file:"Tile.vue",sourcesContent:["\np {\n  margin-bottom: 0px;\n}\n"],sourceRoot:""}])},570:function(t,e,n){e=t.exports=n(535)(!0),e.push([t.i,"div.card-content[data-v-b973e016]{margin:auto;width:100%}@media only screen and (min-width:992px){div.card-content[data-v-b973e016]{margin:5px}}","",{version:3,sources:["/Users/alexng/WebstormProjects/portfolio-website/src/components/cards/CardBody.vue"],names:[],mappings:"AAkEA,kCAAoC,YAAa,AAAC,UAAY,CAC7D,AAED,yCACA,kCAAoC,UAAY,CAC/C,CACA",file:"CardBody.vue",sourcesContent:["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/* Extra small devices */\ndiv.card-content[data-v-b973e016] { margin: auto; width: 100%;\n}\n/* Medium devices */\n@media only screen and (min-width: 992px) {\ndiv.card-content[data-v-b973e016] { margin: 5px;\n}\n}\n"],sourceRoot:""}])},571:function(t,e,n){var a=n(565);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);n(536)("6a6dfa45",a,!0)},572:function(t,e,n){var a=n(566);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);n(536)("50a61418",a,!0)},573:function(t,e,n){var a=n(567);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);n(536)("09f43fca",a,!0)},574:function(t,e,n){var a=n(568);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);n(536)("88f21fba",a,!0)},575:function(t,e,n){var a=n(569);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);n(536)("00dd7242",a,!0)},576:function(t,e,n){var a=n(570);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);n(536)("db7ed480",a,!0)},577:function(t,e,n){var a;!function(){"use strict";function i(t){return void 0===this||Object.getPrototypeOf(this)!==i.prototype?new i(t):(j=this,j.version="3.3.6",j.tools=new O,j.isSupported()?(j.tools.extend(j.defaults,t||{}),j.defaults.container=o(j.defaults),j.store={elements:{},containers:[]},j.sequences={},j.history=[],j.uid=0,j.initialized=!1):"undefined"!=typeof console&&null!==console&&console.log("ScrollReveal is not supported in this browser."),j)}function o(t){if(t&&t.container){if("string"==typeof t.container)return window.document.documentElement.querySelector(t.container);if(j.tools.isNode(t.container))return t.container;console.log('ScrollReveal: invalid container "'+t.container+'" provided.'),console.log("ScrollReveal: falling back to default container.")}return j.defaults.container}function r(t,e){return"string"==typeof t?Array.prototype.slice.call(e.querySelectorAll(t)):j.tools.isNode(t)?[t]:j.tools.isNodeList(t)?Array.prototype.slice.call(t):[]}function s(){return++j.uid}function c(t,e,n){e.container&&(e.container=n),t.config?t.config=j.tools.extendClone(t.config,e):t.config=j.tools.extendClone(j.defaults,e),"top"===t.config.origin||"bottom"===t.config.origin?t.config.axis="Y":t.config.axis="X"}function l(t){var e=window.getComputedStyle(t.domEl);t.styles||(t.styles={transition:{},transform:{},computed:{}},t.styles.inline=t.domEl.getAttribute("style")||"",t.styles.inline+="; visibility: visible; ",t.styles.computed.opacity=e.opacity,e.transition&&"all 0s ease 0s"!==e.transition?t.styles.computed.transition=e.transition+", ":t.styles.computed.transition=""),t.styles.transition.instant=d(t,0),t.styles.transition.delayed=d(t,t.config.delay),t.styles.transform.initial=" -webkit-transform:",t.styles.transform.target=" -webkit-transform:",u(t),t.styles.transform.initial+="transform:",t.styles.transform.target+="transform:",u(t)}function d(t,e){var n=t.config;return"-webkit-transition: "+t.styles.computed.transition+"-webkit-transform "+n.duration/1e3+"s "+n.easing+" "+e/1e3+"s, opacity "+n.duration/1e3+"s "+n.easing+" "+e/1e3+"s; transition: "+t.styles.computed.transition+"transform "+n.duration/1e3+"s "+n.easing+" "+e/1e3+"s, opacity "+n.duration/1e3+"s "+n.easing+" "+e/1e3+"s; "}function u(t){var e,n=t.config,a=t.styles.transform;e="top"===n.origin||"left"===n.origin?/^-/.test(n.distance)?n.distance.substr(1):"-"+n.distance:n.distance,parseInt(n.distance)&&(a.initial+=" translate"+n.axis+"("+e+")",a.target+=" translate"+n.axis+"(0)"),n.scale&&(a.initial+=" scale("+n.scale+")",a.target+=" scale(1)"),n.rotate.x&&(a.initial+=" rotateX("+n.rotate.x+"deg)",a.target+=" rotateX(0)"),n.rotate.y&&(a.initial+=" rotateY("+n.rotate.y+"deg)",a.target+=" rotateY(0)"),n.rotate.z&&(a.initial+=" rotateZ("+n.rotate.z+"deg)",a.target+=" rotateZ(0)"),a.initial+="; opacity: "+n.opacity+";",a.target+="; opacity: "+t.styles.computed.opacity+";"}function f(t){var e=t.config.container;e&&-1===j.store.containers.indexOf(e)&&j.store.containers.push(t.config.container),j.store.elements[t.id]=t}function p(t,e,n){var a={target:t,config:e,interval:n};j.history.push(a)}function v(){if(j.isSupported()){x();for(var t=0;t<j.store.containers.length;t++)j.store.containers[t].addEventListener("scroll",m),j.store.containers[t].addEventListener("resize",m);j.initialized||(window.addEventListener("scroll",m),window.addEventListener("resize",m),j.initialized=!0)}return j}function m(){B(x)}function b(){var t,e,n,a;j.tools.forOwn(j.sequences,function(i){a=j.sequences[i],t=!1;for(var o=0;o<a.elemIds.length;o++)n=a.elemIds[o],e=j.store.elements[n],E(e)&&!t&&(t=!0);a.active=t})}function x(){var t,e;b(),j.tools.forOwn(j.store.elements,function(n){e=j.store.elements[n],t=h(e),_(e)?(e.config.beforeReveal(e.domEl),t?e.domEl.setAttribute("style",e.styles.inline+e.styles.transform.target+e.styles.transition.delayed):e.domEl.setAttribute("style",e.styles.inline+e.styles.transform.target+e.styles.transition.instant),g("reveal",e,t),e.revealing=!0,e.seen=!0,e.sequence&&y(e,t)):A(e)&&(e.config.beforeReset(e.domEl),e.domEl.setAttribute("style",e.styles.inline+e.styles.transform.initial+e.styles.transition.instant),g("reset",e),e.revealing=!1)})}function y(t,e){var n=0,a=0,i=j.sequences[t.sequence.id];i.blocked=!0,e&&"onload"===t.config.useDelay&&(a=t.config.delay),t.sequence.timer&&(n=Math.abs(t.sequence.timer.started-new Date),window.clearTimeout(t.sequence.timer)),t.sequence.timer={started:new Date},t.sequence.timer.clock=window.setTimeout(function(){i.blocked=!1,t.sequence.timer=null,m()},Math.abs(i.interval)+a-n)}function g(t,e,n){var a=0,i=0,o="after";switch(t){case"reveal":i=e.config.duration,n&&(i+=e.config.delay),o+="Reveal";break;case"reset":i=e.config.duration,o+="Reset"}e.timer&&(a=Math.abs(e.timer.started-new Date),window.clearTimeout(e.timer.clock)),e.timer={started:new Date},e.timer.clock=window.setTimeout(function(){e.config[o](e.domEl),e.timer=null},i-a)}function _(t){if(t.sequence){var e=j.sequences[t.sequence.id];return e.active&&!e.blocked&&!t.revealing&&!t.disabled}return E(t)&&!t.revealing&&!t.disabled}function h(t){var e=t.config.useDelay;return"always"===e||"onload"===e&&!j.initialized||"once"===e&&!t.seen}function A(t){if(t.sequence){return!j.sequences[t.sequence.id].active&&t.config.reset&&t.revealing&&!t.disabled}return!E(t)&&t.config.reset&&t.revealing&&!t.disabled}function C(t){return{width:t.clientWidth,height:t.clientHeight}}function w(t){if(t&&t!==window.document.documentElement){var e=k(t);return{x:t.scrollLeft+e.left,y:t.scrollTop+e.top}}return{x:window.pageXOffset,y:window.pageYOffset}}function k(t){var e=0,n=0,a=t.offsetHeight,i=t.offsetWidth;do{isNaN(t.offsetTop)||(e+=t.offsetTop),isNaN(t.offsetLeft)||(n+=t.offsetLeft),t=t.offsetParent}while(t);return{top:e,left:n,height:a,width:i}}function E(t){var e=k(t.domEl),n=C(t.config.container),a=w(t.config.container),i=t.config.viewFactor,o=e.height,r=e.width,s=e.top,c=e.left,l=s+o,d=c+r;return function(){var e=s+o*i,u=c+r*i,f=l-o*i,p=d-r*i,v=a.y+t.config.viewOffset.top,m=a.x+t.config.viewOffset.left,b=a.y-t.config.viewOffset.bottom+n.height,x=a.x-t.config.viewOffset.right+n.width;return e<b&&f>v&&u<x&&p>m}()||function(){return"fixed"===window.getComputedStyle(t.domEl).position}()}function O(){}var j,B;i.prototype.defaults={origin:"bottom",distance:"20px",duration:500,delay:0,rotate:{x:0,y:0,z:0},opacity:0,scale:.9,easing:"cubic-bezier(0.6, 0.2, 0.1, 1)",container:window.document.documentElement,mobile:!0,reset:!1,useDelay:"always",viewFactor:.2,viewOffset:{top:0,right:0,bottom:0,left:0},beforeReveal:function(t){},beforeReset:function(t){},afterReveal:function(t){},afterReset:function(t){}},i.prototype.isSupported=function(){var t=document.documentElement.style;return"WebkitTransition"in t&&"WebkitTransform"in t||"transition"in t&&"transform"in t},i.prototype.reveal=function(t,e,n,a){var i,d,u,m,b,x;if(void 0!==e&&"number"==typeof e?(n=e,e={}):void 0!==e&&null!==e||(e={}),i=o(e),d=r(t,i),!d.length)return console.log('ScrollReveal: reveal on "'+t+'" failed, no elements found.'),j;n&&"number"==typeof n&&(x=s(),b=j.sequences[x]={id:x,interval:n,elemIds:[],active:!1});for(var y=0;y<d.length;y++)m=d[y].getAttribute("data-sr-id"),m?u=j.store.elements[m]:(u={id:s(),domEl:d[y],seen:!1,revealing:!1},u.domEl.setAttribute("data-sr-id",u.id)),b&&(u.sequence={id:b.id,index:b.elemIds.length},b.elemIds.push(u.id)),c(u,e,i),l(u),f(u),j.tools.isMobile()&&!u.config.mobile||!j.isSupported()?(u.domEl.setAttribute("style",u.styles.inline),u.disabled=!0):u.revealing||u.domEl.setAttribute("style",u.styles.inline+u.styles.transform.initial);return!a&&j.isSupported()&&(p(t,e,n),j.initTimeout&&window.clearTimeout(j.initTimeout),j.initTimeout=window.setTimeout(v,0)),j},i.prototype.sync=function(){if(j.history.length&&j.isSupported()){for(var t=0;t<j.history.length;t++){var e=j.history[t];j.reveal(e.target,e.config,e.interval,!0)}v()}else console.log("ScrollReveal: sync failed, no reveals found.");return j},O.prototype.isObject=function(t){return null!==t&&"object"==typeof t&&t.constructor===Object},O.prototype.isNode=function(t){return"object"==typeof window.Node?t instanceof window.Node:t&&"object"==typeof t&&"number"==typeof t.nodeType&&"string"==typeof t.nodeName},O.prototype.isNodeList=function(t){var e=Object.prototype.toString.call(t),n=/^\[object (HTMLCollection|NodeList|Object)\]$/;return"object"==typeof window.NodeList?t instanceof window.NodeList:t&&"object"==typeof t&&n.test(e)&&"number"==typeof t.length&&(0===t.length||this.isNode(t[0]))},O.prototype.forOwn=function(t,e){if(!this.isObject(t))throw new TypeError('Expected "object", but received "'+typeof t+'".');for(var n in t)t.hasOwnProperty(n)&&e(n)},O.prototype.extend=function(t,e){return this.forOwn(e,function(n){this.isObject(e[n])?(t[n]&&this.isObject(t[n])||(t[n]={}),this.extend(t[n],e[n])):t[n]=e[n]}.bind(this)),t},O.prototype.extendClone=function(t,e){return this.extend(this.extend({},t),e)},O.prototype.isMobile=function(){return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)},B=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(t){window.setTimeout(t,1e3/60)},void 0!==(a=function(){return i}.call(e,n,e,t))&&(t.exports=a)}()},578:function(t,e,n){var a=n(10)(n(547),n(599),null,null);t.exports=a.exports},579:function(t,e,n){n(576);var a=n(10)(n(548),n(602),"data-v-b973e016",null);t.exports=a.exports},580:function(t,e,n){var a=n(10)(n(550),n(603),null,null);t.exports=a.exports},581:function(t,e,n){n(571);var a=n(10)(n(551),n(589),"data-v-05fd39be",null);t.exports=a.exports},582:function(t,e,n){var a=n(10)(n(552),n(606),null,null);t.exports=a.exports},583:function(t,e,n){var a=n(10)(n(554),n(604),null,null);t.exports=a.exports},584:function(t,e,n){var a=n(10)(n(555),n(601),null,null);t.exports=a.exports},585:function(t,e,n){var a=n(10)(n(558),n(605),null,null);t.exports=a.exports},586:function(t,e,n){n(575);var a=n(10)(n(560),n(598),null,null);t.exports=a.exports},587:function(t,e,n){n(574);var a=n(10)(n(562),n(597),null,null);t.exports=a.exports},588:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{style:[t.containerPadding]},["string"==typeof t.content?n("span",[t._v(t._s(t.content))]):n("div",{class:t.content.textalign||"text-xs-center text-md-left"},[t._t("default")],2)])},staticRenderFns:[]}},589:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.media?n("div",{class:t.mediaClasses+" card__media",style:t.mediaStyle},[n("div",{staticClass:"card__media__background",style:t.mediaBackgroundStyle}),t._v(" "),n("div",{staticClass:"card__media__content"},[n("v-container",{staticClass:"fill",attrs:{"fill-height":"",fluid:""}},[n("v-layout",{attrs:{"fill-height":"","pa-1":""}},[t.source?n("v-flex",{style:t.mediaTitleStyle,attrs:{xs12:"","align-end":"",flexbox:""}},[n("span",{class:t.mediaTextClasses},[t._v(t._s(t.media.title))])]):t._e(),t._v(" "),t.icon?n("v-container",{staticClass:"media-icon",attrs:{xs12:"","align-center":"","text-xs-center":""}},[n("v-icon",{class:t.iconSize,attrs:{dark:""}},[t._v("\n            "+t._s(t.media.icon.name)+"\n          ")]),t._v(" "),n("p",{class:t.mediaTextClasses},[t._v(t._s(t.media.title))])],1):t._e()],1)],1)],1)]):t._e()},staticRenderFns:[]}},590:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.data?n("gmap-map",{staticStyle:{width:"auto",height:"200px"},attrs:{"map-type-id":"terrain",options:t.options,center:t.data.position,draggable:!1,zoom:t.data.zoom}},[n("gmap-marker",{attrs:{position:t.data.position}})],1):t._e()},staticRenderFns:[]}},591:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",[t.data.title?n("span",{staticClass:"grey--text"},[t._v(t._s(t.data.title))]):t._e(),t.data.title?n("br"):t._e(),t._v(" "),t.data.paragraph?n("span",[t._v(t._s(t.data.paragraph))]):t._e(),t.data.paragraph?n("br"):t._e()])},staticRenderFns:[]}},592:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-layout",{attrs:{row:"",wrap:""}},t._l(t.cards,function(e,a){return n("v-flex",t._b({key:e.title},"v-flex",(i={},i["sm"+e.flex+" xs12"]=!0,i),!1),[n("alex-card",{attrs:{card:e}})],1);var i}))},staticRenderFns:[]}},593:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-card",{staticClass:"mb-1 elevation-6"},[t.card.toolbar?n("alex-card-toolbar",{attrs:{toolbar:t.card.toolbar}}):t._e(),t._v(" "),n("v-container",[n("v-layout",{attrs:{row:"",wrap:""}},[t.card.media?n("v-flex",{class:t.cardMediaFlex,staticStyle:{position:"relative"},style:t.cardMediaHeight},[n("alex-card-media",{attrs:{media:t.card.media}},[t._t("media")],2)],1):t._e(),t._v(" "),n("v-flex",{staticClass:"card-body",class:t.cardBodyFlex},[n("alex-card-body",{attrs:{body:t.card.body||{}}},[t._t("default")],2),t._v(" "),t.card&&t.card.actions?n("v-divider"):t._e(),t._v(" "),t.card&&t.card.actions?n("alex-card-actions",{attrs:{actions:t.card.actions,details:t.card.details}}):t._e()],1),t._v(" "),t.card&&t.card.details?n("alex-card-details",{attrs:{details:t.card.details}}):t._e()],1)],1)],1)},staticRenderFns:[]}},594:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-list",{attrs:{"two-line":"",subheader:""}},[n("v-subheader",[t._v(t._s(t.data.title))]),t._v(" "),t._l(t.data.tiles,function(t){return n("alex-list-tile",{key:t.note,attrs:{tile:t}})})],2)},staticRenderFns:[]}},595:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",[n("v-progress-circular",{staticClass:"info--text",attrs:{size:t.data.size,rotate:-90,width:t.data.width,value:t.data.value}},[t._v("\n    "+t._s(t.data.value)+" %\n  ")])],1)},staticRenderFns:[]}},596:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"text-xs-center text-md-left"},t._l(t.data,function(e){return n("v-chip",{key:e.label,staticClass:"white--text elevation-5",class:e.color},[n("v-avatar",{staticClass:"darken-4",class:e.color},[n("v-icon",[t._v(t._s(e.icon))])],1),t._v("\n    "+t._s(e.label)+"\n  ")],1)}))},staticRenderFns:[]}},597:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("v-alert",t._b({attrs:{value:!0},on:{input:t.onClose}},"v-alert",t.alertType,!1),[t._v("\n  "+t._s(t.data.message)+"\n")])},staticRenderFns:[]}},598:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-list-tile",{attrs:{avatar:""}},[n("v-list-tile-action",[n("v-checkbox",{staticClass:"primary--text",model:{value:t.tile.model,callback:function(e){t.tile.model=e},expression:"tile.model"}})],1),t._v(" "),n("v-list-tile-content",{on:{click:function(e){t.tile.action(t.tile)}}},[n("p",[t._v(t._s(t.tile.note))])])],1)},staticRenderFns:[]}},599:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-flex",{attrs:{xs12:""}},[t.actions?n("v-card-actions",[n("alex-details-button",{attrs:{actions:t.actions}}),t._v(" "),n("v-spacer"),t._v(" "),t.details?n("v-btn",{directives:[{name:"tooltip",rawName:"v-tooltip:top",value:{html:"details"},expression:"{ html: 'details' }",arg:"top"}],attrs:{icon:""},on:{click:function(e){t.details.showDetails=!t.details.showDetails}}},[n("v-icon",[t._v(t._s(t.details.showDetails?"keyboard_arrow_up":"keyboard_arrow_down"))])],1):t._e()],1):t._e()],1)},staticRenderFns:[]}},600:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("form",[n("v-flex",{staticClass:"text-xs-center text-md-left card-text",attrs:{xs12:""}},[t._l(t.data.inputs,function(e){return n("v-text-field",{key:e.label,attrs:{label:e.label,"multi-line":e.multiline,rules:[t.rules.required],max:e.max,counter:""},model:{value:e.model,callback:function(t){e.model=t},expression:"input.model"}})}),t._v(" "),n("v-btn",{attrs:{type:"submit",primary:""},on:{click:function(e){e.preventDefault(),t.data.action.click(e)}}},[t._v(t._s(t.data.action.label)+" "),n("v-icon",{attrs:{right:"",dark:""}},[t._v(t._s(t.data.action.icon))])],1)],2)],1)},staticRenderFns:[]}},601:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",t._l(t.data,function(e){return t.data?n("v-btn",{key:e.label,attrs:{outline:"",info:"",dark:"",to:e.link,href:e.href}},[t._v("\n  "+t._s(e.label)+"\n  "),n("v-icon",{staticClass:"info--text",attrs:{right:""}},[t._v(t._s(e.icon||"link"))])],1):t._e()}))},staticRenderFns:[]}},602:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-card-title",{style:[t.bodyPadding]},[n("div",{staticClass:"text-xs-center text-md-left card-content",staticStyle:{margin:"0"}},[n("alex-card-content",{attrs:{content:t.body}},t._l(t.body.components,function(e,a){return n(e.is,{key:a,tag:"component",style:t.componentBottomMargin(a),attrs:{data:e.data}})}))],1)])},staticRenderFns:[]}},603:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-flex",{attrs:{xs12:""}},[t.details.showDetails?n("v-divider"):t._e(),t._v(" "),n("v-slide-y-transition",[n("v-card-text",{directives:[{name:"show",rawName:"v-show",value:t.details.showDetails,expression:"details.showDetails"}],staticClass:"text-xs-bottom"},[n("alex-card-content",{attrs:{content:t.details}},t._l(t.details.components,function(t,e){return n(t.is,{key:e,tag:"component",attrs:{data:t.data}})}))],1)],1)],1)},staticRenderFns:[]}},604:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",[t._l(t.actions,function(e){return n("v-btn",{key:e.label,class:[t.actionTextColor,t.buttonClasses],attrs:{flat:"",href:e.href,to:e.link}},[t._v("\n    "+t._s(e.label)+"\n    "),n("v-icon",{staticClass:"info--text",attrs:{right:""}},[t._v(t._s(e.icon||"keyboard_arrow_right"))])],1)}),t._v(" "),n("alex-dropdown-menu",{class:t.menuClasses,attrs:{actions:t.actions}})],2)},staticRenderFns:[]}},605:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-menu",{attrs:{"offset-y":""}},[n("v-btn",{staticClass:"info--text",attrs:{dark:"",flat:""},slot:"activator"},[t._v("\n    Actions\n    "),n("v-icon",{staticClass:"info--text",attrs:{right:""}},[t._v("keyboard_arrow_down")])],1),t._v(" "),n("v-list",t._l(t.actions,function(e){return n("v-list-tile",{key:e.label},[n("v-list-tile-title",[e.link?n("router-link",{class:t.actionTextColor,attrs:{to:e.link}},[t._v("\n          "+t._s(e.label)+"\n        ")]):t._e(),t._v(" "),e.href?n("a",{class:t.actionTextColor,attrs:{href:e.href}},[t._v("\n          "+t._s(e.label)+"\n        ")]):t._e()],1)],1)}))],1)},staticRenderFns:[]}},606:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-toolbar",{class:t.toolbar.color,attrs:{dark:""}},[n("v-toolbar-title",[t._v(t._s(t.toolbar.title))]),t._v(" "),n("v-spacer"),t._v(" "),n("v-btn",{attrs:{dark:"",icon:""}},[n("v-icon",[t._v("more_vert")])],1)],1)},staticRenderFns:[]}},608:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(22),i=n.n(a),o=n(55),r=n.n(o),s=n(545),c=n.n(s),l=n(54),d=n(44),u=n(11);e.default={computed:r()({},n.i(d.a)({cards:u.l})),components:i()({},l.a.cards,c.a)}},621:function(t,e,n){e=t.exports=n(535)(!0),e.push([t.i,".container[data-v-62f3307e]{padding:16px 8px}","",{version:3,sources:["/Users/alexng/WebstormProjects/portfolio-website/src/components/pages/Home.vue"],names:[],mappings:"AACA,4BAA8B,gBAAkB,CAC/C",file:"Home.vue",sourcesContent:["\n.container[data-v-62f3307e] { padding: 16px 8px;\n}\n"],sourceRoot:""}])},630:function(t,e,n){var a=n(621);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);n(536)("128716f8",a,!0)},641:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",[n("v-layout",{attrs:{"align-center":"","justify-center":"",row:"",wrap:""}},[n("v-flex",{attrs:{xs12:"",md10:""}},[n("v-layout",{attrs:{column:""}},[n("v-container",{attrs:{"grid-list-md":""}},[n("alex-cards",{attrs:{cards:t.cards}})],1)],1)],1)],1)],1)},staticRenderFns:[]}}});
//# sourceMappingURL=1.0cfd9acedf2ba55ae8b6.js.map