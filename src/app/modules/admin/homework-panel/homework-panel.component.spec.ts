import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeworkPanelComponent } from './homework-panel.component';

describe('HomeworkPanelComponent', () => {
  let component: HomeworkPanelComponent;
  let fixture: ComponentFixture<HomeworkPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeworkPanelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeworkPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
