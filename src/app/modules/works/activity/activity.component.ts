import { Component, OnInit } from '@angular/core';
import { HomeworkService } from '../homework.service';
import { SolvedHomework } from '../models/solved-homework.model';

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
  ) { }

  ngOnInit(): void {
    this.activities = this.homeworkService.answeredHomework;
    this.activityPercentage = this.homeworkService.getAnsweredHomeworksPercentage() * 0.9;

    if(this.activities.length === 0) return;
    this.activitiesScoreFirst = this.homeworkService.getActivitiesFirstSum();
    this.activitiesScoreSecond = this.homeworkService.getActivitiesSecondSum();
  }

}
