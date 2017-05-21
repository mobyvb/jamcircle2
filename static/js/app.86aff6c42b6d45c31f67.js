webpackJsonp([0],[,,function(t,e,n){"use strict";var r=n(29);n(1).a.use(r.a);var i=new r.a.Store({state:{HOME_PAGE:0,VISUALIZER_PAGE:1,MIDI_EDITOR_PAGE:2,SOUND_EDITOR_PAGE:3,currentPage:0},mutations:{INCREMENT:function(t){t.counter++},GO_TO_PAGE:function(t,e){console.log("changing state page from "+t.currentPage+" to "+e.page),t.currentPage=e.page}}});e.a=i},function(t,e,n){n(16);var r=n(0)(null,n(24),"data-v-3f520390",null);t.exports=r.exports},function(t,e,n){n(15);var r=n(0)(n(9),n(23),"data-v-2e140907",null);t.exports=r.exports},function(t,e,n){n(14);var r=n(0)(n(11),n(22),"data-v-15b7fa93",null);t.exports=r.exports},function(t,e,n){"use strict";var r=n(1),i=n(27),a=n(3),o=n.n(a),u=n(5),c=n.n(u),s=n(4),d=n.n(s);r.a.use(i.a),e.a=new i.a({mode:"history",routes:[{path:"/",name:"Home",component:o.a},{path:"/sound-editor",name:"SoundEditor",component:c.a},{path:"/midi-editor",name:"MidiEditor",component:d.a}]})},function(t,e,n){n(17);var r=n(0)(n(8),n(25),null,null);t.exports=r.exports},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(19),i=n.n(r),a=n(20),o=n.n(a),u=n(4),c=n.n(u),s=n(5),d=n.n(s),_=n(3),E=n.n(_),l=n(2);e.default={components:{Home:E.a,Sidebar:i.a,Visualizer:o.a,MidiEditor:c.a,SoundEditor:d.a},computed:{currentPage:function(){return l.a.state.currentPage}},data:function(){return{HOME_PAGE:l.a.state.HOME_PAGE,VISUALIZER_PAGE:l.a.state.VISUALIZER_PAGE,MIDI_EDITOR_PAGE:l.a.state.MIDI_EDITOR_PAGE,SOUND_EDITOR_PAGE:l.a.state.SOUND_EDITOR_PAGE}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"MidiEditor",data:function(){return{msg:"Midi Editor"}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(2);e.default={computed:{currentPage:function(){return r.a.state.currentPage}},data:function(){return{HOME_PAGE:r.a.state.HOME_PAGE,VISUALIZER_PAGE:r.a.state.VISUALIZER_PAGE,MIDI_EDITOR_PAGE:r.a.state.MIDI_EDITOR_PAGE,SOUND_EDITOR_PAGE:r.a.state.SOUND_EDITOR_PAGE,isOpen:!0}},methods:{navigateToHome:function(){r.a.commit("GO_TO_PAGE",{page:this.HOME_PAGE})},navigateToVisualizer:function(){r.a.commit("GO_TO_PAGE",{page:this.VISUALIZER_PAGE})},navigateToMidiEditor:function(){r.a.commit("GO_TO_PAGE",{page:this.MIDI_EDITOR_PAGE})},navigateToSoundEditor:function(){r.a.commit("GO_TO_PAGE",{page:this.SOUND_EDITOR_PAGE})},toggleSidebar:function(){this.isOpen=!this.isOpen}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"SoundEditor",data:function(){return{msg:"Sound Editor"}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(1),i=n(7),a=n.n(i),o=n(6);r.a.config.productionTip=!1,new r.a({el:"#app",router:o.a,template:"<App/>",components:{App:a.a}})},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e,n){n(18);var r=n(0)(n(10),n(26),null,null);t.exports=r.exports},function(t,e,n){n(13);var r=n(0)(null,n(21),"data-v-1381f5f7",null);t.exports=r.exports},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"visualizer"}},[n("h1",[t._v("Cool Visualization")])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"sound-editor"}},[n("h1",[t._v("Sound Editor")])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"midi-editor"}},[n("h1",[t._v("Midi Editor")])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"home"}},[n("h1",[t._v("Jam Circle")]),t._v(" "),n("p",[t._v("introduction and tutorial goes here")])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("sidebar"),t._v(" "),t.currentPage==t.HOME_PAGE?n("home"):t.currentPage==t.VISUALIZER_PAGE?n("visualizer"):t.currentPage==t.MIDI_EDITOR_PAGE?n("midi-editor"):t.currentPage==t.SOUND_EDITOR_PAGE?n("sound-editor"):t._e()],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"sidebar",open:t.isOpen}},[n("div",{attrs:{id:"toggle-sidebar"},on:{click:function(e){e.preventDefault(),t.toggleSidebar(e)}}}),t._v(" "),t.isOpen?n("div",{staticClass:"button-list"},[n("li",[n("button",{attrs:{disabled:t.currentPage==t.HOME_PAGE},on:{click:function(e){e.preventDefault(),t.navigateToHome(e)}}},[t._v("Home")])]),t._v(" "),n("li",[n("button",{attrs:{disabled:t.currentPage==t.VISUALIZER_PAGE},on:{click:function(e){e.preventDefault(),t.navigateToVisualizer(e)}}},[t._v("Jam!")])]),t._v(" "),n("li",[n("button",{attrs:{disabled:t.currentPage==t.MIDI_EDITOR_PAGE},on:{click:function(e){e.preventDefault(),t.navigateToMidiEditor(e)}}},[t._v("Midi Editor")])]),t._v(" "),n("li",[n("button",{attrs:{disabled:t.currentPage==t.SOUND_EDITOR_PAGE},on:{click:function(e){e.preventDefault(),t.navigateToSoundEditor(e)}}},[t._v("Sound Editor")])])]):t._e()])},staticRenderFns:[]}}],[12]);
//# sourceMappingURL=app.86aff6c42b6d45c31f67.js.map