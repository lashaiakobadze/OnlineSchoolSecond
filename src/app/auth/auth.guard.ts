import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { map, take } from "rxjs/operators";
import { AuthService } from "./auth.service";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private authService: AuthService,
    private router: Router) {}

  // Protecting authentication routes
  canActivate(route: ActivatedRouteSnapshot, router: RouterStateSnapshot):
   boolean | UrlTree | Promise<boolean | UrlTree> | Observable<boolean | UrlTree> {
    return this.authService.user.pipe(
      take(1), // Add the take operator because automatically unsubscribe and Avoid bugs.
      map(user => {
      let isAuth = !!user; // I will Change this options for authenticated rout
      if(isAuth) {
        return true;
      }
      this.router.navigate(['/home']);
    }));
  }
}
