!function(){function n(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function e(n,e){for(var t=0;t<e.length;t++){var a=e[t];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(n,a.key,a)}}(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{Z6Zr:function(t,a,r){"use strict";r.r(a),r.d(a,"ClassBasedDemoModule",function(){return d});var i,o,s=r("ofXK"),c=r("fXoL"),f=r("D3dD"),m=r("suL1"),l=((i=function(){function t(){n(this,t),this.animationType=null}var a,r,i;return a=t,(r=[{key:"selectKeyframeAnimation",value:function(){this.animationType="KEYFRAME"}},{key:"selectTransformAnimation",value:function(){this.animationType="TRANSFORM"}},{key:"resetAnimation",value:function(){this.animationType=null}}])&&e(a.prototype,r),i&&e(a,i),t}()).\u0275fac=function(n){return new(n||i)},i.\u0275cmp=c.Fb({type:i,selectors:[["app-class-based-demo"]],decls:5,vars:6,consts:[["text","transform",3,"click"],["text","keyframes",3,"click"],[1,"card",3,"animationend","transitionend"]],template:function(n,e){1&n&&(c.Rb(0,"div"),c.Rb(1,"app-button-basic",0),c.Zb("click",function(){return e.selectTransformAnimation()}),c.Qb(),c.Rb(2,"app-button-basic",1),c.Zb("click",function(){return e.selectKeyframeAnimation()}),c.Qb(),c.Qb(),c.Rb(3,"div",2),c.Zb("animationend",function(){return e.resetAnimation()})("transitionend",function(){return e.resetAnimation()}),c.Mb(4,"app-card-demo-sample"),c.Qb()),2&n&&(c.Bb(3),c.Db("card-reset",!e.animationType)("card-keyframe","KEYFRAME"===e.animationType)("card-transform","TRANSFORM"===e.animationType))},directives:[f.a,m.a],styles:[".card[_ngcontent-%COMP%]{transition:all .5s}.card.card-reset[_ngcontent-%COMP%]{transform:scale(1)}.card.card-transform[_ngcontent-%COMP%]{transform:scale(.8)}.card.card-keyframe[_ngcontent-%COMP%]{-webkit-animation:pulse 1s;animation:pulse 1s}@-webkit-keyframes pulse{0%{transform:scale(1)}50%{transform:scale(.8)}to{transform:scale(1)}}@keyframes pulse{0%{transform:scale(1)}50%{transform:scale(.8)}to{transform:scale(1)}}"]}),i),u=r("ZM5P"),p=r("YUcS"),b=r("cfjQ"),d=((o=function e(){n(this,e)}).entry=l,o.\u0275mod=c.Jb({type:o}),o.\u0275inj=c.Ib({factory:function(n){return new(n||o)},imports:[[s.b,p.a,u.a,b.a]]}),o)}}])}();