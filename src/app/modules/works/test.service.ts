import { Injectable } from '@angular/core';
import { SolvedTestTask } from './models/solved-test-task.model';
import { SolvedTest } from './models/solved-test.model';
import { TestTask } from './models/test-task.model';
import { Test } from './models/test.model';

@Injectable({
  providedIn: 'root'
})
export class TestService {
  test: Test;
  isTestMode: boolean = false;
  solvedTests: SolvedTest[] = [
    new SolvedTest(
      'lashaiakobadze@gmail.com',
      1,
      [
        new SolvedTestTask(1, '25', 2),
        new SolvedTestTask(1, '25', 2),
      ]
    )
  ];
  solvedTestTasks: SolvedTestTask[] = [];

  constructor() {
    this.test = new Test(
      2,
      [
        new TestTask('5 * 5', ['10', '15', '20', '25', '30'], '25'),
        new TestTask('25 * 25', ['425', '225', '755', '650', '625'], '625')
      ]
    )
  }

  getSolvedTestsSum() {
    let sum = 0;
    this.solvedTests.forEach(test => {
      sum += test.getTestScore;
    })
    return sum;
  }

  getSolvedTestsPercentage() {
    let averagePrec = 0;
    this.solvedTests.forEach(test => {
      averagePrec += test.getTestPercentage;
    })
    return Math.round(averagePrec/this.solvedTests.length);
  }

}
