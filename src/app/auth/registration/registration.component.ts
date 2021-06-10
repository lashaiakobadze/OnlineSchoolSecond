import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable, Subscription } from 'rxjs';
import { CanComponentDeactivate } from './registration.guard';
import { map } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { Registration } from './registration.model';

import * as fromApp from '../../store/app.reducer';
import * as RegistrationActions from './store/registration.actions';
import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit, CanComponentDeactivate, OnDestroy {
  registerForm: FormGroup;
  correctEmail: boolean = true;
  errorMessage: string = null;
  isLoading: boolean;
  profiles: Registration[];
  profilesEmail: string;
  newRegistration: Registration;
  validRegistration: boolean = false;

  authSub: Subscription;
  registrationSub: Subscription;

  constructor(
    private store: Store<fromApp.AppState>,
    private translateService: TranslateService
  ) { }

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      'firstName': new FormControl(null, [Validators.required]),
      'lastName': new FormControl(null, [Validators.required]),
      'personalNumber': new FormControl(null, [Validators.required, Validators.minLength(11), Validators.maxLength(11)]),
      'phone': new FormControl(null, [Validators.required]),
      'imgLink': new FormControl(null, [Validators.required]),
      'group': new FormControl(null, [Validators.required]),
      'email': new FormControl(null, [Validators.required, Validators.email]),
    });

    this.store.dispatch(new RegistrationActions.FetchUsers());

    this.authSub = this.store.select('auth')
    .subscribe(data => {
      if(!data) return 'user is null';
      this.profilesEmail = data.user.email;
      this.isLoading = data.loading;
    });

    this.registrationSub = this.store.select('registration')
    .pipe(map(usersState => usersState.users))
    .subscribe(usersData => {
      this.profiles = usersData;
    })
  }


  onRegister() {
    this.newRegistration = new Registration(
      this.registerForm.value.firstName,
      this.registerForm.value.lastName,
      this.registerForm.value.personalNumber,
      this.registerForm.value.phone,
      this.registerForm.value.imgLink,
      this.registerForm.value.group,
      this.registerForm.value.email
    )

    if(this.profilesEmail === this.registerForm.value.email) {
      if( !this.profiles.find(profile => profile.email === this.registerForm.value.email) ) {
        this.store.dispatch(new RegistrationActions.AddUser(this.newRegistration));
        this.errorMessage = null;
        this.validRegistration = true;
        this.store.dispatch(new RegistrationActions.StoreUsers());
      } else {
        this.correctEmail = false;
        this.errorMessage = 'Registration with this email has already been done!';
      }
    } else {
      this.correctEmail = false;
      this.errorMessage = 'You are not signed up with this email!';
    }
  }

  canDeactivate(): Observable<boolean> | Promise<boolean> | boolean {
    if(this.validRegistration) {
      return true;
    }
    if(!this.validRegistration) {
      let msg = '';
      this.translateService.get('guardMsg').subscribe(msgs => msg = msgs);
      return confirm(msg);
    } else return;
  }

  ngOnDestroy() {
    if(this.authSub) this.authSub.unsubscribe();
    if(this.registrationSub) this.registrationSub.unsubscribe();
  }

}
