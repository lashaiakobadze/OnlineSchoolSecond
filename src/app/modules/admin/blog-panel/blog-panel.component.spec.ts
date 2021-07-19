import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { RouterOutlet } from '@angular/router';

import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { MockStore, provideMockStore } from "@ngrx/store/testing";
import { By } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { EffectsModule } from '@ngrx/effects';
import { AdminEffects } from '../store/admin.effects';

import { HttpLoaderFactory } from 'src/app/app.module';
import { News } from 'src/app/shared/modules/home/news.model';
import { BlogPanelComponent } from './blog-panel.component';

import { AdminState } from '../store/state';
import * as fromApp from '../../../store/app.reducer';
import * as AdminActions from '../store/admin.actions';


describe('BlogPanelComponent', () => {
  let component: BlogPanelComponent;
  let fixture: ComponentFixture<BlogPanelComponent>;
  let store: MockStore<AdminState>;

  let blog = {
    id: '123781238',
    date: new Date().toString(),
    title: 'test',
    imgPath: 'test path',
    info: 'test info',
  };

  const initialState = {
    messages: [],
    blogs: [
      blog
    ],
    homeworks: [],
    tests: [],
    curTest: null,
    curHomework: null,
    curLesson: null,
  };

  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [BlogPanelComponent],
      imports: [
        ReactiveFormsModule,
        StoreModule.forRoot(fromApp.appReducer),
        HttpClientModule,
        RouterTestingModule.withRoutes([]),
        TranslateModule.forRoot({
          loader: {
            provide: TranslateLoader,
            useFactory: HttpLoaderFactory,
            deps: [HttpClient]
          },
          extend: true
        }),
        EffectsModule.forRoot([ AdminEffects ]),
      ],
      // providers: [provideMockStore({ initialState })],
    });

    fixture = TestBed.createComponent(BlogPanelComponent);
    component = fixture.debugElement.componentInstance;
    // store = TestBed.inject(MockStore);

    fixture.detectChanges();

    // spyOn(store, 'dispatch').and.callFake(() => {});
  });


  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return current date', () => {
    component.curDate;

    expect(component.curDate).not.toBeUndefined();
  });

  it('should return id', () => {
    component.curId;

    expect(component.curId).not.toBeUndefined();
  });

  it('should create a form with 3 controls', () => {
    expect(component.blogPanelForm.contains('title')).toBeTruthy();
    expect(component.blogPanelForm.contains('imgPath')).toBeTruthy();
    expect(component.blogPanelForm.contains('info')).toBeTruthy();
  });

  it('should make controls required', () => {
    let controlTitle = component.blogPanelForm.get('title');
    let controlPath = component.blogPanelForm.get('imgPath');
    let controlInfo = component.blogPanelForm.get('info');

    controlTitle.setValue('');
    controlPath.setValue('');
    controlInfo.setValue('');

    expect(controlTitle.valid).toBeFalsy();
    expect(controlPath.valid).toBeFalsy();
    expect(controlInfo.valid).toBeFalsy();
  });

  it('should input blogs', fakeAsync(() => {
    tick();

    expect(component.blogs).not.toBe([]);
  }));

  it('should call add new blog if the admin confirms deletion', fakeAsync(() => {
    spyOn(window, 'confirm').and.returnValue(true);

    const addBtn = addBlog();

    addBtn.triggerEventHandler('click', null);

    tick();

    expect(component.blogs.length).not.toBeUndefined();
  }));

  it('should NOT call add new blog if the admin cancel', () => {
    spyOn(window, 'confirm').and.returnValue(false);

    expect(component.blogs.length).not.toBeUndefined();
  });

  it('should have a selector app-blog-panel-item', () => {
    let debugElement = fixture.debugElement.queryAll(By.css('app-blog-panel-item'));

    let index = debugElement.findIndex(de => de.properties['app-blog-panel-item'] === 'app-blog-panel-item');

    expect(debugElement).not.toBeNull();
  });

  it('should have a router outlet', () => {
    let de = fixture.debugElement.query(By.directive(RouterOutlet));

    expect(de).not.toBeNull();
  });


  const addBlog = () => fixture.debugElement.query(By.css('.btn-success'));
});

