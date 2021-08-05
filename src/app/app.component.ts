import { ApplicationRef, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { TranslateService } from '@ngx-translate/core';

import { SwUpdate } from '@angular/service-worker';
import { first } from 'rxjs/operators';
import { concat, interval } from 'rxjs';

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
  update = false;

  constructor(
    private store: Store<fromApp.AppState>,
    private translateService: TranslateService,
    private homeworkService: HomeworkService,
    private testService: TestService,
    public errorService: ErrorService,
    private adminService: AdminService,
    public updates: SwUpdate,
    public appRef: ApplicationRef
  ) {
    this.translateService.setDefaultLang('en');
    const lang = localStorage.getItem('lang') || 'en';
    this.translateService.use(lang);
    document.documentElement.lang = lang;

    // Service worker
    updates.available.subscribe(event => {
      console.log('updated');
      this.update = true;
      updates.activateUpdate().then(() => document.location.reload());
    });

    updates.available.subscribe(event => {
      console.log('current version is', event.current);
      console.log('available version is', event.available);
    });
    updates.activated.subscribe(event => {
      console.log('old version was', event.previous);
      console.log('new version is', event.current);
    });

    // Allow the app to stabilize first, before starting polling for updates with `interval()`.
    const appIsStable$ = appRef.isStable.pipe(first(isStable => isStable === true));
    const everySixHours$ = interval(6 * 60 * 60 * 1000);
    const everySixHoursOnceAppIsStable$ = concat(appIsStable$, everySixHours$);

    everySixHoursOnceAppIsStable$.subscribe(() => updates.checkForUpdate());
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
