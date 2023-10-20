import { TestBed } from '@angular/core/testing';

import { EncuestaserviceService } from './encuestaservice.service';

describe('EncuestaserviceService', () => {
  let service: EncuestaserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EncuestaserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
