import { TestBed, inject } from '@angular/core/testing';

import { GetExperienceService } from './get-experience.service';

describe('GetExperienceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetExperienceService]
    });
  });

  it('should be created', inject([GetExperienceService], (service: GetExperienceService) => {
    expect(service).toBeTruthy();
  }));
});
