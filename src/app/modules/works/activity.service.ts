import { Injectable } from '@angular/core';
import { HomeworkService } from './homework.service';
import { TestService } from './test.service';

@Injectable({
  providedIn: 'root'
})
export class ActivityService {

  constructor(
    private homeworkService: HomeworkService,
    private testService: TestService) { }


  // I will change these methods when I add an activity service from adminpanel.
  getActivitiesFirstSum() {
    let sum = 0;
    this.homeworkService.answeredHomework.forEach(activity => {
      sum += activity.getActivityFirst;
    })
    return sum;
  }


  // I will change these methods when I add an activity service from adminpanel.
  getActivitiesSecondSum() {
    let sum = 0;
    this.testService.solvedTests.forEach(activity => {
      sum += activity.getActivitySecond;
    })
    return sum;
  }


  getActivityPercentage() {
    return (this.getActivitiesFirstSum()/this.homeworkService.answeredHomework.length + this.getActivitiesSecondSum()/this.testService.solvedTests.length)*10;
  }

}
