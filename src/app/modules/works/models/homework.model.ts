import { Task } from "./Task.model";

// homework with number, common to all users
export class Homework {
  public homeworkNumber: number;
  public tasks: Task[];

  constructor(homeworkNumber: number, tasks: Task[]) {
    this.homeworkNumber = homeworkNumber;
    this.tasks = tasks;
  }
}
