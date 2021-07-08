import { Component, OnDestroy, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { AppValidators } from 'src/app/shared/validators/app-validators';

import { News } from '../../../shared/modules/home/news.model';

import * as fromApp from '../../../store/app.reducer';
import * as AdminActions from '../store/admin.actions';

@Component({
  selector: 'app-blog-panel',
  templateUrl: './blog-panel.component.html',
  styleUrls: ['./blog-panel.component.scss']
})
export class BlogPanelComponent implements OnInit, OnDestroy {
  blogPanelForm: FormGroup;
  blogs: News[] = [];
  blogId: string;
  blogDate: string;

  blogsSub: Subscription;

  constructor(
    private store: Store<fromApp.AppState>
  ) { }

  get curDate() {
    const d = new Date();
    return `${('0' + d.getDate()).slice(-2)}/${('0' + (d.getMonth() + 1)).slice(-2)}/${d.getFullYear()}`;
  }

  get curId() {
    const d = new Date();
    return (Date.now() + '').slice(-10);
  }

  ngOnInit(): void {
    this.initForm();
    this.store.dispatch(AdminActions.fetchBlogs());
    this.blogsSub = this.store.select('admin').subscribe(adminData => {
      this.blogs = adminData.blogs;
    });
  }

  onSubmitBlog(): void {
    this.blogDate = this.curDate;
    this.blogId = this.curId;

    const blog = new News(
      this.blogId,
      this.blogDate,
      this.blogPanelForm.value.title,
      this.blogPanelForm.value.imgPath,
      this.blogPanelForm.value.info,
    );

    this.store.dispatch(AdminActions.addNewBlog({ blog }));
    this.store.dispatch(AdminActions.storeBlogs());
    this.blogPanelForm.reset();
  };

  errors(controlName: string | (string | number)[]) {
    return Object.values(this.get(controlName).errors);
  }

  get(controlName: string | (string | number)[]): AbstractControl {
    return this.blogPanelForm.get(controlName);
  }

  initForm() {
    this.blogPanelForm = new FormGroup({
      'title': new FormControl(null, [AppValidators.required]),
      'imgPath': new FormControl(null, [AppValidators.required]),
      'info': new FormControl(null, [AppValidators.required]),
    });
  };

  ngOnDestroy(): void {
    this.blogsSub?.unsubscribe();
  }

}
