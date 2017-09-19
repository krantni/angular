import { TestBed, inject } from '@angular/core/testing';

import { GetSocialMediaService } from './get-social-media.service';

describe('GetSocialMediaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetSocialMediaService]
    });
  });

  it('should be created', inject([GetSocialMediaService], (service: GetSocialMediaService) => {
    expect(service).toBeTruthy();
  }));
});
