import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import { Subscription, throwError } from 'rxjs';

import { SolvedHomework } from '../../../shared/modules/works/models/solved-homework.model';
import { Homework } from '../../../shared/modules/works/models/homework.model';

import * as fromApp from '../../../store/app.reducer';
import * as HomeworkActions from '../store-homework/homework.actions';


@Component({
  selector: 'app-homework',
  templateUrl: './homework.component.html',
  styleUrls: ['./homework.component.scss']
})
export class HomeworkComponent implements OnInit, OnDestroy {
  homeworksPercentage: number;
  homeworksSum: number;
  solvedHomeworks: SolvedHomework[] = [];
  isHomeworkEnterMode: boolean;
  curHomework: Homework;
  homeworkIsWritten: number;

  homeworkSub: Subscription;
  routerSub: Subscription;

  constructor(
    private store: Store<fromApp.AppState>,
    private route: ActivatedRoute,
  ) { }


  ngOnInit(): void {
    this.routerSub = this.route.queryParams.pipe(
      map(params => {
        return params;
      })
    ).subscribe(status => {
      if(status.isWritten) {
        this.store.dispatch(new HomeworkActions.GetHomeworkMode());
      }
    }, error => throwError(error));


    this.store.dispatch(new HomeworkActions.FetchCurTestIndex());
    this.store.dispatch(new HomeworkActions.getAnsweredHomeworksPercentage());
    this.store.dispatch(new HomeworkActions.getAnsweredHomeworksSum());
    this.homeworkSub = this.store.select('homeWork').subscribe(homeState => {
      this.solvedHomeworks = homeState.answeredHomeworks;
      this.homeworksPercentage = homeState.homeworksPercentage;
      this.homeworksSum = homeState.homeworksSum;
      this.curHomework = homeState.homework;
      this.homeworkIsWritten = homeState.homeworkIsWritten;
      this.isHomeworkEnterMode = homeState.isHomeworkMode;
    }, error => throwError(error));
  };


  goToCurHomework() {
    this.store.dispatch(new HomeworkActions.GoToHomework({
      homeworkNumber: this.curHomework.homeworkNumber,
      homeworkIsWritten: this.homeworkIsWritten
    }));
  }

  ngOnDestroy() {
    this.routerSub?.unsubscribe();
    this.homeworkSub?.unsubscribe();
  }

}
