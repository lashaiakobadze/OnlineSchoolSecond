import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import { TestTask } from './models/test-task.model';
import { Test } from './models/test.model';
import { SolvedTest } from './models/solved-test.model';
import { SolvedTestTask } from './models/solved-test-task.model';

import * as fromApp from '../../store/app.reducer';
import * as TestActions from './store-test/test.actions';


@Injectable({
  providedIn: 'root'
})
export class TestService {
  currentTest = new Test(
    2,
    false,
    [
      new TestTask('5 * 5', ['10', '15', '20', '25', '30'], '25'),
      new TestTask('25 * 25', ['425', '225', '755', '650', '625'], '625'),
      new TestTask('30 * 30', ['10', '900', '20', '25', '30'], '900'),
      new TestTask('15 * 15', ['125', '225', '755', '650', '625'], '225'),
      new TestTask('17 * 17', ['100', '115', '249', '289', '329'], '289'),
    ]
  );

  solvedTest = new SolvedTest(
    'lashaiakobadze@gmail.com',
    1,
    [
      new SolvedTestTask(1, '25', 2), new SolvedTestTask(1, '25', 0),
      new SolvedTestTask(1, '25', 2), new SolvedTestTask(1, '25', 0), new SolvedTestTask(1, '25', 2),
    ]
  )

  constructor(private store: Store<fromApp.AppState>) { }

  getOldTestState() {
    this.store.dispatch(new TestActions.AddAnsweredTest(this.solvedTest));
    this.store.dispatch(new TestActions.GetCurrentOnlineTest(this.currentTest));
  }
}
