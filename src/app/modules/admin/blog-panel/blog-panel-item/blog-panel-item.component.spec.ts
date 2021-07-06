import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogPanelItemComponent } from './blog-panel-item.component';

describe('BlogPanelItemComponent', () => {
  let component: BlogPanelItemComponent;
  let fixture: ComponentFixture<BlogPanelItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogPanelItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogPanelItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
