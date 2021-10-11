import { TestBed } from '@angular/core/testing';

import { OverviewResolverService } from './overview-resolver.service';

describe('OverviewResolverService', () => {
  let service: OverviewResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OverviewResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
