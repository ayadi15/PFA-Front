import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SendReportToAdminModalComponent } from './send-report-to-admin-modal.component';

describe('SendReportToAdminModalComponent', () => {
  let component: SendReportToAdminModalComponent;
  let fixture: ComponentFixture<SendReportToAdminModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SendReportToAdminModalComponent]
    });
    fixture = TestBed.createComponent(SendReportToAdminModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
