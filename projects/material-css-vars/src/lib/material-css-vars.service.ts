import {Inject, Injectable, Renderer2, RendererFactory2, RendererStyleFlags2} from '@angular/core';
import {Numberify, RGBA, TinyColor} from '@ctrl/tinycolor';
import {
  HueValue,
  MatCssHueColorContrastMapItem,
  MatCssHueColorMapItem,
  MatCssPalettePrefix,
  MaterialCssVariables,
  MaterialCssVariablesConfig
} from './model';
import {DOCUMENT} from '@angular/common';
import {DEFAULT_MAT_CSS_CFG} from './default-cfg.const';
import {MATERIAL_CSS_VARS_CFG} from '../mat-css-config-token.const';

interface CssVariable {
  name: string;
  val: string;
}

interface Color {
  rgb: Numberify<RGBA>;
  isLight: boolean;
}

// @see: https://github.com/angular/angular/issues/20351
/** @dynamic */
@Injectable({
  providedIn: 'root'
})
export class MaterialCssVarsService {
  private static CONTRAST_PREFIX = 'contrast-';
  private static DARK_TEXT_VAR = '--dark-primary-text';
  private static LIGHT_TEXT_VAR = '--light-primary-text';
  // This should be readonly from the outside
  cfg: MaterialCssVariablesConfig;
  primary = '#03a9f4';
  accent = '#e91e63';
  warn = '#f44336';
  isDarkTheme = false; // ToDo: make this attribute optional in next major version
  contrastColorThresholdPrimary: HueValue = '400';
  contrastColorThresholdAccent: HueValue = '400';
  contrastColorThresholdWarn: HueValue = '400';
  isAutoContrast = false;
  private renderer: Renderer2;
  private ROOT: HTMLElement;

  constructor(
    rendererFactory: RendererFactory2,
    @Inject(DOCUMENT) private document: Document,
    @Inject(MATERIAL_CSS_VARS_CFG) cfg: MaterialCssVariablesConfig,
  ) {
    this.renderer = rendererFactory.createRenderer(null, null);
    this.ROOT = this.document.documentElement;

    this.cfg = {
      ...DEFAULT_MAT_CSS_CFG,
      ...cfg,
    };
    this.isAutoContrast = this.cfg.isAutoContrast;

    if (typeof this.cfg.isDarkTheme === 'boolean') {
      this.setDarkTheme(this.cfg.isDarkTheme);
    }
    if (this.cfg.primary) {
      this.setPrimaryColor(this.cfg.primary);
    }
    if (this.cfg.accent) {
      this.setAccentColor(this.cfg.accent);
    }
    if (this.cfg.warn) {
      this.setWarnColor(this.cfg.warn);
    }
  }

  setPrimaryColor(hex: string) {
    this.primary = hex;
    const varPrefix = MatCssPalettePrefix.Primary;
    const stylePrimary = this._computePaletteColors(varPrefix, this.primary);
    this._setStyle(stylePrimary);

    if (this.isAutoContrast) {
      this._recalculateAndSetContrastColor(varPrefix);
    }
  }

  setAccentColor(hex: string) {
    this.accent = hex;
    const varPrefix = MatCssPalettePrefix.Accent;
    const styleAccent = this._computePaletteColors(varPrefix, this.accent);
    this._setStyle(styleAccent);

    if (this.isAutoContrast) {
      this._recalculateAndSetContrastColor(varPrefix);
    }
  }

  setWarnColor(hex: string) {
    this.warn = hex;
    const varPrefix = MatCssPalettePrefix.Warn;
    const styleWarn = this._computePaletteColors(varPrefix, this.warn);
    this._setStyle(styleWarn);

    if (this.isAutoContrast) {
      this._recalculateAndSetContrastColor(varPrefix);
    }
  }

  setVariable(cssVarName: MaterialCssVariables, value: string) {
    this._setStyle([{
      name: cssVarName,
      val: value,
    }]);
  }

  setDarkTheme(isDark: boolean) {
    if (isDark) {
      this.document.body.classList.remove(this.cfg.lightThemeClass);
      this.document.body.classList.add(this.cfg.darkThemeClass);
    } else {
      this.document.body.classList.remove(this.cfg.darkThemeClass);
      this.document.body.classList.add(this.cfg.lightThemeClass);
    }
    this.isDarkTheme = isDark;
  }

  setAutoContrastEnabled(val: boolean) {
    this.isAutoContrast = val;
    if (val) {
      this._recalculateAndSetContrastColor(MatCssPalettePrefix.Primary);
      this._recalculateAndSetContrastColor(MatCssPalettePrefix.Accent);
      this._recalculateAndSetContrastColor(MatCssPalettePrefix.Warn);
    } else {
      this.setContrastColorThresholdPrimary(this.contrastColorThresholdPrimary);
      this.setContrastColorThresholdAccent(this.contrastColorThresholdAccent);
      this.setContrastColorThresholdWarn(this.contrastColorThresholdWarn);
    }
  }

