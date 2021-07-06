import { Task } from "./Task.model";

export class Homework {
  constructor(
    public homeworkNumber: number,
    public tasks: Task[]
  ) { }
}
