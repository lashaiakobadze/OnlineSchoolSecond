import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Store } from '@ngrx/store';
import { Observable, throwError } from 'rxjs';


import { Homework } from './models/homework.model';
import { SolvedHomework } from './models/solved-homework.model';
import { SolvedTask } from './models/solved-task.model';
import { Task } from './models/Task.model';


import { LoaderService } from '../../components/loader/loader.service';
import { CurrentHomework } from 'src/app/modules/admin/models/current-homework.model';

import * as fromApp from '../../../store/app.reducer';
import * as HomeworkActions from '../../../modules/works/store-homework/homework.actions';

import { environment } from 'src/environments/environment';
const Url = environment.firebaseConfig.databaseURL;

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
        `${Url}/homeworks.json`
      ).pipe(this.loaderService.useLoader);
  };

  getSolvedHomeworks(): Observable<SolvedHomework[]> {
    return this.http
      .get<SolvedHomework[]>(
        `${Url}/solvedHomework.json`
      ).pipe(this.loaderService.useLoader);
  };

  storeSolvedHomeworks(solvedHomeworks: SolvedHomework[]): Observable<SolvedHomework[]> {
    return this.http
      .put<SolvedHomework[]>(
        `${Url}/solvedHomework.json`, solvedHomeworks
      ).pipe(this.loaderService.useLoader);
  };

  getCurrentTestIndex(): Observable<CurrentHomework> {
    return this.http
      .get<CurrentHomework>(
        `${Url}/currentHomework.json`
      ).pipe(this.loaderService.useLoader);
  };

  fetchCurHomeworks(curHomeworkIndex: number): void {
    this.store.dispatch(new HomeworkActions.FetchHomeworks());
    this.store.select('homeWork').subscribe(
      state => {
        this.currentHomework = state.homeworks[curHomeworkIndex];
      }, error => throwError(error)
    );
  };

  fetchSolvedHomeworks(): void {
    this.store.dispatch(new HomeworkActions.FetchSolvedHomework());
    this.store.select('homeWork').subscribe(
      state => {
        this.solvedHomeworks = state.answeredHomeworks;
      }, error => throwError(error)
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
