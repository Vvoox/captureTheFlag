import { TestBed } from '@angular/core/testing';

import { CTFServicesService } from './ctfservices.service';

describe('CTFServicesService', () => {
  let service: CTFServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CTFServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
