// Task model, for task of test, also for admin.
export class TestTask {
  public conditions: string;
  public options: string[];
  public answer: string;

  constructor(conditions: string, options: string[], answer: string) {
    this.conditions = conditions;
    this.options = options;
    this.answer = answer;
  }
}
