import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup } from '@angular/forms';
import { Observable, Subscription } from 'rxjs';
import { CanComponentDeactivate } from '../../shared/guards/registration.guard';
import { Store } from '@ngrx/store';
import { TranslateService } from '@ngx-translate/core';


import { AppValidators } from 'src/app/shared/validators/app-validators';
import { ImageService } from 'src/app/shared/components/image-upload/image-upload.service';
import { Registration } from '../../shared/auth/registration.model';
import { ErrorService } from 'src/app/shared/services/error.service';
import { RegistrationService } from 'src/app/shared/auth/registration.service';

import * as fromApp from '../../store/app.reducer';
import * as RegistrationActions from './store/registration.actions';



@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit, CanComponentDeactivate, OnDestroy {
  registerForm: FormGroup;
  @Input() imgFile: File;

  userId: string;
  profilesEmail: string;
  registrationForm: Registration;
  validRegistration: boolean = false;
  curRegister: Registration = null;

  authSub: Subscription;
  registrationSub: Subscription;

  constructor(
    private store: Store<fromApp.AppState>,
    private translateService: TranslateService,
    private imageService: ImageService,
    private errorService: ErrorService,
    private registrationService: RegistrationService
  ) { }

  ngOnInit(): void {
    this.store.dispatch(new RegistrationActions.FetchUsers());
    this.registrationService.getProfiles();
    this.authSub = this.store.select('auth')
    .subscribe(data => {
      if (!data) return 'user is null';
      this.profilesEmail = data.user.email;
      this.userId = data.user?.id;
    });

    this.registrationSub = this.store.select('registration')
    .subscribe(usersData => {
      this.curRegister = usersData.curUserRegistration;
    });
    this.initForm(this.curRegister);
  }

  onUpdate(): void {
    this.registrationForm = new Registration(
      this.registerForm.value.firstName,
      this.registerForm.value.lastName,
      this.registerForm.value.personalNumber,
      this.registerForm.value.phone,
      this.registerForm.value.group,
      this.registerForm.value.email,
      this.userId
    );

    if (this.profilesEmail === this.registerForm.value.email) {
      if (this.curRegister) {
        this.store.dispatch(new RegistrationActions.RegistrationEditStart());
      }
      this.store.dispatch(new RegistrationActions.AddUser(this.registrationForm));
      this.validRegistration = true;
      this.store.dispatch(new RegistrationActions.StoreUsers());
      this.store.dispatch(new RegistrationActions.CurRegistration(this.registrationForm));
      this.imageService.uploadImage(this.imgFile, this.userId);
    } else {
      this.errorService.errorMessage = 'You are not signed up with this email!';
    }
  }

  getImgFile($event) {
    this.imgFile = $event;
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

  errors(controlName: string | (string | number)[]) {
    return Object.values(this.get(controlName).errors);
  }

  get(controlName: string | (string | number)[]): AbstractControl {
    return this.registerForm.get(controlName);
  }

  initForm(profile: Registration = null) {
    this.registerForm = new FormGroup({
      'firstName': new FormControl(profile?.firstName || null, [AppValidators.required]),
      'lastName': new FormControl(profile?.lastName || null, [AppValidators.required]),
      'personalNumber': new FormControl(profile?.personalNumber || null, [
        AppValidators.required,
        AppValidators.minLength(11),
        AppValidators.maxLength(11)
      ]),
      'phone': new FormControl(profile?.phone || null, [AppValidators.required]),
      'group': new FormControl(profile?.group || null, [AppValidators.required]),
      'email': new FormControl(profile?.email || null, [
        AppValidators.required,
        AppValidators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?", "ემაილის მისამართის"),
        AppValidators.cannotContainSpace,
      ]),
    });
  }

  ngOnDestroy() {
    this.authSub?.unsubscribe();
    this.registrationSub?.unsubscribe();
  }
}
