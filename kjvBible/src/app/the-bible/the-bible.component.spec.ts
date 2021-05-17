import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TheBibleComponent } from './the-bible.component';

describe('TheBibleComponent', () => {
  let component: TheBibleComponent;
  let fixture: ComponentFixture<TheBibleComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TheBibleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TheBibleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
