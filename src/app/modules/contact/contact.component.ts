import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { Contact } from './contact.model';

import * as fromApp from '../../store/app.reducer';
import * as ContactActions from './store/contact.actions';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit, OnDestroy {
  newMessage: Contact;
  contactForm: FormGroup;
  contacts: Contact[];
  contactSub: Subscription;
  constructor(private store: Store<fromApp.AppState>) { }

  ngOnInit(): void {
    this.contactForm = new FormGroup({
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'message': new FormControl(null, [Validators.required])
    });
  };


  messageSubmit(){
    this.newMessage = new Contact(
      this.contactForm.value.email,
      this.contactForm.value.message,
    );

    this.contactSub = this.store.select('contact').subscribe(contactState => {
      this.contacts = contactState.messages;
    });
    this.store.dispatch(new ContactActions.SendContact(this.newMessage));
    this.store.dispatch(new ContactActions.StoreContacts());
    this.contactForm.reset();
  };

  ngOnDestroy() {
    if(this.contactSub) this.contactSub.unsubscribe();
  };

}
