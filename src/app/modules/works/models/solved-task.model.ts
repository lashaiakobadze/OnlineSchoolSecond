export class SolvedTask {
  public taskNumber: Number;
  public taskSolved: string;
  public taskAnswered: string;
  public taskScored: Number;

  constructor(taskNumber: Number, taskSolved: string, taskAnswered: string, taskScored: Number) {
    this.taskNumber = taskNumber;
    this.taskSolved = taskSolved;
    this.taskAnswered = taskAnswered;
    this.taskScored = taskScored;
  }
}
