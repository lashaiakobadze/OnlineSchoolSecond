import { Component, ComponentFactoryResolver, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { AlertComponent } from 'src/app/shared/alert/alert.component';
import { PlaceholderDirective } from 'src/app/shared/placeholder/placeholder.directive';

import * as fromApp from '../../store/app.reducer';
import * as AuthActions from '../store/auth.actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  isLoading: boolean;
  error: string = null;
  @ViewChild(PlaceholderDirective, { static: false}) alertHost: PlaceholderDirective;

  private closeSub: Subscription;
  private authSub: Subscription;

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private store: Store<fromApp.AppState>
  ) {}

  ngOnInit(): void {
    this.authSub =  this.store.select('auth').subscribe(authState => {
      this.isLoading = authState.loading;
      this.error = authState.authError;
      if(this.error) {
        this.showErrorAlert(this.error);
      }
    });
  }


  onLogin(form: NgForm) {
    if (!form.valid) {
     return;
    }

    const email = form.value.email;
    const password = form.value.password;
    this.store.dispatch(
      new AuthActions.LoginStart({email: email, password: password})
    );
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
      this.store.dispatch(new AuthActions.ClearError());
    });
  }


  // Deleted Created element from DOM
  ngOnDestroy() {
    if(this.closeSub) {
      this.closeSub.unsubscribe();
    }
    if(this.authSub) {
      this.authSub.unsubscribe();
    }
  }

}
