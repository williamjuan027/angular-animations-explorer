!function(){function n(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}function t(n,t){for(var i=0;i<t.length;i++){var a=t[i];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(n,a.key,a)}}(self.webpackChunkangular_animations_explorer=self.webpackChunkangular_animations_explorer||[]).push([[250],{3250:function(i,a,e){"use strict";e.r(a),e.d(a,{WebAnimationsApiDemoModule:function(){return h}});var o,r=e(1116),c=e(5366),u=e(148),s=e(677),l=["card"],f=function(){var i=function(){function i(){n(this,i)}var a,e,o;return a=i,(e=[{key:"playAnimation",value:function(){this.animation=this.card.nativeElement.animate(this.getShakeAnimation(),this.getShakeAnimationTiming())}},{key:"stopAnimation",value:function(){this.animation&&(this.animation.cancel(),this.animation=null)}},{key:"getShakeAnimation",value:function(){return[{transform:"rotate(0)"},{transform:"rotate(2deg)"},{transform:"rotate(-2deg)"},{transform:"rotate(0)"}]}},{key:"getShakeAnimationTiming",value:function(){return{duration:300,iterations:3}}}])&&t(a.prototype,e),o&&t(a,o),i}();return i.\u0275fac=function(n){return new(n||i)},i.\u0275cmp=c.Xpm({type:i,selectors:[["app-web-animations-api-demo"]],viewQuery:function(n,t){var i;(1&n&&c.Gf(l,5),2&n)&&(c.iGM(i=c.CRH())&&(t.card=i.first))},decls:7,vars:0,consts:[["text","play",3,"click"],["text","stop",3,"click"],[1,"card"],["card",""]],template:function(n,t){1&n&&(c.TgZ(0,"div"),c.TgZ(1,"div"),c.TgZ(2,"app-button-basic",0),c.NdJ("click",function(){return t.playAnimation()}),c.qZA(),c.TgZ(3,"app-button-basic",1),c.NdJ("click",function(){return t.stopAnimation()}),c.qZA(),c.qZA(),c.TgZ(4,"div",2,3),c._UZ(6,"app-card-demo-sample"),c.qZA(),c.qZA())},directives:[u.U,s.b],styles:[""]}),i}(),m=e(3273),p=e(6277),d=e(7780),h=((o=function t(){n(this,t)}).entry=f,o.\u0275fac=function(n){return new(n||o)},o.\u0275mod=c.oAB({type:o}),o.\u0275inj=c.cJS({imports:[[r.ez,p.o9,m.t,d.F]]}),o)}}])}();