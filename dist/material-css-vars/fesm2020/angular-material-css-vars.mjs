import * as i0 from '@angular/core';
import { InjectionToken, RendererStyleFlags2, Injectable, Inject, NgModule } from '@angular/core';
import { TinyColor } from '@ctrl/tinycolor';
import { DOCUMENT, CommonModule } from '@angular/common';

var MatCssPalettePrefix;
(function (MatCssPalettePrefix) {
    MatCssPalettePrefix["Primary"] = "--palette-primary-";
    MatCssPalettePrefix["Accent"] = "--palette-accent-";
    MatCssPalettePrefix["Warn"] = "--palette-warn-";
})(MatCssPalettePrefix || (MatCssPalettePrefix = {}));
var MaterialCssVariables;
(function (MaterialCssVariables) {
    MaterialCssVariables["Primary50"] = "--palette-primary-50";
    MaterialCssVariables["Primary100"] = "--palette-primary-100";
    MaterialCssVariables["Primary200"] = "--palette-primary-200";
    MaterialCssVariables["Primary300"] = "--palette-primary-300";
    MaterialCssVariables["Primary400"] = "--palette-primary-400";
    MaterialCssVariables["Primary500"] = "--palette-primary-500";
    MaterialCssVariables["Primary600"] = "--palette-primary-600";
    MaterialCssVariables["Primary700"] = "--palette-primary-700";
    MaterialCssVariables["Primary800"] = "--palette-primary-800";
    MaterialCssVariables["Primary900"] = "--palette-primary-900";
    MaterialCssVariables["PrimaryA100"] = "--palette-primary-A100";
    MaterialCssVariables["PrimaryA200"] = "--palette-primary-A200";
    MaterialCssVariables["PrimaryA400"] = "--palette-primary-A400";
    MaterialCssVariables["PrimaryA700"] = "--palette-primary-A700";
    MaterialCssVariables["PrimaryContrast50"] = "--palette-primary-contrast-50";
    MaterialCssVariables["PrimaryContrast100"] = "--palette-primary-contrast-100";
    MaterialCssVariables["PrimaryContrast200"] = "--palette-primary-contrast-200";
    MaterialCssVariables["PrimaryContrast300"] = "--palette-primary-contrast-300";
    MaterialCssVariables["PrimaryContrast400"] = "--palette-primary-contrast-400";
    MaterialCssVariables["PrimaryContrast500"] = "--palette-primary-contrast-500";
    MaterialCssVariables["PrimaryContrast600"] = "--palette-primary-contrast-600";
    MaterialCssVariables["PrimaryContrast700"] = "--palette-primary-contrast-700";
    MaterialCssVariables["PrimaryContrast800"] = "--palette-primary-contrast-800";
    MaterialCssVariables["PrimaryContrast900"] = "--palette-primary-contrast-900";
    MaterialCssVariables["PrimaryContrastA100"] = "--palette-primary-contrast-A100";
    MaterialCssVariables["PrimaryContrastA200"] = "--palette-primary-contrast-A200";
    MaterialCssVariables["PrimaryContrastA400"] = "--palette-primary-contrast-A400";
    MaterialCssVariables["PrimaryContrastA700"] = "--palette-primary-contrast-A700";
    // ACCENT
    MaterialCssVariables["Accent50"] = "--palette-accent-50";
    MaterialCssVariables["Accent100"] = "--palette-accent-100";
    MaterialCssVariables["Accent200"] = "--palette-accent-200";
    MaterialCssVariables["Accent300"] = "--palette-accent-300";
    MaterialCssVariables["Accent400"] = "--palette-accent-400";
    MaterialCssVariables["Accent500"] = "--palette-accent-500";
    MaterialCssVariables["Accent600"] = "--palette-accent-600";
    MaterialCssVariables["Accent700"] = "--palette-accent-700";
    MaterialCssVariables["Accent800"] = "--palette-accent-800";
    MaterialCssVariables["Accent900"] = "--palette-accent-900";
    MaterialCssVariables["AccentA100"] = "--palette-accent-A100";
    MaterialCssVariables["AccentA200"] = "--palette-accent-A200";
    MaterialCssVariables["AccentA400"] = "--palette-accent-A400";
    MaterialCssVariables["AccentA700"] = "--palette-accent-A700";
    MaterialCssVariables["DarkAccentText"] = "--dark-accent-text";
    MaterialCssVariables["LightAccentText"] = "--light-accent-text";
    // WARN
    MaterialCssVariables["Warn50"] = "--palette-warn-50";
    MaterialCssVariables["Warn100"] = "--palette-warn-100";
    MaterialCssVariables["Warn200"] = "--palette-warn-200";
    MaterialCssVariables["Warn300"] = "--palette-warn-300";
    MaterialCssVariables["Warn400"] = "--palette-warn-400";
    MaterialCssVariables["Warn500"] = "--palette-warn-500";
    MaterialCssVariables["Warn600"] = "--palette-warn-600";
    MaterialCssVariables["Warn700"] = "--palette-warn-700";
    MaterialCssVariables["Warn800"] = "--palette-warn-800";
    MaterialCssVariables["Warn900"] = "--palette-warn-900";
    MaterialCssVariables["WarnA100"] = "--palette-warn-A100";
    MaterialCssVariables["WarnA200"] = "--palette-warn-A200";
    MaterialCssVariables["WarnA400"] = "--palette-warn-A400";
    MaterialCssVariables["WarnA700"] = "--palette-warn-A700";
    MaterialCssVariables["DarkWarnText"] = "--dark-warn-text";
    MaterialCssVariables["LightWarnText"] = "--light-warn-text";
    // BACKGROUND
    MaterialCssVariables["BackgroundStatusBar"] = "--palette-background-status-bar";
    MaterialCssVariables["BackgroundAppBar"] = "--palette-background-app-bar";
    MaterialCssVariables["BackgroundBackground"] = "--palette-background-background";
    MaterialCssVariables["BackgroundHover"] = "--palette-background-hover";
    MaterialCssVariables["BackgroundHoverAlpha"] = "--palette-background-hover-alpha";
    MaterialCssVariables["BackgroundCard"] = "--palette-background-card";
    MaterialCssVariables["BackgroundDialog"] = "--palette-background-dialog";
    MaterialCssVariables["BackgroundDisabledButton"] = "--palette-background-disabled-button";
    MaterialCssVariables["BackgroundDisabledButtonAlpha"] = "--palette-background-disabled-button-alpha";
    MaterialCssVariables["BackgroundRaisedButton"] = "--palette-background-raised-button";
    MaterialCssVariables["BackgroundFocusedButton"] = "--palette-background-focused-button";
    MaterialCssVariables["BackgroundFocusedButtonAlpha"] = "--palette-background-focused-button-alpha";
    MaterialCssVariables["BackgroundSelectedButton"] = "--palette-background-selected-button";
    MaterialCssVariables["BackgroundSelectedDisabledButton"] = "--palette-background-selected-disabled-button";
    MaterialCssVariables["BackgroundDisabledButtonToggle"] = "--palette-background-disabled-button-toggle";
    MaterialCssVariables["BackgroundUnselectedChip"] = "--palette-background-unselected-chip";
    MaterialCssVariables["BackgroundDisabledListOption"] = "--palette-background-disabled-list-option";
    // FOREGROUND
    MaterialCssVariables["ForegroundBase"] = "--palette-foreground-base";
    MaterialCssVariables["ForegroundDivider"] = "--palette-foreground-divider";
    MaterialCssVariables["ForegroundDividerAlpha"] = "--palette-foreground-divider-alpha";
    MaterialCssVariables["ForegroundDividers"] = "--palette-foreground-dividers";
    MaterialCssVariables["ForegroundDividersAlpha"] = "--palette-foreground-dividers-alpha";
    MaterialCssVariables["ForegroundDisabled"] = "--palette-foreground-disabled";
    MaterialCssVariables["ForegroundDisabledAlpha"] = "--palette-foreground-disabled-alpha";
    MaterialCssVariables["ForegroundDisabledButton"] = "--palette-foreground-disabled-button";
    MaterialCssVariables["ForegroundDisabledButtonAlpha"] = "--palette-foreground-disabled-button-alpha";
    MaterialCssVariables["ForegroundDisabledText"] = "--palette-foreground-disabled-text";
    MaterialCssVariables["ForegroundDisabledTextAlpha"] = "--palette-foreground-disabled-text-alpha";
    MaterialCssVariables["ForegroundElevation"] = "--palette-foreground-elevation";
    MaterialCssVariables["ForegroundHintText"] = "--palette-foreground-hint-text";
    MaterialCssVariables["ForegroundHintTextAlpha"] = "--palette-foreground-hint-text-alpha";
    MaterialCssVariables["ForegroundSecondaryText"] = "--palette-foreground-secondary-text";
    MaterialCssVariables["ForegroundSecondaryTextAlpha"] = "--palette-foreground-secondary-text-alpha";
    MaterialCssVariables["ForegroundIcon"] = "--palette-foreground-icon";
    MaterialCssVariables["ForegroundIconAlpha"] = "--palette-foreground-icon-alpha";
    MaterialCssVariables["ForegroundIcons"] = "--palette-foreground-icons";
    MaterialCssVariables["ForegroundIconsAlpha"] = "--palette-foreground-icons-alpha";
    MaterialCssVariables["ForegroundText"] = "--palette-foreground-text";
    MaterialCssVariables["ForegroundTextAlpha"] = "--palette-foreground-text-alpha";
    MaterialCssVariables["ForegroundSliderMin"] = "--palette-foreground-slider-min";
    MaterialCssVariables["ForegroundSliderMinAlpha"] = "--palette-foreground-slider-min-alpha";
    MaterialCssVariables["ForegroundSliderOff"] = "--palette-foreground-slider-off";
    MaterialCssVariables["ForegroundSliderOffAlpha"] = "--palette-foreground-slider-off-alpha";
    MaterialCssVariables["ForegroundSliderOffActive"] = "--palette-foreground-slider-off-active";
    MaterialCssVariables["ForegroundSliderOffActiveAlpha"] = "--palette-foreground-slider-off-active-alpha";
    // BACKGROUND DARK
    MaterialCssVariables["BackgroundStatusBarDark"] = "--palette-background-status-bar-dark";
    MaterialCssVariables["BackgroundAppBarDark"] = "--palette-background-app-bar-dark";
    MaterialCssVariables["BackgroundBackgroundDark"] = "--palette-background-background-dark";
    MaterialCssVariables["BackgroundHoverDark"] = "--palette-background-hover-dark";
    MaterialCssVariables["BackgroundHoverDarkAlpha"] = "--palette-background-hover-dark-alpha";
    MaterialCssVariables["BackgroundCardDark"] = "--palette-background-card-dark";
    MaterialCssVariables["BackgroundDialogDark"] = "--palette-background-dialog-dark";
    MaterialCssVariables["BackgroundDisabledButtonDark"] = "--palette-background-disabled-button-dark";
    MaterialCssVariables["BackgroundDisabledButtonDarkAlpha"] = "--palette-background-disabled-button-dark-alpha";
    MaterialCssVariables["BackgroundRaisedButtonDark"] = "--palette-background-raised-button-dark";
    MaterialCssVariables["BackgroundFocusedButtonDark"] = "--palette-background-focused-button-dark";
    MaterialCssVariables["BackgroundFocusedButtonDarkAlpha"] = "--palette-background-focused-button-dark-alpha";
    MaterialCssVariables["BackgroundSelectedButtonDark"] = "--palette-background-selected-button-dark";
    MaterialCssVariables["BackgroundSelectedDisabledButtonDark"] = "--palette-background-selected-disabled-button-dark";
    MaterialCssVariables["BackgroundDisabledButtonToggleDark"] = "--palette-background-disabled-button-toggle-dark";
    MaterialCssVariables["BackgroundUnselectedChipDark"] = "--palette-background-unselected-chip-dark";
    MaterialCssVariables["BackgroundDisabledListOptionDark"] = "--palette-background-disabled-list-option-dark";
    // FOREGROUND DARK
    MaterialCssVariables["ForegroundBaseDark"] = "--palette-foreground-base-dark";
    MaterialCssVariables["ForegroundDividerDark"] = "--palette-foreground-divider-dark";
    MaterialCssVariables["ForegroundDividerDarkAlpha"] = "--palette-foreground-divider-dark-alpha";
    MaterialCssVariables["ForegroundDividersDark"] = "--palette-foreground-dividers-dark";
    MaterialCssVariables["ForegroundDividersDarkAlpha"] = "--palette-foreground-dividers-dark-alpha";
    MaterialCssVariables["ForegroundDisabledDark"] = "--palette-foreground-disabled-dark";
    MaterialCssVariables["ForegroundDisabledDarkAlpha"] = "--palette-foreground-disabled-dark-alpha";
    MaterialCssVariables["ForegroundDisabledButtonDark"] = "--palette-foreground-disabled-button-dark";
    MaterialCssVariables["ForegroundDisabledButtonDarkAlpha"] = "--palette-foreground-disabled-button-dark-alpha";
    MaterialCssVariables["ForegroundDisabledTextDark"] = "--palette-foreground-disabled-text-dark";
    MaterialCssVariables["ForegroundDisabledTextDarkAlpha"] = "--palette-foreground-disabled-text-dark-alpha";
    MaterialCssVariables["ForegroundElevationDark"] = "--palette-foreground-elevation-dark";
    MaterialCssVariables["ForegroundHintTextDark"] = "--palette-foreground-hint-text-dark";
    MaterialCssVariables["ForegroundHintTextDarkAlpha"] = "--palette-foreground-hint-text-dark-alpha";
    MaterialCssVariables["ForegroundSecondaryTextDark"] = "--palette-foreground-secondary-text-dark";
    MaterialCssVariables["ForegroundSecondaryTextAlphaDark"] = "--palette-foreground-secondary-text-alpha-dark";
    MaterialCssVariables["ForegroundIconDark"] = "--palette-foreground-icon-dark";
    MaterialCssVariables["ForegroundIconDarkAlpha"] = "--palette-foreground-icon-dark-alpha";
    MaterialCssVariables["ForegroundIconsDark"] = "--palette-foreground-icons-dark";
    MaterialCssVariables["ForegroundIconsDarkAlpha"] = "--palette-foreground-icons-dark-alpha";
    MaterialCssVariables["ForegroundTextDark"] = "--palette-foreground-text-dark";
    MaterialCssVariables["ForegroundTextDarkAlpha"] = "--palette-foreground-text-dark-alpha";
    MaterialCssVariables["ForegroundSliderMinDark"] = "--palette-foreground-slider-min-dark";
    MaterialCssVariables["ForegroundSliderMinDarkAlpha"] = "--palette-foreground-slider-min-dark-alpha";
    MaterialCssVariables["ForegroundSliderOffDark"] = "--palette-foreground-slider-off-dark";
    MaterialCssVariables["ForegroundSliderOffDarkAlpha"] = "--palette-foreground-slider-off-dark-alpha";
    MaterialCssVariables["ForegroundSliderOffActiveDark"] = "--palette-foreground-slider-off-active-dark";
    MaterialCssVariables["ForegroundSliderOffActiveDarkAlpha"] = "--palette-foreground-slider-off-active-dark-alpha";
})(MaterialCssVariables || (MaterialCssVariables = {}));

