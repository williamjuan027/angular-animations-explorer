(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{XgGE:function(e,i,t){"use strict";t.r(i),t.d(i,"DisableDemoModule",function(){return u});var n=t("ofXK"),s=t("R0Ic");const a=[Object(s.p)("pulseAnimation",[Object(s.m)("false",Object(s.n)({transform:"scale(1)"})),Object(s.o)("false => true",[Object(s.e)("200ms ease-in",Object(s.n)({transform:"scale(1.05)"})),Object(s.e)("200ms ease-in",Object(s.n)({transform:"scale(0.95)"})),Object(s.e)("200ms ease-in",Object(s.n)({transform:"scale(1.05)"})),Object(s.e)("200ms ease-in",Object(s.n)({transform:"scale(1)"}))])])];var c=t("fXoL"),b=t("D3dD"),o=t("suL1");let l=(()=>{class e{constructor(){this.isAnimating=!1,this.isDisabled=!1}toggleIsDisabled(){this.isDisabled=!this.isDisabled}playAnimation(){this.isAnimating=!0}animationDone(){this.isAnimating=!1}}return e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=c.Fb({type:e,selectors:[["app-disable-demo"]],decls:7,vars:5,consts:[[3,"disabled","text","click"],["text","play",3,"disabled","click"],[1,"card"]],template:function(e,i){1&e&&(c.Rb(0,"div"),c.Rb(1,"div"),c.Rb(2,"app-button-basic",0),c.Zb("click",function(){return i.toggleIsDisabled()}),c.Qb(),c.Rb(3,"app-button-basic",1),c.Zb("click",function(){return i.playAnimation()}),c.Qb(),c.Qb(),c.Rb(4,"div"),c.Rb(5,"div",2),c.Zb("@pulseAnimation.done",function(){return i.animationDone()}),c.Mb(6,"app-card-demo-sample"),c.Qb(),c.Qb(),c.Qb()),2&e&&(c.Bb(2),c.gc("disabled",i.isAnimating)("text",i.isDisabled?"enable":"disable"),c.Bb(1),c.gc("disabled",i.isAnimating),c.Bb(1),c.gc("@.disabled",i.isDisabled),c.Bb(1),c.gc("@pulseAnimation",i.isAnimating))},directives:[b.a,o.a],styles:[""],data:{animation:[a]}}),e})();var r=t("ZM5P"),d=t("YUcS"),m=t("cfjQ");let u=(()=>{class e{}return e.entry=l,e.\u0275mod=c.Jb({type:e}),e.\u0275inj=c.Ib({factory:function(i){return new(i||e)},imports:[[n.b,d.a,r.a,m.a]]}),e})()}}]);