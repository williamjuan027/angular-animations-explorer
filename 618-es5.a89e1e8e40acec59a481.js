!function(){function n(n,i){if(!(n instanceof i))throw new TypeError("Cannot call a class as a function")}function i(n,i){for(var e=0;e<i.length;e++){var a=i[e];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(n,a.key,a)}}(self.webpackChunkangular_animations_explorer=self.webpackChunkangular_animations_explorer||[]).push([[618],{618:function(e,a,t){"use strict";t.r(a),t.d(a,{DisableDemoModule:function(){return g}});var s,o=t(1116),l=t(9713),r=[(0,l.X$)("pulseAnimation",[(0,l.SB)("false",(0,l.oB)({transform:"scale(1)"})),(0,l.eR)("false => true",[(0,l.jt)("200ms ease-in",(0,l.oB)({transform:"scale(1.05)"})),(0,l.jt)("200ms ease-in",(0,l.oB)({transform:"scale(0.95)"})),(0,l.jt)("200ms ease-in",(0,l.oB)({transform:"scale(1.05)"})),(0,l.jt)("200ms ease-in",(0,l.oB)({transform:"scale(1)"}))])])],c=t(5366),u=t(148),d=t(677),m=function(){var e=function(){function e(){n(this,e),this.isAnimating=!1,this.isDisabled=!1}var a,t,s;return a=e,(t=[{key:"toggleIsDisabled",value:function(){this.isDisabled=!this.isDisabled}},{key:"playAnimation",value:function(){this.isAnimating=!0}},{key:"animationDone",value:function(){this.isAnimating=!1}}])&&i(a.prototype,t),s&&i(a,s),e}();return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=c.Xpm({type:e,selectors:[["app-disable-demo"]],decls:7,vars:5,consts:[[3,"disabled","text","click"],["text","play",3,"disabled","click"],[1,"card"]],template:function(n,i){1&n&&(c.TgZ(0,"div"),c.TgZ(1,"div"),c.TgZ(2,"app-button-basic",0),c.NdJ("click",function(){return i.toggleIsDisabled()}),c.qZA(),c.TgZ(3,"app-button-basic",1),c.NdJ("click",function(){return i.playAnimation()}),c.qZA(),c.qZA(),c.TgZ(4,"div"),c.TgZ(5,"div",2),c.NdJ("@pulseAnimation.done",function(){return i.animationDone()}),c._UZ(6,"app-card-demo-sample"),c.qZA(),c.qZA(),c.qZA()),2&n&&(c.xp6(2),c.Q6J("disabled",i.isAnimating)("text",i.isDisabled?"enable":"disable"),c.xp6(1),c.Q6J("disabled",i.isAnimating),c.xp6(1),c.Q6J("@.disabled",i.isDisabled),c.xp6(1),c.Q6J("@pulseAnimation",i.isAnimating))},directives:[u.U,d.b],styles:[""],data:{animation:[r]}}),e}(),f=t(3273),p=t(6277),b=t(7780),g=((s=function i(){n(this,i)}).entry=m,s.\u0275fac=function(n){return new(n||s)},s.\u0275mod=c.oAB({type:s}),s.\u0275inj=c.cJS({imports:[[o.ez,p.o9,f.t,b.F]]}),s)}}])}();