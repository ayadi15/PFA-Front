import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchedulesBigComponent } from './schedules-big.component';

describe('SchedulesBigComponent', () => {
  let component: SchedulesBigComponent;
  let fixture: ComponentFixture<SchedulesBigComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SchedulesBigComponent]
    });
    fixture = TestBed.createComponent(SchedulesBigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
