import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Homework } from '../../models/homework.model';
import { HomeworkService } from '../../homework.service';

@Component({
  selector: 'app-current-homework',
  templateUrl: './current-homework.component.html',
  styleUrls: ['./current-homework.component.scss']
})
export class CurrentHomeworkComponent implements OnInit {
  curHomework: Homework;
  taskForm: FormGroup;
  answeredHomework: any = [];
  disabledSuccess: boolean = false;

  constructor(
    private homeworkService: HomeworkService,
  ) { }

  ngOnInit(): void {
    this.curHomework = this.homeworkService.homework;
    console.log(this.curHomework);
  }

  endHomework() {
    console.log(this.homeworkService.answeredHomework);
    if(this.homeworkService.answeredHomework.length === 5) this.disabledSuccess = true;
  }

}
