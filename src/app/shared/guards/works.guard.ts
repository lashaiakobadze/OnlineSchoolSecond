import { Observable } from 'rxjs';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';

export interface CanDeactivateComponent {
  canDeactivate(): Promise<boolean> | Observable<boolean> | boolean;
}

@Injectable({
  providedIn: 'root'
})
export class CanDeactivateGuardWorks implements CanDeactivate<CanDeactivateComponent> {
  canDeactivate(
    component: CanDeactivateComponent,
    currentRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
    ): Promise<boolean> | Observable<boolean> | boolean {
    return component.canDeactivate();
  }
}

