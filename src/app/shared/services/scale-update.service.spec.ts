import { TestBed } from '@angular/core/testing';

import { ScaleUpdateService } from './scale-update.service';

describe('ScaleUpdateService', () => {
  let service: ScaleUpdateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ScaleUpdateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
