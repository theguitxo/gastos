import { TestBed, inject } from '@angular/core/testing';

import { DateNativeAdapterService } from './date-native-adapter.service';

describe('DateNativeAdapterService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DateNativeAdapterService]
    });
  });

  it('should be created', inject([DateNativeAdapterService], (service: DateNativeAdapterService) => {
    expect(service).toBeTruthy();
  }));
});
