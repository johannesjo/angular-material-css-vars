export declare type HueValue = '50' | '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900' | 'A100' | 'A200' | 'A400' | 'A700';
export declare enum MatCssPalettePrefix {
    Primary = "--palette-primary-",
    Accent = "--palette-accent-",
    Warn = "--palette-warn-"
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
export declare enum MaterialCssVariables {
    'Primary50' = "--palette-primary-50",
    'Primary100' = "--palette-primary-100",
    'Primary200' = "--palette-primary-200",
    'Primary300' = "--palette-primary-300",
    'Primary400' = "--palette-primary-400",
    'Primary500' = "--palette-primary-500",
    'Primary600' = "--palette-primary-600",
    'Primary700' = "--palette-primary-700",
    'Primary800' = "--palette-primary-800",
    'Primary900' = "--palette-primary-900",
    'PrimaryA100' = "--palette-primary-A100",
    'PrimaryA200' = "--palette-primary-A200",
    'PrimaryA400' = "--palette-primary-A400",
    'PrimaryA700' = "--palette-primary-A700",
    'PrimaryContrast50' = "--palette-primary-contrast-50",
    'PrimaryContrast100' = "--palette-primary-contrast-100",
    'PrimaryContrast200' = "--palette-primary-contrast-200",
    'PrimaryContrast300' = "--palette-primary-contrast-300",
    'PrimaryContrast400' = "--palette-primary-contrast-400",
    'PrimaryContrast500' = "--palette-primary-contrast-500",
    'PrimaryContrast600' = "--palette-primary-contrast-600",
    'PrimaryContrast700' = "--palette-primary-contrast-700",
    'PrimaryContrast800' = "--palette-primary-contrast-800",
    'PrimaryContrast900' = "--palette-primary-contrast-900",
    'PrimaryContrastA100' = "--palette-primary-contrast-A100",
    'PrimaryContrastA200' = "--palette-primary-contrast-A200",
    'PrimaryContrastA400' = "--palette-primary-contrast-A400",
    'PrimaryContrastA700' = "--palette-primary-contrast-A700",
    'Accent50' = "--palette-accent-50",
    'Accent100' = "--palette-accent-100",
    'Accent200' = "--palette-accent-200",
    'Accent300' = "--palette-accent-300",
    'Accent400' = "--palette-accent-400",
    'Accent500' = "--palette-accent-500",
    'Accent600' = "--palette-accent-600",
    'Accent700' = "--palette-accent-700",
    'Accent800' = "--palette-accent-800",
    'Accent900' = "--palette-accent-900",
    'AccentA100' = "--palette-accent-A100",
    'AccentA200' = "--palette-accent-A200",
    'AccentA400' = "--palette-accent-A400",
    'AccentA700' = "--palette-accent-A700",
    'DarkAccentText' = "--dark-accent-text",
    'LightAccentText' = "--light-accent-text",
    'Warn50' = "--palette-warn-50",
    'Warn100' = "--palette-warn-100",
    'Warn200' = "--palette-warn-200",
    'Warn300' = "--palette-warn-300",
    'Warn400' = "--palette-warn-400",
    'Warn500' = "--palette-warn-500",
    'Warn600' = "--palette-warn-600",
    'Warn700' = "--palette-warn-700",
    'Warn800' = "--palette-warn-800",
    'Warn900' = "--palette-warn-900",
    'WarnA100' = "--palette-warn-A100",
    'WarnA200' = "--palette-warn-A200",
    'WarnA400' = "--palette-warn-A400",
    'WarnA700' = "--palette-warn-A700",
    'DarkWarnText' = "--dark-warn-text",
    'LightWarnText' = "--light-warn-text",
    'BackgroundStatusBar' = "--palette-background-status-bar",
    'BackgroundAppBar' = "--palette-background-app-bar",
    'BackgroundBackground' = "--palette-background-background",
    'BackgroundHover' = "--palette-background-hover",
    'BackgroundHoverAlpha' = "--palette-background-hover-alpha",
    'BackgroundCard' = "--palette-background-card",
    'BackgroundDialog' = "--palette-background-dialog",
    'BackgroundDisabledButton' = "--palette-background-disabled-button",
    'BackgroundDisabledButtonAlpha' = "--palette-background-disabled-button-alpha",
    'BackgroundRaisedButton' = "--palette-background-raised-button",
    'BackgroundFocusedButton' = "--palette-background-focused-button",
    'BackgroundFocusedButtonAlpha' = "--palette-background-focused-button-alpha",
    'BackgroundSelectedButton' = "--palette-background-selected-button",
    'BackgroundSelectedDisabledButton' = "--palette-background-selected-disabled-button",
    'BackgroundDisabledButtonToggle' = "--palette-background-disabled-button-toggle",
    'BackgroundUnselectedChip' = "--palette-background-unselected-chip",
    'BackgroundDisabledListOption' = "--palette-background-disabled-list-option",
    'ForegroundBase' = "--palette-foreground-base",
    'ForegroundDivider' = "--palette-foreground-divider",
    'ForegroundDividerAlpha' = "--palette-foreground-divider-alpha",
    'ForegroundDividers' = "--palette-foreground-dividers",
    'ForegroundDividersAlpha' = "--palette-foreground-dividers-alpha",
    'ForegroundDisabled' = "--palette-foreground-disabled",
    'ForegroundDisabledAlpha' = "--palette-foreground-disabled-alpha",
    'ForegroundDisabledButton' = "--palette-foreground-disabled-button",
    'ForegroundDisabledButtonAlpha' = "--palette-foreground-disabled-button-alpha",
    'ForegroundDisabledText' = "--palette-foreground-disabled-text",
    'ForegroundDisabledTextAlpha' = "--palette-foreground-disabled-text-alpha",
    'ForegroundElevation' = "--palette-foreground-elevation",
    'ForegroundHintText' = "--palette-foreground-hint-text",
    'ForegroundHintTextAlpha' = "--palette-foreground-hint-text-alpha",
    'ForegroundSecondaryText' = "--palette-foreground-secondary-text",
    'ForegroundSecondaryTextAlpha' = "--palette-foreground-secondary-text-alpha",
    'ForegroundIcon' = "--palette-foreground-icon",
    'ForegroundIconAlpha' = "--palette-foreground-icon-alpha",
    'ForegroundIcons' = "--palette-foreground-icons",
    'ForegroundIconsAlpha' = "--palette-foreground-icons-alpha",
    'ForegroundText' = "--palette-foreground-text",
    'ForegroundTextAlpha' = "--palette-foreground-text-alpha",
    'ForegroundSliderMin' = "--palette-foreground-slider-min",
    'ForegroundSliderMinAlpha' = "--palette-foreground-slider-min-alpha",
    'ForegroundSliderOff' = "--palette-foreground-slider-off",
    'ForegroundSliderOffAlpha' = "--palette-foreground-slider-off-alpha",
    'ForegroundSliderOffActive' = "--palette-foreground-slider-off-active",
    'ForegroundSliderOffActiveAlpha' = "--palette-foreground-slider-off-active-alpha",
    'BackgroundStatusBarDark' = "--palette-background-status-bar-dark",
    'BackgroundAppBarDark' = "--palette-background-app-bar-dark",
    'BackgroundBackgroundDark' = "--palette-background-background-dark",
    'BackgroundHoverDark' = "--palette-background-hover-dark",
    'BackgroundHoverDarkAlpha' = "--palette-background-hover-dark-alpha",
    'BackgroundCardDark' = "--palette-background-card-dark",
    'BackgroundDialogDark' = "--palette-background-dialog-dark",
    'BackgroundDisabledButtonDark' = "--palette-background-disabled-button-dark",
    'BackgroundDisabledButtonDarkAlpha' = "--palette-background-disabled-button-dark-alpha",
    'BackgroundRaisedButtonDark' = "--palette-background-raised-button-dark",
    'BackgroundFocusedButtonDark' = "--palette-background-focused-button-dark",
    'BackgroundFocusedButtonDarkAlpha' = "--palette-background-focused-button-dark-alpha",
    'BackgroundSelectedButtonDark' = "--palette-background-selected-button-dark",
    'BackgroundSelectedDisabledButtonDark' = "--palette-background-selected-disabled-button-dark",
    'BackgroundDisabledButtonToggleDark' = "--palette-background-disabled-button-toggle-dark",
    'BackgroundUnselectedChipDark' = "--palette-background-unselected-chip-dark",
    'BackgroundDisabledListOptionDark' = "--palette-background-disabled-list-option-dark",
    'ForegroundBaseDark' = "--palette-foreground-base-dark",
    'ForegroundDividerDark' = "--palette-foreground-divider-dark",
    'ForegroundDividerDarkAlpha' = "--palette-foreground-divider-dark-alpha",
    'ForegroundDividersDark' = "--palette-foreground-dividers-dark",
    'ForegroundDividersDarkAlpha' = "--palette-foreground-dividers-dark-alpha",
    'ForegroundDisabledDark' = "--palette-foreground-disabled-dark",
    'ForegroundDisabledDarkAlpha' = "--palette-foreground-disabled-dark-alpha",
    'ForegroundDisabledButtonDark' = "--palette-foreground-disabled-button-dark",
    'ForegroundDisabledButtonDarkAlpha' = "--palette-foreground-disabled-button-dark-alpha",
    'ForegroundDisabledTextDark' = "--palette-foreground-disabled-text-dark",
    'ForegroundDisabledTextDarkAlpha' = "--palette-foreground-disabled-text-dark-alpha",
    'ForegroundElevationDark' = "--palette-foreground-elevation-dark",
    'ForegroundHintTextDark' = "--palette-foreground-hint-text-dark",
    'ForegroundHintTextDarkAlpha' = "--palette-foreground-hint-text-dark-alpha",
    'ForegroundSecondaryTextDark' = "--palette-foreground-secondary-text-dark",
    'ForegroundSecondaryTextAlphaDark' = "--palette-foreground-secondary-text-alpha-dark",
    'ForegroundIconDark' = "--palette-foreground-icon-dark",
    'ForegroundIconDarkAlpha' = "--palette-foreground-icon-dark-alpha",
    'ForegroundIconsDark' = "--palette-foreground-icons-dark",
    'ForegroundIconsDarkAlpha' = "--palette-foreground-icons-dark-alpha",
    'ForegroundTextDark' = "--palette-foreground-text-dark",
    'ForegroundTextDarkAlpha' = "--palette-foreground-text-dark-alpha",
    'ForegroundSliderMinDark' = "--palette-foreground-slider-min-dark",
    'ForegroundSliderMinDarkAlpha' = "--palette-foreground-slider-min-dark-alpha",
    'ForegroundSliderOffDark' = "--palette-foreground-slider-off-dark",
    'ForegroundSliderOffDarkAlpha' = "--palette-foreground-slider-off-dark-alpha",
    'ForegroundSliderOffActiveDark' = "--palette-foreground-slider-off-active-dark",
    'ForegroundSliderOffActiveDarkAlpha' = "--palette-foreground-slider-off-active-dark-alpha"
}
