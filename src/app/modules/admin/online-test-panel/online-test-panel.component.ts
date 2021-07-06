import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Test } from 'src/app/shared/modules/works/models/test.model';
import { AppValidators } from 'src/app/shared/validators/app-validators';

import * as fromApp from '../../../store/app.reducer';
import * as AdminActions from '../store/admin.actions';

@Component({
  selector: 'app-online-test-panel',
  templateUrl: './online-test-panel.component.html',
  styleUrls: ['./online-test-panel.component.scss']
})
export class OnlineTestPanelComponent implements OnInit {
  public testForm: FormGroup;
  public curTestForm: FormGroup;
  public tests: Test[];

  constructor(
    private formBuilder: FormBuilder,
    private store: Store<fromApp.AppState>,
  ) { };


  ngOnInit() {
    this.initForm();
    this.store.dispatch(AdminActions.fetchTests());
    this.store.select('admin').subscribe(adminState => {
      this.tests = adminState.tests;
    });
  }

  private tasksGroup(): FormGroup {
    return this.formBuilder.group({
      conditions: new FormControl(null, AppValidators.required),
      answer: new FormControl(null, AppValidators.required),
      options: this.formBuilder.array([this.optionsGroup()])
    });
  }

  private optionsGroup(): FormGroup {
    return this.formBuilder.group({
      option: new FormControl(null, AppValidators.required),
    });
  }

  get tasksArray(): FormArray {
    return <FormArray>this.testForm.get('tasks');
  }

  addTasks(): void {
    this.tasksArray.push(this.tasksGroup());
  }

  removeTasks(index: number): void {
    this.tasksArray.removeAt(index);
  }

  addOption(index): void {
    (<FormArray>(<FormGroup>this.tasksArray.controls[index]).controls.options).push(this.optionsGroup());
  }

  deleteTask(index): void {
    const control = this.testForm.get('tasks') as FormArray;
    control.removeAt(index);
  }

  deleteOption(index): void {
    const control = <FormArray>(<FormGroup>this.tasksArray.controls[index]).controls.options;
    control.removeAt(index);
  }

  onSubmitTest(): void {
    const test = new Test(
      this.testForm.value.testNumber,
      this.testForm.value.tasks
    );

    this.store.dispatch(AdminActions.addNewTest({ test }));
    this.store.dispatch(AdminActions.storeTests());
    this.testForm.reset();
  };

  onSubmitCurTest(): void {
    console.log(this.curTestForm.value);
  };

  errors(controlName: string | (string | number)[]) {
    return Object.values(this.get(controlName).errors);
  };

  get(controlName: string | (string | number)[]): AbstractControl {
    return this.testForm.get(controlName) || this.curTestForm.get(controlName);
  };

  initForm(): void {
    this.testForm = this.formBuilder.group({
      testNumber: new FormControl(null, [
        AppValidators.required,
        AppValidators.minNumber
      ]),
      tasks: this.formBuilder.array([this.tasksGroup()])
    });

    this.curTestForm = new FormGroup({
      curTestNumber: new FormControl(null, [
        AppValidators.required,
        AppValidators.minNumber
      ]),
    });
  }

}

