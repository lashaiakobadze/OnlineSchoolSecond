import { Component, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';

import { Contact } from '../../../shared/modules/contact/contact.model';

import * as fromApp from '../../../store/app.reducer';
import * as AdminActions from '../store/admin.actions';

@Component({
  selector: 'app-contact-panel',
  templateUrl: './contact-panel.component.html',
  styleUrls: ['./contact-panel.component.scss']
})
export class ContactPanelComponent implements OnInit {
  @Output() userContacts: Contact[] = [];
  @Output() visitorContacts: Contact[] = [];
  contacts: Contact[] = [];


  constructor(
    private store: Store<fromApp.AppState>
  ) { }

  ngOnInit(): void {
    this.store.dispatch(AdminActions.fetchContacts());
    this.store.select('admin').subscribe(adminData => {
      this.contacts = adminData.messages;
      for(let contact of this.contacts) {
        if (contact.uId === 'visitor') {
          this.visitorContacts.push(contact);
        } else {
          this.userContacts.push(contact);
        }
      }
    })
  }

}
