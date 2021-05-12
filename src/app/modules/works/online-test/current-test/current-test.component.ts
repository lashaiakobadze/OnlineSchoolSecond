import { Component, OnInit } from '@angular/core';
import { SolvedTest } from '../../models/solved-test.model';
import { Test } from '../../models/test.model';
import { TestService } from '../../test.service';

@Component({
  selector: 'app-current-test',
  templateUrl: './current-test.component.html',
  styleUrls: ['./current-test.component.scss']
})
export class CurrentTestComponent implements OnInit {
  test: Test;
  solvedTest: SolvedTest[] = [];
  disabledSuccess: boolean = false;
  errorSuccess: boolean = false;
  yourScore: number = null;
  maxScore: number = null;

  constructor(
    public testService: TestService
  ) { }

  ngOnInit(): void {
    this.test = this.testService.test;
  }

  endTest() {
    this.errorSuccess = true;
    if(this.testService.solvedTestTasks.length === this.test.tests.length) {
      this.disabledSuccess = true;
      this.errorSuccess = false;
      this.testService.solvedTests.push(
        new SolvedTest(
          'lashaiakobadze@gmail.com',
          this.test.TestNumber,
          this.testService.solvedTestTasks
        )
      )
    };

    this.yourScore = this.testService.solvedTests[this.test.TestNumber - 1].getTestScore;
    this.maxScore = this.testService.solvedTestTasks.length * 2;
  }

}
