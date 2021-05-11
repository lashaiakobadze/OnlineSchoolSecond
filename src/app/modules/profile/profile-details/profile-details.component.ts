import { Component, OnInit } from '@angular/core';
import { HomeworkService } from '../../works/homework.service';

@Component({
  selector: 'app-profile-details',
  templateUrl: './profile-details.component.html',
  styleUrls: ['./profile-details.component.scss']
})
export class ProfileDetailsComponent implements OnInit {
  weeks: unknown = [];
  activitiesSum: number = 0;
  homeworksSum: number = 0;
  testsSum: number = 0;

  constructor(
    public homeworkService: HomeworkService
  ) { }

  ngOnInit(): void {
    if(this.homeworkService.answeredHomework.length == 0) return;
    this.weeks = this.homeworkService.answeredHomework;
    this.homeworksSum = this.homeworkService.getAnsweredHomeworksSum();
    this.activitiesSum = this.homeworkService.getActivitiesFirstSum() + this.homeworkService.getActivitiesSecondSum();
  }

}
