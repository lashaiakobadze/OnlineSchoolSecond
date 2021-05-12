import { Component, OnInit } from '@angular/core';
import { ActivityService } from '../../works/activity.service';
import { HomeworkService } from '../../works/homework.service';
import { TestService } from '../../works/test.service';

@Component({
  selector: 'app-profile-details',
  templateUrl: './profile-details.component.html',
  styleUrls: ['./profile-details.component.scss']
})
export class ProfileDetailsComponent implements OnInit {
  weeks: unknown = [];
  activitiesSum: number = 0;
  homeworksSum: number = 0;
  testsSum: number = 0;

  constructor(
    public homeworkService: HomeworkService,
    public testService: TestService,
    public activityService: ActivityService
  ) { }

  ngOnInit(): void {
    if(this.homeworkService.answeredHomework.length == 0) return;
    this.weeks = this.homeworkService.answeredHomework;
    this.homeworksSum = this.homeworkService.getAnsweredHomeworksSum();
    this.activitiesSum = this.activityService.getActivitiesFirstSum() + this.activityService.getActivitiesSecondSum();
    this.testsSum = this.testService.getSolvedTestsSum();
  }

}
