import { TestBed } from '@angular/core/testing';

import { AppareilsService } from './appareils.service';

describe('AppareilsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AppareilsService = TestBed.get(AppareilsService);
    expect(service).toBeTruthy();
  });
});
