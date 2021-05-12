import { Component, OnInit } from '@angular/core';
import { Homework } from '../../models/homework.model';
import { HomeworkService } from '../../homework.service';
import { SolvedHomework } from '../../models/solved-homework.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-current-homework',
  templateUrl: './current-homework.component.html',
  styleUrls: ['./current-homework.component.scss']
})
export class CurrentHomeworkComponent implements OnInit {
  curHomework: Homework;
  answeredHomework: SolvedHomework[] = []; // I will use it when I add data from the database. I will save the assignment here and send it back.
  disabledSuccess: boolean = false;
  errorSuccess: boolean = false;
  yourScore: number = null;
  maxScore: number = null;

  constructor(
    private homeworkService: HomeworkService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.curHomework = this.homeworkService.homework;
  }

  endHomework() {
    this.errorSuccess = true;
    // I will replace push with put, when add base.
    if(this.homeworkService.answeredTasks.length === this.curHomework.tasks.length) {
      this.disabledSuccess = true;
      this.errorSuccess = false;
      this.homeworkService.answeredHomework.push(
        new SolvedHomework(
        'lashaiakobadze@gmail.com',
        this.curHomework.homeworkNumber,
        this.homeworkService.answeredTasks)
      );
    }

    this.yourScore = this.homeworkService.answeredHomework[this.curHomework.homeworkNumber - 1]?.getScore;
    this.maxScore = this.homeworkService.answeredTasks.length * 2;
  }

  // backHomework() {
  //   this.router.navigate(['./works/homework']);
  // }

}
