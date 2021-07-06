import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lesson',
  templateUrl: './lesson.component.html',
  styleUrls: ['./lesson.component.scss']
})
export class LessonComponent implements OnInit {
  LessonLink: string = null;

  constructor() { }

  ngOnInit(): void {
  }

  goToCurLesson() {
    // i will come out this link from environments
    this.LessonLink = 'https://www.facebook.com/profile.php?id=100057484148115'
  }

}
