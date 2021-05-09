import { Task } from "./Task.model";

export class Homework {
  public homeworkNumber: number;
  public tasks: Task[];

  constructor(homeworkNumber: number, tasks: Task[]) {
    this.homeworkNumber = homeworkNumber;
    this.tasks = tasks;
  }

  get getTasks() {
    return this.tasks;
  }
}
