import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/auth/auth.service';
import { Registration } from 'src/app/auth/registration/registration.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit, OnDestroy {
  userProfiles: Registration[] = [];
  userEmail: string = '';
  userProfile: Registration;

  profilesSub: Subscription;

  constructor(public authService: AuthService) { }

  ngOnInit(): void {
    this.authService.user
    .subscribe(data => {
      if(!data) return;
      this.userEmail = data.email;
    });

    this.profilesSub = this.authService.fetchProfiles().subscribe();
    this.userProfiles = this.authService.getProfiles();
    this.userProfile = this.userProfiles.find(dataFromEmail => dataFromEmail.email === this.userEmail);

    // try {
    //   this.userProfile = this.userProfiles.find(dataFromEmail => dataFromEmail.email === this.userEmail);
    // } catch {
    //   if(!this.userProfile) console.error('data ar shemosula');
    // }
  }

  ngOnDestroy() {
    this.profilesSub.unsubscribe();
  }

}
