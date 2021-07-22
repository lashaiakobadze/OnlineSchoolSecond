import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { TranslateService } from '@ngx-translate/core';


import { TestService } from './shared/modules/works/test.service';
import { HomeworkService } from './shared/modules/works/homework.service';
import { ErrorService } from './shared/services/error.service';
import { AdminService } from './modules/admin/admin.service';
import { LogUpdateService } from './core/log-update.service';

import * as fromApp from './store/app.reducer';
import * as AuthActions from './auth/store/auth.actions';
import { SwUpdate } from '@angular/service-worker';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'OnlineSchool';
  update = false;

  constructor(
    private store: Store<fromApp.AppState>,
    private translateService: TranslateService,
    private homeworkService: HomeworkService,
    private testService: TestService,
    public errorService: ErrorService,
    private adminService: AdminService,
    public updates: SwUpdate
  ) {
    this.translateService.setDefaultLang('en');
    const lang = localStorage.getItem('lang') || 'en';
    this.translateService.use(lang);
    document.documentElement.lang = lang;

    updates.available.subscribe(event => {
      console.log('updated');
      this.update = true;
      updates.activateUpdate().then(() => document.location.reload());
    });
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
