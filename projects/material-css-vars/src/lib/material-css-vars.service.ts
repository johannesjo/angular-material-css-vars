import {Inject, Injectable} from '@angular/core';
import tinycolor2 from 'tinycolor2';
import {HueValue, MaterialCssVariables} from './model';
import {DOCUMENT} from '@angular/common';

interface CssVariable {
  name: string;
  val: string;
}

@Injectable({
  providedIn: 'root'
})
export class MaterialCssVarsService {
  private static PREFIX_PRIMARY = '--palette-primary-';
  private static PREFIX_ACCENT = '--palette-accent-';
  private static PREFIX_CONTRAST = '--palette-primary-contrast-';
  private static DARK_TEXT_VAR = '--dark-primary-text';
  private static LIGHT_TEXT_VAR = '--light-primary-text';
  private static MAGIC_THRESHOLD_LIGHT: HueValue = '300';
  private static MAGIC_THRESHOLD_DARK: HueValue = '600';
  private static DARK_THEME_CLASS = 'isDarkTheme';
  private static LIGHT_THEME_CLASS = 'isLightTheme';

  private static ROOT = document.documentElement;

  private static COLOR_MAPPER = [
    {name: '50', map: [52, 0, 0]},
    {name: '100', map: [37, 0, 0]},
    {name: '200', map: [26, 0, 0]},
    {name: '300', map: [12, 0, 0]},
    {name: '400', map: [6, 0, 0]},
    {name: '500', map: [0, 0, 0]},
    {name: '600', map: [0, 6, 0]},
    {name: '700', map: [0, 12, 0]},
    {name: '800', map: [0, 18, 0]},
    {name: '900', map: [0, 24, 0]},
    {name: 'A100', map: [50, 0, 30]},
    {name: 'A200', map: [30, 0, 30]},
    {name: 'A400', map: [10, 0, 15]},
    {name: 'A700', map: [5, 0, 5]},
  ];

  private static SORTED_HUES: HueValue[] = [
    '50',
    '100',
    '200',
    '300',
    '400',
    '500',
    '600',
    '700',
    '800',
    '900',
    'A100',
    'A200',
    'A400',
    'A700',
  ];

  // This should be readonly from the outside
  primary: string;
  accent: string;
  isDarkTheme: boolean;
  contrastColorThreshold: HueValue = '400';

  private _isAutoContrast = true;

  constructor(
    @Inject(DOCUMENT) private document: any,
  ) {
  }

  changePrimaryColor(hex: string) {
    this.primary = hex;
    const stylePrimary = this._computePaletteColors(MaterialCssVarsService.PREFIX_PRIMARY, this.primary);
    this._setStyle(stylePrimary);

    if (this._isAutoContrast) {
      this._recalculatePrimaryPaletteContrastColor();
    }
  }

  changeAccentColor(hex: string) {
    this.accent = hex;
    const styleAccent = this._computePaletteColors(MaterialCssVarsService.PREFIX_ACCENT, this.accent);
    this._setStyle(styleAccent);
  }

  switchToDarkContrastColor() {
    this.changeContrastColorThreshold(MaterialCssVarsService.MAGIC_THRESHOLD_DARK);
  }

  switchToLightContrastColor() {
    this.changeContrastColorThreshold(MaterialCssVarsService.MAGIC_THRESHOLD_LIGHT);
  }

  setVariable(cssVarName: MaterialCssVariables, value: string) {
    this._setStyle([{
      name: cssVarName,
      val: value,
    }]);
  }

  setDarkTheme(isDark: boolean) {
    if (isDark) {
      this.document.body.classList.remove(MaterialCssVarsService.LIGHT_THEME_CLASS);
      this.document.body.classList.add(MaterialCssVarsService.DARK_THEME_CLASS);
    } else {
      this.document.body.classList.remove(MaterialCssVarsService.DARK_THEME_CLASS);
      this.document.body.classList.add(MaterialCssVarsService.LIGHT_THEME_CLASS);
    }
    this.isDarkTheme = isDark;
  }

  setAutoContrastEnabled(val: boolean) {
    this._isAutoContrast = val;
    this._recalculatePrimaryPaletteContrastColor();
  }

  changeContrastColorThreshold(threshold: HueValue) {
    this.contrastColorThreshold = threshold;

    let color = MaterialCssVarsService.DARK_TEXT_VAR;
    const updates = MaterialCssVarsService.SORTED_HUES.map((hue) => {
      if (hue === threshold) {
        color = MaterialCssVarsService.LIGHT_TEXT_VAR;
      }
      return {
        val: `var(${color})`,
        name: `${MaterialCssVarsService.PREFIX_CONTRAST}${hue}`,
      };
    });
    this._setStyle(updates);
  }

  private _recalculatePrimaryPaletteContrastColor() {
    const lightText = this._getCssVarValue(MaterialCssVarsService.LIGHT_TEXT_VAR);
    const darkText = this._getCssVarValue(MaterialCssVarsService.DARK_TEXT_VAR);

    const updates = MaterialCssVarsService.SORTED_HUES.map((hue) => {
      const hueVarVal = this._getCssVarValue(`${MaterialCssVarsService.PREFIX_PRIMARY}${hue}`);

      const rLight = tinycolor2.readability(`rgb(${hueVarVal})`, `rgb(${lightText})`);
      const rDark = tinycolor2.readability(`rgb(${hueVarVal})`, `rgb(${darkText})`);
      const color = (rLight > rDark)
        ? MaterialCssVarsService.LIGHT_TEXT_VAR
        : MaterialCssVarsService.DARK_TEXT_VAR;

      return {
        val: `var(${color})`,
        name: `${MaterialCssVarsService.PREFIX_CONTRAST}${hue}`,
      };
    });
    this._setStyle(updates);
  }

  private _computePaletteColors(prefix: string, hex: string): CssVariable[] {
    return MaterialCssVarsService.COLOR_MAPPER.map(item => {
      const mappedColor = tinycolor2(hex)
        .lighten(item.map[0])
        .darken(item.map[1])
        .saturate(item.map[2]);

      return this._getColorObject(
        prefix,
        item.name,
        mappedColor,
      );
    });
  }

  private _getColorObject(prefix: string, name: string, value: tinycolor2.Instance): CssVariable {
    const c = tinycolor2(value).toRgb();
    return {
      name: `${prefix}${name}`,
      val: `${c.r}, ${c.g}, ${c.b}`
    };
  }

  private _setStyle(vars: CssVariable[]) {
    vars.forEach(s => {
      MaterialCssVarsService.ROOT.style.setProperty(s.name, s.val);
    });
  }

  private _getCssVarValue(v: string): string {
    return getComputedStyle(MaterialCssVarsService.ROOT).getPropertyValue(v);
  }
}
