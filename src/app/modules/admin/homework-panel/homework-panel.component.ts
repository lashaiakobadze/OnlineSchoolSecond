import { Component, OnDestroy, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Homework } from 'src/app/shared/modules/works/models/homework.model';
import { AppValidators } from 'src/app/shared/validators/app-validators';
import { Store } from '@ngrx/store';
import { Subscription, throwError } from 'rxjs';


import * as fromApp from '../../../store/app.reducer';
import * as AdminActions from '../store/admin.actions';


@Component({
  selector: 'app-homework-panel',
  templateUrl: './homework-panel.component.html',
  styleUrls: ['./homework-panel.component.scss']
})
export class HomeworkPanelComponent implements OnInit, OnDestroy {
  homeworkForm: FormGroup;
  curHomeworkForm: FormGroup;
  tasks: FormArray;
  homeworks: Homework[];

  homeworksSub: Subscription;

  constructor(
    private store: Store<fromApp.AppState>,
    private formBuilder: FormBuilder,
  ) {}

  ngOnInit() {
    this.initForm();
    this.store.dispatch(AdminActions.fetchHomeworks());
    this.store.select('admin').subscribe(adminState => {
      this.homeworks = adminState.homeworks;
    }, error => throwError(error));
  };

  createTask(): FormGroup {
    return this.formBuilder.group({
      conditions: new FormControl(null, AppValidators.required),
      solve: new FormControl(null, AppValidators.required),
      answer: new FormControl(null, AppValidators.required)
    });
  };


  addTask(): void {
    this.tasks = this.homeworkForm.get('tasks') as FormArray;
    this.tasks.push(this.createTask());
  };


  deleteTaskGroup(index: number) {
    const control = this.homeworkForm.get('tasks') as FormArray;
    control.removeAt(index);
  };


  onSubmitHomework(): void {
    const homework = new Homework(
      this.homeworkForm.value.homeworkNumber,
      this.homeworkForm.value.tasks
    );

    this.store.dispatch(AdminActions.addNewHomework({ homework }));
    this.store.dispatch(AdminActions.storeHomeworks());
    this.homeworkForm.reset();
  };

  onSubmitCurHomework(): void {
    const currentHomework = this.curHomeworkForm.value;
    this.store.dispatch(AdminActions.storeCurrentHomework({ currentHomework }));
    this.store.dispatch(AdminActions.fetchCurHomework());
  };

  errors(controlName: string | (string | number)[]) {
    return Object.values(this.get(controlName).errors);
  };

  get(controlName: string | (string | number)[]): AbstractControl {
    return this.homeworkForm.get(controlName) || this.curHomeworkForm.get(controlName);
  };

  getTaskControls() {
    return (this.homeworkForm.get('tasks') as FormArray).controls;
  };

  initForm(): void {
    this.homeworkForm = new FormGroup({
      homeworkNumber: new FormControl(null, [
        AppValidators.required,
        AppValidators.minNumber
      ]),
      tasks: new FormArray([this.createTask()])
    });

    this.curHomeworkForm = new FormGroup({
      curHomeworkNumber: new FormControl(null, [
        AppValidators.required,
        AppValidators.minNumber
      ]),
    });
  };

  ngOnDestroy(): void {
    this.homeworksSub?.unsubscribe();
  };

}
