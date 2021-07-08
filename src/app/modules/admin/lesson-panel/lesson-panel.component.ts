import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';

import { AppValidators } from 'src/app/shared/validators/app-validators';

import * as fromApp from '../../../store/app.reducer';
import * as AdminActions from '../store/admin.actions';


@Component({
  selector: 'app-lesson-panel',
  templateUrl: './lesson-panel.component.html',
  styleUrls: ['./lesson-panel.component.scss']
})
export class LessonPanelComponent implements OnInit {
  curLessonForm: FormGroup;

  constructor(
    private store: Store<fromApp.AppState>,
  ) { }

  ngOnInit(): void {
    this.initForm();
    this.store.dispatch(AdminActions.fetchCurLessen());
  };

  onSubmitCurLesson(): void {
    const currentLesson = this.curLessonForm.value;
    this.store.dispatch(AdminActions.storeCurrentLesson({ currentLesson }));
    this.store.dispatch(AdminActions.fetchCurLessen());
  };

  errors(controlName: string | (string | number)[]) {
    return Object.values(this.get(controlName).errors);
  };

  get(controlName: string | (string | number)[]): AbstractControl {
    return this.curLessonForm.get(controlName);
  };

  initForm(): void {
    this.curLessonForm = new FormGroup({
      curLessonLink: new FormControl(null, [
        AppValidators.required,
        AppValidators.cannotContainSpace
      ]),
      group: new FormControl(null, AppValidators.required),
    });
  };

}
