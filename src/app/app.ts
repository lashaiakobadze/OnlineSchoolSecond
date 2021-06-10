// import { Component, OnInit } from '@angular/core';
// import { Store } from '@ngrx/store';
// import { TranslateService } from '@ngx-translate/core';
// import { HomeworkService } from './modules/works/homework.service';
// import { TestService } from './modules/works/test.service';

// import * as fromApp from './store/app.reducer';
// import * as AuthActions from './auth/store/auth.actions';


// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.scss']
// })
// export class AppComponent implements OnInit {
//   title = 'OnlineSchool';

//   constructor(
//     private store: Store<fromApp.AppState>,
//     private translateService: TranslateService,
//     private homeworkService: HomeworkService,
//     private testService: TestService
//     ) {
//     this.translateService.setDefaultLang('en');
//     const lang = localStorage.getItem('lang') || 'en';
//     this.translateService.use(lang);
//     document.documentElement.lang = lang;
//   }

//   ngOnInit() {
//     this.store.dispatch(new AuthActions.AutoLogin());
//     this.homeworkService.getOldHomeworkState();
//     this.testService.getOldTestState();
//   }
// }

// import { Component, OnInit } from '@angular/core';
// import { Store } from '@ngrx/store';

// import * as fromApp from './store/app.reducer';
// import * as AuthActions from './auth/store/auth.actions';

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.scss']
// })
// export class AppComponent implements OnInit {
//   title = 'OnlineSchool';

//   constructor(private store: Store<fromApp.AppState>) {}

//   ngOnInit() {
//     this.store.dispatch(new AuthActions.AutoLogin());
//     console.log(this.curDate);
//   }

//   get curDate() {
//     const d = new Date();
//     return `${('0' + d.getDate()).slice(-2)}/${('0' + (d.getMonth() + 1)).slice(-2)}/${d.getFullYear()}`;
//   }

// }
