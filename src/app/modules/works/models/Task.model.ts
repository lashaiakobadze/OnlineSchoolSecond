// Task model, for homework with number, also for admin.
export class Task {
  public conditions: string;
  public solve: string;
  public answer: string;

  constructor(conditions: string, solve: string, answer: string) {
    this.conditions = conditions;
    this.solve = solve;
    this.answer = answer;
  }
}


