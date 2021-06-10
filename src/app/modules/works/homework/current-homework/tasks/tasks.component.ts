import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { SolvedTask } from '../../../models/solved-task.model';
import { Task } from '../../../models/Task.model';

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
    this.taskForm = new FormGroup({
      'solve': new FormControl(''),
      'answer': new FormControl('')
    })
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

}
