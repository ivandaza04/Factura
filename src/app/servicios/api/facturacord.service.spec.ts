import { TestBed } from '@angular/core/testing';

import { FacturacordService } from './facturacord.service';

describe('FacturacordService', () => {
  let service: FacturacordService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FacturacordService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
