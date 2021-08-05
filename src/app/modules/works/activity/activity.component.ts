import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription, throwError } from 'rxjs';

import { stagger, group, animateChild, query, useAnimation, animate, style, transition, trigger } from '@angular/animations';
import { fadeInAnimation, progressInAnimation } from '../../../shared/animations/animation';

import { SolvedHomework } from '../../../shared/modules/works/models/solved-homework.model';
import { SolvedTest } from '../../../shared/modules/works/models/solved-test.model';

import * as fromApp from '../../../store/app.reducer';
import * as HomeworkActions from '../store-homework/homework.actions';
import * as TestActions from '../store-test/test.actions';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.scss'],
  animations: [
    trigger('activitiesAnimation', [
      transition(':enter', [
        group([
          query('.panel-heading', [
            style({ opacity: 0 }),
            animate(1000)
          ]),
          query('.panel-body', [
            style({  opacity: 0 }),
            animate(1000)
          ]),
          query('@activityAnimation',
            stagger(400, animateChild()))
        ]),
      ])
    ]),

    trigger('activityAnimation', [
      transition(':enter', [
        useAnimation(fadeInAnimation)
      ]),
    ]),

    trigger('progressBarAnimation', [
      transition(':enter', [
        useAnimation(progressInAnimation)
      ]),
    ])
  ]
})
export class ActivityComponent implements OnInit, OnDestroy {
  activityPercentage: number = 0;
  activitiesScoreFirst: number = 0;
  activitiesScoreSecond: number = 0;

  homeworkSub: Subscription;
  testSub: Subscription;

  activitiesHomework: SolvedHomework[] = [];
  activitiesTest: SolvedTest[] = [];

  constructor(
    private store: Store<fromApp.AppState>
  ) { }

  ngOnInit(): void {
    this.store.dispatch(new HomeworkActions.getActivitiesFirstSum());
    this.homeworkSub = this.store.select('homeWork')
    .subscribe(homeworkState => {
      this.activitiesHomework = homeworkState.answeredHomeworks;
      this.activitiesScoreFirst = homeworkState.firstActivities;
    }, error => throwError(error));

    this.store.dispatch(new TestActions.getActivitiesSecondSum());
    this.testSub = this.store.select('OnlineTest')
    .subscribe(testState => {
      this.activitiesTest = testState.solvedTests;
      this.activitiesScoreSecond = testState.secondActivities;
    }, error => throwError(error));

    this.activityPercentage = (this.activitiesScoreFirst/this.activitiesHomework.length + this.activitiesScoreSecond/this.activitiesTest.length) * 10;
  }

  ngOnDestroy() {
    if(this.homeworkSub) this.homeworkSub.unsubscribe();
    if(this.testSub) this.testSub.unsubscribe();
  }

}
