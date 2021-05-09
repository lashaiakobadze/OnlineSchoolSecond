
export class SolvedHomework {
  public homework: number;
  public taskNumber: Number;
  public taskSolved: string;
  public taskAnswered: string;
  public taskScored: Number;

  constructor(homework: number, taskNumber: Number, taskSolved: string, taskAnswered: string, taskScored: Number) {
    this.homework = homework;
    this.taskNumber = taskNumber;
    this.taskSolved = taskSolved;
    this.taskAnswered = taskAnswered;
    this.taskScored = taskScored;
  }
}
