import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';

import { SolvedTestTask } from '../../../models/solved-test-task.model';
import { TestTask } from '../../../models/test-task.model';

import * as fromApp from '../../../../../store/app.reducer';
import * as TestActions from '../../../store-test/test.actions';

@Component({
  selector: 'app-tests',
  templateUrl: './tests.component.html',
  styleUrls: ['./tests.component.scss']
})
export class TestsComponent implements OnInit {
  @Input() curTest: TestTask;
  @Input() curTestNum: number;
  @Input() showCorrectAnswer: boolean = false;
  @ViewChild('answer') answer: ElementRef;

  isAdded: boolean = false;

  constructor(private store: Store<fromApp.AppState>) { }

  ngOnInit() { }

  testForm = new FormGroup({
    option: new FormControl('', Validators.required)
  });

  addTestTask() {
    this.isAdded = true;
    this.store.dispatch(new TestActions.AddAnsweredTestTask(
      new SolvedTestTask(
        this.curTestNum,
        this.testForm.value.option,
        this.testForm.value.option === this.answer.nativeElement.innerHTML ? 2 : 0
      ),
    ));
  };

}
