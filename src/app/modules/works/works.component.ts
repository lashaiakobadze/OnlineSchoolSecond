import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import * as fromApp from '../../store/app.reducer';
import * as HomeworkActions from './store-homework/homework.actions';
import * as TestActions from './store-test/test.actions';

@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.scss']
})
export class WorksComponent implements OnInit {
  constructor(private store: Store<fromApp.AppState>) { }

  ngOnInit(): void {
  }

  onNavigateHomework() {
   this.store.dispatch(new HomeworkActions.GetHomeworkModeBack());
  }

  onNavigateTest() {
    this.store.dispatch(new TestActions.GetTestModeBack());
  }

}
