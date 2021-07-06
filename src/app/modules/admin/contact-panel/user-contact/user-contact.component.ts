import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup } from '@angular/forms';


import { Contact } from 'src/app/shared/modules/contact/contact.model';
import { AppValidators } from 'src/app/shared/validators/app-validators';

@Component({
  selector: 'app-user-contact',
  templateUrl: './user-contact.component.html',
  styleUrls: ['./user-contact.component.scss']
})
export class UserContactComponent implements OnInit {
  @Input() contact: Contact;
  answerForm: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.initForm();
  }

  onAnswerUser(uId): void {
    console.log(uId, this.answerForm.value);
  }

  errors(controlName: string | (string | number)[]) {
    return Object.values(this.get(controlName).errors);
  }

  get(controlName: string | (string | number)[]): AbstractControl {
    return this.answerForm.get(controlName);
  }

  initForm() {
    this.answerForm = new FormGroup({
      'message': new FormControl(null, [AppValidators.required])
    });
  }
}
