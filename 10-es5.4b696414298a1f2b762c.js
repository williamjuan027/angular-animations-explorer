function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var a=0;a<t.length;a++){var c=t[a];c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(e,c.key,c)}}function _createClass(e,t,a){return t&&_defineProperties(e.prototype,t),a&&_defineProperties(e,a),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{pPG2:function(e,t,a){"use strict";a.r(t),a.d(t,"SequenceKeyframeDemoModule",(function(){return y}));var c=a("ofXK"),n=a("R0Ic"),r=[Object(n.o)("fadeSlideGrowKeyframe",[Object(n.n)(":enter",[Object(n.m)({opacity:0,transform:"scale(0.5) translateY(50px)"}),Object(n.e)("500ms",Object(n.h)([Object(n.m)({opacity:1,offset:.3}),Object(n.m)({transform:"translateY(0)",offset:.6}),Object(n.m)({transform:"scale(1)",offset:1})]))]),Object(n.n)(":leave",[Object(n.e)("500ms",Object(n.h)([Object(n.m)({transform:"scale(0.5)",offset:.3}),Object(n.m)({transform:"scale(0.5) translateY(50px)",offset:.7}),Object(n.m)({opacity:0,offset:1})]))])])],s=a("fXoL"),o=a("D3dD"),i=a("suL1");function f(e,t){1&e&&(s.Sb(0,"div"),s.Nb(1,"app-card-demo-sample"),s.Rb()),2&e&&s.hc("@fadeSlideGrowKeyframe",void 0)}var l,d,p=((l=function(){function e(){_classCallCheck(this,e),this.cardIsDisplayed=!0}return _createClass(e,[{key:"toggleCard",value:function(){this.cardIsDisplayed=!this.cardIsDisplayed}}]),e}()).\u0275fac=function(e){return new(e||l)},l.\u0275cmp=s.Gb({type:l,selectors:[["app-sequence-keyframe-demo"]],decls:2,vars:2,consts:[[3,"text","click"],[4,"ngIf"]],template:function(e,t){1&e&&(s.Sb(0,"app-button-basic",0),s.ac("click",(function(){return t.toggleCard()})),s.Rb(),s.rc(1,f,2,1,"div",1)),2&e&&(s.hc("text",t.cardIsDisplayed?"hide":"show"),s.Bb(1),s.hc("ngIf",t.cardIsDisplayed))},directives:[o.a,c.k,i.a],styles:[""],data:{animation:[r]}}),l),b=a("ZM5P"),u=a("YUcS"),m=a("cfjQ"),y=((d=function e(){_classCallCheck(this,e)}).entry=p,d.\u0275mod=s.Kb({type:d}),d.\u0275inj=s.Jb({factory:function(e){return new(e||d)},imports:[[c.b,u.a,b.a,m.a]]}),d)}}]);