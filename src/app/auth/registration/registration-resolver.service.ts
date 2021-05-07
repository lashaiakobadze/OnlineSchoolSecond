import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Resolve } from '@angular/router';
import { AuthService } from '../auth.service';
import { Registration } from './registration.model';

@Injectable({
  providedIn: 'root'
})
export class RegistrationResolverService implements Resolve<Registration[]> {

  constructor(private authService: AuthService) { }

  resolve(router: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const profile = this.authService.getProfiles();

    // To prevent update bugs
    if(profile.length === 0) {
      return this.authService.fetchProfiles();
    } else {
      return profile;
    }
  }
}

