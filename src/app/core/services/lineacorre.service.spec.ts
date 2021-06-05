import { TestBed } from '@angular/core/testing';

import { LineacorreService } from './lineacorre.service';

describe('LineacorreService', () => {
  let service: LineacorreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LineacorreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
