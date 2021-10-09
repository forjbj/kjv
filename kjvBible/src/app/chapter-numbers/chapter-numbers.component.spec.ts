import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChapterNumbersComponent } from './chapter-numbers.component';

describe('ChapterNumbersComponent', () => {
  let component: ChapterNumbersComponent;
  let fixture: ComponentFixture<ChapterNumbersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChapterNumbersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChapterNumbersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
