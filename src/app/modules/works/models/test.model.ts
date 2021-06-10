import { TestTask } from "./test-task.model";

export class Test {
  public TestNumber: number;
  public isAnswered: boolean;
  public tests: TestTask[];

  constructor(TestNumber: number, isAnswered: boolean, tests: TestTask[]) {
    this.isAnswered = isAnswered;
    this.TestNumber = TestNumber;
    this.tests = tests;
  }

  // Set status, for one chance for user testing.
  public set setStatus(status) {
    this.isAnswered = status;
  }

}
