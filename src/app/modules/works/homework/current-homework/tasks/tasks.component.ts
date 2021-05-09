import { AfterViewInit, Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { HomeworkService } from '../../../homework.service';
import { SolvedHomework } from '../../../models/solved-homework.model';
import { SolvedTask } from '../../../models/solved-task.model';
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
  @Input() showCorrectAnswer: boolean;
  @ViewChild('answer') answer: ElementRef;

  isAdded: boolean = false; // for disabled button

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

  // Maybe use for put
  submitTask() {
    console.log(this.taskForm);
  }

  // static add task on tasks array for solvedHomework in service.
  addTask() {
    this.isAdded = true;
    this.homeworkService.answeredTasks.push(new SolvedTask(
      this.curTaskNumber,
      this.taskForm.value.solve,
      this.taskForm.value.answer,
      this.taskForm.value.answer == this.answer.nativeElement.innerHTML ? 2 : 0),
    )
    console.log(this.homeworkService.answeredTasks);
  }

}
