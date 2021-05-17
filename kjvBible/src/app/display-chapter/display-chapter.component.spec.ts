import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DisplayChapterComponent } from './display-chapter.component';

describe('DisplayChapterComponent', () => {
  let component: DisplayChapterComponent;
  let fixture: ComponentFixture<DisplayChapterComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayChapterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayChapterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
