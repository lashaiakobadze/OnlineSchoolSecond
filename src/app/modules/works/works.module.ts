import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule } from '@angular/router';
import { WorksRoutingModule } from './works-routing.module';

import { WorksComponent } from './works.component';
import { ActivityComponent } from './activity/activity.component';
import { HomeworkComponent } from './homework/homework.component';
import { OnlineTestComponent } from './online-test/online-test.component';
import { CurrentHomeworkComponent } from './homework/current-homework/current-homework.component';
import { CurrentTestComponent } from './online-test/current-test/current-test.component';
import { TasksComponent } from './homework/current-homework/tasks/tasks.component';
import { TestsComponent } from './online-test/current-test/tests/tests.component';
import { LessonComponent } from './lesson/lesson.component';


@NgModule({
  declarations: [
    WorksComponent,
    ActivityComponent,
    HomeworkComponent,
    OnlineTestComponent,
    CurrentHomeworkComponent,
    CurrentTestComponent,
    TasksComponent,
    TestsComponent,
    LessonComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    RouterModule,
    WorksRoutingModule
  ]
})
export class WorksModule { }
