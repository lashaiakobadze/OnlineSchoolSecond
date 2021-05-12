import { Component, OnInit } from '@angular/core';
import { ActivityService } from '../activity.service';
import { HomeworkService } from '../homework.service';
import { SolvedHomework } from '../models/solved-homework.model';
import { TestService } from '../test.service';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.scss']
})
export class ActivityComponent implements OnInit {
  activityPercentage: number = 0;
  activitiesScoreFirst: number = 0;
  activitiesScoreSecond: number = 0;

  activities: SolvedHomework[] = [];

  constructor(
    public homeworkService: HomeworkService,
    public testService: TestService,
    public activityService: ActivityService
  ) { }

  ngOnInit(): void {
    this.activities = this.homeworkService.answeredHomework;
    this.activityPercentage = this.activityService.getActivityPercentage();

    if(this.activities.length === 0) return;
    this.activitiesScoreFirst = this.activityService.getActivitiesFirstSum();
    this.activitiesScoreSecond = this.activityService.getActivitiesSecondSum();
  }

}
