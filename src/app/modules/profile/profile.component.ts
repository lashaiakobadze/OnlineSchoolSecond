import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription, throwError } from 'rxjs';
import { AngularFireStorage } from "@angular/fire/storage";

import { useAnimation, transition, trigger } from '@angular/animations';
import { progressInAnimation } from '../../shared/animations/animation';

import { Registration } from 'src/app/shared/auth/registration.model';
import { ErrorService } from 'src/app/shared/services/error.service';
import { RegistrationService } from 'src/app/shared/auth/registration.service';

import * as fromApp from '../../store/app.reducer';
import * as HomeworkActions from '../works/store-homework/homework.actions';
import * as TestActions from '../works/store-test/test.actions';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  animations: [
    trigger('progressBarAnimation', [
      transition(':enter', [
        useAnimation(progressInAnimation)
      ]),
    ])
  ]
})
export class ProfileComponent {
  userId: string;
  userProfile: Registration = null;

  authSub: Subscription;
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

  constructor(
    private store: Store<fromApp.AppState>,
    private angularFirebaseStorage: AngularFireStorage,
    private errorService: ErrorService,
    private registerService: RegistrationService
  ) { }

  ngOnInit() {
    this.registerService.getProfiles();

    this.authSub = this.store.select('auth')
    .subscribe(data => {
      if(!data) {
        return;
      }
      this.userId = data.user?.id;
    }, error => throwError(error));

    this.userProfile = this.registerService.userProfile;

    this.store.dispatch(new HomeworkActions.getActivitiesFirstSum());
    this.store.dispatch(new HomeworkActions.getAnsweredHomeworksPercentage());

    this.homeworkSub = this.store.select('homeWork').subscribe(homeworkState => {
      this.homeworkPercentage = homeworkState.homeworksPercentage;
      this.activitiesHomework = homeworkState.answeredHomeworks.length;
      this.activitiesScoreFirst = homeworkState.firstActivities;
    }, error => throwError(error));

    this.store.dispatch(new TestActions.getActivitiesSecondSum());
    this.store.dispatch(new TestActions.getAnsweredTestsPercentage());

    this.testSub = this.store.select('OnlineTest').subscribe(testState => {
      this.testPercentage = testState.testsPercentage;
      this.activitiesTest = testState.solvedTests.length;
      this.activitiesScoreSecond = testState.secondActivities;
    });

    this.activityPercentage = (this.activitiesScoreFirst/this.activitiesHomework + this.activitiesScoreSecond/this.activitiesTest) * 10;
    this.averagePercentage = Math.round((this.homeworkPercentage + this.activityPercentage + this.testPercentage)/3);

    this.angularFirebaseStorage.ref('users/' + this.userId + '/profile.jpg').getDownloadURL()
    .subscribe(imgUrl => {
        this.img.src = imgUrl;
      },error => throwError(error.error),
    )
  }


  // Upload avatar
  file: string;
  img = {
    src: null
  };

  upload(imageInput) {
    this.file = imageInput.target.files[0];
  }

  selectedFile: ImageSnippet;

  processFile(imageInput: any): void {
    const file: File = imageInput.files[0];
    const reader = new FileReader();

    reader.addEventListener('load', (event: any) => {
      this.selectedFile = new ImageSnippet(event.target.result, file);
      this.selectedFile.pending = true;
    });

    reader.readAsDataURL(file);

    this.angularFirebaseStorage.ref('users/' + this.userId + '/profile.jpg')
    .put(file).then(() => {
        this.errorService.errorMessage = 'Success upload profile images.';
      }
    ).catch (error => {
      this.errorService.errorMessage = error;
    });
  }

  ngOnDestroy() {
    this.authSub?.unsubscribe();
    this.homeworkSub?.unsubscribe();
    this.testSub?.unsubscribe();
  }
}

class ImageSnippet {
  pending = false;
  status = 'init';

  constructor(public src: string, public file: File) {}
}
