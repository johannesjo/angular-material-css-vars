export type HueValue =
  | "50"
  | "100"
  | "200"
  | "300"
  | "400"
  | "500"
  | "600"
  | "700"
  | "800"
  | "900"
  | "A100"
  | "A200"
  | "A400"
  | "A700";

export enum MatCssPalettePrefix {
  Primary = "--palette-primary-",
  Accent = "--palette-accent-",
  Warn = "--palette-warn-",
}

export interface MatCssHueColorMapItem {
  hue: HueValue;
  isLight: boolean;
  color: {
    r: number;
    g: number;
    b: number;
    a: number;
    str: string;
  };
}

export interface MatCssHueColorContrastMapItem extends MatCssHueColorMapItem {
  contrast: {
    r: number;
    g: number;
    b: number;
    a: number;
    str: string;
  };
}

export interface MaterialCssColorMapperEntry {
  name: HueValue;
  map: [number, number, number];
}

export interface MaterialCssVariablesConfig {
  isAutoContrast: boolean;
  isAlternativeColorAlgorithm: boolean;

  darkThemeClass: string;
  lightThemeClass: string;

  colorMap: MaterialCssColorMapperEntry[];
  sortedHues: HueValue[];

  isDarkTheme?: boolean;
  primary?: string;
  accent?: string;
  warn?: string;
}

export enum MaterialCssVariables {
  "Primary50" = "--palette-primary-50",
  "Primary100" = "--palette-primary-100",
  "Primary200" = "--palette-primary-200",
  "Primary300" = "--palette-primary-300",
  "Primary400" = "--palette-primary-400",
  "Primary500" = "--palette-primary-500",
  "Primary600" = "--palette-primary-600",
  "Primary700" = "--palette-primary-700",
  "Primary800" = "--palette-primary-800",
  "Primary900" = "--palette-primary-900",
  "PrimaryA100" = "--palette-primary-A100",
  "PrimaryA200" = "--palette-primary-A200",
  "PrimaryA400" = "--palette-primary-A400",
  "PrimaryA700" = "--palette-primary-A700",

  "PrimaryContrast50" = "--palette-primary-contrast-50",
  "PrimaryContrast100" = "--palette-primary-contrast-100",
  "PrimaryContrast200" = "--palette-primary-contrast-200",
  "PrimaryContrast300" = "--palette-primary-contrast-300",
  "PrimaryContrast400" = "--palette-primary-contrast-400",
  "PrimaryContrast500" = "--palette-primary-contrast-500",
  "PrimaryContrast600" = "--palette-primary-contrast-600",
  "PrimaryContrast700" = "--palette-primary-contrast-700",
  "PrimaryContrast800" = "--palette-primary-contrast-800",
  "PrimaryContrast900" = "--palette-primary-contrast-900",
  "PrimaryContrastA100" = "--palette-primary-contrast-A100",
  "PrimaryContrastA200" = "--palette-primary-contrast-A200",
  "PrimaryContrastA400" = "--palette-primary-contrast-A400",
  "PrimaryContrastA700" = "--palette-primary-contrast-A700",

  // ACCENT
  "Accent50" = "--palette-accent-50",
  "Accent100" = "--palette-accent-100",
  "Accent200" = "--palette-accent-200",
  "Accent300" = "--palette-accent-300",
  "Accent400" = "--palette-accent-400",
  "Accent500" = "--palette-accent-500",
  "Accent600" = "--palette-accent-600",
  "Accent700" = "--palette-accent-700",
  "Accent800" = "--palette-accent-800",
  "Accent900" = "--palette-accent-900",
  "AccentA100" = "--palette-accent-A100",
  "AccentA200" = "--palette-accent-A200",
  "AccentA400" = "--palette-accent-A400",
  "AccentA700" = "--palette-accent-A700",
  "DarkAccentText" = "--dark-accent-text",
  "LightAccentText" = "--light-accent-text",

  // WARN
  "Warn50" = "--palette-warn-50",
  "Warn100" = "--palette-warn-100",
  "Warn200" = "--palette-warn-200",
  "Warn300" = "--palette-warn-300",
  "Warn400" = "--palette-warn-400",
  "Warn500" = "--palette-warn-500",
  "Warn600" = "--palette-warn-600",
  "Warn700" = "--palette-warn-700",
  "Warn800" = "--palette-warn-800",
  "Warn900" = "--palette-warn-900",
  "WarnA100" = "--palette-warn-A100",
  "WarnA200" = "--palette-warn-A200",
  "WarnA400" = "--palette-warn-A400",
  "WarnA700" = "--palette-warn-A700",
  "DarkWarnText" = "--dark-warn-text",
  "LightWarnText" = "--light-warn-text",
}
