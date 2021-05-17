import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TestamentComponent } from './testament.component';

describe('TestamentComponent', () => {
  let component: TestamentComponent;
  let fixture: ComponentFixture<TestamentComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TestamentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestamentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
