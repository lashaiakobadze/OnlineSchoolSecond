import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SolvedTestTask } from '../../../models/solved-test-task.model';
import { SolvedTest } from '../../../models/solved-test.model';
import { TestTask } from '../../../models/test-task.model';
import { TestService } from '../../../test.service';

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

  isAdded: boolean = false; // for disabled button

  constructor(public testService: TestService) { }

  ngOnInit() {

  }

  testForm = new FormGroup({
    option: new FormControl('', Validators.required)
  });

  get f(){
    return this.testForm.controls;
  }

  testSubmit(){
    console.log(this.testForm.value);
  }

  changeGender(e) {
    console.log(e.target.value);
  }

  // static add task on tasks array for solvedHomework in service.
  addTestTask() {
    this.isAdded = true;
    this.testService.solvedTestTasks.push(new SolvedTestTask(
      this.curTestNum,
      this.testForm.value.option,
      this.testForm.value.option === this.answer.nativeElement.innerHTML ? 2 : 0),
    )
    console.log(this.testService.solvedTestTasks);
  }

}
