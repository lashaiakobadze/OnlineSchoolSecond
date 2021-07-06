// SolvedTestTask model, Solved test for solved test tasks and solved Test.
export class SolvedTestTask {
  constructor(
    public testNumber: number,
    public testAnswered: string,
    public testScored: number
  ) { }
}
