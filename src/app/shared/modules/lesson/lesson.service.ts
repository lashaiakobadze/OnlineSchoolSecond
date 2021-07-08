import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


import { CurrentLesson } from './current-lessen.model';

import { environment } from 'src/environments/environment';
import { LoaderService } from '../../components/loader/loader.service';
const Url = environment.firebaseConfig.databaseURL;

@Injectable({
  providedIn: 'root'
})
export class LessonService {

  constructor(
    private http: HttpClient,
    private loaderService: LoaderService
  ) { }

  getCurrentLesson(): Observable<CurrentLesson> {
    return this.http
      .get<CurrentLesson>(
        `${Url}/currentLesson.json`
      ).pipe(this.loaderService.useLoader);
  };
}
