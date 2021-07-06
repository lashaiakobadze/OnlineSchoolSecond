import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';


import { TestTask } from './models/test-task.model';
import { Test } from './models/test.model';
import { SolvedTest } from './models/solved-test.model';
import { SolvedTestTask } from './models/solved-test-task.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { LoaderService } from '../../components/loader/loader.service';

import * as fromApp from '../../../store/app.reducer';
import * as TestActions from '../../../modules/works/store-test/test.actions';


@Injectable({
  providedIn: 'root'
})
export class TestService {
  solvedTests: SolvedTest[] = null;


  constructor(
    private store: Store<fromApp.AppState>,
    private http: HttpClient,
    private loaderService: LoaderService
  ) { }

  getTests(): Observable<Test[]> {
    return this.http
      .get<Test[]>(
        'https://onlineschool-bee89-default-rtdb.firebaseio.com/tests.json'
      ).pipe(this.loaderService.useLoader);
  };

  getSolvedTests(): Observable<SolvedTest[]> {
    return this.http
      .get<SolvedTest[]>(
        'https://onlineschool-bee89-default-rtdb.firebaseio.com/solvedTest.json'
      ).pipe(this.loaderService.useLoader);
  };


  fetchCurTests(curTestIndex: number): void {
    this.store.dispatch(new TestActions.FetchTests());
    this.store.select('OnlineTest').subscribe(
      state => {
        this.currentTest = state.tests[curTestIndex];
      }
    );
  };

  fetchSolvedTests(): void {
    this.store.dispatch(new TestActions.FetchSolvedTest());
    this.store.select('OnlineTest').subscribe(
      state => {
        this.solvedTests = state.solvedTests;
      }
    );
  };

  getOldTestState() {
    this.store.dispatch(new TestActions.AddAnsweredTest(this.solvedTest));
    this.store.dispatch(new TestActions.GetCurrentOnlineTest(this.currentTest));
  };


  // Testing workspace.
  currentTest = new Test(2,
    [
      new TestTask('5 * 5', ['10', '15', '20', '25', '30'], '25'),
      // new TestTask('25 * 25', ['425', '225', '755', '650', '625'], '625'),
      // new TestTask('30 * 30', ['10', '900', '20', '25', '30'], '900'),
      // new TestTask('15 * 15', ['125', '225', '755', '650', '625'], '225'),
      // new TestTask('17 * 17', ['100', '115', '249', '289', '329'], '289'),
    ]
  );

  solvedTest = new SolvedTest(
    'lashaiakobadze@gmail.com', 1,
    [
      new SolvedTestTask(1, '25', 2), new SolvedTestTask(1, '25', 0),
      new SolvedTestTask(1, '25', 2), new SolvedTestTask(1, '25', 0), new SolvedTestTask(1, '25', 2),
    ]
  );
  // currentTest: Test = null;
}
