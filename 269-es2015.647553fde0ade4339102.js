(self.webpackChunkangular_animations_explorer=self.webpackChunkangular_animations_explorer||[]).push([[269],{7269:function(t,n,e){"use strict";e.r(n),e.d(n,{PostModule:function(){return F}});var o=e(1116),i=e(9667),c=e(4678),r=e(2687),s=e(5366),a=e(4495),p=e(4762);const l=new s.OlP("CONTENT_WIDGETS");var u=e(983);let d=(()=>{class t{constructor(t,n,e){this.injector=t,this.compiler=n,this.contentWidget=e}getPostInfo(t,n){try{return u.V.find(n=>n.path===t).routes.find(t=>t.path===n)}catch(e){}}load(t,n,e){return(0,p.mG)(this,void 0,void 0,function*(){try{e.clear();const o=yield this.contentWidget[`${t}/${n}`]();let i;i=o instanceof s.YKP?o:yield this.compiler.compileModuleAsync(o);const c=i.moduleType.entry,r=i.create(this.injector).componentFactoryResolver.resolveComponentFactory(c);e.createComponent(r)}catch(o){}})}}return t.\u0275fac=function(n){return new(n||t)(s.LFG(s.zs3),s.LFG(s.Sil),s.LFG(l))},t.\u0275prov=s.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var m=e(2485),f=e(5965);const g=[[["","left-section",""]],[["","right-section",""]]],h=["[left-section]","[right-section]"];let v=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=s.Xpm({type:t,selectors:[["app-two-column"]],ngContentSelectors:h,decls:5,vars:0,consts:[["fxLayout","row","fxLayout.lt-md","column",1,"layout-container"],["fxFlex","50%"]],template:function(t,n){1&t&&(s.F$t(g),s.TgZ(0,"div",0),s.TgZ(1,"div",1),s.Hsn(2),s.qZA(),s.TgZ(3,"div",1),s.Hsn(4,1),s.qZA(),s.qZA())},directives:[f.xw,f.yH],styles:[".layout-container[_ngcontent-%COMP%]{height:100%}"]}),t})(),y=(()=>{class t{constructor(t){this.viewContainerRef=t,this.componentLoaded=new s.vpe}ngAfterViewInit(){this.componentLoaded.emit(this.viewContainerRef)}}return t.\u0275fac=function(n){return new(n||t)(s.Y36(s.s_b))},t.\u0275dir=s.lG2({type:t,selectors:[["","appDemoContent",""]],outputs:{componentLoaded:"componentLoaded"}}),t})();function w(t,n){1&t&&s.GkF(0)}function C(t,n){if(1&t&&(s.TgZ(0,"app-single-column"),s.TgZ(1,"h1"),s._uU(2),s.qZA(),s.YNc(3,w,1,0,"ng-container",4),s.qZA()),2&t){const t=s.oxw(),n=s.MAs(5);s.xp6(2),s.Oqu(null==t.postInfo?null:t.postInfo.title),s.xp6(1),s.Q6J("ngTemplateOutlet",n)}}function Z(t,n){1&t&&s.GkF(0)}function T(t,n){}function x(t,n){if(1&t){const t=s.EpF();s.ynx(0),s.TgZ(1,"h1"),s._uU(2),s.qZA(),s.TgZ(3,"app-two-column"),s.TgZ(4,"div",5),s.YNc(5,Z,1,0,"ng-container",4),s.qZA(),s.TgZ(6,"div",6),s.TgZ(7,"div",7),s.YNc(8,T,0,0,"ng-template",8),s.NdJ("componentLoaded",function(n){return s.CHM(t),s.oxw().onComponentLoaded(n)}),s.qZA(),s.qZA(),s.qZA(),s.BQk()}if(2&t){const t=s.oxw(),n=s.MAs(5);s.xp6(2),s.Oqu(null==t.postInfo?null:t.postInfo.title),s.xp6(3),s.Q6J("ngTemplateOutlet",n)}}function A(t,n){1&t&&s._UZ(0,"div")}function P(t,n){if(1&t&&(s.TgZ(0,"div",9),s._UZ(1,"markdown",10),s.qZA()),2&t){const t=s.oxw();s.xp6(1),s.Q6J("src",t.mdPost)}}const I=[{path:"",component:(()=>{class t{constructor(t,n,e){this.route=t,this.navigationService=n,this.contentLoaderService=e,this.ePageType=r.t}ngOnInit(){this.route.paramMap.subscribe(t=>{this.setupPage(t.get("category"),t.get("postName"))})}onComponentLoaded(t){this.loadDemoComponent(t),this.demoVcRef=t}setupPage(t,n){this.routeInfo={category:t,postName:n};try{this.postInfo=this.contentLoaderService.getPostInfo(t,n),this.mdPost=this.postInfo.post,this.demoVcRef&&this.loadDemoComponent(this.demoVcRef)}catch(e){return void this.navigationService.navigateToHome()}}loadDemoComponent(t){this.contentLoaderService.load(this.routeInfo.category,this.routeInfo.postName,t)}}return t.\u0275fac=function(n){return new(n||t)(s.Y36(c.gz),s.Y36(a.f),s.Y36(d))},t.\u0275cmp=s.Xpm({type:t,selectors:[["app-post"]],decls:6,vars:3,consts:[[3,"ngSwitch"],[4,"ngSwitchCase"],[4,"ngSwitchDefault"],["markdown",""],[4,"ngTemplateOutlet"],["left-section",""],["right-section",""],[1,"demo-container"],["appDemoContent","",3,"componentLoaded"],[1,"markdown-container"],[3,"src"]],template:function(t,n){1&t&&(s.ynx(0,0),s.YNc(1,C,4,2,"app-single-column",1),s.YNc(2,x,9,2,"ng-container",1),s.YNc(3,A,1,0,"div",2),s.BQk(),s.YNc(4,P,2,1,"ng-template",null,3,s.W1O)),2&t&&(s.Q6J("ngSwitch",null==n.postInfo?null:n.postInfo.pageType),s.xp6(1),s.Q6J("ngSwitchCase",n.ePageType.ContentOnly),s.xp6(1),s.Q6J("ngSwitchCase",n.ePageType.ContentWithDemo))},directives:[o.RF,o.n9,o.ED,m.y,o.tP,v,y,i.lF],styles:["h1[_ngcontent-%COMP%]{margin:2rem 2rem 1rem;padding:0;font-size:2em;font-weight:500}.demo-container[_ngcontent-%COMP%], .markdown-container[_ngcontent-%COMP%]{margin:2rem}"]}),t})()}];let S=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=s.oAB({type:t}),t.\u0275inj=s.cJS({imports:[[c.Bz.forChild(I)],c.Bz]}),t})();var L=e(3273),O=e(6277);let _=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=s.oAB({type:t}),t.\u0275inj=s.cJS({imports:[[o.ez,O.o9]]}),t})();var k=e(9840);function q(){const t={};for(const n of u.V)for(const e of n.routes)t[`${n.path}/${e.path}`]=e.loadChildren;return t}let F=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=s.oAB({type:t}),t.\u0275inj=s.cJS({providers:[d,{provide:l,useFactory:q}],imports:[[o.ez,i.JP.forChild(),S,L.t,k.p,_]]}),t})()}}]);