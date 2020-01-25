import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorUpdateModalComponent } from './doctor-update-modal.component';

describe('DoctorUpdateModalComponent', () => {
  let component: DoctorUpdateModalComponent;
  let fixture: ComponentFixture<DoctorUpdateModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoctorUpdateModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctorUpdateModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