const DEFAULT_MAT_CSS_CFG = {
    isAutoContrast: true,
    isAlternativeColorAlgorithm: false,
    darkThemeClass: 'isDarkTheme',
    lightThemeClass: 'isLightTheme',
    colorMap: [
        { name: '50', map: [52, 0, 0] },
        { name: '100', map: [37, 0, 0] },
        { name: '200', map: [26, 0, 0] },
        { name: '300', map: [12, 0, 0] },
        { name: '400', map: [6, 0, 0] },
        { name: '500', map: [0, 0, 0] },
        { name: '600', map: [0, 6, 0] },
        { name: '700', map: [0, 12, 0] },
        { name: '800', map: [0, 18, 0] },
        { name: '900', map: [0, 24, 0] },
        { name: 'A100', map: [50, 0, 30] },
        { name: 'A200', map: [30, 0, 30] },
        { name: 'A400', map: [10, 0, 15] },
        { name: 'A700', map: [5, 0, 5] },
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

const MATERIAL_CSS_VARS_CFG = new InjectionToken('Mat Css Config');

// @see: https://github.com/angular/angular/issues/20351
/** @dynamic */
class MaterialCssVarsService {
    constructor(rendererFactory, document, cfg) {
        this.document = document;
        this.contrastColorThresholdPrimary = '400';
        this.contrastColorThresholdAccent = '400';
        this.contrastColorThresholdWarn = '400';
        this.isAutoContrast = false;
        this.renderer = rendererFactory.createRenderer(null, null);
        this.ROOT = this.document.documentElement;
        this.cfg = {
            ...DEFAULT_MAT_CSS_CFG,
            ...cfg,
        };
        this.isAutoContrast = this.cfg.isAutoContrast;
        if (this.cfg.isDarkTheme) {
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
    setPrimaryColor(hex) {
        this.primary = hex;
        const varPrefix = MatCssPalettePrefix.Primary;
        const stylePrimary = this._computePaletteColors(varPrefix, this.primary);
        this._setStyle(stylePrimary);
        if (this.isAutoContrast) {
            this._recalculateAndSetContrastColor(varPrefix);
        }
    }
    setAccentColor(hex) {
        this.accent = hex;
        const varPrefix = MatCssPalettePrefix.Accent;
        const styleAccent = this._computePaletteColors(varPrefix, this.accent);
        this._setStyle(styleAccent);
        if (this.isAutoContrast) {
            this._recalculateAndSetContrastColor(varPrefix);
        }
    }
    setWarnColor(hex) {
        this.warn = hex;
        const varPrefix = MatCssPalettePrefix.Warn;
        const styleWarn = this._computePaletteColors(varPrefix, this.warn);
        this._setStyle(styleWarn);
        if (this.isAutoContrast) {
            this._recalculateAndSetContrastColor(varPrefix);
        }
    }
    setVariable(cssVarName, value) {
        this._setStyle([{
                name: cssVarName,
                val: value,
            }]);
    }
    setDarkTheme(isDark) {
        if (isDark) {
            this.document.body.classList.remove(this.cfg.lightThemeClass);
            this.document.body.classList.add(this.cfg.darkThemeClass);
        }
        else {
            this.document.body.classList.remove(this.cfg.darkThemeClass);
            this.document.body.classList.add(this.cfg.lightThemeClass);
        }
        this.isDarkTheme = isDark;
    }
    setAutoContrastEnabled(val) {
        this.isAutoContrast = val;
        if (val) {
            this._recalculateAndSetContrastColor(MatCssPalettePrefix.Primary);
            this._recalculateAndSetContrastColor(MatCssPalettePrefix.Accent);
            this._recalculateAndSetContrastColor(MatCssPalettePrefix.Warn);
        }
        else {
            this.setContrastColorThresholdPrimary(this.contrastColorThresholdPrimary);
            this.setContrastColorThresholdAccent(this.contrastColorThresholdAccent);
            this.setContrastColorThresholdWarn(this.contrastColorThresholdWarn);
        }
    }
    setContrastColorThresholdPrimary(threshold) {
        this.contrastColorThresholdPrimary = threshold;
        this.setContrastColorThreshold(threshold, MatCssPalettePrefix.Primary);
    }
    setContrastColorThresholdAccent(threshold) {
        this.contrastColorThresholdAccent = threshold;
        this.setContrastColorThreshold(threshold, MatCssPalettePrefix.Accent);
    }
    setContrastColorThresholdWarn(threshold) {
        this.contrastColorThresholdWarn = threshold;
        this.setContrastColorThreshold(threshold, MatCssPalettePrefix.Warn);
    }
    setContrastColorThreshold(threshold, palettePrefix) {
        let color = MaterialCssVarsService.DARK_TEXT_VAR;
        const updates = this.cfg.sortedHues.map((hue) => {
            if (hue === threshold) {
                color = MaterialCssVarsService.LIGHT_TEXT_VAR;
            }
            return {
                val: this._getCssVarValue(color),
                name: `${palettePrefix + MaterialCssVarsService.CONTRAST_PREFIX}${hue}`,
            };
        });
        this._setStyle(updates);
    }
    /**
     * Generate palette color based on traditional values
     */
    setAlternativeColorAlgorithm(traditional) {
        this.cfg.isAlternativeColorAlgorithm = traditional;
        this.setPrimaryColor(this.primary);
        this.setAccentColor(this.accent);
        this.setWarnColor(this.warn);
    }
    /** @deprecated use setContrastColorThresholdPrimary instead */
    changeContrastColorThresholdPrimary(threshold) {
        this.setContrastColorThresholdPrimary(threshold);
    }
    /** @deprecated use setContrastColorThresholdAccent instead */
    changeContrastColorThresholdAccent(threshold) {
        this.setContrastColorThresholdAccent(threshold);
    }
    /** @deprecated use setContrastColorThresholdWarn instead */
    changeContrastColorThresholdWarn(threshold) {
        this.setContrastColorThresholdWarn(threshold);
    }
    /** @deprecated use setContrastColorThreshold instead */
    changeContrastColorThreshold(threshold, palettePrefix) {
        this.setContrastColorThreshold(threshold, palettePrefix);
    }
    getPaletteForColor(hex) {
        if (this.cfg.isAlternativeColorAlgorithm) {
            return this.getTraditionalPaletteForColor(hex);
        }
        else {
            return this.getConstantinPaletteForColor(hex);
        }
    }
    getTraditionalPaletteForColor(hex) {
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
    getConstantinPaletteForColor(hex) {
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
    getPaletteWithContrastForColor(hex) {
        const lightText = this._getCssVarValue(MaterialCssVarsService.LIGHT_TEXT_VAR);
        const darkText = this._getCssVarValue(MaterialCssVarsService.DARK_TEXT_VAR);
        const palette = this.getPaletteForColor(hex);
        // TODO handle non auto case
        return palette.map((item) => {
            const contrastStr = item.isLight
                ? lightText
                : darkText;
            const sLight = contrastStr.split(',').map(v => +v);
            const cco = { r: sLight[0], g: sLight[1], b: sLight[2], a: 1 };
            return {
                ...item,
                contrast: {
                    ...cco,
                    str: `${cco.r},${cco.g},${cco.b}`
                },
            };
        });
    }
    _computePaletteColors(prefix, hex) {
        return this.getPaletteForColor(hex).map(item => {
            const c = item.color;
            return {
                name: `${prefix}${item.hue}`,
                val: `${c.r}, ${c.g}, ${c.b}`
            };
        });
    }
    _recalculateAndSetContrastColor(palettePrefix) {
        const updates = this._calculateContrastColorsForCurrentValues(palettePrefix)
            .map(({ contrastColorVar, hue }) => {
            return {
                val: this._getCssVarValue(contrastColorVar),
                name: `${palettePrefix + MaterialCssVarsService.CONTRAST_PREFIX}${hue}`,
            };
        });
        this._setStyle(updates);
    }
    _calculateContrastColorsForCurrentValues(palettePrefix) {
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
    _setStyle(vars) {
        vars.forEach(s => {
            this.renderer.setStyle(this.ROOT, s.name, s.val, RendererStyleFlags2.DashCase);
        });
    }
    _getCssVarValue(v) {
        return getComputedStyle(this.ROOT).getPropertyValue(v);
    }
    /**
     * Compute pallet colors based on a Triad (Constantin)
     * see: https://github.com/mbitson/mcg
     */
    computePalletTriad(hex, hue) {
        const baseLight = new TinyColor('#ffffff');
        const baseDark = this.multiply(new TinyColor(hex).toRgb(), new TinyColor(hex).toRgb());
        const baseTriad = new TinyColor(hex).tetrad();
        let color;
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
            default:
                break;
        }
        return color;
    }
    multiply(rgb1, rgb2) {
        rgb1.b = Math.floor(rgb1.b * rgb2.b / 255);
        rgb1.g = Math.floor(rgb1.g * rgb2.g / 255);
        rgb1.r = Math.floor(rgb1.r * rgb2.r / 255);
        return new TinyColor('rgb ' + rgb1.r + ' ' + rgb1.g + ' ' + rgb1.b);
    }
    getColorObject(value) {
        const c = new TinyColor(value);
        return { rgb: c.toRgb(), isLight: c.isLight() };
    }
}
MaterialCssVarsService.CONTRAST_PREFIX = 'contrast-';
MaterialCssVarsService.DARK_TEXT_VAR = '--dark-primary-text';
MaterialCssVarsService.LIGHT_TEXT_VAR = '--light-primary-text';
MaterialCssVarsService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: MaterialCssVarsService, deps: [{ token: i0.RendererFactory2 }, { token: DOCUMENT }, { token: MATERIAL_CSS_VARS_CFG }], target: i0.ɵɵFactoryTarget.Injectable });
MaterialCssVarsService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: MaterialCssVarsService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: MaterialCssVarsService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: i0.RendererFactory2 }, { type: Document, decorators: [{
                    type: Inject,
                    args: [DOCUMENT]
                }] }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [MATERIAL_CSS_VARS_CFG]
                }] }]; } });

class MaterialCssVarsModule {
    static forRoot(config) {
        return {
            ngModule: MaterialCssVarsModule,
            providers: [{ provide: MATERIAL_CSS_VARS_CFG, useValue: config }]
        };
    }
}
MaterialCssVarsModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: MaterialCssVarsModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
MaterialCssVarsModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: MaterialCssVarsModule, imports: [CommonModule] });
MaterialCssVarsModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: MaterialCssVarsModule, imports: [[
            CommonModule
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: MaterialCssVarsModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [],
                    imports: [
                        CommonModule
                    ]
                }]
        }] });

/*
 * Public API Surface of material-css-vars
 */

/**
 * Generated bundle index. Do not edit.
 */

export { MatCssPalettePrefix, MaterialCssVariables, MaterialCssVarsModule, MaterialCssVarsService };
//# sourceMappingURL=angular-material-css-vars.mjs.map
