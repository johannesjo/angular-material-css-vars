import { RendererFactory2 } from '@angular/core';
import { HueValue, MatCssHueColorContrastMapItem, MatCssHueColorMapItem, MatCssPalettePrefix, MaterialCssVariables, MaterialCssVariablesConfig } from './model';
import * as i0 from "@angular/core";
/** @dynamic */
export declare class MaterialCssVarsService {
    private document;
    private static CONTRAST_PREFIX;
    private static DARK_TEXT_VAR;
    private static LIGHT_TEXT_VAR;
    private renderer;
    private ROOT;
    cfg: MaterialCssVariablesConfig;
    primary: string;
    accent: string;
    warn: string;
    isDarkTheme: boolean;
    contrastColorThresholdPrimary: HueValue;
    contrastColorThresholdAccent: HueValue;
    contrastColorThresholdWarn: HueValue;
    isAutoContrast: boolean;
    constructor(rendererFactory: RendererFactory2, document: Document, cfg: MaterialCssVariablesConfig);
    setPrimaryColor(hex: string): void;
    setAccentColor(hex: string): void;
    setWarnColor(hex: string): void;
    setVariable(cssVarName: MaterialCssVariables, value: string): void;
    setDarkTheme(isDark: boolean): void;
    setAutoContrastEnabled(val: boolean): void;
    setContrastColorThresholdPrimary(threshold: HueValue): void;
    setContrastColorThresholdAccent(threshold: HueValue): void;
    setContrastColorThresholdWarn(threshold: HueValue): void;
    setContrastColorThreshold(threshold: HueValue, palettePrefix: MatCssPalettePrefix): void;
    /**
     * Generate palette color based on traditional values
     */
    setAlternativeColorAlgorithm(traditional: boolean): void;
    /** @deprecated use setContrastColorThresholdPrimary instead */
    changeContrastColorThresholdPrimary(threshold: HueValue): void;
    /** @deprecated use setContrastColorThresholdAccent instead */
    changeContrastColorThresholdAccent(threshold: HueValue): void;
    /** @deprecated use setContrastColorThresholdWarn instead */
    changeContrastColorThresholdWarn(threshold: HueValue): void;
    /** @deprecated use setContrastColorThreshold instead */
    changeContrastColorThreshold(threshold: HueValue, palettePrefix: MatCssPalettePrefix): void;
    getPaletteForColor(hex: string): MatCssHueColorMapItem[];
    private getTraditionalPaletteForColor;
    private getConstantinPaletteForColor;
    getPaletteWithContrastForColor(hex: string): MatCssHueColorContrastMapItem[];
    private _computePaletteColors;
    private _recalculateAndSetContrastColor;
    private _calculateContrastColorsForCurrentValues;
    private _setStyle;
    private _getCssVarValue;
    /**
     * Compute pallet colors based on a Triad (Constantin)
     * see: https://github.com/mbitson/mcg
     */
    private computePalletTriad;
    private multiply;
    private getColorObject;
    static ɵfac: i0.ɵɵFactoryDeclaration<MaterialCssVarsService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<MaterialCssVarsService>;
}
