import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentHomeworkComponent } from './current-homework.component';

describe('CurrentHomeworkComponent', () => {
  let component: CurrentHomeworkComponent;
  let fixture: ComponentFixture<CurrentHomeworkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurrentHomeworkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentHomeworkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
