import { TestBed } from '@angular/core/testing';

import { NgIfResponsiveService } from './ng-if-responsive.service';

describe('NgIfResponsiveService', () => {
  let service: NgIfResponsiveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgIfResponsiveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
