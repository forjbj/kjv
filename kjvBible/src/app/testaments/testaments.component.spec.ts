import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TestamentsComponent } from './testaments.component';

describe('TestamentComponent', () => {
  let component: TestamentsComponent;
  let fixture: ComponentFixture<TestamentsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TestamentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestamentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
