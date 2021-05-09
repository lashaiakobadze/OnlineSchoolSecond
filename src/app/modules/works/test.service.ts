import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestService {
  isTestMode: boolean = false;

  constructor() { }
}
