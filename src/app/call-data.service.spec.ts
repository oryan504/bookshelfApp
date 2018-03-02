import { TestBed, inject } from '@angular/core/testing';

import { CallDataService } from './call-data.service';

describe('CallDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CallDataService]
    });
  });

  it('should be created', inject([CallDataService], (service: CallDataService) => {
    expect(service).toBeTruthy();
  }));
});
