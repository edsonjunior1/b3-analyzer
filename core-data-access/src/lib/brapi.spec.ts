import { TestBed } from '@angular/core/testing';

import { BrapiService } from './brapi-service';

describe('Brapi', () => {
  let service: BrapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BrapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
