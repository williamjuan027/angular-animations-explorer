!function(){function t(t,e){var o;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(o=function(t,e){if(!t)return;if("string"==typeof t)return n(t,e);var o=Object.prototype.toString.call(t).slice(8,-1);"Object"===o&&t.constructor&&(o=t.constructor.name);if("Map"===o||"Set"===o)return Array.from(t);if("Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o))return n(t,e)}(t))||e&&t&&"number"==typeof t.length){o&&(t=o);var r=0,i=function(){};return{s:i,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(t){throw t},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var c,a=!0,u=!1;return{s:function(){o=t[Symbol.iterator]()},n:function(){var t=o.next();return a=t.done,t},e:function(t){u=!0,c=t},f:function(){try{a||null==o.return||o.return()}finally{if(u)throw c}}}}function n(t,n){(null==n||n>t.length)&&(n=t.length);for(var e=0,o=new Array(n);e<n;e++)o[e]=t[e];return o}function e(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function o(t,n){for(var e=0;e<n.length;e++){var o=n[e];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function r(t,n,e){return n&&o(t.prototype,n),e&&o(t,e),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{DZG2:function(n,o,i){"use strict";i.r(o),i.d(o,"PostModule",function(){return F});var c,a,u,s=i("ofXK"),f=i("lR5k"),l=i("tyNb"),p=i("w1wt"),d=i("fXoL"),b=i("dJ3e"),m=i("mrSG"),h=new d.r("CONTENT_WIDGETS"),v=i("fM4K"),g=((c=function(){function t(n,o,r){e(this,t),this.injector=n,this.compiler=o,this.contentWidget=r}return r(t,[{key:"getPostInfo",value:function(t,n){try{return v.a.find(function(n){return n.path===t}).routes.find(function(t){return t.path===n})}catch(e){}}},{key:"load",value:function(t,n,e){return Object(m.b)(this,void 0,void 0,regeneratorRuntime.mark(function o(){var r,i,c,a;return regeneratorRuntime.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.prev=0,e.clear(),o.next=4,this.contentWidget["".concat(t,"/").concat(n)]();case 4:if(!((r=o.sent)instanceof d.w)){o.next=9;break}o.t0=r,o.next=12;break;case 9:return o.next=11,this.compiler.compileModuleAsync(r);case 11:o.t0=o.sent;case 12:i=o.t0,c=i.moduleType.entry,a=i.create(this.injector).componentFactoryResolver.resolveComponentFactory(c),e.createComponent(a),o.next=19;break;case 17:o.prev=17,o.t1=o.catch(0);case 19:case"end":return o.stop()}},o,this,[[0,17]])}))}}]),t}()).\u0275fac=function(t){return new(t||c)(d.Vb(d.s),d.Vb(d.i),d.Vb(h))},c.\u0275prov=d.Hb({token:c,factory:c.\u0275fac,providedIn:"root"}),c),y=i("U/wG"),w=i("XiUz"),C=[[["","left-section",""]],[["","right-section",""]]],I=["[left-section]","[right-section]"],k=((u=function t(){e(this,t)}).\u0275fac=function(t){return new(t||u)},u.\u0275cmp=d.Fb({type:u,selectors:[["app-two-column"]],ngContentSelectors:I,decls:5,vars:0,consts:[["fxLayout","row","fxLayout.lt-md","column",1,"layout-container"],["fxFlex",""]],template:function(t,n){1&t&&(d.fc(C),d.Rb(0,"div",0),d.Rb(1,"div",1),d.ec(2),d.Qb(),d.Rb(3,"div",1),d.ec(4,1),d.Qb(),d.Qb())},directives:[w.c,w.a],styles:[".layout-container[_ngcontent-%COMP%]{height:100%}"]}),u),S=((a=function(){function t(n){e(this,t),this.viewContainerRef=n,this.componentLoaded=new d.n}return r(t,[{key:"ngAfterViewInit",value:function(){this.componentLoaded.emit(this.viewContainerRef)}}]),t}()).\u0275fac=function(t){return new(t||a)(d.Lb(d.Q))},a.\u0275dir=d.Gb({type:a,selectors:[["","appDemoContent",""]],outputs:{componentLoaded:"componentLoaded"}}),a);function R(t,n){1&t&&d.Nb(0)}function L(t,n){if(1&t&&(d.Rb(0,"app-single-column"),d.Rb(1,"h1"),d.sc(2),d.Qb(),d.qc(3,R,1,0,"ng-container",4),d.Qb()),2&t){var e=d.bc(),o=d.jc(5);d.Bb(2),d.tc(null==e.postInfo?null:e.postInfo.title),d.Bb(1),d.gc("ngTemplateOutlet",o)}}function P(t,n){1&t&&d.Nb(0)}function O(t,n){}function T(t,n){if(1&t){var e=d.Sb();d.Pb(0),d.Rb(1,"h1"),d.sc(2),d.Qb(),d.Rb(3,"app-two-column"),d.Rb(4,"div",5),d.qc(5,P,1,0,"ng-container",4),d.Qb(),d.Rb(6,"div",6),d.Rb(7,"div",7),d.qc(8,O,0,0,"ng-template",8),d.Zb("componentLoaded",function(t){return d.kc(e),d.bc().onComponentLoaded(t)}),d.Qb(),d.Qb(),d.Qb(),d.Ob()}if(2&t){var o=d.bc(),r=d.jc(5);d.Bb(2),d.tc(null==o.postInfo?null:o.postInfo.title),d.Bb(3),d.gc("ngTemplateOutlet",r)}}function M(t,n){1&t&&d.Mb(0,"div")}function Q(t,n){if(1&t&&(d.Rb(0,"div",9),d.Mb(1,"markdown",10),d.Qb()),2&t){var e=d.bc();d.Bb(1),d.gc("src",e.mdPost)}}var j,x,A=[{path:"",component:(j=function(){function t(n,o,r){e(this,t),this.route=n,this.navigationService=o,this.contentLoaderService=r,this.ePageType=p.a}return r(t,[{key:"ngOnInit",value:function(){var t=this;this.route.paramMap.subscribe(function(n){t.setupPage(n.get("category"),n.get("postName"))})}},{key:"onComponentLoaded",value:function(t){this.loadDemoComponent(t),this.demoVcRef=t}},{key:"setupPage",value:function(t,n){this.routeInfo={category:t,postName:n};try{this.postInfo=this.contentLoaderService.getPostInfo(t,n),this.mdPost=this.postInfo.post,this.demoVcRef&&this.loadDemoComponent(this.demoVcRef)}catch(e){return void this.navigationService.navigateToHome()}}},{key:"loadDemoComponent",value:function(t){this.contentLoaderService.load(this.routeInfo.category,this.routeInfo.postName,t)}}]),t}(),j.\u0275fac=function(t){return new(t||j)(d.Lb(l.a),d.Lb(b.a),d.Lb(g))},j.\u0275cmp=d.Fb({type:j,selectors:[["app-post"]],decls:6,vars:3,consts:[[3,"ngSwitch"],[4,"ngSwitchCase"],[4,"ngSwitchDefault"],["markdown",""],[4,"ngTemplateOutlet"],["left-section",""],["right-section",""],[1,"demo-container"],["appDemoContent","",3,"componentLoaded"],[1,"markdown-container"],[3,"src"]],template:function(t,n){1&t&&(d.Pb(0,0),d.qc(1,L,4,2,"app-single-column",1),d.qc(2,T,9,2,"ng-container",1),d.qc(3,M,1,0,"div",2),d.Ob(),d.qc(4,Q,2,1,"ng-template",null,3,d.rc)),2&t&&(d.gc("ngSwitch",null==n.postInfo?null:n.postInfo.pageType),d.Bb(1),d.gc("ngSwitchCase",n.ePageType.ContentOnly),d.Bb(1),d.gc("ngSwitchCase",n.ePageType.ContentWithDemo))},directives:[s.m,s.n,s.o,y.a,s.p,k,S,f.a],styles:["h1[_ngcontent-%COMP%]{margin:2rem 2rem 1rem;padding:0;font-size:2em;font-weight:500}.demo-container[_ngcontent-%COMP%], .markdown-container[_ngcontent-%COMP%]{margin:2rem}"]}),j)}],D=((x=function t(){e(this,t)}).\u0275mod=d.Jb({type:x}),x.\u0275inj=d.Ib({factory:function(t){return new(t||x)},imports:[[l.d.forChild(A)],l.d]}),x),N=i("ZM5P"),q=i("EX3A");function B(){var n,e={},o=t(v.a);try{for(o.s();!(n=o.n()).done;){var r,i=n.value,c=t(i.routes);try{for(c.s();!(r=c.n()).done;){var a=r.value;e["".concat(i.path,"/").concat(a.path)]=a.loadChildren}}catch(u){c.e(u)}finally{c.f()}}}catch(u){o.e(u)}finally{o.f()}return e}var V,F=((V=function t(){e(this,t)}).\u0275mod=d.Jb({type:V}),V.\u0275inj=d.Ib({factory:function(t){return new(t||V)},providers:[g,{provide:h,useFactory:B}],imports:[[s.b,f.b.forChild(),D,N.a,q.a,q.b]]}),V)}}])}();