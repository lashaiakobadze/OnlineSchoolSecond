// SolvedTask model, Solved task for solved tasks and solved homework.
export class SolvedTask {
  constructor(
    public taskNumber: number,
    public taskSolved: string,
    public taskAnswered: string,
    public taskScored: number,
  ) { }
}
