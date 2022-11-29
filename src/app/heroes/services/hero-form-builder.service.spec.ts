import { TestBed } from '@angular/core/testing';

import { HeroFormBuilderService } from './hero-form-builder.service';

describe('HeroFormBuilderService', () => {
  let service: HeroFormBuilderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HeroFormBuilderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
