import {TestBed} from '@angular/core/testing';

import {MaterialCssVarsService} from './material-css-vars.service';

describe('MaterialCssVarsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MaterialCssVarsService = TestBed.get(MaterialCssVarsService);
    expect(service).toBeTruthy();
  });
});
