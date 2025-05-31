import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeePatientAdmissionHistoryComponent } from './see-patient-admission-history.component';

describe('SeePatientAdmissionHistoryComponent', () => {
  let component: SeePatientAdmissionHistoryComponent;
  let fixture: ComponentFixture<SeePatientAdmissionHistoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SeePatientAdmissionHistoryComponent]
    });
    fixture = TestBed.createComponent(SeePatientAdmissionHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
