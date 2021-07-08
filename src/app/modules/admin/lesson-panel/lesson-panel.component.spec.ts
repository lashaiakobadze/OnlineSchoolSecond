import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LessonPanelComponent } from './lesson-panel.component';

describe('LessonPanelComponent', () => {
  let component: LessonPanelComponent;
  let fixture: ComponentFixture<LessonPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LessonPanelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LessonPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
