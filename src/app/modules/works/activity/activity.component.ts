import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { SolvedHomework } from '../models/solved-homework.model';
import { SolvedTest } from '../models/solved-test.model';

import * as fromApp from '../../../store/app.reducer';
import * as HomeworkActions from '../store-homework/homework.actions';
import * as TestActions from '../store-test/test.actions';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.scss']
})
export class ActivityComponent implements OnInit, OnDestroy {
  activityPercentage: number = 0;
  activitiesScoreFirst: number = 0;
  activitiesScoreSecond: number = 0;

  homeworkSub: Subscription;
  testSub: Subscription;

  activitiesHomework: SolvedHomework[] = [];
  activitiesTest: SolvedTest[] = [];

  constructor(private store: Store<fromApp.AppState>) { }

  ngOnInit(): void {
    this.store.dispatch(new HomeworkActions.getActivitiesFirstSum());
    this.homeworkSub = this.store.select('homeWork').subscribe(homeworkState => {
      this.activitiesHomework = homeworkState.answeredHomeworks;
      this.activitiesScoreFirst = homeworkState.firstActivities;
    });

    this.store.dispatch(new TestActions.getActivitiesSecondSum());
    this.testSub = this.store.select('OnlineTest').subscribe(testState => {
      this.activitiesTest = testState.solvedTests;
      this.activitiesScoreSecond = testState.secondActivities;
    });

    this.activityPercentage = (this.activitiesScoreFirst/this.activitiesHomework.length + this.activitiesScoreSecond/this.activitiesTest.length) * 10;
  }

  ngOnDestroy() {
    if(this.homeworkSub) this.homeworkSub.unsubscribe();
    if(this.testSub) this.testSub.unsubscribe();
  }

}
