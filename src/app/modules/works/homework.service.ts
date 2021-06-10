import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Homework } from './models/homework.model';
import { SolvedHomework } from './models/solved-homework.model';
import { SolvedTask } from './models/solved-task.model';
import { Task } from './models/Task.model';

import * as fromApp from '../../store/app.reducer';
import * as HomeworkActions from './store-homework/homework.actions';

@Injectable({
  providedIn: 'root'
})
export class HomeworkService {
  currentHomework = new Homework(2, [
    new Task("2 + 2 = ?", "2 + 2 = 4", "4"),
    new Task("2 * 2 = ?", "2 * 2 = 4", "4"),
    new Task("9 * 7 = ?", "9 * 7 = 63", "63"),
    new Task("8 * 7 = ?", "8 * 7 = 56", "56"),
    new Task("35 * 3 = ?", "35 * 3 = 105", "105"),
  ]);

  solvedHomework = new SolvedHomework(
    'lashaiakobadze@gmail.com',
    1,
    [
      new SolvedTask(1, '2*2=4', '4', 2),
      new SolvedTask(1, '2*2=4', '4', 2),
      new SolvedTask(1, '2*2=4', '4', 2),
      new SolvedTask(1, '2*2=4', '4', 2),
      new SolvedTask(1, '2*2=4', '4', 0),
    ]
  );

  constructor(private store: Store<fromApp.AppState>) { }

  getOldHomeworkState() {
    this.store.dispatch(new HomeworkActions.AddAnsweredHomework(this.solvedHomework));
    this.store.dispatch(new HomeworkActions.GetCurrentHomework(this.currentHomework))
  }
}
