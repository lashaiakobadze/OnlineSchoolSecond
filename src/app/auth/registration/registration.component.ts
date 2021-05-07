import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { Registration } from './registration.model';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  registerForm: FormGroup;
  correctEmail: boolean = true;
  errorMessage: string = null;
  profiles: Registration[];
  profilesEmail: string;
  newRegistration: Registration;

  constructor(
    public authService: AuthService,
    private router: Router,
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


      this.authService.user
      .subscribe(data => {
        if(!data) return 'user is null';
        this.profilesEmail = data.email;
      });

      this.authService.fetchProfiles().subscribe();
      this.profiles = this.authService.getProfiles();
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

    if(this.profilesEmail == this.registerForm.value.email) {
      if( !this.profiles.find(profile => profile.email == this.registerForm.value.email) ) {
        this.profiles.push(this.newRegistration);
        this.authService.addProfile(this.profiles);
        this.registerForm.reset();
        this.errorMessage = null;
        this.router.navigate(['./home']);
      } else {
        this.correctEmail = false;
        this.errorMessage = 'Registration with this email has already been done!';
      }
    } else {
      this.correctEmail = false;
      this.errorMessage = 'You are not signed up with this email!';
    }
  }


}
