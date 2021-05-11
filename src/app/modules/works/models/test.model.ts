import { TestTask } from "./test-task.model";

// Online test with test-number, common to all users, with one chance of use.
export class Test {
  public TestNumber: number;
  public isAnswered: boolean;
  public tests: TestTask[];

  constructor(TestNumber: number, tests: TestTask[]) {
    this.isAnswered = false;
    this.TestNumber = TestNumber;
    this.tests = tests;
  }

  // Set status, for one chance for user testing.
  set setStatus(status: boolean) {
    this.isAnswered = status;
  }

}
