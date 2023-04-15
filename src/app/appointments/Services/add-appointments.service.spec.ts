import { TestBed } from '@angular/core/testing';

import { AddAppointmentsService } from './add-appointments.service';

describe('AddAppointmentsService', () => {
  let service: AddAppointmentsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddAppointmentsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
