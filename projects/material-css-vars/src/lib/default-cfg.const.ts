import {MaterialCssVariablesConfig} from './model';

export const DEFAULT_MAT_CSS_CFG: MaterialCssVariablesConfig = {
  isAutoContrast: true,
  magicAutoContrastFactor: 0.5,
  darkThemeClass: 'isDarkTheme',
  lightThemeClass: 'isLightTheme',
  colorMap: [
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
  ],
  sortedHues: [
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
  ]
};
