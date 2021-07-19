import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpLoaderFactory } from 'src/app/app.module';

import { BlogPanelItemComponent } from './blog-panel-item.component';

import * as fromApp from '../../../../store/app.reducer';


describe('BlogPanelItemComponent', () => {
  let component: BlogPanelItemComponent;
  let fixture: ComponentFixture<BlogPanelItemComponent>;
  let  blog = {
    id: '123781238',
    date: new Date().toString(),
    title: 'test',
    imgPath: 'test path',
    info: 'test info',
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogPanelItemComponent ],
      imports: [
        ReactiveFormsModule,
        StoreModule.forRoot(fromApp.appReducer),
        HttpClientModule,
        TranslateModule.forRoot({
          loader: {
            provide: TranslateLoader,
            useFactory: HttpLoaderFactory,
            deps: [ HttpClient ]
          },
          extend: true
        })
      ]
    });

    fixture = TestBed.createComponent(BlogPanelItemComponent);
    component = fixture.componentInstance;
    component.blog = blog;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should input blog item', fakeAsync(() => {
    tick();
    expect(component.blog).not.toBeUndefined();
  }));

  it('should create a form with 3 controls', () => {
    expect(component.blogForm.contains('title')).toBeTruthy();
    expect(component.blogForm.contains('imgPath')).toBeTruthy();
    expect(component.blogForm.contains('info')).toBeTruthy();
  });

  it('should make controls required', () => {
    let controlTitle = component.blogForm.get('title');
    let controlPath = component.blogForm.get('imgPath');
    let controlInfo = component.blogForm.get('info');

    controlTitle.setValue('');
    controlPath.setValue('');
    controlInfo.setValue('');

    expect(controlTitle.valid).toBeFalsy();
    expect(controlPath.valid).toBeFalsy();
    expect(controlInfo.valid).toBeFalsy();
  });

  it('should make controls with default values', () => {
    let controlTitle = component.blogForm.get('title');
    let controlPath = component.blogForm.get('imgPath');
    let controlInfo = component.blogForm.get('info');

    expect(controlTitle.value).toBe(blog.title);
    expect(controlPath.value).toBe(blog.imgPath);
    expect(controlInfo.value).toBe(blog.info);
  });

  it('should switch edit mode, whit click', () => {
    const editBtn = editBlog();

    const editMode = component.updateMode;

    editBtn.triggerEventHandler('click', null);

    expect(component.updateMode).toBe(!editMode);
  });

  it('should delete blog from blogs if the admin confirms deletion', fakeAsync(() => {
    spyOn(window, 'confirm').and.returnValue(true);

    const removeBtn = deleteBlog();

    removeBtn.triggerEventHandler('click', null);

    tick();

    expect(component.blog).toBeNull;
  }));

  it('should NOT call delete blog if the admin cancels', fakeAsync(() => {
    spyOn(window, 'confirm').and.returnValue(false);

    expect(component.blog).not.toBeNull;
  }));

  it('should NOT call update blog if the admin cancels', fakeAsync(() => {
    spyOn(window, 'confirm').and.returnValue(false);

    component.onEditBlog();
    tick();

    expect(component.updateMode).toBe(true);
  }));

  it('should call update blog if the admin confirms deletion', fakeAsync(() => {
    spyOn(window, 'confirm').and.returnValue(true);

    const updateBtn = updateBlog();

    updateBtn.triggerEventHandler('click', null);

    tick();

    expect(component.updateMode).toBe(false);
  }));

  const editBlog = () => fixture.debugElement.query(By.css('.edit'));

  const deleteBlog = () => fixture.debugElement.query(By.css('.delete'));

  const updateBlog = () => fixture.debugElement.query(By.css('.btn-success'));


  let click = (element) => {
    const el: HTMLElement = element.nativeElement;
    el.click();
    fixture.detectChanges();
  }
});
