import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { TestTask } from '../../../models/test-task.model';

@Component({
  selector: 'app-tests',
  templateUrl: './tests.component.html',
  styleUrls: ['./tests.component.scss']
})
export class TestsComponent implements OnInit {
  @Input() curTest: TestTask;
  @Input() curTestNum: number;
  @Input() showCorrectAnswer: boolean;
  @ViewChild('answer') answer: ElementRef;


  constructor() { }

  ngOnInit(): void {
  }

}
