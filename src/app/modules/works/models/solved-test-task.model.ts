// SolvedTestTask model, Solved test for solved test tasks and solved Test.
export class SolvedTestTask {
  public testNumber: number;
  public testAnswered: string;
  public testScored: number;

  constructor(testNumber: number, testAnswered: string, testScored: number) {
    this.testNumber = testNumber;
    this.testAnswered = testAnswered;
    this.testScored = testScored;
  }
}
