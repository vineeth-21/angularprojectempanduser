import { TestBed } from '@angular/core/testing';

import { HttppostService } from './httppost.service';

describe('HttppostService', () => {
  let service: HttppostService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttppostService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
