import { NgModule } from '@angular/core';

import { SharedModule } from 'src/app/shared/shared.module';
import { AdminRoutingModule } from './admin-routing.module';

import { AdminComponent } from './admin/admin.component';
import { BlogPanelComponent } from './blog-panel/blog-panel.component';
import { ContactPanelComponent } from './contact-panel/contact-panel.component';
import { HomeworkPanelComponent } from './homework-panel/homework-panel.component';
import { OnlineTestPanelComponent } from './online-test-panel/online-test-panel.component';
import { UserContactComponent } from './contact-panel/user-contact/user-contact.component';
import { VisitorContactComponent } from './contact-panel/visitor-contact/visitor-contact.component';
import { BlogPanelItemComponent } from './blog-panel/blog-panel-item/blog-panel-item.component';


@NgModule({
  declarations: [
    AdminComponent,
    BlogPanelComponent,
    ContactPanelComponent,
    HomeworkPanelComponent,
    OnlineTestPanelComponent,
    UserContactComponent,
    VisitorContactComponent,
    BlogPanelItemComponent,
  ],
  imports: [
    SharedModule,
    AdminRoutingModule
  ],
})
export class AdminModule { }
