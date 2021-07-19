import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlineTestPanelComponent } from './online-test-panel.component';

describe('OnlineTestPanelComponent', () => {
  let component: OnlineTestPanelComponent;
  let fixture: ComponentFixture<OnlineTestPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnlineTestPanelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OnlineTestPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
