(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{YL9O:function(t,e,i){"use strict";i.r(e),i.d(e,"AttributeDirectiveDemoModule",function(){return p});var n=i("ofXK"),a=i("fXoL"),s=i("R0Ic");let o=(()=>{class t{constructor(t,e){this.builder=t,this.el=e}mouseDown(){this.playAnimation(this.getFadeOutAnimation())}mouseUp(){this.playAnimation(this.getFadeInAnimation())}playAnimation(t){this.builder.build(t).create(this.el.nativeElement).play()}getFadeInAnimation(){return[Object(s.e)("400ms ease-in",Object(s.n)({opacity:1}))]}getFadeOutAnimation(){return[Object(s.e)("400ms ease-in",Object(s.n)({opacity:.5}))]}}return t.\u0275fac=function(e){return new(e||t)(a.Lb(s.b),a.Lb(a.l))},t.\u0275dir=a.Gb({type:t,selectors:[["","appFadeMouseDown",""]],hostBindings:function(t,e){1&t&&a.Zb("mousedown",function(){return e.mouseDown()})("mouseup",function(){return e.mouseUp()})}}),t})();var r=i("suL1");let c=(()=>{class t{constructor(){this.isAnimating=!1,this.isDisabled=!1}toggleIsDisabled(){this.isDisabled=!this.isDisabled}playAnimation(){this.isAnimating=!0}animationDone(){this.isAnimating=!1}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=a.Fb({type:t,selectors:[["app-attribute-directive-demo"]],decls:5,vars:0,consts:[["appFadeMouseDown","",1,"card"]],template:function(t,e){1&t&&(a.Rb(0,"div"),a.Rb(1,"p"),a.sc(2," Click (and keep the mouse clicked) on the card to trigger the fade out animation and let go to trigger the fade in animation "),a.Qb(),a.Rb(3,"div",0),a.Mb(4,"app-card-demo-sample"),a.Qb(),a.Qb())},directives:[o,r.a],styles:[".card[_ngcontent-%COMP%]{cursor:pointer}"]}),t})();var u=i("ZM5P"),d=i("YUcS"),l=i("cfjQ");let p=(()=>{class t{}return t.entry=c,t.\u0275mod=a.Jb({type:t}),t.\u0275inj=a.Ib({factory:function(e){return new(e||t)},imports:[[n.b,d.a,u.a,l.a]]}),t})()}}]);