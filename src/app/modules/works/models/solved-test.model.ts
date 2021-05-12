import { SolvedTestTask } from "./solved-test-task.model";

// SolvedTest with auth and answered homework.
export class SolvedTest {
  public testAuthor: string = null;
  public testNum: number = null;
  public tests: SolvedTestTask[];

  constructor(testAuthor: string, testNum: number, tests: SolvedTestTask[]) {
    this.testAuthor = testAuthor;
    this.testNum = testNum;
    this.tests = tests;
  }

  get getTestScore() {
    let sumScore = 0;
    this.tests.forEach(test => {
      sumScore += test.testScored;
    })
    return sumScore;
  }

  get getTestPercentage() {
    return 100 * this.getTestScore/(2*this.tests.length);
  }

  // I will change these methods when I add an activity service from adminpanel.
  get getActivitySecond() {
    return this.getTestScore * 1.25 / 2;
  }
}
