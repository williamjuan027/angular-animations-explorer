!function(){function e(e,c){if(!(e instanceof c))throw new TypeError("Cannot call a class as a function")}function c(e,c){for(var n=0;n<c.length;n++){var t=c[n];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{I9Jc:function(n,t,a){"use strict";a.r(t),a.d(t,"SequenceDemoModule",function(){return D});var i=a("ofXK"),o=a("R0Ic"),b={opacity:0,transform:"scale(0.8)"},r=[Object(o.p)("fadeGrowSequence",[Object(o.o)(":enter",[Object(o.j)(":enter",[Object(o.n)(b),Object(o.k)([Object(o.e)("300ms ease-in",Object(o.n)({opacity:1})),Object(o.e)("300ms",Object(o.n)({transform:"scale(1)"}))])])]),Object(o.o)(":leave",[Object(o.j)(":leave",[Object(o.k)([Object(o.e)("300ms ease-in",Object(o.n)({opacity:0})),Object(o.e)("300ms",Object(o.n)({transform:"scale(0.8)"}))])])])])],u=[Object(o.p)("fadeGrowGroup",[Object(o.o)(":enter",[Object(o.j)(":enter",[Object(o.n)(b),Object(o.h)([Object(o.e)("200ms ease-in",Object(o.n)({opacity:1})),Object(o.e)("500ms",Object(o.n)({transform:"scale(1)"}))])])]),Object(o.o)(":leave",[Object(o.j)(":leave",[Object(o.h)([Object(o.e)("200ms ease-in",Object(o.n)({opacity:0})),Object(o.e)("500ms",Object(o.n)({transform:"scale(0.8)"}))])])])])],s=[Object(o.p)("fadeGrowStagger",[Object(o.o)(":enter",[Object(o.j)(":enter",[Object(o.n)(b),Object(o.l)("100ms",[Object(o.e)("500ms",Object(o.n)({opacity:1,transform:"scale(1)"}))])])]),Object(o.o)(":leave",[Object(o.j)(":leave",[Object(o.l)("-100ms",[Object(o.e)("500ms",Object(o.n)(b))])])])])],f=a("fXoL"),l=a("D3dD"),j=a("suL1");function O(e,c){1&e&&f.Nb(0)}function g(e,c){if(1&e){var n=f.Sb();f.Rb(0,"div"),f.Zb("@fadeGrowSequence.done",function(){return f.kc(n),f.bc().animationDone()}),f.qc(1,O,1,0,"ng-container",8),f.Qb()}if(2&e){f.bc();var t=f.jc(12);f.gc("@fadeGrowSequence",void 0),f.Bb(1),f.gc("ngTemplateOutlet",t)}}function d(e,c){1&e&&f.Nb(0)}function p(e,c){if(1&e){var n=f.Sb();f.Rb(0,"div"),f.Zb("@fadeGrowGroup.done",function(){return f.kc(n),f.bc().animationDone()}),f.qc(1,d,1,0,"ng-container",8),f.Qb()}if(2&e){f.bc();var t=f.jc(12);f.gc("@fadeGrowGroup",void 0),f.Bb(1),f.gc("ngTemplateOutlet",t)}}function m(e,c){1&e&&f.Nb(0)}function v(e,c){if(1&e){var n=f.Sb();f.Rb(0,"div"),f.Zb("@fadeGrowStagger.done",function(){return f.kc(n),f.bc().animationDone()}),f.qc(1,m,1,0,"ng-container",8),f.Qb()}if(2&e){f.bc();var t=f.jc(10);f.gc("@fadeGrowStagger",void 0),f.Bb(1),f.gc("ngTemplateOutlet",t)}}function S(e,c){1&e&&f.Mb(0,"div")}function q(e,c){1&e&&f.Nb(0)}function w(e,c){if(1&e&&(f.Pb(0),f.qc(1,q,1,0,"ng-container",8),f.Ob()),2&e){f.bc(2);var n=f.jc(12);f.Bb(1),f.gc("ngTemplateOutlet",n)}}var h=function(){return[0,1,2,3,4,5]};function G(e,c){1&e&&f.qc(0,w,2,1,"ng-container",9),2&e&&f.gc("ngForOf",f.hc(1,h))}function y(e,c){1&e&&(f.Rb(0,"div",10),f.Mb(1,"app-card-demo-sample"),f.Qb())}var k,Q,E=((k=function(){function n(){e(this,n),this.sequenceSelected="SEQUENCE",this.sequenceChangeQueued="SEQUENCE"}var t,a,i;return t=n,(a=[{key:"selectSequence",value:function(e){this.sequenceSelected=null,this.sequenceChangeQueued=e}},{key:"animationDone",value:function(){this.sequenceSelected=this.sequenceChangeQueued}}])&&c(t.prototype,a),i&&c(t,i),n}()).\u0275fac=function(e){return new(e||k)},k.\u0275cmp=f.Fb({type:k,selectors:[["app-sequence-demo"]],decls:13,vars:4,consts:[["text","sequence",3,"click"],["text","group",3,"click"],["text","stagger",3,"click"],[3,"ngSwitch"],[4,"ngSwitchCase"],[4,"ngSwitchDefault"],["cards",""],["card",""],[4,"ngTemplateOutlet"],[4,"ngFor","ngForOf"],[1,"card"]],template:function(e,c){1&e&&(f.Rb(0,"div"),f.Rb(1,"app-button-basic",0),f.Zb("click",function(){return c.selectSequence("SEQUENCE")}),f.Qb(),f.Rb(2,"app-button-basic",1),f.Zb("click",function(){return c.selectSequence("GROUP")}),f.Qb(),f.Rb(3,"app-button-basic",2),f.Zb("click",function(){return c.selectSequence("STAGGER")}),f.Qb(),f.Pb(4,3),f.qc(5,g,2,2,"div",4),f.qc(6,p,2,2,"div",4),f.qc(7,v,2,2,"div",4),f.qc(8,S,1,0,"div",5),f.Ob(),f.Qb(),f.qc(9,G,1,2,"ng-template",null,6,f.rc),f.qc(11,y,2,0,"ng-template",null,7,f.rc)),2&e&&(f.Bb(4),f.gc("ngSwitch",c.sequenceSelected),f.Bb(1),f.gc("ngSwitchCase","SEQUENCE"),f.Bb(1),f.gc("ngSwitchCase","GROUP"),f.Bb(1),f.gc("ngSwitchCase","STAGGER"))},directives:[l.a,i.m,i.n,i.o,i.p,i.j,j.a],styles:[".card[_ngcontent-%COMP%]{margin:.2rem 0}"],data:{animation:[r,u,s]}}),k),C=a("ZM5P"),R=a("YUcS"),B=a("cfjQ"),D=((Q=function c(){e(this,c)}).entry=E,Q.\u0275mod=f.Jb({type:Q}),Q.\u0275inj=f.Ib({factory:function(e){return new(e||Q)},imports:[[i.b,R.a,C.a,B.a]]}),Q)}}])}();