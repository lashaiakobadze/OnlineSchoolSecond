import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { Observable, Subscription, throwError } from 'rxjs';
import { Store } from '@ngrx/store';
import { TranslateService } from '@ngx-translate/core';

import { stagger, group, animateChild, query, useAnimation, animate, style, transition, trigger } from '@angular/animations';
import { fadeInAnimation } from '../../../../shared/animations/animation';

import { Test } from '../../../../shared/modules/works/models/test.model';
import { SolvedTest } from '../../../../shared/modules/works/models/solved-test.model';
import { SolvedTestTask } from '../../../../shared/modules/works/models/solved-test-task.model';

import * as fromApp from '../../../../store/app.reducer';
import * as TestActions from '../../store-test/test.actions';


@Component({
  selector: 'app-current-test',
  templateUrl: './current-test.component.html',
  styleUrls: ['./current-test.component.scss'],
  animations: [
    trigger('testsAnimation', [
      transition(':enter', [
        group([
          query('.about', [
            style({ transform: 'translateY(-10px)' }),
            animate(1000)
          ]),
          query('@testAnimation', stagger(200, animateChild()))
        ]),
      ])
    ]),

    trigger('testAnimation', [
      transition(':enter', [
        useAnimation(fadeInAnimation)
      ]),
    ])
  ]
})
export class CurrentTestComponent implements OnInit, OnDestroy {
  testMode: boolean;
  test: Test;
  solvedTests: SolvedTest[] = [];
  solvedTestTasks: SolvedTestTask[];
  disabledSuccess: boolean = false;
  errorSuccess: boolean = false;
  yourScore: number = null;
  maxScore: number = null;
  active: number;
  testIsWritten: number;

  testSub: Subscription;
  routerSub: Subscription;

  constructor(
    private store: Store<fromApp.AppState>,
    private router: Router,
    private route: ActivatedRoute,
    private translateService: TranslateService
  ) { }

  ngOnInit(): void {
    this.routerSub = this.route.queryParams.pipe(
      map(params => {
        return params.isSolved
      })
    ).subscribe(status => {
      this.active = +status;
    }, error => throwError(error));

    // this.store.dispatch(new TestActions.FetchTests());

    this.testSub = this.store.select('OnlineTest').subscribe(testState => {
      this.test = testState.test;
      this.solvedTestTasks = testState.solvedTestTasks;
      this.solvedTests = testState.solvedTests;
      this.testMode = testState.isTestMode;
      this.testIsWritten = testState.testIsWritten;
    }, error => throwError(error));
  };

  endTest() {
    this.errorSuccess = true;
    if(this.solvedTestTasks.length === 0) return;
    if(this.solvedTestTasks.length === this.test.tests.length) {
      this.disabledSuccess = true;
      this.errorSuccess = false;

      this.store.dispatch(new TestActions.GetSolvedMode());

      this.store.dispatch(new TestActions.AddAnsweredTest(
        new SolvedTest(
          'lashaiakobadze@gmail.com',
          this.test.TestNumber,
          this.solvedTestTasks
        )
      ));
    };

    if (this.solvedTests[this.test.TestNumber - 1]) {
      this.yourScore = this.solvedTests[this.test.TestNumber - 1].getTestScore;
      this.maxScore = this.solvedTestTasks.length * 2;
    }
  };

  onNavigateBack() {
    this.store.dispatch(new TestActions.GetTestMode());
    this.router.navigate(['../'], { relativeTo: this.route });
  };

  canDeactivate(): boolean | Observable<boolean> | Promise<boolean> {
    if (this.testIsWritten) {
      return true;
    }
    let msg = '';
    this.translateService.get('guardMsg').subscribe(msgs => msg = msgs);
    return confirm(msg);
  };

  ngOnDestroy() {
    this.routerSub?.unsubscribe();
    this.testSub?.unsubscribe();
    if (this.solvedTestTasks.length !== this.test.tests.length) {
      this.store.dispatch(new TestActions.ClearAnsweredTasks());
    }
  };

}
