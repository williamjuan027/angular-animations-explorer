(self.webpackChunkangular_animations_explorer=self.webpackChunkangular_animations_explorer||[]).push([[850],{9850:function(e,n,t){"use strict";t.r(n),t.d(n,{SequenceDemoModule:function(){return Z}});var c=t(1116),o=t(9713);const a={opacity:0,transform:"scale(0.8)"},i=[(0,o.X$)("fadeGrowSequence",[(0,o.eR)(":enter",[(0,o.IO)(":enter",[(0,o.oB)(a),(0,o.vP)([(0,o.jt)("300ms ease-in",(0,o.oB)({opacity:1})),(0,o.jt)("300ms",(0,o.oB)({transform:"scale(1)"}))])])]),(0,o.eR)(":leave",[(0,o.IO)(":leave",[(0,o.vP)([(0,o.jt)("300ms ease-in",(0,o.oB)({opacity:0})),(0,o.jt)("300ms",(0,o.oB)({transform:"scale(0.8)"}))])])])])],r=[(0,o.X$)("fadeGrowGroup",[(0,o.eR)(":enter",[(0,o.IO)(":enter",[(0,o.oB)(a),(0,o.ru)([(0,o.jt)("200ms ease-in",(0,o.oB)({opacity:1})),(0,o.jt)("500ms",(0,o.oB)({transform:"scale(1)"}))])])]),(0,o.eR)(":leave",[(0,o.IO)(":leave",[(0,o.ru)([(0,o.jt)("200ms ease-in",(0,o.oB)({opacity:0})),(0,o.jt)("500ms",(0,o.oB)({transform:"scale(0.8)"}))])])])])],s=[(0,o.X$)("fadeGrowStagger",[(0,o.eR)(":enter",[(0,o.IO)(":enter",[(0,o.oB)(a),(0,o.EY)("100ms",[(0,o.jt)("500ms",(0,o.oB)({opacity:1,transform:"scale(1)"}))])])]),(0,o.eR)(":leave",[(0,o.IO)(":leave",[(0,o.EY)("-100ms",[(0,o.jt)("500ms",(0,o.oB)(a))])])])])];var u=t(5366),l=t(148),d=t(677);function f(e,n){1&e&&u.GkF(0)}function p(e,n){if(1&e){const e=u.EpF();u.TgZ(0,"div"),u.NdJ("@fadeGrowSequence.done",function(){return u.CHM(e),u.oxw().animationDone()}),u.YNc(1,f,1,0,"ng-container",8),u.qZA()}if(2&e){u.oxw();const e=u.MAs(12);u.Q6J("@fadeGrowSequence",void 0),u.xp6(1),u.Q6J("ngTemplateOutlet",e)}}function g(e,n){1&e&&u.GkF(0)}function m(e,n){if(1&e){const e=u.EpF();u.TgZ(0,"div"),u.NdJ("@fadeGrowGroup.done",function(){return u.CHM(e),u.oxw().animationDone()}),u.YNc(1,g,1,0,"ng-container",8),u.qZA()}if(2&e){u.oxw();const e=u.MAs(12);u.Q6J("@fadeGrowGroup",void 0),u.xp6(1),u.Q6J("ngTemplateOutlet",e)}}function S(e,n){1&e&&u.GkF(0)}function w(e,n){if(1&e){const e=u.EpF();u.TgZ(0,"div"),u.NdJ("@fadeGrowStagger.done",function(){return u.CHM(e),u.oxw().animationDone()}),u.YNc(1,S,1,0,"ng-container",8),u.qZA()}if(2&e){u.oxw();const e=u.MAs(10);u.Q6J("@fadeGrowStagger",void 0),u.xp6(1),u.Q6J("ngTemplateOutlet",e)}}function v(e,n){1&e&&u._UZ(0,"div")}function q(e,n){1&e&&u.GkF(0)}function x(e,n){if(1&e&&(u.ynx(0),u.YNc(1,q,1,0,"ng-container",8),u.BQk()),2&e){u.oxw(2);const e=u.MAs(12);u.xp6(1),u.Q6J("ngTemplateOutlet",e)}}const G=function(){return[0,1,2,3,4,5]};function N(e,n){1&e&&u.YNc(0,x,2,1,"ng-container",9),2&e&&u.Q6J("ngForOf",u.DdM(1,G))}function Q(e,n){1&e&&(u.TgZ(0,"div",10),u._UZ(1,"app-card-demo-sample"),u.qZA())}let E=(()=>{class e{constructor(){this.sequenceSelected="SEQUENCE",this.sequenceChangeQueued="SEQUENCE"}selectSequence(e){this.sequenceSelected=null,this.sequenceChangeQueued=e}animationDone(){this.sequenceSelected=this.sequenceChangeQueued}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=u.Xpm({type:e,selectors:[["app-sequence-demo"]],decls:13,vars:4,consts:[["text","sequence",3,"click"],["text","group",3,"click"],["text","stagger",3,"click"],[3,"ngSwitch"],[4,"ngSwitchCase"],[4,"ngSwitchDefault"],["cards",""],["card",""],[4,"ngTemplateOutlet"],[4,"ngFor","ngForOf"],[1,"card"]],template:function(e,n){1&e&&(u.TgZ(0,"div"),u.TgZ(1,"app-button-basic",0),u.NdJ("click",function(){return n.selectSequence("SEQUENCE")}),u.qZA(),u.TgZ(2,"app-button-basic",1),u.NdJ("click",function(){return n.selectSequence("GROUP")}),u.qZA(),u.TgZ(3,"app-button-basic",2),u.NdJ("click",function(){return n.selectSequence("STAGGER")}),u.qZA(),u.ynx(4,3),u.YNc(5,p,2,2,"div",4),u.YNc(6,m,2,2,"div",4),u.YNc(7,w,2,2,"div",4),u.YNc(8,v,1,0,"div",5),u.BQk(),u.qZA(),u.YNc(9,N,1,2,"ng-template",null,6,u.W1O),u.YNc(11,Q,2,0,"ng-template",null,7,u.W1O)),2&e&&(u.xp6(4),u.Q6J("ngSwitch",n.sequenceSelected),u.xp6(1),u.Q6J("ngSwitchCase","SEQUENCE"),u.xp6(1),u.Q6J("ngSwitchCase","GROUP"),u.xp6(1),u.Q6J("ngSwitchCase","STAGGER"))},directives:[l.U,c.RF,c.n9,c.ED,c.tP,c.sg,d.b],styles:[".card[_ngcontent-%COMP%]{margin:.2rem 0}"],data:{animation:[i,r,s]}}),e})();var h=t(3273),J=t(6277),O=t(7780);let Z=(()=>{class e{}return e.entry=E,e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=u.oAB({type:e}),e.\u0275inj=u.cJS({imports:[[c.ez,J.o9,h.t,O.F]]}),e})()}}]);