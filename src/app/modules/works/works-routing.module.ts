import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { WorksComponent } from './works.component';
import { ActivityComponent } from './activity/activity.component';
import { HomeworkComponent } from './homework/homework.component';
import { OnlineTestComponent } from './online-test/online-test.component';
import { CurrentHomeworkComponent } from './homework/current-homework/current-homework.component';
import { CurrentTestComponent } from './online-test/current-test/current-test.component';
import { AuthGuard } from 'src/app/shared/guards/auth.guard';
import { CanDeactivateGuardWorks } from '../../shared/guards/works.guard';
import { LessonComponent } from './lesson/lesson.component';

const workRoutes: Routes = [
  {
    path: '',
    component: WorksComponent,
    canActivate: [AuthGuard],
    children: [
      { path: '', redirectTo: 'activity', pathMatch: 'full' },
      { path: 'activity', component: ActivityComponent },
      {
        path: 'homework',
        component: HomeworkComponent,
        children: [ { path: ':id', component: CurrentHomeworkComponent, canDeactivate: [CanDeactivateGuardWorks] } ]
      },
      {
        path: 'online-test',
        component: OnlineTestComponent,
        children: [ { path: ':id', component: CurrentTestComponent, canDeactivate: [CanDeactivateGuardWorks] } ]
      },
      {
        path: 'lesson',
        component: LessonComponent
      }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(workRoutes)],
  exports: [RouterModule]
})
export class WorksRoutingModule { }
