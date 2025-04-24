import { TestBed } from '@angular/core/testing';

import { AdminproductviewService } from './adminproductview.service';

describe('AdminproductviewService', () => {
  let service: AdminproductviewService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminproductviewService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
