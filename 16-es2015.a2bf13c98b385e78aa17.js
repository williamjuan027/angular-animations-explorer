(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{r11w:function(t,n,a){"use strict";a.r(n),a.d(n,"WebAnimationsApiDemoModule",(function(){return b}));var i=a("ofXK"),e=a("fXoL"),o=a("D3dD"),r=a("suL1");const c=["card"];let s=(()=>{class t{constructor(){}playAnimation(){this.animation=this.card.nativeElement.animate(this.getShakeAnimation(),this.getShakeAnimationTiming())}stopAnimation(){this.animation&&(this.animation.cancel(),this.animation=null)}getShakeAnimation(){return[{transform:"rotate(0)"},{transform:"rotate(2deg)"},{transform:"rotate(-2deg)"},{transform:"rotate(0)"}]}getShakeAnimationTiming(){return{duration:300,iterations:3}}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.Gb({type:t,selectors:[["app-web-animations-api-demo"]],viewQuery:function(t,n){var a;1&t&&e.xc(c,!0),2&t&&e.jc(a=e.bc())&&(n.card=a.first)},decls:7,vars:0,consts:[["text","play",3,"click"],["text","stop",3,"click"],[1,"card"],["card",""]],template:function(t,n){1&t&&(e.Sb(0,"div"),e.Sb(1,"div"),e.Sb(2,"app-button-basic",0),e.ac("click",(function(){return n.playAnimation()})),e.Rb(),e.Sb(3,"app-button-basic",1),e.ac("click",(function(){return n.stopAnimation()})),e.Rb(),e.Rb(),e.Sb(4,"div",2,3),e.Nb(6,"app-card-demo-sample"),e.Rb(),e.Rb())},directives:[o.a,r.a],styles:[""]}),t})();var m=a("ZM5P"),p=a("YUcS"),u=a("cfjQ");let b=(()=>{class t{}return t.entry=s,t.\u0275mod=e.Kb({type:t}),t.\u0275inj=e.Jb({factory:function(n){return new(n||t)},imports:[[i.b,p.a,m.a,u.a]]}),t})()}}]);