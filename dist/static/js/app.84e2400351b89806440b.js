webpackJsonp([1],Array(24).concat([function(e,t,r){r(83);var a=r(0)(r(61),r(130),"data-v-20e11ed0",null);e.exports=a.exports},,,,,,,,,,,,,,function(e,t,r){r(85);var a=r(0)(r(54),r(133),"data-v-327d98b3",null);e.exports=a.exports},function(e,t,r){var a=r(0)(r(57),r(126),null,null);e.exports=a.exports},,,,,,,,,function(e,t,r){"use strict";var a=r(37),n=r(154),i=r(114),o=r.n(i),s=r(115),l=r.n(s),c=r(117),d=r.n(c),u=r(116),p=r.n(u),v=r(119),m=r.n(v);a.a.use(n.a),t.a=new n.a({routes:[{path:"/",name:"Home",component:o.a},{path:"/settings",name:"Settings",component:m.a},{path:"/projects",name:"Projects",component:l.a},{path:"/projects/webdev/notes",name:"Note taking web app",component:d.a},{path:"/projects/ignite",name:"Project Ignite",component:p.a}],mode:"history"})},function(e,t,r){r(91);var a=r(0)(r(53),r(147),null,null);e.exports=a.exports},,,function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=r(37),n=r(51),i=r.n(n),o=r(49),s=r.n(o),l=r(48);a.a.use(i.a),a.a.config.productionTip=!1;var c=r(50);a.a.use(c,{installComponents:!0,load:{key:"AIzaSyBzlLYISGjL_ovJwAehh6ydhB56fCCpPQw",libraries:"places"}}),new a.a({el:"#app",router:l.a,render:function(e){return e(s.a)}})},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=r(110),n=r.n(a),i=r(113),o=r.n(i),s=r(112),l=r.n(s);t.default={data:function(){return{theme:{dark:!0},drawers:["Permanent","Persistent","Temporary"],primaryDrawer:{model:!0,type:"persistent",clipped:!1,floating:!1,mini:!1},fab:{model:!1,left:!1,right:!0,up:!1,bottom:!0,direction:"top",fling:!1,hover:!1,tabs:null,transition:"slide-y-reverse-transition"},footer:{fixed:!1}}},components:{"alex-drawer":n.a,"alex-header":o.a,"alex-fab":l.a}}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=r(104),n=r.n(a),i=r(101),o=r.n(i),s=r(103),l=r.n(s),c=r(102),d=r.n(c),u=r(100),p=r.n(u);t.default={props:{card:{type:Object,default:function(){return{}}}},components:{"alex-card-toolbar":n.a,"alex-card-body":o.a,"alex-card-media":l.a,"alex-card-actions":p.a,"alex-card-details":d.a}}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=r(105),n=r.n(a);t.default={props:{actions:{type:Array,required:!0},details:{type:Object}},components:{"alex-details-button":n.a}}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=r(39),n=r.n(a);t.default={props:{body:{type:Object}},components:{"alex-card-content":n.a}}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=r(108),n=r.n(a),i=r(107),o=r.n(i),s=r(106),l=r.n(s),c=r(118),d=r.n(c);t.default={props:{content:{type:Object,required:!0}},components:{"alex-list":n.a,"alex-chips":o.a,"alex-form":l.a,"alex-rotate-progress":d.a}}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=r(39),n=r.n(a);t.default={props:{details:{type:Object}},components:{"alex-card-content":n.a}}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:{media:{type:Object}}}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:{toolbar:{type:Object}}}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=r(38),n=r.n(a);t.default={props:{cards:{type:Array,required:!0}},components:{"alex-presentation-card":n.a}}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:{actions:{type:Array,required:!0}}}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:{form:{type:[Object,Array]}},data:function(){return{email:"",rules:{required:function(e){return!!e||"Required."}}}}}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:{chips:{type:Array,required:!0}}}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=r(109),n=r.n(a);t.default={props:{list:{type:[Array,Object]}},components:{"alex-list-tile":n.a}}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:{tile:{required:!0}},created:function(){console.log(this.tile)}}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=r(111),n=r.n(a);t.default={data:function(){return{drawerLinks:[{icon:"home",link:"/",label:"Home Page"},{icon:"laptop",link:"/projects",label:"My projects"},{icon:"assignment",href:"/static/documents/resume.pdf",label:"Resume"},{icon:"face",link:"/about",label:"About alex"},{icon:"settings",link:"/settings",label:"Settings"}],miniLink:{icon:"chevron_right",click:"primaryDrawer = !primaryDrawer",label:""}}},props:{primaryDrawer:{type:Object,default:{model:!0,type:"persistent",clipped:!1,floating:!1,mini:!1}}},components:{"alex-drawer-link":n.a}}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:{drawerLink:{type:Object,required:!0}}}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{direction:"top",fab:!1,fling:!1,hover:!1,tabs:null,top:!1,right:!0,bottom:!0,left:!1,transition:"slide-y-reverse-transition"}},watch:{top:function(e){this.bottom=!e},right:function(e){this.left=!e},bottom:function(e){this.top=!e},left:function(e){this.right=!e}},computed:{activeFab:function(){switch(this.tabs){case"one":return{class:"purple",icon:"account_circle"};case"two":return{class:"red",icon:"edit"};case"three":return{class:"green",icon:"keyboard_arrow_up"};default:return{}}}}}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:{primaryDrawer:{type:Object,default:{model:!0,type:"persistent",clipped:!1,floating:!1,mini:!1}}}}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=r(24),n=r.n(a);t.default={data:function(){return{cards:[{media:{title:"Welcome I'm Alex",src:"/static/images/banner.jpg",flex:"xs12",height:"200px"},body:{flex:12,title:"Welcome I'm Alex",summary:"Welcome to my portfolio website!",chips:[{label:"Web developer",icon:"web",color:"indigo"},{label:"Software developer",icon:"code",color:"light-blue"},{label:"Digital media enthusiast",icon:"work",color:"pink"}]}},{actions:[{label:"Details",link:"/projects"}],body:{flex:"xs12",title:"Projects",summary:"Check out some of my selected projects here on this site or on Github."},details:{showDetails:!1,buttons:[{label:"Random maze generation",link:"/projects#mazeproject"},{label:"Ignite",link:"/projects#ignite"},{label:"Portfolio website",link:"/projects#webportfolio"}]},media:{title:"Projects",height:"200px",src:"/static/images/projects/ignite/preview.png",flex:"xs12"}},{body:{flex:"xs12 md8 lg9",title:"About me",summary:"Entering their 3rd year of Computer Science at Ryerson university Alex is strengthening their development portfolio, with new technologies and frameworks like VueJS, NodeJS and Firebase. Alex is also interested in the future of machine learning and data sciences."},media:{title:"About me",contain:!0,src:"/static/images/profile_pic_round.png",flex:"xs12 md4 lg3"},details:{title:"Summary of skills",showDetails:!1,chips:[{label:"NodeJS",icon:"device_hub",color:"green"},{label:"VueJS",icon:"pageview",color:"teal"},{label:"Responsive design",icon:"dashboard",color:"blue"},{label:"AJAX",icon:"send",color:"purple"},{label:"Git",icon:"history",color:"orange"},{label:"Java",icon:"computer",color:"red"}]},actions:[{label:"Details",link:"/about"},{label:"Resume",href:"/static/documents/resume.pdf",icon:"assignment"}]},{body:{title:"Contact me",summary:"Fields below are currently in maintenance, send me an email at: Alex.ng.personal@gmail.com",form:{inputs:[{label:"Name",required:!0,model:""},{label:"Email",required:!0,model:""},{label:"Message",required:!0,model:"",multiline:!0}],action:{label:"Out of order",icon:"close"}}},actions:[{label:"LinkedIn",href:"https://www.linkedin.com/in/alex-ng-130039134/?ppe=1",icon:"link"},{label:"Github",href:"https://github.com/CynicalBird",icon:"link"}],details:{showDetails:!1,buttons:[{label:"Email",href:"mailto:alex.ng.personal@gmail.com",icon:"email"}]}}]}},components:{"alex-presentation-cards":n.a}}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=r(24),n=r.n(a);t.default={data:function(){return{cards:[{name:"ignite",media:{title:"Ignite - online web game",src:"/static/images/projects/ignite/preview.png",flex:"xs12",height:"200px"},body:{title:"Ignite - online web game",summary:"Operation ignition is a online web base real time multiplayer, RPG game. Ignite is played from a 2D top down camera, with dynamically generated terrain. (WIP) Our game encourages teamwork with 9 unique classes, guilds, and party system.",buttons:[]},details:{showDetails:!1,chips:[{label:"NodeJS",icon:"device_hub",color:"green"},{label:"AngularJS",icon:"pageview",color:"red"},{label:"SocketJS",icon:"rss_feed",color:"blue"},{label:"TravisCI",icon:"rss_feed",color:"amber"},{label:"PhaserJS",icon:"videogame_asset",color:"purple"}],buttons:[{label:"Details",link:"/projects/ignite",icon:"link"}]},actions:[{label:"Go to ignite",href:"http://ignite.zapto.org"},{label:"View on Github",href:"http://ignite.zapto.org",icon:"code"}]},{name:"mazeproject",media:{title:"Random maze generation project",src:"/static/images/projects/maze-project/preview_full.png",flex:"xs12",height:"200px"},body:{title:"Random maze generation project",summary:"My grade 12 Computer Science project featuring perfect maze random generation and a simple recursive backtracker solution. This project was written in Java using the growing tree algorithm. It also features many Object oriented programming techniques like inheritance and polymorphism.",buttons:[]},details:{showDetails:!1,chips:[{label:"Java",icon:"computer",color:"red"},{label:"Growing tree algorithm",icon:"call_split",color:"green"}],buttons:[{label:"More on perfect mazes",href:"http://www.astrolog.org/labyrnth/algrithm.htm",icon:"link"}]},actions:[{label:"View on github",href:"https://github.com/CynicalBird/mazeproject",icon:"code"},{label:"Download Jar",href:"https://github.com/CynicalBird/mazeproject/releases",icon:"cloud_download"}]},{name:"noteapp",media:{title:"Note taking web app",color:"accent",icon:{size:"x-large",name:"note"},flex:"xs12",height:"200px"},body:{title:"Note taking web app",summary:"A simple note taking app using VueJS - WIP"},details:{showDetails:!1,chips:[{label:"VueJS",icon:"pageview",color:"teal"}]},actions:[{label:"Go to note taking app",link:"/projects/webdev/notes"}]}]}},components:{"alex-presentation-cards":n.a}}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=r(38),n=r.n(a);t.default={components:{"alex-card":n.a},data:function(){return{map:{}}},created:function(){}}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=r(24),n=r.n(a);t.default={data:function(){return{maxNotes:3,currentNote:{label:"Note",required:!0,model:"",max:110,multiline:!0},notes:[]}},methods:{saveNote:function(){console.log(this.currentNote.model.length>0),this.currentNote.model.length>0&&this.notes.length<this.maxNotes?(this.notes.push({note:this.currentNote.model,model:!1,action:this.deleteNote}),this.currentNote.model=""):this.notes.length===this.maxNotes?alert("Maximum note space exceeded"):alert("Can not save empty note")},deleteNote:function(e){this.notes.length>0&&this.notes.splice(this.notes.indexOf(e),1)}},computed:{progress:function(){return{value:Math.floor(this.notes.length/this.maxNotes*100),width:15,size:100}},cards:function(){return[{toolbar:{title:"Notes overview",color:"accent"},body:{flex:12,title:"Notes app",summary:"Welcome to my notes app!",textalign:"text-xs-center",progress:this.progress}},{toolbar:{title:"Add a note",color:"accent"},body:{flex:12,title:"Add a note",form:{inputs:[this.currentNote],action:{label:"Save note",icon:"save",click:this.saveNote}}}},{toolbar:{title:"Edit saved notes",color:"accent"},body:{flex:12,list:{title:"Saved notes",tiles:this.notes},buttons:[{label:"Delete selected notes",action:"test"}]}}]}},components:{"alex-note-cards":n.a}}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:{progress:{type:Object}}}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:{primaryDrawer:{type:Object,default:{model:!0,type:"persistent",clipped:!1,floating:!1,mini:!1}},drawers:{type:Array,default:["Permanent","Persistent","Temporary"]},footer:{type:Object,default:{fixed:!1}},theme:{type:Object,default:{dark:!0}}},computed:{themeLabel:function(){return!0===this.theme.dark?"Dark":"Light"}}}},,,,,,function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},,,,,,function(e,t,r){var a=r(0)(r(55),r(141),null,null);e.exports=a.exports},function(e,t,r){r(90);var a=r(0)(r(56),r(146),"data-v-b973e016",null);e.exports=a.exports},function(e,t,r){var a=r(0)(r(58),r(149),null,null);e.exports=a.exports},function(e,t,r){r(82);var a=r(0)(r(59),r(127),null,null);e.exports=a.exports},function(e,t,r){var a=r(0)(r(60),r(153),null,null);e.exports=a.exports},function(e,t,r){var a=r(0)(r(62),r(131),null,null);e.exports=a.exports},function(e,t,r){var a=r(0)(r(63),r(142),null,null);e.exports=a.exports},function(e,t,r){var a=r(0)(r(64),r(138),null,null);e.exports=a.exports},function(e,t,r){var a=r(0)(r(65),r(135),null,null);e.exports=a.exports},function(e,t,r){r(88);var a=r(0)(r(66),r(140),null,null);e.exports=a.exports},function(e,t,r){r(84);var a=r(0)(r(67),r(132),"data-v-2a7e9b2b",null);e.exports=a.exports},function(e,t,r){var a=r(0)(r(68),r(144),null,null);e.exports=a.exports},function(e,t,r){r(86);var a=r(0)(r(69),r(134),"data-v-354aeb43",null);e.exports=a.exports},function(e,t,r){var a=r(0)(r(70),r(151),null,null);e.exports=a.exports},function(e,t,r){r(87);var a=r(0)(r(71),r(139),"data-v-62f3307e",null);e.exports=a.exports},function(e,t,r){var a=r(0)(r(72),r(125),null,null);e.exports=a.exports},function(e,t,r){r(93);var a=r(0)(r(73),r(150),"data-v-de598fe6",null);e.exports=a.exports},function(e,t,r){r(92);var a=r(0)(r(74),r(148),null,null);e.exports=a.exports},function(e,t,r){var a=r(0)(r(75),r(137),null,null);e.exports=a.exports},function(e,t,r){var a=r(0)(r(76),r(128),null,null);e.exports=a.exports},function(e,t,r){var a=r(0)(r(77),r(136),null,null);e.exports=a.exports},function(e,t,r){var a=r(0)(r(78),r(129),null,null);e.exports=a.exports},function(e,t,r){r(94);var a=r(0)(r(79),r(152),null,null);e.exports=a.exports},function(e,t,r){var a=r(0)(r(80),r(145),null,null);e.exports=a.exports},function(e,t,r){r(89);var a=r(0)(r(81),r(143),null,null);e.exports=a.exports},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-container",[r("v-layout",{attrs:{"align-center":"","justify-center":"",row:"",wrap:""}},[r("v-flex",{attrs:{xs12:"",md10:""}},[r("v-layout",{attrs:{column:""}},[r("v-container",{attrs:{"grid-list-md":""}},[r("alex-presentation-cards",{attrs:{cards:e.cards}})],1)],1)],1)],1)],1)},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-container",["string"==typeof e.content?r("span",[e._v(e._s(e.content))]):r("div",{class:e.content.textalign||"text-xs-center text-md-left"},[e.content.title?r("span",{staticClass:"grey--text"},[e._v(e._s(e.content.title))]):e._e(),e.content.title?r("br"):e._e(),e._v(" "),e.content.summary?r("span",[e._v(e._s(e.content.summary))]):e._e(),e.content.summary?r("br"):e._e(),e._v(" "),e.content.chips?r("alex-chips",{attrs:{chips:e.content.chips}}):e._e(),e._v(" "),e.content.form?r("alex-form",{attrs:{form:e.content.form}}):e._e(),e._v(" "),e.content.progress?r("alex-rotate-progress",{attrs:{progress:e.content.progress}}):e._e(),e._v(" "),e.content.list?r("alex-list",{attrs:{list:e.content.list}}):e._e(),e._v(" "),e._t("default"),e._v(" "),e._l(e.content.buttons,function(t){return e.content.buttons?r("v-btn",{attrs:{outline:"",info:"",dark:"",to:t.link,href:t.href}},[e._v("\n      "+e._s(t.label)+"\n      "),r("v-icon",{staticClass:"info--text",attrs:{right:""}},[e._v(e._s(t.icon||"link"))])],1):e._e()})],2)])},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return e.media?r("v-flex",e._b({style:"height: "+e.media.height},"v-flex",(a={},a[""+e.media.flex]=!0,a),!1),[r("v-card-media",{class:e.media.color||"primary",attrs:{src:e.media.src,contain:e.media.contain,height:"100%"}},[r("v-layout",{attrs:{"fill-height":"","pa-1":""}},[e.media.src?r("v-container",{attrs:{xs12:"","align-end":"",flexbox:""}},[r("v-flex",[r("span",{staticClass:"headline ml-2 white--text",domProps:{textContent:e._s(e.media.title)}})])],1):e._e(),e._v(" "),e.media.icon?r("v-container",{staticClass:"media-icon",attrs:{xs12:"","align-center":"","text-xs-center":""}},[r("v-icon",e._b({attrs:{dark:""}},"v-icon",(n={},n[""+e.media.icon.size]=!0,n),!1),[e._v(e._s(e.media.icon.name))]),e._v(" "),r("p",{staticClass:"headline ml-2 white--text",domProps:{textContent:e._s(e.media.title)}})],1):e._e()],1)],1)],1):e._e();var a,n},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-card",{staticClass:"elevation-0 mt-5"},[r("v-card-text",[r("v-layout",{attrs:{row:"",wrap:""}},[r("v-flex",{attrs:{xs12:"",md6:"","mt-1":""}},[r("span",[e._v("Theme")]),e._v(" "),r("v-switch",{attrs:{primary:"",label:e.themeLabel,color:"accent"},model:{value:e.theme.dark,callback:function(t){e.theme.dark=t},expression:"theme.dark"}})],1),e._v(" "),r("v-flex",{attrs:{xs12:"",md6:""}},[r("span",[e._v("Drawer")]),e._v(" "),e._l(e.drawers,function(t){return r("v-radio",{key:t,attrs:{primary:"",label:t,value:t.toLowerCase(),color:"accent"},model:{value:e.primaryDrawer.type,callback:function(t){e.primaryDrawer.type=t},expression:"primaryDrawer.type"}})}),e._v(" "),r("v-switch",{attrs:{label:"Clipped",primary:"",color:"accent"},model:{value:e.primaryDrawer.clipped,callback:function(t){e.primaryDrawer.clipped=t},expression:"primaryDrawer.clipped"}}),e._v(" "),r("v-switch",{attrs:{label:"Floating",primary:"",color:"accent"},model:{value:e.primaryDrawer.floating,callback:function(t){e.primaryDrawer.floating=t},expression:"primaryDrawer.floating"}}),e._v(" "),r("v-switch",{attrs:{label:"Mini",primary:"",color:"accent"},model:{value:e.primaryDrawer.mini,callback:function(t){e.primaryDrawer.mini=t},expression:"primaryDrawer.mini"}})],2),e._v(" "),r("v-flex",{attrs:{xs12:"",md6:""}},[r("span",[e._v("Footer")]),e._v(" "),r("v-switch",{attrs:{label:"Fixed",primary:""},model:{value:e.footer.fixed,callback:function(t){e.footer.fixed=t},expression:"footer.fixed"}})],1)],1)],1),e._v(" "),r("v-card-actions",[r("v-spacer"),e._v(" "),r("v-btn",{attrs:{flat:""}},[e._v("Cancel")]),e._v(" "),r("v-btn",{attrs:{flat:"",primary:""}},[e._v("Submit")])],1)],1)},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("div",{ref:"flyaway"},[e._t("default",[r("div",{domProps:{innerHTML:e._s(e.content)}})])],2)])},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-layout",{staticClass:"mt-5",attrs:{row:"",wrap:""}},e._l(e.cards,function(t,a){return r("v-flex",e._b({},"v-flex",(n={},n["sm"+t.flex+" xs12"]=!0,n),!1),[r("v-flex",{key:t.title},[r("alex-presentation-card",{attrs:{card:t}})],1)],1);var n}))},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("span",e._l(e.actions,function(t){return r("v-btn",{staticClass:"info--text",attrs:{flat:"",href:t.href,to:t.link}},[e._v("\n    "+e._s(t.label)+"\n    "),r("v-icon",{staticClass:"info--text",attrs:{right:""}},[e._v(e._s(t.icon||"keyboard_arrow_right"))])],1)}))},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-navigation-drawer",{attrs:{permanent:"permanent"===e.primaryDrawer.type,persistent:"persistent"===e.primaryDrawer.type,temporary:"temporary"===e.primaryDrawer.type,clipped:e.primaryDrawer.clipped,floating:e.primaryDrawer.floating,"mini-variant":e.primaryDrawer.mini,"enable-resize-watcher":"",overflow:""},model:{value:e.primaryDrawer.model,callback:function(t){e.primaryDrawer.model=t},expression:"primaryDrawer.model"}},[r("v-toolbar",{staticClass:"transparent",attrs:{flat:""}},[r("v-list",{staticClass:"pa-0"},[r("v-list-tile",{attrs:{avatar:"",tag:"div"}},[r("v-list-tile-avatar",[r("img",{attrs:{src:"/favicon.png"}})]),e._v(" "),r("v-list-tile-content",[r("v-list-tile-title",[e._v("Alex Ng")])],1),e._v(" "),r("v-list-tile-action",{directives:[{name:"tooltip",rawName:"v-tooltip:bottom",value:{html:"shrink"},expression:"{ html: 'shrink' }",arg:"bottom"}]},[r("v-btn",{attrs:{icon:""},nativeOn:{click:function(t){t.stopPropagation(),e.primaryDrawer.mini=!e.primaryDrawer.mini}}},[r("v-icon",[e._v("chevron_left")])],1)],1)],1)],1)],1),e._v(" "),r("v-divider"),e._v(" "),r("v-list",{attrs:{"two-line":""}},[e._l(e.drawerLinks,function(e){return r("alex-drawer-link",{attrs:{drawerLink:e}})}),e._v(" "),e.primaryDrawer.mini?r("v-list-tile",[r("v-list-tile-action",{directives:[{name:"tooltip",rawName:"v-tooltip:top",value:{html:"expand"},expression:"{ html: 'expand' }",arg:"top"}],on:{click:function(t){e.primaryDrawer.mini=!e.primaryDrawer.mini}}},[r("v-icon",[e._v("chevron_right")])],1)],1):e._e()],2)],1)},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-card",{staticClass:"mb-1 elevation-6"},[e.card.toolbar?r("alex-card-toolbar",{attrs:{toolbar:e.card.toolbar}}):e._e(),e._v(" "),r("v-container",[r("v-layout",{attrs:{row:"",wrap:""}},[e.card.media?r("alex-card-media",{attrs:{media:e.card.media}},[e._t("media")],2):e._e(),e._v(" "),r("v-flex",{staticClass:"card-body"},[r("alex-card-body",{attrs:{body:e.card.body||{}}},[e._t("default")],2),e._v(" "),e.card&&e.card.actions?r("v-divider"):e._e(),e._v(" "),e.card&&e.card.actions?r("alex-card-actions",{attrs:{actions:e.card.actions,details:e.card.details}}):e._e()],1),e._v(" "),e.card&&e.card.details?r("alex-card-details",{attrs:{details:e.card.details}}):e._e()],1)],1)],1)},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-speed-dial",{attrs:{top:e.top,bottom:e.bottom,right:e.right,left:e.left,direction:e.direction,hover:e.hover,transition:e.transition},model:{value:e.fab,callback:function(t){e.fab=t},expression:"fab"}},[r("v-btn",{staticClass:"blue darken-2",attrs:{dark:"",fab:"",hover:""},slot:"activator",model:{value:e.fab,callback:function(t){e.fab=t},expression:"fab"}},[r("v-icon",[e._v("account_circle")]),e._v(" "),r("v-icon",[e._v("close")])],1),e._v(" "),r("v-btn",{staticClass:"green",attrs:{fab:"",dark:"",small:""}},[r("v-icon",[e._v("edit")])],1),e._v(" "),r("v-btn",{staticClass:"indigo",attrs:{fab:"",dark:"",small:""}},[r("v-icon",[e._v("add")])],1),e._v(" "),r("v-btn",{staticClass:"red",attrs:{fab:"",dark:"",small:""}},[r("v-icon",[e._v("delete")])],1)],1)},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-list",{attrs:{"two-line":"",subheader:""}},[r("v-subheader",[e._v(e._s(e.list.title))]),e._v(" "),e._l(e.list.tiles,function(e){return r("alex-list-tile",{attrs:{tile:e}})})],2)},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement;return(e._self._c||t)("input",{ref:"input",attrs:{type:"text",placeholder:e.placeholder},domProps:{value:e.value}})},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-container",[r("v-progress-circular",{staticClass:"info--text",attrs:{size:e.progress.size,rotate:-90,width:e.progress.width,value:e.progress.value}},[e._v("\n    "+e._s(e.progress.value)+" %\n  ")])],1)},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"text-xs-center text-md-left"},e._l(e.chips,function(t){return r("v-chip",{staticClass:"white--text elevation-5",class:t.color},[r("v-avatar",{staticClass:"darken-4",class:t.color},[r("v-icon",[e._v(e._s(t.icon))])],1),e._v("\n    "+e._s(t.label)+"\n  ")],1)}))},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-container",[r("v-layout",{attrs:{"align-center":"","justify-center":"",row:"",wrap:""}},[r("v-flex",{attrs:{xs12:"",md10:""}},[r("v-layout",{attrs:{column:""}},[r("v-container",{attrs:{"grid-list-md":""}},[r("alex-presentation-cards",{attrs:{cards:e.cards}})],1)],1)],1)],1)],1)},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-list-tile",{attrs:{avatar:""}},[r("v-list-tile-action",[r("v-checkbox",{staticClass:"primary--text",model:{value:e.tile.model,callback:function(t){e.tile.model=t},expression:"tile.model"}})],1),e._v(" "),r("v-list-tile-content",{on:{click:function(t){e.tile.action(e.tile)}}},[r("p",[e._v(e._s(e.tile.note))])])],1)},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-flex",{attrs:{xs12:""}},[e.actions?r("v-card-actions",[r("alex-details-button",{attrs:{actions:e.actions}}),e._v(" "),r("v-spacer"),e._v(" "),r("v-btn",{directives:[{name:"tooltip",rawName:"v-tooltip:top",value:{html:"details"},expression:"{ html: 'details' }",arg:"top"}],attrs:{icon:""},on:{click:function(t){e.details.showDetails=!e.details.showDetails}}},[e.details?r("v-icon",[e._v(e._s(e.details.showDetails?"keyboard_arrow_up":"keyboard_arrow_down"))]):e._e()],1)],1):e._e()],1)},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("form",[r("v-flex",{staticClass:"text-xs-center text-md-left card-text",attrs:{xs12:""}},[e._l(e.form.inputs,function(t){return r("v-text-field",{attrs:{label:t.label,"multi-line":t.multiline,rules:[e.rules.required],max:t.max,counter:""},model:{value:t.model,callback:function(e){t.model=e},expression:"input.model"}})}),e._v(" "),r("v-btn",{attrs:{type:"submit",primary:""},on:{click:function(t){t.preventDefault(),e.form.action.click(t)}}},[e._v(e._s(e.form.action.label)+" "),r("v-icon",{attrs:{right:"",dark:""}},[e._v(e._s(e.form.action.icon))])],1)],2)],1)},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"vue-street-view-pano-container"},[r("div",{ref:"vue-street-view-pano",staticClass:"vue-street-view-pano"}),e._v(" "),e._t("default")],2)},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-list-tile",{directives:[{name:"tooltip",rawName:"v-tooltip:top",value:{html:e.drawerLink.label},expression:"{ html: drawerLink.label }",arg:"top"}],attrs:{to:e.drawerLink.link,href:e.drawerLink.href,ripple:""},on:{click:function(t){t.stopPropagation(),e.left=!e.left}}},[r("v-list-tile-action",[r("v-icon",[e._v(e._s(e.drawerLink.icon))])],1),e._v(" "),r("v-list-tile-content",[r("v-list-tile-title",[e._v(e._s(e.drawerLink.label))])],1)],1)},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("label",[r("span",{domProps:{textContent:e._s(e.label)}}),e._v(" "),r("input",{ref:"input",class:e.className,attrs:{type:"text",placeholder:e.placeholder}})])},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-card-title",[r("div",{staticClass:"text-xs-center text-md-left card-content"},[r("alex-card-content",{attrs:{content:e.body}},[e._t("default")],2)],1)])},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-app",{attrs:{id:"alex-website",dark:e.theme.dark,light:!e.theme.dark,standalone:""}},[r("alex-header",{attrs:{primaryDrawer:e.primaryDrawer}}),e._v(" "),r("alex-drawer",{attrs:{primaryDrawer:e.primaryDrawer}}),e._v(" "),r("main",[r("keep-alive",[r("router-view",{attrs:{primaryDrawer:e.primaryDrawer,drawers:e.drawers,footer:e.footer,theme:e.theme}})],1)],1),e._v(" "),r("v-footer",{attrs:{absolute:e.footer.fixed}},[r("span",[e._v("Alex Ng © "+e._s((new Date).getFullYear()))])])],1)},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-container",[r("v-layout",{attrs:{"align-center":"","justify-center":"",row:"",wrap:""}},[r("v-flex",{attrs:{xs12:"",md10:""}},[r("v-layout",{attrs:{column:""}},[r("v-container",{attrs:{"grid-list-md":""}},[r("alex-note-cards",{attrs:{cards:e.cards}})],1)],1)],1)],1)],1)},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-flex",{attrs:{xs12:""}},[e.details.showDetails?r("v-divider"):e._e(),e._v(" "),r("v-slide-y-transition",[r("v-card-text",{directives:[{name:"show",rawName:"v-show",value:e.details.showDetails,expression:"details.showDetails"}],staticClass:"text-xs-bottom"},[r("alex-card-content",{attrs:{content:e.details}})],1)],1)],1)},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-container",[r("v-layout",{attrs:{"align-center":"","justify-center":"",row:"",wrap:""}},[r("v-flex",{attrs:{xs12:"",md10:""}},[r("v-layout",{attrs:{column:""}},[r("v-container",{attrs:{"grid-list-md":""}},[r("v-layout",{staticClass:"mt-5",attrs:{row:"",wrap:""}},[r("alex-card",[r("h1",[e._v("Hello world")]),e._v(" "),r("div",{attrs:{id:"map"}},[r("gmap-map",{attrs:{center:{lat:1.38,lng:103.8},zoom:12}},[r("gmap-marker",{attrs:{position:{lat:1.38,lng:103.8}}}),e._v(" "),r("gmap-info-window",{attrs:{position:{lat:1.38,lng:103.8}}},[e._v("\n                    Hello world!\n                  ")])],1)],1)])],1)],1)],1)],1)],1)],1)},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-toolbar",{staticClass:"primary elevation-6",attrs:{dark:"",fixed:""}},["permanent"!==e.primaryDrawer.type?r("v-toolbar-side-icon",{on:{click:function(t){t.stopPropagation(),e.primaryDrawer.model=!e.primaryDrawer.model}}}):e._e(),e._v(" "),r("v-toolbar-title",[e._v("Alex Ng")])],1)},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"vue-map-container"},[r("div",{ref:"vue-map",staticClass:"vue-map"}),e._v(" "),r("div",{staticClass:"vue-map-hidden"},[e._t("default")],2),e._v(" "),e._t("visible")],2)},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-toolbar",{class:e.toolbar.color,attrs:{dark:""}},[r("v-toolbar-title",[e._v(e._s(e.toolbar.title))]),e._v(" "),r("v-spacer"),e._v(" "),r("v-btn",{attrs:{dark:"",icon:""}},[r("v-icon",[e._v("more_vert")])],1)],1)},staticRenderFns:[]}}]),[52]);
//# sourceMappingURL=app.84e2400351b89806440b.js.map