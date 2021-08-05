import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { Observable, Subscription, throwError } from 'rxjs';
import { Store } from '@ngrx/store';
import { TranslateService } from '@ngx-translate/core';

import { stagger, group, animateChild, query, useAnimation, animate, style, transition, trigger } from '@angular/animations';
import { fadeInAnimation } from '../../../../shared/animations/animation';

import { Homework } from '../../../../shared/modules/works/models/homework.model';
import { SolvedHomework } from '../../../../shared/modules/works/models/solved-homework.model';
import { SolvedTask } from '../../../../shared/modules/works/models/solved-task.model';

import * as fromApp from '../../../../store/app.reducer';
import * as HomeworkActions from '../../store-homework/homework.actions';


@Component({
  selector: 'app-current-homework',
  templateUrl: './current-homework.component.html',
  styleUrls: ['./current-homework.component.scss'],
  animations: [
    trigger('homeworksAnimation', [
      transition(':enter', [
        group([
          query('label.form-group', [
            style({ transform: 'translateY(-10px)' }),
            animate(1000)
          ]),
          query('@homeworkAnimation', stagger(200, animateChild()))
        ]),
      ])
    ]),

    trigger('homeworkAnimation', [
      transition(':enter', [
        useAnimation(fadeInAnimation)
      ]),
    ])
  ]
})
export class CurrentHomeworkComponent implements OnInit, OnDestroy {
  homeworkMode: boolean;
  curHomework: Homework;
  answeredTasks: SolvedTask[];
  answeredHomeworks: SolvedHomework[];
  disabledSuccess: boolean = false;
  errorSuccess: boolean = false;
  yourScore: number = null;
  maxScore: number = null;
  active: number;
  homeworkIsWritten: number;

  homeworkSub: Subscription;
  routerSub: Subscription;

  constructor(
    private store: Store<fromApp.AppState>,
    private route: ActivatedRoute,
    private router: Router,
    private translateService: TranslateService
  ) { }

  ngOnInit(): void {
    this.routerSub = this.route.queryParams.pipe(
      map(params => {
        return params.isWritten
      })
    ).subscribe(status => {
      this.active = +status;
    }, error => throwError(error));

    // this.store.dispatch(new HomeworkActions.FetchHomeworks());

    this.homeworkSub = this.store.select('homeWork').subscribe(homeworkState => {
      this.curHomework = homeworkState.homework;
      this.answeredTasks = homeworkState.answeredTasks;
      this.answeredHomeworks = homeworkState.answeredHomeworks;
      this.homeworkMode = homeworkState.isHomeworkMode;
      this.homeworkIsWritten = homeworkState.homeworkIsWritten;
    }, error => throwError(error));
  };

  endHomework() {
    this.errorSuccess = true;

    if(this.answeredTasks.length === this.curHomework.tasks.length) {
      this.disabledSuccess = true;
      this.errorSuccess = false;

      this.store.dispatch(new HomeworkActions.GetWrittenMode());

      this.store.dispatch(new HomeworkActions.AddAnsweredHomework(
        new SolvedHomework(
          'lashaiakobadze@gmail.com',
          this.curHomework.homeworkNumber,
          this.answeredTasks)
      ));

    };

    this.yourScore = this.answeredHomeworks[this.curHomework.homeworkNumber - 1]?.getScore;
    this.maxScore = this.answeredTasks.length * 2;
  };

  onNavigateBack() {
    this.store.dispatch(new HomeworkActions.GetHomeworkMode());
    this.router.navigate(['../'], { relativeTo: this.route });
  };

  canDeactivate(): boolean | Observable<boolean> | Promise<boolean> {
    if (this.homeworkIsWritten) {
      return true;
    }
    let msg = '';
    this.translateService.get('guardMsg').subscribe(msgs => msg = msgs);
    return confirm(msg);
  };

  ngOnDestroy() {
    this.routerSub?.unsubscribe();
    this.homeworkSub?.unsubscribe();
    if(this.answeredTasks.length !== this.curHomework.tasks.length) {
      this.store.dispatch(new HomeworkActions.ClearAnsweredTasks());
    }
  };
}
