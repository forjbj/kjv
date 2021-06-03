import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateToasterComponent } from './update-toaster.component';

describe('UpdateToasterComponent', () => {
  let component: UpdateToasterComponent;
  let fixture: ComponentFixture<UpdateToasterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateToasterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateToasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
