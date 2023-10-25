import { TestBed } from "@angular/core/testing";

import { MaterialCssVarsService } from "./material-css-vars.service";
import { MATERIAL_CSS_VARS_CFG } from "../mat-css-config-token.const";
import { Renderer2, RendererStyleFlags2 } from "@angular/core";
import { MatCssPalettePrefix, MaterialCssVariables } from "./model";
import { TinyColor } from "@ctrl/tinycolor";

describe("MaterialCssVarsService", () => {
  let service: MaterialCssVarsService;
  let renderer: Renderer2;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide: MATERIAL_CSS_VARS_CFG,
          useValue: {
            primary: "#123456",
            accent: "#654321",
            warn: "#FF0000",
            isDarkTheme: true,
          },
        },
      ],
    });
    service = TestBed.inject(MaterialCssVarsService);
    renderer = service["renderer"];
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });

  describe("constructor", () => {
    it("should apply the config from injection token", () => {
      expect(service.cfg.primary).toEqual("#123456");
    });

    it("should set default values", () => {
      expect(service.cfg.darkThemeClass).toEqual("isDarkTheme");
    });

    it("should set accent color from injection token config", () => {
      expect(service.accent).toEqual("#654321");
    });

    it("should set warn color from injection token config", () => {
      expect(service.warn).toEqual("#FF0000");
    });

    it("should apply dark mode from injection token config", () => {
      expect(service.isDarkTheme).toBeTrue();
    });
  });

  describe("setPrimaryColor", () => {
    it("should set the primary color hex value", () => {
      service.setPrimaryColor("#1144aa");

      expect(service.primary).toEqual("#1144aa");
    });

    it("should update the CSS variables", () => {
      const spy = spyOn(renderer, "setStyle");
      service.setPrimaryColor("#1144aa");

      expect(spy).toHaveBeenCalledWith(
        jasmine.anything(),
        "--palette-primary-500",
        "rgb(17, 68, 170)",
        RendererStyleFlags2.DashCase,
      );
    });
  });

  describe("setAccentColor", () => {
    it("should set the accent color hex value", () => {
      service.setAccentColor("#11aa44");

      expect(service.accent).toEqual("#11aa44");
    });

    it("should update the CSS variables", () => {
      const spy = spyOn(renderer, "setStyle");
      service.setAccentColor("#11aa44");

      expect(spy).toHaveBeenCalledWith(
        jasmine.anything(),
        "--palette-accent-500",
        "rgb(17, 170, 68)",
        RendererStyleFlags2.DashCase,
      );
    });
  });

  describe("setWarnColor", () => {
    it("should set the warn color hex value", () => {
      service.setWarnColor("#aa1144");

      expect(service.warn).toEqual("#aa1144");
    });

    it("should update the CSS variables", () => {
      const spy = spyOn(renderer, "setStyle");
      service.setWarnColor("#aa1144");

      expect(spy).toHaveBeenCalledWith(
        jasmine.anything(),
        "--palette-warn-500",
        "rgb(170, 17, 68)",
        RendererStyleFlags2.DashCase,
      );
    });
  });

  it("should set a variable", () => {
    const spy = spyOn(renderer, "setStyle");
    service.setVariable(MaterialCssVariables.DarkAccentText, "rgb(0, 0, 0)");

    expect(spy).toHaveBeenCalledWith(
      jasmine.anything(),
      "--dark-accent-text",
      "rgb(0, 0, 0)",
      RendererStyleFlags2.DashCase,
    );
  });

  it("should enable dark theme", () => {
    service.setDarkTheme(true);

    expect(document.body.classList).toContain("isDarkTheme");
    expect(document.body.classList).not.toContain("isLightTheme");
  });

  it("should enable light theme", () => {
    service.setDarkTheme(false);

    expect(document.body.classList).toContain("isLightTheme");
    expect(document.body.classList).not.toContain("isDarkTheme");
  });

  describe("setAutoContrastEnabled", () => {
    it("should enable auto contrast", () => {
      service.setAutoContrastEnabled(true);

      expect(service.isAutoContrast).toBeTrue();
    });

    it("should disable auto contrast", () => {
      service.setAutoContrastEnabled(false);

      expect(service.isAutoContrast).toBeFalse();
    });

    it("should set primary color contrast", () => {
      const spy = spyOn(service, "setContrastColorThresholdPrimary");
      service.setAutoContrastEnabled(false);

      expect(spy).toHaveBeenCalledTimes(1);
    });

    it("should set accent color contrast", () => {
      const spy = spyOn(service, "setContrastColorThresholdAccent");
      service.setAutoContrastEnabled(false);

      expect(spy).toHaveBeenCalledTimes(1);
    });

    it("should set warn color contrast", () => {
      const spy = spyOn(service, "setContrastColorThresholdWarn");
      service.setAutoContrastEnabled(false);

      expect(spy).toHaveBeenCalledTimes(1);
    });
  });

  describe("setContrastColorThreshold", () => {
    it("should do nothing when auto contrast is enabled", () => {
      service.isAutoContrast = true;
      const spy = spyOn(renderer, "setStyle");
      service.setContrastColorThreshold("50", MatCssPalettePrefix.Primary);

      expect(spy).not.toHaveBeenCalled();
    });
  });

  describe("setAlternativeColorAlgorithm", () => {
    it("should change the isAlternativeColorAlgorithm variable", () => {
      service.setAlternativeColorAlgorithm(true);

      expect(service.cfg.isAlternativeColorAlgorithm).toBeTrue();
    });
  });

  describe("_getContrastColorVar", () => {
    it("should return obvious dark contrast color choice", () => {
      const color = new TinyColor("#111111");

      expect(service["_getContrastColorVar"](color)).toBe(
        MaterialCssVarsService["LIGHT_TEXT_VAR"],
      );
    });

    it("should return obvious light contrast color choice", () => {
      const color = new TinyColor("#eeeeee");

      expect(service["_getContrastColorVar"](color)).toBe(
        MaterialCssVarsService["DARK_TEXT_VAR"],
      );
    });

    it("should return the best contrast in edge cases", () => {
      const color = new TinyColor("#f0002f");

      expect(service["_getContrastColorVar"](color)).toBe(
        MaterialCssVarsService["DARK_TEXT_VAR"],
      );
    });
  });
});
