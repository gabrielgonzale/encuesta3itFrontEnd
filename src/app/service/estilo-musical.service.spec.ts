import { TestBed } from '@angular/core/testing';

import { EstiloMusicalService } from './estilo-musical.service';

describe('EstiloMusicalService', () => {
  let service: EstiloMusicalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EstiloMusicalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
