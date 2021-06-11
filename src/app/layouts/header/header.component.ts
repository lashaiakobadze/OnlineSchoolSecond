import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { TranslateService } from '@ngx-translate/core';

import * as fromApp from '../../store/app.reducer';
import * as AuthActions from '../../auth/store/auth.actions';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  isAuthenticated = false;
  lang: string;
  private userSub: Subscription;

  constructor(
    private store: Store<fromApp.AppState>,
    private translateService: TranslateService
  ) { }

  ngOnInit(): void {
    this.lang = localStorage.getItem('lang') || 'en';

    this.userSub = this.store.select('auth').pipe(
      map(userState => userState.user)
    ).subscribe(user => {
      this.isAuthenticated = !!user;
    })
  }

  changeLang(lang){
    localStorage.setItem('lang', lang);
    this.translateService.use(lang);
  }

  onLogout() {
    this.store.dispatch(new AuthActions.Logout());
  }

  ngOnDestroy() {
    if(this.userSub) this.userSub.unsubscribe();
  }

}
