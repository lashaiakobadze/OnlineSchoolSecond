import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';


import * as fromApp from '../../../store/app.reducer';
import * as AdminActions from '../../admin/store/admin.actions';


@Component({
  selector: 'app-lesson',
  templateUrl: './lesson.component.html',
  styleUrls: ['./lesson.component.scss']
})
export class LessonComponent implements OnInit, OnDestroy {
  lessonLink: string = null;

  lessenSub: Subscription;

  constructor(
    private store: Store<fromApp.AppState>,
  ) { }


  ngOnInit(): void {
    this.store.dispatch(AdminActions.fetchCurLessen());
    this.lessenSub = this.store.select('admin').subscribe(
      adminState => {
        this.lessonLink = adminState.curLesson?.curLessenLink;
      }
    );
  };


  goToCurLesson() {
    this.lessonLink = this.lessonLink;

  };


  ngOnDestroy(): void {
    this.lessenSub?.unsubscribe();
  };
}
