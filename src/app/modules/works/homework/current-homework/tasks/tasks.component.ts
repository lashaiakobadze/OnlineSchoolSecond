import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { AbstractControl, FormControl, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';


import { SolvedTask } from '../../../../../shared/modules/works/models/solved-task.model';
import { Task } from '../../../../../shared/modules/works/models/Task.model';
import { AppValidators } from 'src/app/shared/validators/app-validators';

import * as fromApp from '../../../../../store/app.reducer';
import * as HomeworkActions from '../../../store-homework/homework.actions';


@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {
  @Input() curHomework: number;
  @Input() curTask: Task;
  @Input() curTaskNumber: number;
  @Input() showCorrectAnswer: boolean;
  @ViewChild('answer') answer: ElementRef;

  isAdded: boolean = false;

  taskForm: FormGroup;

  constructor(private store: Store<fromApp.AppState>) { }

  ngOnInit(): void {
    this.initForm();
  }


  submitTask() {
    console.log(this.taskForm);
  }


  addTask() {
    this.isAdded = true;
    this.store.dispatch(new HomeworkActions.AddAnsweredTask(
      new SolvedTask(
        this.curTaskNumber,
        this.taskForm.value.solve,
        this.taskForm.value.answer,
        this.taskForm.value.answer === this.answer.nativeElement.innerHTML ? 2 : 0
      )
    ));
  }

  errors(controlName: string | (string | number)[]) {
    return Object.values(this.get(controlName).errors);
  }

  get(controlName: string | (string | number)[]): AbstractControl {
    return this.taskForm.get(controlName);
  }

  initForm(): void {
    this.taskForm = new FormGroup({
      'solve': new FormControl('', [AppValidators.required]),
      'answer': new FormControl('', [AppValidators.required])
    })
  }

}
