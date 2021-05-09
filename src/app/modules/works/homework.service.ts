import { Injectable } from '@angular/core';
import { Homework } from './models/homework.model';
import { SolvedHomework } from './models/solved-homework.model';
import { SolvedTask } from './models/solved-task.model';
import { Task } from './models/Task.model';

@Injectable({
  providedIn: 'root'
})
export class HomeworkService {
  homework: Homework;
  answeredHomework: SolvedHomework[] = [];
  answeredTasks: SolvedTask[] = [];

  isTestEnterMode: boolean = false;

  constructor() {
    this.homework = new Homework(1, [
      new Task("2 + 2 = ?", "2 + 2 = 4", "4"),
      new Task("2 * 2 = ?", "2 * 2 = 4", "4"),
      // new Task("9 * 7 = ?", "9 * 7 = 63", "63"),
      // new Task("8 * 7 = ?", "8 * 7 = 56", "56"),
      // new Task("35 * 3 = ?", "35 * 3 = 105", "105"),
    ]);
  }
}
