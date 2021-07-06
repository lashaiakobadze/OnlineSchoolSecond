import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


import { LoaderService } from 'src/app/shared/components/loader/loader.service';
import { Contact } from './contact.model';

import { environment } from 'src/environments/environment';
const Url = environment.firebaseConfig.databaseURL;

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(
    private http: HttpClient,
    private loaderService: LoaderService,
  ) { }

  getContacts(): Observable<Contact[]> {
    return this.http
    .get<Contact[]>(
      `${Url}/contacts.json`
    ).pipe(this.loaderService.useLoader);
  };

  storeContact(contactData: Contact[]): Observable<Contact[]> {
    return this.http
    .put<Contact[]>(
      `${Url}/contacts.json`,
      contactData
    ).pipe(this.loaderService.useLoader)
  }
}
