(self.webpackChunkangular_animations_explorer=self.webpackChunkangular_animations_explorer||[]).push([[250],{3250:function(t,n,i){"use strict";i.r(n),i.d(n,{WebAnimationsApiDemoModule:function(){return p}});var a=i(1116),e=i(5366),r=i(148),o=i(677);const s=["card"];let c=(()=>{class t{constructor(){}playAnimation(){this.animation=this.card.nativeElement.animate(this.getShakeAnimation(),this.getShakeAnimationTiming())}stopAnimation(){this.animation&&(this.animation.cancel(),this.animation=null)}getShakeAnimation(){return[{transform:"rotate(0)"},{transform:"rotate(2deg)"},{transform:"rotate(-2deg)"},{transform:"rotate(0)"}]}getShakeAnimationTiming(){return{duration:300,iterations:3}}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-web-animations-api-demo"]],viewQuery:function(t,n){if(1&t&&e.Gf(s,5),2&t){let t;e.iGM(t=e.CRH())&&(n.card=t.first)}},decls:7,vars:0,consts:[["text","play",3,"click"],["text","stop",3,"click"],[1,"card"],["card",""]],template:function(t,n){1&t&&(e.TgZ(0,"div"),e.TgZ(1,"div"),e.TgZ(2,"app-button-basic",0),e.NdJ("click",function(){return n.playAnimation()}),e.qZA(),e.TgZ(3,"app-button-basic",1),e.NdJ("click",function(){return n.stopAnimation()}),e.qZA(),e.qZA(),e.TgZ(4,"div",2,3),e._UZ(6,"app-card-demo-sample"),e.qZA(),e.qZA())},directives:[r.U,o.b],styles:[""]}),t})();var m=i(3273),u=i(6277),l=i(7780);let p=(()=>{class t{}return t.entry=c,t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[[a.ez,u.o9,m.t,l.F]]}),t})()}}]);