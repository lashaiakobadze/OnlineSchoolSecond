import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  constructor(
    public authService: AuthService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  // Sing up user on base API
  onSignUp(form: NgForm) {
    if (!form.valid) {
     return;
    }

    const email = form.value.email;
    const password = form.value.password;
    this.authService.isLoading = true;

    this.authService.authObs = this.authService.signUp(email, password);

    this.authService.authObs.subscribe(
      resData => {
        // console.log(resData);
        this.router.navigate(['../registration'], {relativeTo: this.route});
        this.authService.isLoading = false;
      },
      errorMessage => {
        this.authService.error = errorMessage;
        this.authService.isLoading = false;
      }
    );
  }

}
