import { SolvedTask } from "./solved-task.model";

// SolvedHomework with auth and answered homework.
export class SolvedHomework {
  public HomeworkAuthor: string = null;
  public homeworkNum: number = null;
  public tasks: SolvedTask[];

  constructor(HomeworkAuthor: string, homeworkNum: number, tasks: SolvedTask[]) {
    this.HomeworkAuthor = HomeworkAuthor;
    this.homeworkNum = homeworkNum;
    this.tasks = tasks;
  }

  get getScore() {
    let sumScore = 0;
    this.tasks.forEach(task => {
      sumScore += task.taskScored;
    })
    return sumScore;
  }

  get getPercentage() {
    return 100 * this.getScore/(2*this.tasks.length);
  }

  // I will change these methods when I add an activity service from adminpanel.
  get getActivityFirst() {
    return this.getScore * 0.75 / 2;
  }
}
