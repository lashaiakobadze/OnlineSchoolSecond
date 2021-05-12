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
  answeredHomework: SolvedHomework[] = [
    new SolvedHomework(
      'lashaiakobadze@gmail.com',
      1,
      [
        new SolvedTask(1, '2*2=4', '4', 2),
        new SolvedTask(1, '2*2=4', '4', 2),
        new SolvedTask(1, '2*2=4', '4', 2),
        new SolvedTask(1, '2*2=4', '4', 2),
        new SolvedTask(1, '2*2=4', '4', 0),
      ]
    )
  ];
  answeredTasks: SolvedTask[] = [];

  isTestEnterMode: boolean = false;

  constructor() {
    this.homework = new Homework(2, [
      new Task("2 + 2 = ?", "2 + 2 = 4", "4"),
      new Task("2 * 2 = ?", "2 * 2 = 4", "4"),
      // new Task("9 * 7 = ?", "9 * 7 = 63", "63"),
      // new Task("8 * 7 = ?", "8 * 7 = 56", "56"),
      // new Task("35 * 3 = ?", "35 * 3 = 105", "105"),
    ]);
  }

  getAnsweredHomeworksSum() {
    let sum = 0;
    this.answeredHomework.forEach(homework => {
      sum += homework.getScore;
    })
    return sum;
  }

  getAnsweredHomeworksPercentage() {
    let averagePrec = 0;
    this.answeredHomework.forEach(homework => {
      averagePrec += homework.getPercentage;
    })
    return Math.round(averagePrec/this.answeredHomework.length);
  }

}
