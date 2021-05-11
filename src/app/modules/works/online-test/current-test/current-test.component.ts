import { Component, OnInit } from '@angular/core';
import { Test } from '../../models/test.model';
import { TestService } from '../../test.service';

@Component({
  selector: 'app-current-test',
  templateUrl: './current-test.component.html',
  styleUrls: ['./current-test.component.scss']
})
export class CurrentTestComponent implements OnInit {
  test: Test;
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

  }

}