  setContrastColorThresholdPrimary(threshold: HueValue) {
    this.contrastColorThresholdPrimary = threshold;
    this.setContrastColorThreshold(threshold, MatCssPalettePrefix.Primary);
  }

  setContrastColorThresholdAccent(threshold: HueValue) {
    this.contrastColorThresholdAccent = threshold;
    this.setContrastColorThreshold(threshold, MatCssPalettePrefix.Accent);
  }

  setContrastColorThresholdWarn(threshold: HueValue) {
    this.contrastColorThresholdWarn = threshold;
    this.setContrastColorThreshold(threshold, MatCssPalettePrefix.Warn);
  }

  setContrastColorThreshold(threshold: HueValue, palettePrefix: MatCssPalettePrefix) {
    if (!threshold || !palettePrefix || this.isAutoContrast) {
      return;
    }
    let color = MaterialCssVarsService.DARK_TEXT_VAR;
    const updates = this.cfg.sortedHues.map((hue) => {
      if (hue === threshold) {
        color = MaterialCssVarsService.LIGHT_TEXT_VAR;
      }
      return {
        val: `var(${color})`, //val: this._getCssVarValue(color),
        name: `${palettePrefix + MaterialCssVarsService.CONTRAST_PREFIX}${hue}`,
      };
    });
    this._setStyle(updates);
  }

  /**
   * Generate palette color based on traditional values
   */
  setAlternativeColorAlgorithm(traditional: boolean): void {
    this.cfg.isAlternativeColorAlgorithm = traditional;
    this.setPrimaryColor(this.primary);
    this.setAccentColor(this.accent);
    this.setWarnColor(this.warn);
  }

  /** @deprecated use setContrastColorThresholdPrimary instead */
  changeContrastColorThresholdPrimary(threshold: HueValue) {
    this.setContrastColorThresholdPrimary(threshold);
  }

  /** @deprecated use setContrastColorThresholdAccent instead */
  changeContrastColorThresholdAccent(threshold: HueValue) {
    this.setContrastColorThresholdAccent(threshold);
  }

  /** @deprecated use setContrastColorThresholdWarn instead */
  changeContrastColorThresholdWarn(threshold: HueValue) {
    this.setContrastColorThresholdWarn(threshold);
  }

  /** @deprecated use setContrastColorThreshold instead */
  changeContrastColorThreshold(threshold: HueValue, palettePrefix: MatCssPalettePrefix) {
    this.setContrastColorThreshold(threshold, palettePrefix);
  }

  getPaletteForColor(hex: string): MatCssHueColorMapItem[] {
    if (this.cfg.isAlternativeColorAlgorithm) {
      return this.getTraditionalPaletteForColor(hex);
    } else {
      return this.getConstantinPaletteForColor(hex);
    }
  }

  getPaletteWithContrastForColor(hex: string): MatCssHueColorContrastMapItem[] {
    const lightText = this._getCssVarValue(MaterialCssVarsService.LIGHT_TEXT_VAR);
    const darkText = this._getCssVarValue(MaterialCssVarsService.DARK_TEXT_VAR);
    const palette = this.getPaletteForColor(hex);

    // TODO handle non auto case
    return palette.map((item) => {
      const contrastStr = item.isLight
        ? lightText
        : darkText;

      const sLight = this._replaceNoRgbValue('', contrastStr)
        .split(',')
        .map((v) => +v);
      const cco = {r: sLight[0], g: sLight[1], b: sLight[2], a: 1};
      return {
        ...item,
        contrast: {
          ...cco,
          str: `${cco.r},${cco.g},${cco.b}`
        },
      };
    });
  }

  private getTraditionalPaletteForColor(hex: string): MatCssHueColorMapItem[] {
    return this.cfg.colorMap.map(item => {
      const mappedColor = new TinyColor(hex)
        .lighten(item.map[0])
        .darken(item.map[1])
        .saturate(item.map[2]);
      const c = new TinyColor(mappedColor);
      return {
        hue: item.name,
        isLight: c.isLight(),
        color: {
          ...c.toRgb(),
          str: `rgb(${c.toRgb().r},${c.toRgb().g},${c.toRgb().b})`
        }
      };
    });
  }

  private getConstantinPaletteForColor(hex: string): MatCssHueColorMapItem[] {
    return this.cfg.colorMap.map((item) => {
      const c = this.computePalletTriad(hex, item.name);
      return {
        hue: item.name,
        isLight: c.isLight,
        color: {
          ...c.rgb,
          str: `rgb(${c.rgb.r},${c.rgb.g},${c.rgb.b})`
        }
      };
    });
  }

  private _computePaletteColors(prefix: MatCssPalettePrefix, hex: string): CssVariable[] {
    return this.getPaletteForColor(hex).map(item => {
      const c = item.color;
      return {
        name: `${prefix}${item.hue}`,
        val: `rgb(${c.r}, ${c.g}, ${c.b})`
      };
    });
  }

