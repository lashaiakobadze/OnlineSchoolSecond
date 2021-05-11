import { Component, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HomeworkService } from '../homework.service';
import { SolvedHomework } from '../models/solved-homework.model';

@Component({
  selector: 'app-homework',
  templateUrl: './homework.component.html',
  styleUrls: ['./homework.component.scss']
})
export class HomeworkComponent implements OnInit {
  percentage: number = 0;
  solvedHomeworks: SolvedHomework[] = [];

  constructor(
    public homeworkService: HomeworkService,
    private router: Router,
    private route: ActivatedRoute) { }

  goToCurHomework() {
    this.router.navigate(['currentHomework'], {relativeTo: this.route});
    this.homeworkService.isTestEnterMode = true;
  }

  ngOnInit(): void {
    this.solvedHomeworks = this.homeworkService.answeredHomework;
    this.homeworkService.isTestEnterMode = false;

    if(this.homeworkService.answeredHomework.length === 0) return;
    this.percentage = this.homeworkService.answeredHomework[0].getPercentage;
  }

}
