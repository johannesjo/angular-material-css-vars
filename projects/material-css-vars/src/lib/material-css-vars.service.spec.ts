import {TestBed} from '@angular/core/testing';

import {MaterialCssVarsService} from './material-css-vars.service';
import {MATERIAL_CSS_VARS_CFG} from '../mat-css-config-token.const';

describe('MaterialCssVarsService', () => {
  let service: MaterialCssVarsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide: MATERIAL_CSS_VARS_CFG,
          useValue: {
            primary: '#123456',
            accent: '#654321',
            warn: '#FF0000',
            isDarkTheme: true,
          },
        }
      ],
    });
    service = TestBed.inject(MaterialCssVarsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('constructor', () => {
    it('should apply the config from injection token', () => {
      expect(service.cfg.primary).toEqual('#123456');
    });

    it('should set default values', () => {
      expect(service.cfg.darkThemeClass).toEqual('isDarkTheme');
    });

    it('should set accent color from injection token config', () => {
      expect(service.accent).toEqual('#654321');
    });

    it('should set warn color from injection token config', () => {
      expect(service.warn).toEqual('#FF0000');
    });

    it('should apply dark mode from injection token config', () => {
      expect(service.isDarkTheme).toBeTrue();
    });
  });
});
