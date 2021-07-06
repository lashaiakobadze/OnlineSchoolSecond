import { SolvedTestTask } from "./solved-test-task.model";

// SolvedTest with auth and answered homework.
export class SolvedTest {
  constructor(
    public testAuthor: string = null,
    public testNum: number = null,
    public tests: SolvedTestTask[]
  ) { }

  get getTestScore() {
    if (this.tests.length === 0) {
      return;
    }
    let sumScore = 0;
    this.tests.forEach(test => {
      sumScore += test.testScored;
    })
    return sumScore;
  }

  get getTestPercentage() {
    if (this.tests.length === 0) {
      return;
    }
    return 100 * this.getTestScore/(2*this.tests.length);
  }

  get getActivitySecond() {
    if (!this.getTestScore) {
      return;
    }
    return this.getTestScore * 1.25 / 2;
  }
}
