(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{Yj9t:function(t,e,r){"use strict";r.r(e),r.d(e,"AuthModule",function(){return k});var i=r("tyNb"),s=r("PCNd"),n=r("P+IX"),o=r("fXoL");let a=(()=>{class t{canDeactivate(t,e,r){return t.canDeactivate()}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=o.Gb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})(),c=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=o.Eb({type:t,selectors:[["app-auth"]],decls:1,vars:0,template:function(t,e){1&t&&o.Lb(0,"router-outlet")},directives:[i.j],styles:[""]}),t})();var l=r("sYmb");let b=(()=>{class t{constructor(){this.closeAlert=new o.n}ngOnInit(){}onCloseAlert(){this.closeAlert.emit()}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=o.Eb({type:t,selectors:[["app-alert"]],inputs:{message:"message"},outputs:{closeAlert:"closeAlert"},decls:8,vars:4,consts:[[1,"backdrop",3,"click"],[1,"alert-box"],[1,"alert-box-actions"],[1,"btn","btn-primary",3,"click"]],template:function(t,e){1&t&&(o.Pb(0,"div",0),o.Wb("click",function(){return e.onCloseAlert()}),o.Ob(),o.Pb(1,"div",1),o.Pb(2,"p"),o.rc(3),o.Ob(),o.Pb(4,"div",2),o.Pb(5,"button",3),o.Wb("click",function(){return e.onCloseAlert()}),o.rc(6),o.Zb(7,"translate"),o.Ob(),o.Ob(),o.Ob()),2&t&&(o.Ab(3),o.sc(e.message),o.Ab(3),o.sc(o.ac(7,2,"Close")))},pipes:[l.c],styles:[".backdrop[_ngcontent-%COMP%]{background:rgba(0,0,0,.75);height:100Vh;left:0;position:fixed;top:0;width:100vw;z-index:50}.alert-box[_ngcontent-%COMP%]{background:#fff;box-shadow:0 2px 8px rgba(0,0,0,.26);left:20vw;padding:16px;position:fixed;top:30vh;width:60vw;z-index:100}.alert-box-actions[_ngcontent-%COMP%]{text-align:right}"]}),t})(),u=(()=>{class t{constructor(t){this.viewContainerRef=t}}return t.\u0275fac=function(e){return new(e||t)(o.Kb(o.Q))},t.\u0275dir=o.Fb({type:t,selectors:[["","appPlaceholder",""]]}),t})();var p=r("/WaZ"),m=r("l7P3"),d=r("ofXK"),h=r("3Pt+"),g=r("zy28");function f(t,e){1&t&&(o.Pb(0,"div",14),o.Lb(1,"app-loading-spinner"),o.Ob())}let v=(()=>{class t{constructor(t,e){this.componentFactoryResolver=t,this.store=e,this.error=null}ngOnInit(){this.authSub=this.store.select("auth").subscribe(t=>{this.isLoading=t.loading,this.error=t.authError,this.error&&this.showErrorAlert(this.error)})}onLogin(t){t.valid&&this.store.dispatch(new p.k({email:t.value.email,password:t.value.password}))}showErrorAlert(t){const e=this.componentFactoryResolver.resolveComponentFactory(b),r=this.alertHost.viewContainerRef;r.clear();const i=r.createComponent(e);i.instance.message=t,this.closeSub=i.instance.closeAlert.subscribe(()=>{this.closeSub.unsubscribe(),r.clear(),this.store.dispatch(new p.h)})}ngOnDestroy(){this.closeSub&&this.closeSub.unsubscribe(),this.authSub&&this.authSub.unsubscribe()}}return t.\u0275fac=function(e){return new(e||t)(o.Kb(o.j),o.Kb(m.i))},t.\u0275cmp=o.Eb({type:t,selectors:[["app-login"]],viewQuery:function(t,e){if(1&t&&o.wc(u,1),2&t){let t;o.ic(t=o.Xb())&&(e.alertHost=t.first)}},decls:24,vars:14,consts:[["appPlaceholder",""],[1,"row"],[1,"col-xs-12","col-md-6","col-md-offset-3"],["class","spinner",4,"ngIf"],[3,"ngSubmit"],["loginForm","ngForm"],[1,"form-group"],["for","email"],["type","email","id","email","ngModel","","name","email","required","","email","",1,"form-control"],["for","password"],["type","password","id","password","ngModel","","name","password","required","","minlength","6",1,"form-control"],["type","submit",1,"btn","btn-primary",3,"disabled"],["type","button",1,"btn","btn-secondary"],["routerLink","../sign-up"],[1,"spinner"]],template:function(t,e){if(1&t){const t=o.Qb();o.Lb(0,"ng-component",0),o.Pb(1,"div",1),o.Pb(2,"div",2),o.qc(3,f,2,0,"div",3),o.Pb(4,"form",4,5),o.Wb("ngSubmit",function(){o.lc(t);const r=o.jc(5);return e.onLogin(r)}),o.Pb(6,"div",6),o.Pb(7,"label",7),o.rc(8),o.Zb(9,"translate"),o.Ob(),o.Lb(10,"input",8),o.Ob(),o.Pb(11,"div",6),o.Pb(12,"label",9),o.rc(13),o.Zb(14,"translate"),o.Ob(),o.Lb(15,"input",10),o.Ob(),o.Pb(16,"div",6),o.Pb(17,"button",11),o.rc(18),o.Zb(19,"translate"),o.Ob(),o.Ob(),o.Pb(20,"button",12),o.Pb(21,"a",13),o.rc(22),o.Zb(23,"translate"),o.Ob(),o.Ob(),o.Ob(),o.Ob(),o.Ob()}if(2&t){const t=o.jc(5);o.Ab(3),o.cc("ngIf",e.isLoading),o.Ab(5),o.sc(o.ac(9,6,"Email")),o.Ab(5),o.sc(o.ac(14,8,"Password")),o.Ab(4),o.cc("disabled",!t.valid),o.Ab(1),o.sc(o.ac(19,10,"LogIn")),o.Ab(4),o.sc(o.ac(23,12,"Sign Up"))}},directives:[i.l,u,d.j,h.s,h.j,h.k,h.a,h.i,h.l,h.p,h.b,h.h,i.h,g.a],pipes:[l.c],styles:[".spinner[_ngcontent-%COMP%]{text-align:center}"]}),t})();function P(t,e){if(1&t&&(o.Pb(0,"div",12),o.Pb(1,"p"),o.rc(2),o.Ob(),o.Ob()),2&t){const t=o.Yb();o.Ab(2),o.sc(t.error)}}function O(t,e){1&t&&(o.Pb(0,"div",13),o.Lb(1,"app-loading-spinner"),o.Ob())}let w=(()=>{class t{constructor(t){this.store=t,this.error=null}ngOnInit(){this.signupSub=this.store.select("auth").subscribe(t=>{this.isLoading=t.loading,this.error=t.authError})}onSignUp(t){t.valid&&this.store.dispatch(new p.n({email:t.value.email,password:t.value.password}))}ngOnDestroy(){this.signupSub&&this.signupSub.unsubscribe()}}return t.\u0275fac=function(e){return new(e||t)(o.Kb(m.i))},t.\u0275cmp=o.Eb({type:t,selectors:[["app-sign-up"]],decls:20,vars:12,consts:[[1,"row"],[1,"col-xs-12","col-md-6","col-md-offset-3"],["class","alert alert-danger",4,"ngIf"],["class","spinner",4,"ngIf"],[3,"ngSubmit"],["signUpForm","ngForm"],[1,"form-group"],["for","email"],["type","email","name","email","ngModel","","email","","required","",1,"form-control"],["for","password"],["type","password","id","password","ngModel","","name","password","minlength","6","required","",1,"form-control"],["type","submit",1,"btn","btn-primary",3,"disabled"],[1,"alert","alert-danger"],[1,"spinner"]],template:function(t,e){if(1&t){const t=o.Qb();o.Pb(0,"div",0),o.Pb(1,"div",1),o.qc(2,P,3,1,"div",2),o.qc(3,O,2,0,"div",3),o.Pb(4,"form",4,5),o.Wb("ngSubmit",function(){o.lc(t);const r=o.jc(5);return e.onSignUp(r)}),o.Pb(6,"div",6),o.Pb(7,"label",7),o.rc(8),o.Zb(9,"translate"),o.Ob(),o.Lb(10,"input",8),o.Ob(),o.Pb(11,"div",6),o.Pb(12,"label",9),o.rc(13),o.Zb(14,"translate"),o.Ob(),o.Lb(15,"input",10),o.Ob(),o.Pb(16,"div",6),o.Pb(17,"button",11),o.rc(18),o.Zb(19,"translate"),o.Ob(),o.Ob(),o.Ob(),o.Ob(),o.Ob()}if(2&t){const t=o.jc(5);o.Ab(2),o.cc("ngIf",e.error),o.Ab(1),o.cc("ngIf",e.isLoading),o.Ab(5),o.sc(o.ac(9,6,"Email")),o.Ab(5),o.sc(o.ac(14,8,"Password")),o.Ab(4),o.cc("disabled",!t.valid),o.Ab(1),o.sc(o.ac(19,10,"Sign Up"))}},directives:[d.j,h.s,h.j,h.k,h.a,h.i,h.l,h.b,h.p,h.h,g.a],pipes:[l.c],styles:[".spinner[_ngcontent-%COMP%]{text-align:center}"]}),t})();var y=r("lJxs");class A{constructor(t,e,r,i,s,n,o){this.firstName=t,this.lastName=e,this.personalNumber=r,this.phone=i,this.imgLink=s,this.group=n,this.email=o}}var L=r("SYpr");function S(t,e){1&t&&(o.Pb(0,"div",21),o.Lb(1,"app-loading-spinner"),o.Ob())}function I(t,e){1&t&&o.Lb(0,"input",22)}function N(t,e){1&t&&o.Lb(0,"input",22)}function C(t,e){if(1&t&&(o.Pb(0,"span",23),o.rc(1),o.Ob()),2&t){const t=o.Yb();o.Ab(1),o.sc(t.errorMessage)}}const F=[{path:"",component:c,children:[{path:"",redirectTo:"login",pathMatch:"full"},{path:"login",component:v},{path:"sign-up",component:w},{path:"registration",canDeactivate:[a],component:(()=>{class t{constructor(t,e){this.store=t,this.translateService=e,this.correctEmail=!0,this.errorMessage=null,this.validRegistration=!1}ngOnInit(){this.registerForm=new h.e({firstName:new h.c(null,[h.r.required]),lastName:new h.c(null,[h.r.required]),personalNumber:new h.c(null,[h.r.required,h.r.minLength(11),h.r.maxLength(11)]),phone:new h.c(null,[h.r.required]),imgLink:new h.c(null,[h.r.required]),group:new h.c(null,[h.r.required]),email:new h.c(null,[h.r.required,h.r.email])}),this.store.dispatch(new L.d),this.authSub=this.store.select("auth").subscribe(t=>{if(!t)return"user is null";this.profilesEmail=t.user.email,this.isLoading=t.loading}),this.registrationSub=this.store.select("registration").pipe(Object(y.a)(t=>t.users)).subscribe(t=>{this.profiles=t})}onRegister(){this.newRegistration=new A(this.registerForm.value.firstName,this.registerForm.value.lastName,this.registerForm.value.personalNumber,this.registerForm.value.phone,this.registerForm.value.imgLink,this.registerForm.value.group,this.registerForm.value.email),this.profilesEmail===this.registerForm.value.email?this.profiles.find(t=>t.email===this.registerForm.value.email)?(this.correctEmail=!1,this.errorMessage="Registration with this email has already been done!"):(this.store.dispatch(new L.b(this.newRegistration)),this.errorMessage=null,this.validRegistration=!0,this.store.dispatch(new L.h)):(this.correctEmail=!1,this.errorMessage="You are not signed up with this email!")}canDeactivate(){if(this.validRegistration)return!0;if(!this.validRegistration){let t="";return this.translateService.get("guardMsg").subscribe(e=>t=e),confirm(t)}}ngOnDestroy(){this.authSub&&this.authSub.unsubscribe(),this.registrationSub&&this.registrationSub.unsubscribe()}}return t.\u0275fac=function(e){return new(e||t)(o.Kb(m.i),o.Kb(l.d))},t.\u0275cmp=o.Eb({type:t,selectors:[["app-registration"]],decls:53,vars:30,consts:[[1,"row"],[1,"col-xs-12","col-md-6","col-md-offset-3"],["class","spinner",4,"ngIf"],[3,"formGroup","ngSubmit"],[1,"form-group"],["for","firstName"],["type","text","formControlName","firstName",1,"form-control"],["for","lastName"],["type","text","formControlName","lastName",1,"form-control"],["for","personalNumber"],["type","text","formControlName","personalNumber",1,"form-control"],["for","phone"],["type","tel","formControlName","phone",1,"form-control"],["for","imgLink"],["type","url","formControlName","imgLink",1,"form-control"],["for","sel1"],["formControlName","group","id","sel1",1,"form-control"],["for","email"],["type","email","class","form-control","formControlName","email",4,"ngIf"],["style","color: red;",4,"ngIf"],["type","submit",1,"btn","btn-success",3,"disabled"],[1,"spinner"],["type","email","formControlName","email",1,"form-control"],[2,"color","red"]],template:function(t,e){1&t&&(o.Pb(0,"div",0),o.Pb(1,"div",1),o.qc(2,S,2,0,"div",2),o.Pb(3,"form",3),o.Wb("ngSubmit",function(){return e.onRegister()}),o.Pb(4,"div",4),o.Pb(5,"label",5),o.rc(6),o.Zb(7,"translate"),o.Ob(),o.Lb(8,"input",6),o.Ob(),o.Pb(9,"div",4),o.Pb(10,"label",7),o.rc(11),o.Zb(12,"translate"),o.Ob(),o.Lb(13,"input",8),o.Ob(),o.Pb(14,"div",4),o.Pb(15,"label",9),o.rc(16),o.Zb(17,"translate"),o.Ob(),o.Lb(18,"input",10),o.Ob(),o.Pb(19,"div",4),o.Pb(20,"label",11),o.rc(21),o.Zb(22,"translate"),o.Ob(),o.Lb(23,"input",12),o.Ob(),o.Pb(24,"div",4),o.Pb(25,"label",13),o.rc(26),o.Zb(27,"translate"),o.Ob(),o.Lb(28,"input",14),o.Ob(),o.Pb(29,"div",4),o.Pb(30,"label",15),o.rc(31),o.Zb(32,"translate"),o.Ob(),o.Pb(33,"select",16),o.Pb(34,"option"),o.rc(35,"A"),o.Ob(),o.Pb(36,"option"),o.rc(37,"B"),o.Ob(),o.Pb(38,"option"),o.rc(39,"C"),o.Ob(),o.Pb(40,"option"),o.rc(41,"D"),o.Ob(),o.Ob(),o.Ob(),o.Pb(42,"div",4),o.Pb(43,"label",17),o.rc(44),o.Zb(45,"translate"),o.Ob(),o.qc(46,I,1,0,"input",18),o.qc(47,N,1,0,"input",18),o.qc(48,C,2,1,"span",19),o.Ob(),o.Pb(49,"div",4),o.Pb(50,"button",20),o.rc(51),o.Zb(52,"translate"),o.Ob(),o.Ob(),o.Ob(),o.Ob(),o.Ob()),2&t&&(o.Ab(2),o.cc("ngIf",e.isLoading),o.Ab(1),o.cc("formGroup",e.registerForm),o.Ab(3),o.sc(o.ac(7,14,"First name")),o.Ab(5),o.sc(o.ac(12,16,"Last name")),o.Ab(5),o.sc(o.ac(17,18,"Personal ID number")),o.Ab(5),o.sc(o.ac(22,20,"Phone number")),o.Ab(5),o.sc(o.ac(27,22,"Image link")),o.Ab(5),o.sc(o.ac(32,24,"Group")),o.Ab(13),o.sc(o.ac(45,26,"Email")),o.Ab(2),o.cc("ngIf",e.registerForm.valid),o.Ab(1),o.cc("ngIf",!e.registerForm.valid),o.Ab(1),o.cc("ngIf",!e.correctEmail),o.Ab(2),o.cc("disabled",!e.registerForm.valid),o.Ab(1),o.sc(o.ac(52,28,"Register")))},directives:[d.j,h.s,h.j,h.f,h.a,h.i,h.d,h.q,h.m,h.t,g.a],pipes:[l.c],styles:[""]}),t})(),resolve:[r("FW2d").a],canActivate:[n.a]}]}];let x=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=o.Ib({type:t}),t.\u0275inj=o.Hb({imports:[[i.i.forChild(F)],i.i]}),t})(),k=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=o.Ib({type:t}),t.\u0275inj=o.Hb({imports:[[i.i,x,s.a]]}),t})()}}]);