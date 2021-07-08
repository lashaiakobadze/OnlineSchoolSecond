import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription, throwError } from 'rxjs';


import { SolvedHomework } from '../../../shared/modules/works/models/solved-homework.model';
import { SolvedTest } from '../../../shared/modules/works/models/solved-test.model';

import * as fromApp from '../../../store/app.reducer';
import * as HomeworkActions from '../../works/store-homework/homework.actions';


@Component({
  selector: 'app-profile-details',
  templateUrl: './profile-details.component.html',
  styleUrls: ['./profile-details.component.scss']
})
export class ProfileDetailsComponent implements OnInit, OnDestroy {
  weeksHomework: SolvedHomework[] = [];
  weeksTest: SolvedTest[] = [];
  activitiesFirst: number;
  activitiesSecond: number;
  activitiesSum: number = 0;
  homeworksSum: number = 0;
  testsSum: number = 0;

  homeworkSub: Subscription;
  testSub: Subscription;

  constructor(private store: Store<fromApp.AppState>) { }

  ngOnInit(): void {
    this.store.dispatch(new HomeworkActions.getAnsweredHomeworksSum());
    this.store.dispatch(new HomeworkActions.getActivitiesFirstSum());

    this.homeworkSub = this.store.select('homeWork').subscribe(homeworkState => {
      this.weeksHomework = homeworkState.answeredHomeworks;
      this.homeworksSum = homeworkState.homeworksSum;
      this.activitiesFirst = homeworkState.firstActivities;
    }, error => throwError(error));

    this.testSub = this.store.select('OnlineTest').subscribe(testState => {
      this.weeksTest = testState.solvedTests;
      this.testsSum = testState.testsSum;
      this.activitiesSecond = testState.secondActivities;
    }, error => throwError(error));

    this.activitiesSum = this.activitiesFirst + this.activitiesSecond;
  }

  ngOnDestroy() {
    this.testSub?.unsubscribe();
    this.homeworkSub?.unsubscribe();
  }

}
