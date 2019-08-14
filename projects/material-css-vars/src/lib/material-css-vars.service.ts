import {Injectable} from '@angular/core';
import tinycolor2 from 'tinycolor2';
import {HueValue} from './model';

interface CssVariable {
  name: string;
  rgb: string;
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
  private static MAGIC_THRESHOLD_LIGHT: HueValue = '600';
  private static MAGIC_THRESHOLD_DARK: HueValue = '300';

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

  public primary: string;
  public accent: string;
  public darkContrastThreshold: HueValue = '400';

  private _stylePrimary: CssVariable[];
  private _styleAccent: CssVariable[];

  constructor() {
  }

  changePrimary(hex: string) {
    this.primary = hex;
    this._stylePrimary = this._computeColors(MaterialCssVarsService.PREFIX_PRIMARY, this.primary);
    this._setStyle(this._stylePrimary);
  }

  changeAccent(hex: string) {
    this.accent = hex;
    this._styleAccent = this._computeColors(MaterialCssVarsService.PREFIX_ACCENT, this.accent);
    this._setStyle(this._styleAccent);
  }

  setDarkContrastColor() {
    this.changeContrastColorThreshold(MaterialCssVarsService.MAGIC_THRESHOLD_DARK);
  }

  setLightContrastColor() {
    this.changeContrastColorThreshold(MaterialCssVarsService.MAGIC_THRESHOLD_LIGHT);
  }

  changeContrastColorThreshold(threshold: HueValue) {
    this.darkContrastThreshold = threshold;

    let color = MaterialCssVarsService.LIGHT_TEXT_VAR;
    const updates = MaterialCssVarsService.SORTED_HUES.map((hue) => {
      if (hue === threshold) {
        color = MaterialCssVarsService.DARK_TEXT_VAR;
      }
      return {
        rgb: `var(${color})`,
        name: `${MaterialCssVarsService.PREFIX_CONTRAST}${hue}`,
      };
    });
    this._setStyle(updates);
  }

  private _computeColors(prefix: string, hex: string): CssVariable[] {
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
      rgb: `${c.r}, ${c.g}, ${c.b}`
    };
  }

  private _setStyle(vars: CssVariable[]) {
    vars.forEach(s => {
      MaterialCssVarsService.ROOT.style.setProperty(s.name, s.rgb);
    });
  }
}
