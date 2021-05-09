import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { WorksComponent } from './works.component';
import { ActivityComponent } from './activity/activity.component';
import { HomeworkComponent } from './homework/homework.component';
import { OnlineTestComponent } from './online-test/online-test.component';
import { CurrentHomeworkComponent } from './homework/current-homework/current-homework.component';
import { CurrentTestComponent } from './online-test/current-test/current-test.component';

const workRoutes: Routes = [
  {
    path: 'works',
    component: WorksComponent,
    children: [
      { path: '', redirectTo: 'online-test', pathMatch: 'full' },
      { path: 'activity', component: ActivityComponent },
      {
        path: 'homework',
        component: HomeworkComponent,
        children: [ { path: 'currentHomework', component: CurrentHomeworkComponent } ]
      },
      {
        path: 'online-test',
        component: OnlineTestComponent,
        children: [ { path: 'currentTest', component: CurrentTestComponent } ]
      }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(workRoutes)],
  exports: [RouterModule]
})
export class WorksRoutingModule { }
