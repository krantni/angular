import { TestBed, inject } from '@angular/core/testing';

import { GetEducationService } from './get-education.service';

describe('GetEducationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetEducationService]
    });
  });

  it('should be created', inject([GetEducationService], (service: GetEducationService) => {
    expect(service).toBeTruthy();
  }));
});
