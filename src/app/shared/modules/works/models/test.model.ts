import { TestTask } from "./test-task.model";

export class Test {
  constructor(
    public TestNumber: number,
    public tests: TestTask[]
  ) { }
}
