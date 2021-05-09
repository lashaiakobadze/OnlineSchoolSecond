import { SolvedTask } from "./solved-task.model";

export class SolvedHomework {
  public HomeworkAuthor: string = null;
  public homework: number = null;
  public tasks: SolvedTask[];

  constructor(HomeworkAuthor: string, homework: number, tasks: SolvedTask[]) {
    this.HomeworkAuthor = HomeworkAuthor;
    this.homework = homework;
    this.tasks = tasks;
  }

  get getTasks() {
    return this.tasks;
  }

  getScore() {
    let sumScore = 0;
    this.tasks.forEach(task => {
      sumScore += +task.taskScored;
    })
    return sumScore;
  }
}