  private _recalculateAndSetContrastColor(palettePrefix: MatCssPalettePrefix) {
    const updates = this._calculateContrastColorsForCurrentValues(palettePrefix)
      .map(({contrastColorVar, hue}) => {
        return {
          val: `var(${contrastColorVar})`, //this._getCssVarValue(contrastColorVar),
          name: `${palettePrefix + MaterialCssVarsService.CONTRAST_PREFIX}${hue}`,
        };
      });
    this._setStyle(updates);
  }

  private _calculateContrastColorsForCurrentValues(palettePrefix: MatCssPalettePrefix):
    { contrastColorVar: string, hue: HueValue }[] {
    return this.cfg.sortedHues.map((hue) => {
      const hueVarVal = this._getCssVarValue(`${palettePrefix}${hue}`);
      const c = new TinyColor(`rgb(${hueVarVal})`);
      const contrastColorVar = c.isDark()
        ? MaterialCssVarsService.LIGHT_TEXT_VAR
        : MaterialCssVarsService.DARK_TEXT_VAR;
      return {
        contrastColorVar,
        hue,
      };
    });
  }

  private _setStyle(vars: CssVariable[]) {
    vars.forEach((s) => {
      this.renderer.setStyle(this.ROOT, s.name, s.val, RendererStyleFlags2.DashCase);
      this.renderer.setStyle(
        this.ROOT,
        s.name + '-no-rgb',
        this._replaceNoRgbValue(s.name, s.val),
        RendererStyleFlags2.DashCase
      );
    });
  }

  /**
   * Replace variables that are formatted as rgba(var(rgb(xxx))) to be var(xxx) to allow proper formatting
   * in variable overrides.
   * @param value
   * @returns
   */
  private _replaceNoRgbValue(name: string, value: string) {
    const isContrast: boolean = name.includes(MaterialCssVarsService.CONTRAST_PREFIX);
    let noRgb: string = '';
    if (isContrast) {
      noRgb = value.replace(')', '-no-rgb)');
    } else {
      noRgb = value.replace('rgba(', '').replace('rgb(', '').replace(')', '');
      if (noRgb.startsWith('var(')) {
        noRgb = noRgb.concat(')');
      }
    }
    return noRgb;
  }

  private _getCssVarValue(v: string): string {
    return getComputedStyle(this.ROOT).getPropertyValue(v);
  }

  /**
   * Compute pallet colors based on a Triad (Constantin)
   * see: https://github.com/mbitson/mcg
   */
  private computePalletTriad(hex: string, hue: HueValue): Color {
    const baseLight = new TinyColor('#ffffff');
    const baseDark = this.multiply(new TinyColor(hex).toRgb(), new TinyColor(hex).toRgb());
    const baseTriad = new TinyColor(hex).tetrad();
    let color: Color;

    switch (hue) {
      case '50':
        color = this.getColorObject(baseLight.mix(hex, 12));
        break;
      case '100':
        color = this.getColorObject(baseLight.mix(hex, 30));
        break;
      case '200':
        color = this.getColorObject(baseLight.mix(hex, 50));
        break;
      case '300':
        color = this.getColorObject(baseLight.mix(hex, 70));
        break;
      case '400':
        color = this.getColorObject(baseLight.mix(hex, 85));
        break;
      case '500':
        color = this.getColorObject(baseLight.mix(hex, 100));
        break;
      case '600':
        color = this.getColorObject(baseDark.mix(hex, 87));
        break;
      case '700':
        color = this.getColorObject(baseDark.mix(hex, 70));
        break;
      case '800':
        color = this.getColorObject(baseDark.mix(hex, 54));
        break;
      case '900':
        color = this.getColorObject(baseDark.mix(hex, 25));
        break;
      case 'A100':
        color = this.getColorObject(baseDark.mix(baseTriad[4], 15).saturate(80).lighten(65));
        break;
      case 'A200':
        color = this.getColorObject(baseDark.mix(baseTriad[4], 15).saturate(80).lighten(55));
        break;
      case 'A400':
        color = this.getColorObject(baseDark.mix(baseTriad[4], 15).saturate(100).lighten(45));
        break;
      case 'A700':
        color = this.getColorObject(baseDark.mix(baseTriad[4], 15).saturate(100).lighten(40));
        break;
    }
    return color;
  }

  private multiply(rgb1: Numberify<RGBA>, rgb2: Numberify<RGBA>): TinyColor {
    rgb1.b = Math.floor(rgb1.b * rgb2.b / 255);
    rgb1.g = Math.floor(rgb1.g * rgb2.g / 255);
    rgb1.r = Math.floor(rgb1.r * rgb2.r / 255);
    return new TinyColor('rgb ' + rgb1.r + ' ' + rgb1.g + ' ' + rgb1.b);
  }

  private getColorObject(value: TinyColor): Color {
    const c = new TinyColor(value);
    return {rgb: c.toRgb(), isLight: c.isLight()};
  }

}
