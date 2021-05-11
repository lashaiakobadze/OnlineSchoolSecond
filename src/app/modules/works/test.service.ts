import { Injectable } from '@angular/core';
import { TestTask } from './models/test-task.model';
import { Test } from './models/test.model';

@Injectable({
  providedIn: 'root'
})
export class TestService {
  test: Test;
  isTestMode: boolean = false;

  constructor() {
    this.test = new Test(
      1,
      [
        new TestTask('5 * 5', ['10', '15', '20', '25', '30'], '25'),
        new TestTask('25 * 25', ['425', '225', '755', '650', '625'], '625')
      ]
    )
  }
}
