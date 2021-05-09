import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HomeworkService } from './homework.service';
import { TestService } from './test.service';

@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.scss']
})
export class WorksComponent implements OnInit {

  constructor(
    public homeworkService: HomeworkService,
    public testService: TestService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  // Maybe control the routing with a function
  onNavigateHomework() {
    this.homeworkService.isTestEnterMode = false;
  }

  onNavigateTest() {
    this.testService.isTestMode = false;
  }

}
