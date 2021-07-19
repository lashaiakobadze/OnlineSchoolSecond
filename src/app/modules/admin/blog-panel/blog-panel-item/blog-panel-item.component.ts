import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { News } from 'src/app/shared/modules/home/news.model';
import { AppValidators } from 'src/app/shared/validators/app-validators';

import * as fromApp from '../../../../store/app.reducer';
import * as AdminActions from '../../store/admin.actions';

@Component({
  selector: 'app-blog-panel-item',
  templateUrl: './blog-panel-item.component.html',
  styleUrls: ['./blog-panel-item.component.scss']
})
export class BlogPanelItemComponent implements OnInit {
  blogForm: FormGroup;
  @Input() blog: News;
  updateMode: boolean;

  constructor(
    private store: Store<fromApp.AppState>
  ) { }


  ngOnInit(): void {
    this.updateMode = false;
    this.initForm(this.blog);
  };

  onDeleteBlog(): void {
    if (confirm('Are you sure?')) {
      const blog = this.blog;
      this.store.dispatch(AdminActions.deleteBlog({ blog }));
      this.store.dispatch(AdminActions.storeBlogs());
      this.blog = null;
    }
  };

  onEditBlog(): void {
    this.updateMode = !this.updateMode;
  };

  onUpdateBlog(): void {
    if (confirm('Are you sure?')) {
      this.updateMode = false;

      const updatedBlog = new News(
        this.blog.id,
        this.blog.date,
        this.blogForm.value.title,
        this.blogForm.value.imgPath,
        this.blogForm.value.info,
      );
      const blog = updatedBlog;

      this.store.dispatch(AdminActions.updateBlog({ blog }));
      this.store.dispatch(AdminActions.storeBlogs());
      this.blog = updatedBlog;
    }
  };

  errors(controlName: string | (string | number)[]) {
    return Object.values(this.get(controlName).errors);
  };

  get(controlName: string | (string | number)[]): AbstractControl {
    return this.blogForm.get(controlName);
  };

  initForm(blog: News) {
    this.blogForm = new FormGroup({
      'title': new FormControl(blog?.title, [AppValidators.required]),
      'imgPath': new FormControl(blog?.imgPath, [AppValidators.required]),
      'info': new FormControl(blog?.info, [AppValidators.required]),
    });
    // this.blogForm = new FormGroup({
    //   'title': new FormControl({ value: blog?.title, disabled: !this.updateMode }, [AppValidators.required]),
    //   'imgPath': new FormControl({ value: blog?.imgPath, disabled: !this.updateMode }, [AppValidators.required]),
    //   'info': new FormControl({ value: blog?.info, disabled: !this.updateMode }, [AppValidators.required]),
    // });
  };
}
