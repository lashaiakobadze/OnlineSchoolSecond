import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { TranslateService } from '@ngx-translate/core';


import { TestService } from './shared/modules/works/test.service';
import { HomeworkService } from './shared/modules/works/homework.service';
import { ErrorService } from './shared/services/error.service';
import { AdminService } from './modules/admin/admin.service';

import * as fromApp from './store/app.reducer';
import * as AuthActions from './auth/store/auth.actions';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'OnlineSchool';

  constructor(
    private store: Store<fromApp.AppState>,
    private translateService: TranslateService,
    private homeworkService: HomeworkService,
    private testService: TestService,
    public errorService: ErrorService,
    private adminService: AdminService,
  ) {
    this.translateService.setDefaultLang('en');
    const lang = localStorage.getItem('lang') || 'en';
    this.translateService.use(lang);
    document.documentElement.lang = lang;
  }

  ngOnInit() {
    this.homeworkService.getOldHomeworkState();
    this.testService.getOldTestState();
    this.store.dispatch(new AuthActions.AutoLogin());
    const isAdminMode = localStorage.getItem('isAdminMode');
    if (isAdminMode) {
      this.adminService.isAdminMode = true;
    } else {
      this.adminService.isAdminMode = false;
    }
  }
}
