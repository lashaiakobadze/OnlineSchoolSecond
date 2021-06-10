import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { Registration } from 'src/app/auth/registration/registration.model';

import * as fromApp from '../../store/app.reducer';
import * as HomeworkActions from '../works/store-homework/homework.actions';
import * as TestActions from '../works/store-test/test.actions';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
  userProfiles: Registration[] = [];
  userEmail: string = '';
  userProfile: Registration;
  isLoading: boolean;

  authSub: Subscription;
  registrationSub: Subscription;
  homeworkSub: Subscription;
  testSub: Subscription;

  activityPercentage: number = null;
  homeworkPercentage: number = null;
  testPercentage: number = null;
  averagePercentage: number = null;

  activitiesHomework: number;
  activitiesTest: number;
  activitiesScoreFirst: number = null;
  activitiesScoreSecond: number = null;

  constructor(public store: Store<fromApp.AppState>) { }

  ngOnInit() {
    this.authSub = this.store.select('auth')
    .subscribe(data => {
      if(!data) return;
      this.userEmail = data.user?.email;
    });

    this.registrationSub = this.store.select('registration')
    .subscribe(userState => {
      this.userProfiles = userState.users;
      this.isLoading = userState.loading;
    })
    this.userProfile = this.userProfiles.find(dataFromEmail => dataFromEmail.email === this.userEmail);

    this.store.dispatch(new HomeworkActions.getActivitiesFirstSum());
    this.store.dispatch(new HomeworkActions.getAnsweredHomeworksPercentage());
    this.homeworkSub = this.store.select('homeWork').subscribe(homeworkState => {
      this.homeworkPercentage = homeworkState.homeworksPercentage;
      this.activitiesHomework = homeworkState.answeredHomeworks.length;
      this.activitiesScoreFirst = homeworkState.firstActivities;
    });

    this.store.dispatch(new TestActions.getActivitiesSecondSum());
    this.store.dispatch(new TestActions.getAnsweredTestsPercentage());
    this.testSub = this.store.select('OnlineTest').subscribe(testState => {
      this.testPercentage = testState.testsPercentage;
      this.activitiesTest = testState.solvedTests.length;
      this.activitiesScoreSecond = testState.secondActivities;
    });

    this.activityPercentage = (this.activitiesScoreFirst/this.activitiesHomework + this.activitiesScoreSecond/this.activitiesTest) * 10;

    this.averagePercentage = Math.round((this.homeworkPercentage + this.activityPercentage + this.testPercentage)/3);
  }

  ngOnDestroy() {
    if(this.registrationSub) this.registrationSub.unsubscribe();
    if(this.authSub) this.authSub.unsubscribe();
    if(this.homeworkSub) this.homeworkSub.unsubscribe();
    if(this.testSub) this.testSub.unsubscribe();
  }

}
