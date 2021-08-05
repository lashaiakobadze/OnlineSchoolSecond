import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import { Subscription, throwError } from 'rxjs';

import { stagger, group, animateChild, query, useAnimation, animate, style, transition, trigger } from '@angular/animations';
import { fadeInAnimation, progressInAnimation } from '../../../shared/animations/animation';

import { Test } from '../../../shared/modules/works/models/test.model';
import { SolvedTest } from '../../../shared/modules/works/models/solved-test.model';

import * as fromApp from '../../../store/app.reducer';
import * as TestActions from '../store-test/test.actions';


@Component({
  selector: 'app-online-test',
  templateUrl: './online-test.component.html',
  styleUrls: ['./online-test.component.scss'],
  animations: [
    trigger('testsAnimation', [
      transition(':enter', [
        group([
          query('.panel-heading', [
            style({ opacity: 0 }),
            animate(1000)
          ]),
          query('.panel-body', [
            style({ opacity: 0 }),
            animate(1000)
          ]),
          query('@testAnimation',
            stagger(400, animateChild()))
        ]),
      ])
    ]),

    trigger('testAnimation', [
      transition(':enter', [
        useAnimation(fadeInAnimation)
      ]),
    ]),

    trigger('progressBarAnimation', [
      transition(':enter', [
        useAnimation(progressInAnimation)
      ]),
    ])
  ]
})
export class OnlineTestComponent implements OnInit, OnDestroy {
  testsPercentage: number = null;
  testsSum: number = null;
  solvedTests: SolvedTest[] = [];
  curTest: Test;
  isTestMode: boolean;
  isSolved: number;

  testSub: Subscription;
  routerSub: Subscription;

  constructor(
    private store: Store<fromApp.AppState>,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.routerSub = this.route.queryParams.pipe(
      map(params => {
        return params;
      })
    ).subscribe(status => {
      if(status.isSolved) {
        this.store.dispatch(new TestActions.GetTestMode());
      }
    }, error => throwError(error));

    // this.store.dispatch(new TestActions.FetchCurTestId());

    this.store.dispatch(new TestActions.getAnsweredTestsPercentage());
    this.testSub = this.store.select('OnlineTest').subscribe(testState => {
      this.solvedTests = testState.solvedTests;
      this.testsSum = testState.testsSum;
      this.testsPercentage = testState.testsPercentage;
      this.curTest = testState.test;
      this.isSolved = testState.testIsWritten;
      this.isTestMode = testState.isTestMode;
    }, error => throwError(error));
  }

  goToCurTest() {
    this.store.dispatch(new TestActions.GoToTest({ testNumber: this.curTest.TestNumber , isSolved: this.isSolved }));
    if(this.solvedTests.length === 0) return;
  }

  ngOnDestroy() {
    this.routerSub?.unsubscribe();
    this.testSub?.unsubscribe();
  }

}
