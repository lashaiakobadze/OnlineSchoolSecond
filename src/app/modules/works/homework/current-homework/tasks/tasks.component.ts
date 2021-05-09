import { AfterViewInit, Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { HomeworkService } from '../../../homework.service';
import { SolvedHomework } from '../../../models/solved-homework.model';
import { Task } from '../../../models/Task.model';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit, AfterViewInit {
  @Input() curHomework: number;
  @Input() curTask: Task;
  @Input() curTaskNumber;
  @ViewChild('answer') answer: ElementRef;
  // answeredHomework: SolvedHomework[] = [];

  isAdded: boolean = false;

  taskForm: FormGroup;

  constructor(private homeworkService: HomeworkService) { }

  ngOnInit(): void {
    this.taskForm = new FormGroup({
      'solve': new FormControl(''),
      'answer': new FormControl('')
    })
  }

  ngAfterViewInit() {

  }

  submitTask() {
    console.log(this.taskForm);
  }


  addTask() {
    this.isAdded = true;
    this.homeworkService.answeredHomework.push(new SolvedHomework(this.curTaskNumber, this.curTaskNumber, this.taskForm.value.solve, this.taskForm.value.answer, this.taskForm.value.answer == this.answer.nativeElement.getAttribute("data-answer") ? 2 : 0));
    console.log('es aris servisidan', this.homeworkService.answeredHomework);
  }

}
