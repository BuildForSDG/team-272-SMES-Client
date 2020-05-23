import { TestBed } from '@angular/core/testing';

import { SmesDashboardService } from './smes-dashboard.service';

describe('SmesDashboardService', () => {
  let service: SmesDashboardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SmesDashboardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
