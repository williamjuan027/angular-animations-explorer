function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var c=t[n];c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(e,c.key,c)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{"9FlO":function(e,t,n){"use strict";n.r(t),n.d(t,"ReuseDemoModule",(function(){return S}));var c=n("ofXK"),a=n("R0Ic"),i=Object(a.p)("fade",[Object(a.o)(":enter",[Object(a.n)({opacity:0}),Object(a.e)("500ms",Object(a.n)({opacity:1}))]),Object(a.o)(":leave",[Object(a.e)("500ms",Object(a.n)({opacity:0}))])]),r=Object(a.g)([Object(a.n)({transform:"translate({{x}}px, {{y}}px)"}),Object(a.e)("{{duration}}s",Object(a.n)({transform:"translate(0,0)"}))]),o=n("fXoL"),s=n("D3dD"),u=n("suL1");function l(e,t){1&e&&o.Ob(0)}function d(e,t){if(1&e){var n=o.Tb();o.Sb(0,"div"),o.ac("@fade.done",(function(){return o.lc(n),o.cc().animationDone()})),o.rc(1,l,1,0,"ng-container",5),o.Rb()}if(2&e){o.cc();var c=o.kc(8);o.hc("@fade",void 0),o.Bb(1),o.hc("ngTemplateOutlet",c)}}function b(e,t){1&e&&o.Ob(0)}function f(e,t){if(1&e){var n=o.Tb();o.Sb(0,"div"),o.ac("@slide.done",(function(){return o.lc(n),o.cc().animationDone()})),o.rc(1,b,1,0,"ng-container",5),o.Rb()}if(2&e){o.cc();var c=o.kc(8);o.hc("@slide",void 0),o.Bb(1),o.hc("ngTemplateOutlet",c)}}function p(e,t){1&e&&(o.Sb(0,"div",6),o.Nb(1,"app-card-demo-sample"),o.Rb())}var h,m,O=((h=function(){function e(){_classCallCheck(this,e),this.reuseMethodSelected="TRIGGER",this.reuseMethodQueued=this.reuseMethodSelected}return _createClass(e,[{key:"selectReuseMethod",value:function(e){this.reuseMethodSelected=null,this.reuseMethodQueued=e}},{key:"animationDone",value:function(){this.reuseMethodSelected=this.reuseMethodQueued}}]),e}()).\u0275fac=function(e){return new(e||h)},h.\u0275cmp=o.Gb({type:h,selectors:[["app-reuse-demo"]],decls:9,vars:3,consts:[["text","trigger",3,"click"],["text","animation reference data",3,"click"],[3,"ngSwitch"],[4,"ngSwitchCase"],["card",""],[4,"ngTemplateOutlet"],[1,"card"]],template:function(e,t){1&e&&(o.Sb(0,"div"),o.Sb(1,"div"),o.Sb(2,"app-button-basic",0),o.ac("click",(function(){return t.selectReuseMethod("TRIGGER")})),o.Rb(),o.Sb(3,"app-button-basic",1),o.ac("click",(function(){return t.selectReuseMethod("ANIMATION_REFERENCE_DATA")})),o.Rb(),o.Rb(),o.Qb(4,2),o.rc(5,d,2,2,"div",3),o.rc(6,f,2,2,"div",3),o.Pb(),o.Rb(),o.rc(7,p,2,0,"ng-template",null,4,o.sc)),2&e&&(o.Bb(4),o.hc("ngSwitch",t.reuseMethodSelected),o.Bb(1),o.hc("ngSwitchCase","TRIGGER"),o.Bb(1),o.hc("ngSwitchCase","ANIMATION_REFERENCE_DATA"))},directives:[s.a,c.m,c.n,c.p,u.a],styles:[""],data:{animation:[i,Object(a.p)("slide",[Object(a.o)(":enter",Object(a.q)(r,{params:{x:0,y:50,duration:.3}}))])]}}),h),v=n("ZM5P"),R=n("YUcS"),j=n("cfjQ"),S=((m=function e(){_classCallCheck(this,e)}).entry=O,m.\u0275mod=o.Kb({type:m}),m.\u0275inj=o.Jb({factory:function(e){return new(e||m)},imports:[[c.b,R.a,v.a,j.a]]}),m)}}]);