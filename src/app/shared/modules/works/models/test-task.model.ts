// Task model, for task of test, also for admin.
export class TestTask {
  constructor(
    public conditions: string,
    public options: string[],
    public answer: string
  ) { }
}
