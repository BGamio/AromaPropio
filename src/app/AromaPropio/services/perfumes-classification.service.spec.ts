import { TestBed } from '@angular/core/testing';

import { PerfumesClassificationService } from './perfumes-classification.service';

describe('PerfumesClassificationService', () => {
  let service: PerfumesClassificationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PerfumesClassificationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
