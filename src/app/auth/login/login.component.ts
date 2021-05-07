import { Component, ComponentFactoryResolver, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AlertComponent } from 'src/app/shared/alert/alert.component';
import { PlaceholderDirective } from 'src/app/shared/placeholder/placeholder.directive';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  @ViewChild(PlaceholderDirective, { static: false}) alertHost: PlaceholderDirective;
  private closeSub: Subscription;

  constructor(
    public authService: AuthService,
    private router: Router,
    private componentFactoryResolver: ComponentFactoryResolver) {}

  ngOnInit(): void {
  }

  onLogin(form: NgForm) {
    if (!form.valid) {
     return;
    }

    const email = form.value.email;
    const password = form.value.password;
    this.authService.isLoading = true;

    this.authService.authObs = this.authService.login(email, password);

    this.authService.authObs.subscribe(
      resData => {
        // console.log(resData);
        this.router.navigate(['/home']);
        this.authService.isLoading = false;
      },
      errorMessage => {
        this.authService.error = errorMessage;
        this.showErrorAlert(errorMessage);
        this.authService.isLoading = false;
      }
    );
  }


  onHandleError() {
    this.authService.error = null;
  }


  // Method for create dynamic DOM elements
  private showErrorAlert(message: string) {
    // const alertCmp = new AlertComponent(); // This method don't work for angular
    const alertCmpFactory = this.componentFactoryResolver.resolveComponentFactory(AlertComponent);
    const hostViewContainerRef = this.alertHost.viewContainerRef;
    hostViewContainerRef.clear();

    const componentRef = hostViewContainerRef.createComponent(alertCmpFactory);

    componentRef.instance.message = message;
    this.closeSub = componentRef.instance.closeAlert.subscribe(() => {
      this.closeSub.unsubscribe();
      hostViewContainerRef.clear();
      this.onHandleError();
    });
  }


  // Deleted Created element from DOM
  ngOnDestroy() {
    if(this.closeSub) {
      this.closeSub.unsubscribe();
    }
  }

}
