import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';

import * as fromApp from '../../store/app.reducer';
import * as AuthActions from '../store/auth.actions';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit, OnDestroy {
  isLoading: boolean;
  error: string = null;

  private signupSub: Subscription;

  constructor(private store: Store<fromApp.AppState>) { }

  ngOnInit(): void {
    this.signupSub = this.store.select('auth').subscribe(authState => {
      this.isLoading = authState.loading;
      this.error = authState.authError;
    })
  }


  onSignUp(form: NgForm) {
    if (!form.valid) {
     return;
    }
    const email = form.value.email;
    const password = form.value.password;
    this.store.dispatch(new AuthActions.SignupStart({email: email, password: password}));
  }


  ngOnDestroy() {
    if(this.signupSub) {
      this.signupSub.unsubscribe();
    }
  }

}
