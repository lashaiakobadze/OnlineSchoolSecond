// SolvedTask model, Solved task for solved tasks and solved homework.
export class SolvedTask {
  public taskNumber: number;
  public taskSolved: string;
  public taskAnswered: string;
  public taskScored: number;

  constructor(taskNumber: number, taskSolved: string, taskAnswered: string, taskScored: number) {
    this.taskNumber = taskNumber;
    this.taskSolved = taskSolved;
    this.taskAnswered = taskAnswered;
    this.taskScored = taskScored;
  }
}
