import { TestBed } from '@angular/core/testing';

import { CharstatsService } from './charstats.service';

describe('CharstatsService', () => {
  let service: CharstatsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CharstatsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
