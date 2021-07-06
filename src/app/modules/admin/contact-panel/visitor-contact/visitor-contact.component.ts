import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup } from '@angular/forms';


import { Contact } from 'src/app/shared/modules/contact/contact.model';
import { AppValidators } from 'src/app/shared/validators/app-validators';

@Component({
  selector: 'app-visitor-contact',
  templateUrl: './visitor-contact.component.html',
  styleUrls: ['./visitor-contact.component.scss']
})
export class VisitorContactComponent implements OnInit {
  @Input() contact: Contact;
  answerForm: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.initForm();
  }

  onAnswerVisitor(email): void {
    console.log(email, this.answerForm.value);
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
