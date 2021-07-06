import { Component, OnDestroy, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';


import { ErrorService } from 'src/app/shared/services/error.service';
import { AppValidators } from '../../shared/validators/app-validators';

import * as fromApp from '../../store/app.reducer';
import * as AuthActions from '../store/auth.actions';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit, OnDestroy {
  signupForm: FormGroup;
  private signupSub: Subscription;

  constructor(
    private store: Store<fromApp.AppState>,
    private errorService: ErrorService
  ) { }

  ngOnInit(): void {
    this.initForm();

    this.signupSub = this.store.select('auth').subscribe(authState => {
      this.errorService.errorMessage = authState.authError;
    })
  }


  onSignup() {
    if (!this.signupForm.valid) {
     return;
    }
    const email = this.signupForm.value.email;
    const password = this.signupForm.value.password;
    this.store.dispatch(new AuthActions.SignupStart({email: email, password: password}));
  }

  errors(controlName: string | (string | number)[]) {
    return Object.values(this.get(controlName).errors);
  }

  get(controlName: string | (string | number)[]): AbstractControl {
    return this.signupForm.get(controlName);
  }

  initForm() {
    this.signupForm = new FormGroup({
      email: new FormControl(null, [
        AppValidators.required,
        AppValidators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?", "ემაილის მისამართის"),
        AppValidators.cannotContainSpace
      ]),
      password: new FormControl(null, [
        AppValidators.required,
        AppValidators.minLength(6)
      ]),
      confirmPassword: new FormControl(null, [
        AppValidators.required,
        AppValidators.minLength(6),
        AppValidators.matchValues('password')
      ])
    })
  }


  ngOnDestroy() {
    this.signupSub?.unsubscribe();
  }

}
