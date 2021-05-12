import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SolvedTest } from '../models/solved-test.model';
import { TestService } from '../test.service';

@Component({
  selector: 'app-online-test',
  templateUrl: './online-test.component.html',
  styleUrls: ['./online-test.component.scss']
})
export class OnlineTestComponent implements OnInit {
  percentage: number = 0;
  solvedTests: SolvedTest[] = [];

  constructor(
    public testService: TestService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.testService.isTestMode = false;
    this.solvedTests = this.testService.solvedTests;
  }

  goToCurTest() {
    this.testService.isTestMode = true;
    this.router.navigate(['currentTest'], {relativeTo: this.route});

    if(this.testService.solvedTests.length === 0) return;
    this.percentage = this.testService.solvedTests[0].getTestPercentage;
  }

}
