import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Homework } from './models/homework.model';
import { SolvedHomework } from './models/solved-homework.model';
import { SolvedTask } from './models/solved-task.model';
import { Task } from './models/Task.model';
import { Observable } from 'rxjs';

import { HttpClient } from '@angular/common/http';
import { LoaderService } from '../../components/loader/loader.service';

import * as fromApp from '../../../store/app.reducer';
import * as HomeworkActions from '../../../modules/works/store-homework/homework.actions';



@Injectable({
  providedIn: 'root'
})
export class HomeworkService {
  solvedHomeworks: SolvedHomework[] = null;

  constructor(
    private store: Store<fromApp.AppState>,
    private http: HttpClient,
    private loaderService: LoaderService
  ) { }

  getOldHomeworkState(): void {
    this.store.dispatch(new HomeworkActions.GetCurrentHomework(this.currentHomework));
    this.store.dispatch(new HomeworkActions.AddAnsweredHomework(this.solvedHomework));
  };

  getHomeworks(): Observable<Homework[]> {
    return this.http
      .get<Homework[]>(
        'https://onlineschool-bee89-default-rtdb.firebaseio.com/homeworks.json'
      ).pipe(this.loaderService.useLoader);
  };

  getSolvedHomeworks(): Observable<SolvedHomework[]> {
    return this.http
      .get<SolvedHomework[]>(
        'https://onlineschool-bee89-default-rtdb.firebaseio.com/solvedHomework.json'
      ).pipe(this.loaderService.useLoader);
  };

  fetchCurHomeworks(curHomeworkIndex: number): void {
    this.store.dispatch(new HomeworkActions.FetchHomeworks());
    this.store.select('homeWork').subscribe(
      state => {
        this.currentHomework = state.homeworks[curHomeworkIndex];
      }
    );
  };

  fetchSolvedHomeworks(): void {
    this.store.dispatch(new HomeworkActions.FetchSolvedHomework());
    this.store.select('homeWork').subscribe(
      state => {
        this.solvedHomeworks = state.answeredHomeworks;
      }
    );
  };


  // Testing workspace.
  currentHomework = new Homework(2, [
    new Task("2 + 2 = ?", "2 + 2 = 4", "4"),
    new Task("2 * 2 = ?", "2 * 2 = 4", "4"),
    new Task("9 * 7 = ?", "9 * 7 = 63", "63"),
    new Task("8 * 7 = ?", "8 * 7 = 56", "56"),
    new Task("35 * 3 = ?", "35 * 3 = 105", "105"),
  ]);

  solvedHomework = new SolvedHomework(
    'lashaiakobadze@gmail.com', 1,
    [
      new SolvedTask(1, '2*2=4', '4', 2),
      new SolvedTask(1, '2*2=4', '4', 2),
      new SolvedTask(1, '2*2=4', '4', 2),
      new SolvedTask(1, '2*2=4', '4', 2),
      new SolvedTask(1, '2*2=4', '4', 0),
    ]
  );
  // currentHomework: Homework = null;
}
