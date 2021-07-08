import { Component, OnDestroy, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup } from '@angular/forms';
import { Subscription, throwError } from 'rxjs';
import { Store } from '@ngrx/store';


import { AppValidators } from 'src/app/shared/validators/app-validators';
import { Contact } from '../../shared/modules/contact/contact.model';

import * as fromApp from '../../store/app.reducer';
import * as ContactActions from './store/contact.actions';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit, OnDestroy {
  newMessage: Contact;
  contacts: Contact[];
  curUserId: string = 'visitor';
  curUserEmail: string = null;

  contactForm: FormGroup;
  authSub: Subscription;
  contactSub: Subscription;

  constructor(
    private store: Store<fromApp.AppState>,
  ) { }

  ngOnInit(): void {
    this.initForm();
    this.authSub = this.store.select('auth').subscribe(curUser => {
      if (!curUser.user) {
        return;
      }
      this.curUserId = curUser.user.id;
      this.curUserEmail = curUser.user.email;
    }, error => throwError(error));
    this.store.dispatch(new ContactActions.FetchContacts());
  };


  messageSubmit() {
    let email = this.contactForm.value.email;
    const msg = this.contactForm.value.message;

    if (this.curUserEmail) {
      email = this.curUserEmail;
    }

    this.newMessage = new Contact(
      email,
      msg || 'empty',
      this.curUserId || 'visitor'
    );

    this.contactSub = this.store.select('contact').subscribe(contactState => {
      this.contacts = contactState.messages;
    }, error => throwError(error));

    this.store.dispatch(new ContactActions.SendContact(this.newMessage));
    this.store.dispatch(new ContactActions.StoreContacts());
    this.contactForm.reset();
  };


  errors(controlName: string | (string | number)[]) {
    return Object.values(this.get(controlName).errors);
  }

  get(controlName: string | (string | number)[]): AbstractControl {
    return this.contactForm.get(controlName);
  }

  initForm() {
    this.contactForm = new FormGroup({
      'email': new FormControl(null, [
        AppValidators.required,
        AppValidators.email,
        AppValidators.cannotContainSpace
      ]),
      'message': new FormControl(null, [
        AppValidators.required,
        AppValidators.minLength(2)
      ])
    });
  };

  ngOnDestroy() {
    this.authSub?.unsubscribe();
    this.contactSub?.unsubscribe();
  };

}
