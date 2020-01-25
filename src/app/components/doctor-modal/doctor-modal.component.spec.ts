import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorModalComponent } from './doctor-modal.component';

describe('DoctorModalComponent', () => {
  let component: DoctorModalComponent;
  let fixture: ComponentFixture<DoctorModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoctorModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctorModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
