import { TestBed } from '@angular/core/testing';

import { OlfactoryFamiliesService } from './olfactory-families.service';

describe('OlfactoryFamiliesService', () => {
  let service: OlfactoryFamiliesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OlfactoryFamiliesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
