(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{vNkp:function(t,e,s){"use strict";s.r(e),s.d(e,"WorksModule",function(){return it});var r=s("ofXK"),c=s("3Pt+"),n=s("PCNd"),o=s("tyNb"),i=s("w1fw"),a=s("qoGB"),b=s("fXoL"),u=s("l7P3"),l=s("sYmb");let h=(()=>{class t{constructor(t){this.store=t}ngOnInit(){}onNavigateHomework(){this.store.dispatch(new i.r)}onNavigateTest(){this.store.dispatch(new a.r)}}return t.\u0275fac=function(e){return new(e||t)(b.Kb(u.i))},t.\u0275cmp=b.Eb({type:t,selectors:[["app-works"]],decls:14,vars:9,consts:[[1,"nav","nav-tabs"],["role","presentation","routerLinkActive","active"],["routerLink","activity"],["role","presentation","routerLinkActive","active",3,"click"],["routerLink","homework"],["routerLink","online-test"]],template:function(t,e){1&t&&(b.Pb(0,"ul",0),b.Pb(1,"li",1),b.Pb(2,"a",2),b.rc(3),b.Zb(4,"translate"),b.Ob(),b.Ob(),b.Pb(5,"li",3),b.Wb("click",function(){return e.onNavigateHomework()}),b.Pb(6,"a",4),b.rc(7),b.Zb(8,"translate"),b.Ob(),b.Ob(),b.Pb(9,"li",3),b.Wb("click",function(){return e.onNavigateTest()}),b.Pb(10,"a",5),b.rc(11),b.Zb(12,"translate"),b.Ob(),b.Ob(),b.Ob(),b.Lb(13,"router-outlet")),2&t&&(b.Ab(3),b.sc(b.ac(4,3,"Activity")),b.Ab(4),b.sc(b.ac(8,5,"Homework")),b.Ab(4),b.sc(b.ac(12,7,"Online test")))},directives:[o.g,o.h,o.j],pipes:[l.c],styles:[""]}),t})();function d(t,e){if(1&t&&(b.Pb(0,"tbody"),b.Pb(1,"tr"),b.Pb(2,"th",8),b.rc(3),b.Ob(),b.Pb(4,"td"),b.rc(5),b.Ob(),b.Pb(6,"td"),b.rc(7),b.Ob(),b.Pb(8,"td"),b.rc(9),b.Ob(),b.Ob(),b.Ob()),2&t){const t=e.$implicit,s=e.index,r=b.Yb();b.Ab(3),b.sc(null==t?null:t.homeworkNum),b.Ab(2),b.sc(null==t?null:t.getActivityFirst),b.Ab(2),b.sc(null==r.activitiesTest[s]?null:r.activitiesTest[s].getActivitySecond),b.Ab(2),b.sc((null==t?null:t.getActivityFirst)+(null==r.activitiesTest[s]?null:r.activitiesTest[s].getActivitySecond))}}let m=(()=>{class t{constructor(t){this.store=t,this.activityPercentage=0,this.activitiesScoreFirst=0,this.activitiesScoreSecond=0,this.activitiesHomework=[],this.activitiesTest=[]}ngOnInit(){this.store.dispatch(new i.u),this.homeworkSub=this.store.select("homeWork").subscribe(t=>{this.activitiesHomework=t.answeredHomeworks,this.activitiesScoreFirst=t.firstActivities}),this.store.dispatch(new a.t),this.testSub=this.store.select("OnlineTest").subscribe(t=>{this.activitiesTest=t.solvedTests,this.activitiesScoreSecond=t.secondActivities}),this.activityPercentage=10*(this.activitiesScoreFirst/this.activitiesHomework.length+this.activitiesScoreSecond/this.activitiesTest.length)}ngOnDestroy(){this.homeworkSub&&this.homeworkSub.unsubscribe(),this.testSub&&this.testSub.unsubscribe()}}return t.\u0275fac=function(e){return new(e||t)(b.Kb(u.i))},t.\u0275cmp=b.Eb({type:t,selectors:[["app-activity"]],decls:39,vars:25,consts:[[1,"panel","panel-default"],[1,"panel-heading"],[1,"panel-body"],[1,"table","table-striped","table-hover"],["scope","col"],[4,"ngFor","ngForOf"],[1,"progress"],["role","progressbar","aria-valuenow","60","aria-valuemin","0","aria-valuemax","100",1,"progress-bar"],["scope","row"]],template:function(t,e){1&t&&(b.Lb(0,"hr"),b.Pb(1,"div",0),b.Pb(2,"div",1),b.rc(3),b.Zb(4,"translate"),b.Ob(),b.Pb(5,"div",2),b.Pb(6,"p"),b.rc(7),b.Zb(8,"translate"),b.Ob(),b.Ob(),b.Pb(9,"table",3),b.Pb(10,"thead"),b.Pb(11,"tr"),b.Pb(12,"th",4),b.rc(13,"#"),b.Ob(),b.Pb(14,"th",4),b.rc(15),b.Zb(16,"translate"),b.Ob(),b.Pb(17,"th",4),b.rc(18),b.Zb(19,"translate"),b.Ob(),b.Pb(20,"th",4),b.rc(21),b.Zb(22,"translate"),b.Ob(),b.Ob(),b.Ob(),b.qc(23,d,10,4,"tbody",5),b.Pb(24,"tfoot"),b.Pb(25,"tr"),b.Pb(26,"th",4),b.rc(27),b.Zb(28,"translate"),b.Ob(),b.Pb(29,"th",4),b.rc(30),b.Ob(),b.Pb(31,"th",4),b.rc(32),b.Ob(),b.Pb(33,"th",4),b.rc(34),b.Ob(),b.Ob(),b.Ob(),b.Ob(),b.Ob(),b.Lb(35,"hr"),b.Pb(36,"div",6),b.Pb(37,"div",7),b.rc(38),b.Ob(),b.Ob()),2&t&&(b.Ab(3),b.sc(b.ac(4,13,"activity.title")),b.Ab(4),b.sc(b.ac(8,15,"activity.about")),b.Ab(8),b.sc(b.ac(16,17,"activity.firstScore")),b.Ab(3),b.sc(b.ac(19,19,"activity.secondScore")),b.Ab(3),b.sc(b.ac(22,21,"activity.sum")),b.Ab(2),b.cc("ngForOf",e.activitiesHomework),b.Ab(4),b.sc(b.ac(28,23,"activity.sum")),b.Ab(3),b.sc(e.activitiesScoreFirst),b.Ab(2),b.sc(e.activitiesScoreSecond),b.Ab(2),b.sc(e.activitiesScoreFirst+e.activitiesScoreSecond),b.Ab(3),b.pc("width",e.activityPercentage,"%"),b.Ab(1),b.tc(" ",e.activityPercentage,"% "))},directives:[r.i],pipes:[l.c],styles:[".progress-bar[_ngcontent-%COMP%]{background-color:#5cb85c}"]}),t})();var p=s("lJxs");function w(t,e){if(1&t&&(b.Pb(0,"tbody"),b.Pb(1,"tr"),b.Pb(2,"th",10),b.rc(3),b.Ob(),b.Pb(4,"td"),b.rc(5),b.Ob(),b.Ob(),b.Ob()),2&t){const t=e.$implicit;b.Ab(3),b.sc(t.homeworkNum),b.Ab(2),b.sc(t.getScore)}}function f(t,e){if(1&t&&(b.Pb(0,"div",4),b.Pb(1,"div",5),b.rc(2),b.Zb(3,"translate"),b.Ob(),b.Pb(4,"div",6),b.Pb(5,"p"),b.rc(6),b.Zb(7,"translate"),b.Ob(),b.Ob(),b.Pb(8,"table",7),b.Pb(9,"thead"),b.Pb(10,"tr"),b.Pb(11,"th",8),b.rc(12,"#"),b.Ob(),b.Pb(13,"th",8),b.rc(14),b.Zb(15,"translate"),b.Ob(),b.Ob(),b.Ob(),b.qc(16,w,6,2,"tbody",9),b.Pb(17,"tfoot"),b.Pb(18,"tr"),b.Pb(19,"th",8),b.rc(20),b.Zb(21,"translate"),b.Ob(),b.Pb(22,"th",8),b.rc(23),b.Ob(),b.Ob(),b.Ob(),b.Ob(),b.Ob()),2&t){const t=b.Yb();b.Ab(2),b.sc(b.ac(3,6,"homework.title")),b.Ab(4),b.sc(b.ac(7,8,"homework.about")),b.Ab(8),b.sc(b.ac(15,10,"homework.homeworkScore")),b.Ab(2),b.cc("ngForOf",t.solvedHomeworks),b.Ab(4),b.sc(b.ac(21,12,"homework.sum")),b.Ab(3),b.sc(t.homeworksSum)}}function g(t,e){if(1&t&&(b.Pb(0,"div",11),b.Pb(1,"div",12),b.rc(2),b.Ob(),b.Ob()),2&t){const t=b.Yb();b.Ab(1),b.pc("width",t.homeworksPercentage,"%"),b.Ab(1),b.tc(" ",t.homeworksPercentage,"% ")}}function k(t,e){if(1&t){const t=b.Qb();b.Pb(0,"button",13),b.Wb("click",function(){return b.lc(t),b.Yb().goToCurHomework()}),b.rc(1),b.Zb(2,"translate"),b.Ob()}2&t&&(b.Ab(1),b.sc(b.ac(2,1,"homework.btn")))}function v(t,e){1&t&&b.Lb(0,"router-outlet")}let O=(()=>{class t{constructor(t,e){this.store=t,this.route=e,this.solvedHomeworks=[]}ngOnInit(){this.routerSub=this.route.queryParams.pipe(Object(p.a)(t=>t)).subscribe(t=>{t.isWritten&&this.store.dispatch(new i.q)}),this.store.dispatch(new i.v),this.store.dispatch(new i.w),this.homeworkSub=this.store.select("homeWork").subscribe(t=>{this.solvedHomeworks=t.answeredHomeworks,this.homeworksPercentage=t.homeworksPercentage,this.homeworksSum=t.homeworksSum,this.curHomework=t.homework,this.homeworkIsWritten=t.homeworkIsWritten,this.isHomeworkEnterMode=t.isHomeworkMode})}goToCurHomework(){this.store.dispatch(new i.t({homeworkNumber:this.curHomework.homeworkNumber,homeworkIsWritten:this.homeworkIsWritten}))}ngOnDestroy(){this.routerSub&&this.routerSub.unsubscribe(),this.homeworkSub&&this.homeworkSub.unsubscribe()}}return t.\u0275fac=function(e){return new(e||t)(b.Kb(u.i),b.Kb(o.a))},t.\u0275cmp=b.Eb({type:t,selectors:[["app-homework"]],decls:6,vars:4,consts:[["class","panel panel-default",4,"ngIf"],["class","progress",4,"ngIf"],["type","button","class","btn btn-primary",3,"click",4,"ngIf"],[4,"ngIf"],[1,"panel","panel-default"],[1,"panel-heading"],[1,"panel-body"],[1,"table","table-striped"],["scope","col"],[4,"ngFor","ngForOf"],["scope","row"],[1,"progress"],["role","progressbar","aria-valuenow","proc","aria-valuemin","0","aria-valuemax","100",1,"progress-bar"],["type","button",1,"btn","btn-primary",3,"click"]],template:function(t,e){1&t&&(b.Lb(0,"hr"),b.qc(1,f,24,14,"div",0),b.Lb(2,"hr"),b.qc(3,g,3,3,"div",1),b.qc(4,k,3,3,"button",2),b.qc(5,v,1,0,"router-outlet",3)),2&t&&(b.Ab(1),b.cc("ngIf",!e.isHomeworkEnterMode),b.Ab(2),b.cc("ngIf",!e.isHomeworkEnterMode),b.Ab(1),b.cc("ngIf",!e.isHomeworkEnterMode),b.Ab(1),b.cc("ngIf",e.isHomeworkEnterMode))},directives:[r.j,r.i,o.j],pipes:[l.c],styles:[".progress-bar[_ngcontent-%COMP%]{background-color:#5bc0de}"]}),t})();function P(t,e){if(1&t&&(b.Pb(0,"tbody"),b.Pb(1,"tr"),b.Pb(2,"th",10),b.rc(3),b.Ob(),b.Pb(4,"td"),b.rc(5),b.Ob(),b.Ob(),b.Ob()),2&t){const t=e.$implicit;b.Ab(3),b.sc(t.testNum),b.Ab(2),b.sc(t.getTestScore)}}function A(t,e){if(1&t&&(b.Pb(0,"div",4),b.Pb(1,"div",5),b.rc(2),b.Zb(3,"translate"),b.Ob(),b.Pb(4,"div",6),b.Pb(5,"p"),b.rc(6),b.Zb(7,"translate"),b.Ob(),b.Ob(),b.Pb(8,"table",7),b.Pb(9,"thead"),b.Pb(10,"tr"),b.Pb(11,"th",8),b.rc(12,"#"),b.Ob(),b.Pb(13,"th",8),b.rc(14),b.Zb(15,"translate"),b.Ob(),b.Ob(),b.Ob(),b.qc(16,P,6,2,"tbody",9),b.Pb(17,"tfoot"),b.Pb(18,"tr"),b.Pb(19,"th",8),b.rc(20),b.Zb(21,"translate"),b.Ob(),b.Pb(22,"th",8),b.rc(23),b.Ob(),b.Ob(),b.Ob(),b.Ob(),b.Ob()),2&t){const t=b.Yb();b.Ab(2),b.sc(b.ac(3,6,"onlineTest.title")),b.Ab(4),b.sc(b.ac(7,8,"onlineTest.about")),b.Ab(8),b.sc(b.ac(15,10,"onlineTest.testScore")),b.Ab(2),b.cc("ngForOf",t.solvedTests),b.Ab(4),b.sc(b.ac(21,12,"onlineTest.sum")),b.Ab(3),b.sc(t.testsSum)}}function T(t,e){if(1&t&&(b.Pb(0,"div",11),b.Pb(1,"div",12),b.rc(2),b.Ob(),b.Ob()),2&t){const t=b.Yb();b.Ab(1),b.pc("width",t.testsPercentage,"%"),b.Ab(1),b.tc(" ",t.testsPercentage,"% ")}}function S(t,e){if(1&t){const t=b.Qb();b.Pb(0,"button",13),b.Wb("click",function(){return b.lc(t),b.Yb().goToCurTest()}),b.rc(1),b.Zb(2,"translate"),b.Ob()}2&t&&(b.Ab(1),b.sc(b.ac(2,1,"onlineTest.btn")))}function y(t,e){1&t&&b.Lb(0,"router-outlet")}let I=(()=>{class t{constructor(t,e){this.store=t,this.route=e,this.testsPercentage=null,this.testsSum=null,this.solvedTests=[]}ngOnInit(){this.routerSub=this.route.queryParams.pipe(Object(p.a)(t=>t)).subscribe(t=>{t.isSolved&&this.store.dispatch(new a.q)}),this.store.dispatch(new a.u),this.testSub=this.store.select("OnlineTest").subscribe(t=>{this.solvedTests=t.solvedTests,this.testsSum=t.testsSum,this.testsPercentage=t.testsPercentage,this.curTest=t.test,this.isSolved=t.testIsWritten,this.isTestMode=t.isTestMode})}goToCurTest(){this.store.dispatch(new a.s({testNumber:this.curTest.TestNumber,isSolved:this.isSolved}))}ngOnDestroy(){this.routerSub&&this.routerSub.unsubscribe(),this.testSub&&this.testSub.unsubscribe()}}return t.\u0275fac=function(e){return new(e||t)(b.Kb(u.i),b.Kb(o.a))},t.\u0275cmp=b.Eb({type:t,selectors:[["app-online-test"]],decls:6,vars:4,consts:[["class","panel panel-default",4,"ngIf"],["class","progress",4,"ngIf"],["type","button","class","btn btn-primary",3,"click",4,"ngIf"],[4,"ngIf"],[1,"panel","panel-default"],[1,"panel-heading"],[1,"panel-body"],[1,"table","table-striped"],["scope","col"],[4,"ngFor","ngForOf"],["scope","row"],[1,"progress"],["role","progressbar","aria-valuenow","60","aria-valuemin","0","aria-valuemax","100",1,"progress-bar"],["type","button",1,"btn","btn-primary",3,"click"]],template:function(t,e){1&t&&(b.Lb(0,"hr"),b.qc(1,A,24,14,"div",0),b.Lb(2,"hr"),b.qc(3,T,3,3,"div",1),b.qc(4,S,3,3,"button",2),b.qc(5,y,1,0,"router-outlet",3)),2&t&&(b.Ab(1),b.cc("ngIf",!e.isTestMode),b.Ab(2),b.cc("ngIf",!e.isTestMode),b.Ab(1),b.cc("ngIf",!e.isTestMode),b.Ab(1),b.cc("ngIf",e.isTestMode))},directives:[r.j,r.i,o.j],pipes:[l.c],styles:[".progress-bar[_ngcontent-%COMP%]{background-color:#f0ad4e}"]}),t})();var C=s("OgS3"),H=s("JtOw");const M=["answer"],Z=function(t,e){return{"btn-danger":t,"btn-success":e}};function N(t,e){if(1&t){const t=b.Qb();b.Pb(0,"button",11),b.Wb("click",function(){return b.lc(t),b.Yb().addTask()}),b.rc(1),b.Zb(2,"translate"),b.Ob()}if(2&t){const t=b.Yb();b.cc("disabled",t.isAdded)("ngClass",b.fc(5,Z,!t.isAdded,t.isAdded)),b.Ab(1),b.sc(b.ac(2,3,"homework.task.btn"))}}const q=function(t){return{display:t}};let F=(()=>{class t{constructor(t){this.store=t,this.isAdded=!1}ngOnInit(){this.taskForm=new c.e({solve:new c.c(""),answer:new c.c("")})}submitTask(){console.log(this.taskForm)}addTask(){this.isAdded=!0,this.store.dispatch(new i.d(new H.a(this.curTaskNumber,this.taskForm.value.solve,this.taskForm.value.answer,this.taskForm.value.answer===this.answer.nativeElement.innerHTML?2:0)))}}return t.\u0275fac=function(e){return new(e||t)(b.Kb(u.i))},t.\u0275cmp=b.Eb({type:t,selectors:[["app-tasks"]],viewQuery:function(t,e){if(1&t&&b.wc(M,1),2&t){let t;b.ic(t=b.Xb())&&(e.answer=t.first)}},inputs:{curHomework:"curHomework",curTask:"curTask",curTaskNumber:"curTaskNumber",showCorrectAnswer:"showCorrectAnswer"},decls:29,vars:27,consts:[[3,"formGroup","ngSubmit"],[1,"form-group"],[1,"help-block"],["for","comment"],["formControlName","solve","rows","5",1,"form-control",3,"placeholder"],[1,"form-group","answer"],["formControlName","answer",1,"form-control",3,"placeholder"],[1,"form-group","answer","correct-answer",3,"ngStyle"],[1,"form-control",2,"border-color","rgba(5, 250, 5, 0.604)"],["answer",""],["type","button","class","btn",3,"disabled","ngClass","click",4,"ngIf"],["type","button",1,"btn",3,"disabled","ngClass","click"]],template:function(t,e){1&t&&(b.Pb(0,"form",0),b.Wb("ngSubmit",function(){return e.submitTask()}),b.Pb(1,"div",1),b.Pb(2,"p"),b.rc(3),b.Zb(4,"translate"),b.Ob(),b.Pb(5,"p",2),b.rc(6),b.Ob(),b.Pb(7,"div",1),b.Pb(8,"label",3),b.rc(9),b.Zb(10,"translate"),b.Ob(),b.Pb(11,"textarea",4),b.Zb(12,"translate"),b.rc(13),b.Ob(),b.Ob(),b.Pb(14,"div",5),b.Pb(15,"label",3),b.rc(16),b.Zb(17,"translate"),b.Ob(),b.Lb(18,"input",6),b.Zb(19,"translate"),b.Ob(),b.Pb(20,"div",7),b.Pb(21,"label",3),b.rc(22),b.Zb(23,"translate"),b.Ob(),b.Pb(24,"span",8,9),b.rc(26),b.Ob(),b.Ob(),b.Ob(),b.qc(27,N,3,8,"button",10),b.Ob(),b.Lb(28,"hr")),2&t&&(b.cc("formGroup",e.taskForm),b.Ab(3),b.uc("",b.ac(4,13,"homework.task.taskNumber")," ",e.curTaskNumber,""),b.Ab(3),b.sc(e.curTask.conditions),b.Ab(3),b.tc("",b.ac(10,15,"homework.task.title"),":"),b.Ab(2),b.dc("placeholder",b.ac(12,17,"homework.task.solutionPlaceholder")),b.Ab(2),b.sc(e.curTask.solve),b.Ab(3),b.tc("",b.ac(17,19,"homework.task.answer"),": "),b.Ab(2),b.dc("placeholder",b.ac(19,21,"homework.task.answerPlaceholder")),b.Ab(2),b.cc("ngStyle",b.ec(25,q,e.showCorrectAnswer?"block":"none")),b.Ab(2),b.tc("",b.ac(23,23,"homework.task.corAnswer"),": "),b.Ab(4),b.sc(e.curTask.answer),b.Ab(1),b.cc("ngIf",!e.showCorrectAnswer))},directives:[c.s,c.j,c.f,c.a,c.i,c.d,r.k,r.j,r.h],pipes:[l.c],styles:[".answer[_ngcontent-%COMP%]{max-width:300px}.correct-answer[_ngcontent-%COMP%]{background-color:rgba(73,235,73,.679)}"]}),t})();function x(t,e){1&t&&(b.Pb(0,"span",3),b.rc(1),b.Zb(2,"translate"),b.Ob()),2&t&&(b.Ab(1),b.sc(b.ac(2,1,"homework.curHomework.status")))}function W(t,e){if(1&t&&b.Lb(0,"app-tasks",9),2&t){const t=e.$implicit,s=e.index,r=b.Yb(2);b.cc("curHomework",r.curHomework.homeworkNumber)("curTaskNumber",s+1)("curTask",t)("showCorrectAnswer",r.disabledSuccess)}}function _(t,e){if(1&t){const t=b.Qb();b.Pb(0,"button",10),b.Wb("click",function(){return b.lc(t),b.Yb(2).endHomework()}),b.rc(1),b.Zb(2,"translate"),b.Ob()}2&t&&(b.Ab(1),b.sc(b.ac(2,1,"homework.curHomework.btn")))}function L(t,e){if(1&t&&(b.Pb(0,"span",11),b.rc(1),b.Zb(2,"translate"),b.Zb(3,"translate"),b.Zb(4,"translate"),b.Ob()),2&t){const t=b.Yb(2);b.Ab(1),b.vc(" ",b.ac(2,5,"assessment.first")," ",t.yourScore," ",b.ac(3,7,"assessment.second")," ",t.maxScore," ",b.ac(4,9,"assessment.third"),"")}}function Y(t,e){1&t&&(b.Pb(0,"span",12),b.rc(1),b.Zb(2,"translate"),b.Ob()),2&t&&(b.Ab(1),b.sc(b.ac(2,1,"homework.curHomework.errorMsg")))}function j(t,e){if(1&t&&(b.Pb(0,"div"),b.Pb(1,"label",4),b.rc(2),b.Zb(3,"translate"),b.Ob(),b.qc(4,W,1,4,"app-tasks",5),b.qc(5,_,3,3,"button",6),b.qc(6,L,5,11,"span",7),b.qc(7,Y,3,3,"span",8),b.Ob()),2&t){const t=b.Yb();b.Ab(2),b.uc("",b.ac(3,6,"Homework")," #",t.curHomework.homeworkNumber,""),b.Ab(2),b.cc("ngForOf",t.curHomework.tasks),b.Ab(1),b.cc("ngIf",!t.disabledSuccess),b.Ab(1),b.cc("ngIf",t.disabledSuccess),b.Ab(1),b.cc("ngIf",t.errorSuccess)}}let K=(()=>{class t{constructor(t,e,s,r){this.store=t,this.route=e,this.router=s,this.translateService=r,this.disabledSuccess=!1,this.errorSuccess=!1,this.yourScore=null,this.maxScore=null}ngOnInit(){this.routerSub=this.route.queryParams.pipe(Object(p.a)(t=>t.isWritten)).subscribe(t=>{this.active=+t}),this.homeworkSub=this.store.select("homeWork").subscribe(t=>{this.curHomework=t.homework,this.answeredTasks=t.answeredTasks,this.answeredHomeworks=t.answeredHomeworks,this.homeworkMode=t.isHomeworkMode,this.homeworkIsWritten=t.homeworkIsWritten})}endHomework(){var t;this.errorSuccess=!0,this.answeredTasks.length===this.curHomework.tasks.length&&(this.disabledSuccess=!0,this.errorSuccess=!1,this.store.dispatch(new i.s),this.store.dispatch(new i.c(new C.a("lashaiakobadze@gmail.com",this.curHomework.homeworkNumber,this.answeredTasks)))),this.yourScore=null===(t=this.answeredHomeworks[this.curHomework.homeworkNumber-1])||void 0===t?void 0:t.getScore,this.maxScore=2*this.answeredTasks.length}onNavigateBack(){this.store.dispatch(new i.q),this.router.navigate(["../"],{relativeTo:this.route})}canDeactivate(){if(this.homeworkIsWritten)return!0;let t="";return this.translateService.get("guardMsg").subscribe(e=>t=e),confirm(t)}ngOnDestroy(){this.routerSub&&this.routerSub.unsubscribe(),this.homeworkSub&&this.homeworkSub.unsubscribe(),this.answeredTasks.length!==this.curHomework.tasks.length&&this.store.dispatch(new i.f)}}return t.\u0275fac=function(e){return new(e||t)(b.Kb(u.i),b.Kb(o.a),b.Kb(o.f),b.Kb(l.d))},t.\u0275cmp=b.Eb({type:t,selectors:[["app-current-homework"]],decls:5,vars:5,consts:[["class","inActive",4,"ngIf"],[4,"ngIf"],[1,"btn","btn-info","back",3,"click"],[1,"inActive"],[1,"form-group"],[3,"curHomework","curTaskNumber","curTask","showCorrectAnswer",4,"ngFor","ngForOf"],["type","submit","class","btn btn-success",3,"click",4,"ngIf"],["class","success",4,"ngIf"],["class","danger",4,"ngIf"],[3,"curHomework","curTaskNumber","curTask","showCorrectAnswer"],["type","submit",1,"btn","btn-success",3,"click"],[1,"success"],[1,"danger"]],template:function(t,e){1&t&&(b.qc(0,x,3,3,"span",0),b.qc(1,j,8,8,"div",1),b.Pb(2,"button",2),b.Wb("click",function(){return e.onNavigateBack()}),b.rc(3),b.Zb(4,"translate"),b.Ob()),2&t&&(b.cc("ngIf",e.active),b.Ab(1),b.cc("ngIf",!e.active),b.Ab(2),b.sc(b.ac(4,3,"btnBack")))},directives:[r.j,r.i,F],pipes:[l.c],styles:[".danger[_ngcontent-%COMP%]{color:#ca0505;font-weight:600}.success[_ngcontent-%COMP%]{color:#3f4f33;font-size:25px;font-weight:600;margin-bottom:40px}.inActive[_ngcontent-%COMP%]{font-size:40px;font-weight:600;margin:auto}.back[_ngcontent-%COMP%]{margin-left:45%;transition:width 2s;width:130px}.back[_ngcontent-%COMP%]:hover{width:300px}"]}),t})();var E=s("4DpG"),D=s("A7IR");const Q=["answer"];function B(t,e){if(1&t&&(b.Pb(0,"div",10),b.Lb(1,"input",11),b.Pb(2,"label",12),b.rc(3),b.Ob(),b.Ob()),2&t){const t=e.$implicit;b.Ab(1),b.cc("value",t),b.Ab(1),b.cc("for",t),b.Ab(1),b.sc(t)}}const G=function(t,e){return{"btn-danger":t,"btn-success":e}};function z(t,e){if(1&t){const t=b.Qb();b.Pb(0,"button",13),b.Wb("click",function(){return b.lc(t),b.Yb().addTestTask()}),b.rc(1),b.Zb(2,"translate"),b.Ob()}if(2&t){const t=b.Yb();b.cc("disabled",t.isAdded)("ngClass",b.fc(6,G,!t.isAdded,t.isAdded))("disabled",!t.testForm.valid),b.Ab(1),b.sc(b.ac(2,4,"onlineTest.test.btn"))}}const $=function(t){return{display:t}};let X=(()=>{class t{constructor(t){this.store=t,this.showCorrectAnswer=!1,this.isAdded=!1,this.testForm=new c.e({option:new c.c("",c.r.required)})}ngOnInit(){}addTestTask(){this.isAdded=!0,this.store.dispatch(new a.d(new D.a(this.curTestNum,this.testForm.value.option,this.testForm.value.option===this.answer.nativeElement.innerHTML?2:0)))}}return t.\u0275fac=function(e){return new(e||t)(b.Kb(u.i))},t.\u0275cmp=b.Eb({type:t,selectors:[["app-tests"]],viewQuery:function(t,e){if(1&t&&b.wc(Q,1),2&t){let t;b.ic(t=b.Xb())&&(e.answer=t.first)}},inputs:{curTest:"curTest",curTestNum:"curTestNum",showCorrectAnswer:"showCorrectAnswer"},decls:18,vars:15,consts:[[1,"panel","panel-default"],[1,"panel-heading"],[1,"panel-body"],[3,"formGroup"],[1,"form-group","list-group"],["class","list-group-item",4,"ngFor","ngForOf"],[1,"form-group",3,"ngStyle"],[1,"form-control","answer"],["answer",""],["class","btn","type","submit",3,"disabled","ngClass","click",4,"ngIf"],[1,"list-group-item"],["type","radio","formControlName","option",3,"value"],[1,"form-control",3,"for"],["type","submit",1,"btn",3,"disabled","ngClass","click"]],template:function(t,e){1&t&&(b.Pb(0,"div",0),b.Pb(1,"div",1),b.rc(2),b.Zb(3,"translate"),b.Ob(),b.Pb(4,"div",2),b.Pb(5,"p"),b.rc(6),b.Ob(),b.Ob(),b.Pb(7,"form",3),b.Pb(8,"div",4),b.qc(9,B,4,3,"div",5),b.Ob(),b.Pb(10,"div",6),b.Pb(11,"button",7),b.rc(12),b.Zb(13,"translate"),b.Pb(14,"span",null,8),b.rc(16),b.Ob(),b.Ob(),b.Ob(),b.qc(17,z,3,9,"button",9),b.Ob(),b.Ob()),2&t&&(b.Ab(2),b.uc("",b.ac(3,9,"onlineTest.test.testNumber"),": ",e.curTestNum,""),b.Ab(4),b.sc(e.curTest.conditions),b.Ab(1),b.cc("formGroup",e.testForm),b.Ab(2),b.cc("ngForOf",e.curTest.options),b.Ab(1),b.cc("ngStyle",b.ec(13,$,e.showCorrectAnswer?"block":"none")),b.Ab(2),b.tc("",b.ac(13,11,"onlineTest.test.corAnswer"),": "),b.Ab(4),b.sc(e.curTest.answer),b.Ab(1),b.cc("ngIf",!e.showCorrectAnswer))},directives:[c.s,c.j,c.f,r.i,r.k,r.j,c.n,c.a,c.i,c.d,r.h],pipes:[l.c],styles:[".panel[_ngcontent-%COMP%]{border:none;border-radius:10px;box-shadow:none;margin-bottom:50px}.panel-body[_ngcontent-%COMP%]{background-color:#f5f5f5}form[_ngcontent-%COMP%]{text-align:start}.list-group-item[_ngcontent-%COMP%]{align-items:center;display:flex}.list-group-item[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{margin:0}.list-group[_ngcontent-%COMP%]{margin-bottom:5px}.form-control[_ngcontent-%COMP%]{border:none;box-shadow:none;margin:0}.answer[_ngcontent-%COMP%]{color:#329732;display:flex;font-weight:600}"]}),t})();function J(t,e){1&t&&(b.Pb(0,"span",3),b.rc(1),b.Zb(2,"translate"),b.Ob()),2&t&&(b.Ab(1),b.sc(b.ac(2,1,"onlineTest.curTest.status")))}function R(t,e){if(1&t&&b.Lb(0,"app-tests",10),2&t){const t=e.$implicit,s=e.index,r=b.Yb(2);b.cc("curTest",t)("curTestNum",s+1)("showCorrectAnswer",r.disabledSuccess)}}function U(t,e){if(1&t){const t=b.Qb();b.Pb(0,"button",11),b.Wb("click",function(){return b.lc(t),b.Yb(2).endTest()}),b.rc(1),b.Zb(2,"translate"),b.Ob()}2&t&&(b.Ab(1),b.sc(b.ac(2,1,"onlineTest.curTest.btn")))}function V(t,e){if(1&t&&(b.Pb(0,"span",12),b.rc(1),b.Zb(2,"translate"),b.Zb(3,"translate"),b.Zb(4,"translate"),b.Ob()),2&t){const t=b.Yb(2);b.Ab(1),b.vc("",b.ac(2,5,"assessment.first")," ",t.yourScore," ",b.ac(3,7,"assessment.second")," ",t.maxScore," ",b.ac(4,9,"assessment.third"),"")}}function tt(t,e){1&t&&(b.Pb(0,"span",13),b.rc(1),b.Zb(2,"translate"),b.Ob()),2&t&&(b.Ab(1),b.sc(b.ac(2,1,"onlineTest.curTest.errorMsg")))}function et(t,e){if(1&t&&(b.Pb(0,"div"),b.Pb(1,"label",4),b.rc(2),b.Zb(3,"translate"),b.Ob(),b.Pb(4,"span",5),b.rc(5),b.Zb(6,"translate"),b.Ob(),b.qc(7,R,1,3,"app-tests",6),b.qc(8,U,3,3,"button",7),b.qc(9,V,5,11,"span",8),b.qc(10,tt,3,3,"span",9),b.Ob()),2&t){const t=b.Yb();b.Ab(2),b.uc("",b.ac(3,7,"onlineTest.curTest.onlineTestNumber")," #",t.test.TestNumber,""),b.Ab(3),b.sc(b.ac(6,9,"onlineTest.curTest.about")),b.Ab(2),b.cc("ngForOf",t.test.tests),b.Ab(1),b.cc("ngIf",!t.disabledSuccess),b.Ab(1),b.cc("ngIf",t.disabledSuccess),b.Ab(1),b.cc("ngIf",t.errorSuccess)}}let st=(()=>{class t{constructor(t,e,s,r){this.store=t,this.router=e,this.route=s,this.translateService=r,this.solvedTests=[],this.disabledSuccess=!1,this.errorSuccess=!1,this.yourScore=null,this.maxScore=null}ngOnInit(){this.routerSub=this.route.queryParams.pipe(Object(p.a)(t=>t.isSolved)).subscribe(t=>{this.active=+t}),this.testSub=this.store.select("OnlineTest").subscribe(t=>{this.test=t.test,this.solvedTestTasks=t.solvedTestTasks,this.solvedTests=t.solvedTests,this.testMode=t.isTestMode,this.testIsWritten=t.testIsWritten})}endTest(){this.errorSuccess=!0,0!==this.solvedTestTasks.length&&(this.solvedTestTasks.length===this.test.tests.length&&(this.disabledSuccess=!0,this.errorSuccess=!1,this.store.dispatch(new a.p),this.store.dispatch(new a.c(new E.a("lashaiakobadze@gmail.com",this.test.TestNumber,this.solvedTestTasks)))),this.yourScore=this.solvedTests[this.test.TestNumber-1].getTestScore,this.maxScore=2*this.solvedTestTasks.length)}onNavigateBack(){this.store.dispatch(new a.q),this.router.navigate(["../"],{relativeTo:this.route})}canDeactivate(){if(this.testIsWritten)return!0;let t="";return this.translateService.get("guardMsg").subscribe(e=>t=e),confirm(t)}ngOnDestroy(){this.routerSub&&this.routerSub.unsubscribe(),this.testSub&&this.testSub.unsubscribe(),this.solvedTestTasks.length!==this.test.tests.length&&this.store.dispatch(new a.f)}}return t.\u0275fac=function(e){return new(e||t)(b.Kb(u.i),b.Kb(o.f),b.Kb(o.a),b.Kb(l.d))},t.\u0275cmp=b.Eb({type:t,selectors:[["app-current-test"]],decls:5,vars:5,consts:[["class","inActive",4,"ngIf"],[4,"ngIf"],[1,"btn","btn-info","back",3,"click"],[1,"inActive"],[1,"form-group"],[1,"about-test"],[3,"curTest","curTestNum","showCorrectAnswer",4,"ngFor","ngForOf"],["type","submit","class","btn btn-success",3,"click",4,"ngIf"],["class","success",4,"ngIf"],["class","danger",4,"ngIf"],[3,"curTest","curTestNum","showCorrectAnswer"],["type","submit",1,"btn","btn-success",3,"click"],[1,"success"],[1,"danger"]],template:function(t,e){1&t&&(b.qc(0,J,3,3,"span",0),b.qc(1,et,11,11,"div",1),b.Pb(2,"button",2),b.Wb("click",function(){return e.onNavigateBack()}),b.rc(3),b.Zb(4,"translate"),b.Ob()),2&t&&(b.cc("ngIf",e.active),b.Ab(1),b.cc("ngIf",!e.active),b.Ab(2),b.sc(b.ac(4,3,"btnBack")))},directives:[r.j,r.i,X],pipes:[l.c],styles:[".about-test[_ngcontent-%COMP%]{margin-left:20px}.danger[_ngcontent-%COMP%]{color:#ca0505;font-weight:600}.success[_ngcontent-%COMP%]{color:#3f4f33;font-size:25px;font-weight:600;margin-bottom:40px}.inActive[_ngcontent-%COMP%]{font-size:40px;font-weight:600;margin:auto}.back[_ngcontent-%COMP%]{margin-left:45%;transition:width 2s;width:140px}.back[_ngcontent-%COMP%]:hover{width:200px}"]}),t})();var rt=s("P+IX");let ct=(()=>{class t{canDeactivate(t,e,s){return t.canDeactivate()}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=b.Gb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const nt=[{path:"",component:h,canActivate:[rt.a],children:[{path:"",redirectTo:"activity",pathMatch:"full"},{path:"activity",component:m},{path:"homework",component:O,children:[{path:":id",component:K,canDeactivate:[ct]}]},{path:"online-test",component:I,children:[{path:":id",component:st,canDeactivate:[ct]}]}]}];let ot=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=b.Ib({type:t}),t.\u0275inj=b.Hb({imports:[[o.i.forChild(nt)],o.i]}),t})(),it=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=b.Ib({type:t}),t.\u0275inj=b.Hb({imports:[[r.b,n.a,c.o,o.i,ot]]}),t})()}}]);