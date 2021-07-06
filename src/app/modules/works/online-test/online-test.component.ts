import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import { Subscription } from 'rxjs';

import { Test } from '../../../shared/modules/works/models/test.model';
import { SolvedTest } from '../../../shared/modules/works/models/solved-test.model';

import * as fromApp from '../../../store/app.reducer';
import * as TestActions from '../store-test/test.actions';


@Component({
  selector: 'app-online-test',
  templateUrl: './online-test.component.html',
  styleUrls: ['./online-test.component.scss']
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
    });

    this.store.dispatch(new TestActions.FetchCurTestId());

    this.store.dispatch(new TestActions.getAnsweredTestsPercentage());
    this.testSub = this.store.select('OnlineTest').subscribe(testState => {
      this.solvedTests = testState.solvedTests;
      this.testsSum = testState.testsSum;
      this.testsPercentage = testState.testsPercentage;
      this.curTest = testState.test;
      this.isSolved = testState.testIsWritten;
      this.isTestMode = testState.isTestMode;
    });
  }

  goToCurTest() {
    this.store.dispatch(new TestActions.GoToTest({ testNumber: this.curTest.TestNumber , isSolved: this.isSolved }));
    if(this.solvedTests.length === 0) return;
  }

  ngOnDestroy() {
    if(this.routerSub) this.routerSub.unsubscribe();
    if(this.testSub) this.testSub.unsubscribe();
  }

}
