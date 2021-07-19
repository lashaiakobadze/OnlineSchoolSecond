import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminComponent } from './admin/admin.component';
import { BlogPanelComponent } from './blog-panel/blog-panel.component';
import { ContactPanelComponent } from './contact-panel/contact-panel.component';
import { HomeworkPanelComponent } from './homework-panel/homework-panel.component';
import { LessonPanelComponent } from './lesson-panel/lesson-panel.component';
import { OnlineTestPanelComponent } from './online-test-panel/online-test-panel.component';


export const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      { path: '', redirectTo: 'blogPanel', pathMatch: 'full' },
      { path: 'blogPanel', component: BlogPanelComponent },
      { path: 'contactPanel', component: ContactPanelComponent },
      { path: 'homeworkPanel', component: HomeworkPanelComponent},
      { path: 'onlineTestPanel', component: OnlineTestPanelComponent},
      { path: 'lessonPanel', component: LessonPanelComponent},
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
