import { SolvedTask } from "./solved-task.model";

// SolvedHomework with auth and answered homework.
export class SolvedHomework {
  constructor(
    public HomeworkAuthor: string = null,
    public homeworkNum: number = null,
    public tasks: SolvedTask[]
  ) { }

  get getScore() {
    if (this.tasks.length === 0) {
      return;
    }
    let sumScore = 0;
    this.tasks.forEach(task => {
      sumScore += task.taskScored;
    })
    return sumScore;
  }

  get getPercentage() {
    if (this.tasks.length === 0) {
      return;
    }
    return 100 * this.getScore/(2 * this.tasks.length);
  }

  get getActivityFirst() {
    if (!this.getScore) {
      return;
    }
    return this.getScore * 0.75 / 2;
  }
}
