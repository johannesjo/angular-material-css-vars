"use strict";
(self["webpackChunkangular_material_css_vars"] = self["webpackChunkangular_material_css_vars"] || []).push([["main"],{

/***/ 5215:
/*!*****************************************************************!*\
  !*** ./projects/material-css-vars/src/lib/default-cfg.const.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DEFAULT_MAT_CSS_CFG": () => (/* binding */ DEFAULT_MAT_CSS_CFG)
/* harmony export */ });
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


/***/ }),

/***/ 875:
/*!************************************************************************!*\
  !*** ./projects/material-css-vars/src/lib/material-css-vars.module.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MaterialCssVarsModule": () => (/* binding */ MaterialCssVarsModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _mat_css_config_token_const__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../mat-css-config-token.const */ 5278);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4001);



class MaterialCssVarsModule {
    static forRoot(config) {
        return {
            ngModule: MaterialCssVarsModule,
            providers: [{ provide: _mat_css_config_token_const__WEBPACK_IMPORTED_MODULE_0__.MATERIAL_CSS_VARS_CFG, useValue: config }]
        };
    }
}
MaterialCssVarsModule.ɵfac = function MaterialCssVarsModule_Factory(t) { return new (t || MaterialCssVarsModule)(); };
MaterialCssVarsModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: MaterialCssVarsModule });
MaterialCssVarsModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](MaterialCssVarsModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule] }); })();


/***/ }),

/***/ 973:
/*!*************************************************************************!*\
  !*** ./projects/material-css-vars/src/lib/material-css-vars.service.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MaterialCssVarsService": () => (/* binding */ MaterialCssVarsService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _ctrl_tinycolor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ctrl/tinycolor */ 6658);
/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./model */ 7100);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _default_cfg_const__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./default-cfg.const */ 5215);
/* harmony import */ var _mat_css_config_token_const__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../mat-css-config-token.const */ 5278);







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
        this.cfg = Object.assign(Object.assign({}, _default_cfg_const__WEBPACK_IMPORTED_MODULE_1__.DEFAULT_MAT_CSS_CFG), cfg);
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
        const varPrefix = _model__WEBPACK_IMPORTED_MODULE_0__.MatCssPalettePrefix.Primary;
        const stylePrimary = this._computePaletteColors(varPrefix, this.primary);
        this._setStyle(stylePrimary);
        if (this.isAutoContrast) {
            this._recalculateAndSetContrastColor(varPrefix);
        }
    }
    setAccentColor(hex) {
        this.accent = hex;
        const varPrefix = _model__WEBPACK_IMPORTED_MODULE_0__.MatCssPalettePrefix.Accent;
        const styleAccent = this._computePaletteColors(varPrefix, this.accent);
        this._setStyle(styleAccent);
        if (this.isAutoContrast) {
            this._recalculateAndSetContrastColor(varPrefix);
        }
    }
    setWarnColor(hex) {
        this.warn = hex;
        const varPrefix = _model__WEBPACK_IMPORTED_MODULE_0__.MatCssPalettePrefix.Warn;
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
            this._recalculateAndSetContrastColor(_model__WEBPACK_IMPORTED_MODULE_0__.MatCssPalettePrefix.Primary);
            this._recalculateAndSetContrastColor(_model__WEBPACK_IMPORTED_MODULE_0__.MatCssPalettePrefix.Accent);
            this._recalculateAndSetContrastColor(_model__WEBPACK_IMPORTED_MODULE_0__.MatCssPalettePrefix.Warn);
        }
        else {
            this.setContrastColorThresholdPrimary(this.contrastColorThresholdPrimary);
            this.setContrastColorThresholdAccent(this.contrastColorThresholdAccent);
            this.setContrastColorThresholdWarn(this.contrastColorThresholdWarn);
        }
    }
    setContrastColorThresholdPrimary(threshold) {
        this.contrastColorThresholdPrimary = threshold;
        this.setContrastColorThreshold(threshold, _model__WEBPACK_IMPORTED_MODULE_0__.MatCssPalettePrefix.Primary);
    }
    setContrastColorThresholdAccent(threshold) {
        this.contrastColorThresholdAccent = threshold;
        this.setContrastColorThreshold(threshold, _model__WEBPACK_IMPORTED_MODULE_0__.MatCssPalettePrefix.Accent);
    }
    setContrastColorThresholdWarn(threshold) {
        this.contrastColorThresholdWarn = threshold;
        this.setContrastColorThreshold(threshold, _model__WEBPACK_IMPORTED_MODULE_0__.MatCssPalettePrefix.Warn);
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
            const mappedColor = new _ctrl_tinycolor__WEBPACK_IMPORTED_MODULE_3__.TinyColor(hex)
                .lighten(item.map[0])
                .darken(item.map[1])
                .saturate(item.map[2]);
            const c = new _ctrl_tinycolor__WEBPACK_IMPORTED_MODULE_3__.TinyColor(mappedColor);
            return {
                hue: item.name,
                isLight: c.isLight(),
                color: Object.assign(Object.assign({}, c.toRgb()), { str: `rgb(${c.toRgb().r},${c.toRgb().g},${c.toRgb().b})` })
            };
        });
    }
    getConstantinPaletteForColor(hex) {
        return this.cfg.colorMap.map((item) => {
            const c = this.computePalletTriad(hex, item.name);
            return {
                hue: item.name,
                isLight: c.isLight,
                color: Object.assign(Object.assign({}, c.rgb), { str: `rgb(${c.rgb.r},${c.rgb.g},${c.rgb.b})` })
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
            return Object.assign(Object.assign({}, item), { contrast: Object.assign(Object.assign({}, cco), { str: `${cco.r},${cco.g},${cco.b}` }) });
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
            const c = new _ctrl_tinycolor__WEBPACK_IMPORTED_MODULE_3__.TinyColor(`rgb(${hueVarVal})`);
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
            this.renderer.setStyle(this.ROOT, s.name, s.val, _angular_core__WEBPACK_IMPORTED_MODULE_4__.RendererStyleFlags2.DashCase);
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
        const baseLight = new _ctrl_tinycolor__WEBPACK_IMPORTED_MODULE_3__.TinyColor('#ffffff');
        const baseDark = this.multiply(new _ctrl_tinycolor__WEBPACK_IMPORTED_MODULE_3__.TinyColor(hex).toRgb(), new _ctrl_tinycolor__WEBPACK_IMPORTED_MODULE_3__.TinyColor(hex).toRgb());
        const baseTriad = new _ctrl_tinycolor__WEBPACK_IMPORTED_MODULE_3__.TinyColor(hex).tetrad();
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
        return new _ctrl_tinycolor__WEBPACK_IMPORTED_MODULE_3__.TinyColor('rgb ' + rgb1.r + ' ' + rgb1.g + ' ' + rgb1.b);
    }
    getColorObject(value) {
        const c = new _ctrl_tinycolor__WEBPACK_IMPORTED_MODULE_3__.TinyColor(value);
        return { rgb: c.toRgb(), isLight: c.isLight() };
    }
}
MaterialCssVarsService.CONTRAST_PREFIX = 'contrast-';
MaterialCssVarsService.DARK_TEXT_VAR = '--dark-primary-text';
MaterialCssVarsService.LIGHT_TEXT_VAR = '--light-primary-text';
MaterialCssVarsService.ɵfac = function MaterialCssVarsService_Factory(t) { return new (t || MaterialCssVarsService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__.RendererFactory2), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_5__.DOCUMENT), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_mat_css_config_token_const__WEBPACK_IMPORTED_MODULE_2__.MATERIAL_CSS_VARS_CFG)); };
MaterialCssVarsService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: MaterialCssVarsService, factory: MaterialCssVarsService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 7100:
/*!*****************************************************!*\
  !*** ./projects/material-css-vars/src/lib/model.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MatCssPalettePrefix": () => (/* binding */ MatCssPalettePrefix),
/* harmony export */   "MaterialCssVariables": () => (/* binding */ MaterialCssVariables)
/* harmony export */ });
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


/***/ }),

/***/ 5278:
/*!**********************************************************************!*\
  !*** ./projects/material-css-vars/src/mat-css-config-token.const.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MATERIAL_CSS_VARS_CFG": () => (/* binding */ MATERIAL_CSS_VARS_CFG)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4001);

const MATERIAL_CSS_VARS_CFG = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('Mat Css Config');


/***/ }),

/***/ 2050:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ 6298);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/snack-bar */ 4996);
/* harmony import */ var _projects_material_css_vars_src_lib_material_css_vars_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../projects/material-css-vars/src/lib/material-css-vars.service */ 973);
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/sidenav */ 1986);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/toolbar */ 7727);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/card */ 8662);
/* harmony import */ var ngx_color_picker__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-color-picker */ 2608);
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/slide-toggle */ 1232);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/form-field */ 3981);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/select */ 1036);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/tabs */ 9391);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/button */ 7752);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/icon */ 8852);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/input */ 8359);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/checkbox */ 9188);
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/radio */ 7435);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/progress-spinner */ 9372);
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/progress-bar */ 3776);
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/chips */ 1933);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/menu */ 9872);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/core */ 4357);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/datepicker */ 6506);
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/slider */ 5291);


























function AppComponent_mat_option_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 152);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const hue_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", hue_r17.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", hue_r17.viewValue, " ");
} }
function AppComponent_mat_option_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 152);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const hue_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", hue_r18.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", hue_r18.viewValue, " ");
} }
function AppComponent_mat_option_44_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 152);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const hue_r19 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", hue_r19.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", hue_r19.viewValue, " ");
} }
function AppComponent_li_304_Template(rf, ctx) { if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-checkbox", 153);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function AppComponent_li_304_Template_mat_checkbox_ngModelChange_1_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r22); const subtask_r20 = restoredCtx.$implicit; return subtask_r20.completed = $event; })("ngModelChange", function AppComponent_li_304_Template_mat_checkbox_ngModelChange_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r22); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r23.updateAllComplete(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const subtask_r20 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", subtask_r20.completed)("color", subtask_r20.color);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", subtask_r20.name, " ");
} }
function AppComponent_section_329_Template(rf, ctx) { if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "label", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Progress:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "mat-slider", 154);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function AppComponent_section_329_Template_mat_slider_ngModelChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r25); const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r24.spinnerValue = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r5.spinnerValue);
} }
function AppComponent_mat_chip_351_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-chip", 155);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const chipColor_r26 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("color", chipColor_r26.color);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", chipColor_r26.name, " ");
} }
class AppComponent {
    constructor(_dialog, _snackbar, materialCssVarsService) {
        this._dialog = _dialog;
        this._snackbar = _snackbar;
        this.materialCssVarsService = materialCssVarsService;
        this.isDarkTheme = false;
        this.isAlternativeColorAlgorithm = false;
        this.hues = [
            { value: '50', viewValue: '50' },
            { value: '100', viewValue: '100' },
            { value: '200', viewValue: '200' },
            { value: '300', viewValue: '300' },
            { value: '400', viewValue: '400' },
            { value: '500', viewValue: '500' },
            { value: '600', viewValue: '600' },
            { value: '700', viewValue: '700' },
            { value: '800', viewValue: '800' },
            { value: '900', viewValue: '900' },
            { value: 'A100', viewValue: 'A100' },
            { value: 'A200', viewValue: 'A200' },
            { value: 'A400', viewValue: 'A400' },
            { value: 'A700', viewValue: 'A700' },
        ];
        this.spinnerMode = 'indeterminate';
        this.spinnerColor = 'primary';
        this.availableSpinnerColors = [
            { name: 'none', color: '' },
            { name: 'Primary', color: 'primary' },
            { name: 'Accent', color: 'accent' },
            { name: 'Warn', color: 'warn' }
        ];
        this.progress = 0;
        this.task = {
            name: 'Indeterminate',
            completed: false,
            color: 'primary',
            subtasks: [
                { name: 'Primary', completed: false, color: 'primary' },
                { name: 'Accent', completed: false, color: 'accent' },
                { name: 'Warn', completed: false, color: 'warn' }
            ]
        };
        this.allComplete = false;
        this.toggleTheme();
        // this.onPrimaryChange(this.primary);
        // this.onAccentChange(this.accent);
        // Update the value for the progress-bar on an interval.
        setInterval(() => {
            this.progress = (this.progress + Math.floor(Math.random() * 4) + 1) % 100;
        }, 200);
    }
    showSnackbar(message, action) {
        // this._snackbar.open('YUM SNACKS', 'CHEW');
        this._snackbar.open(message, action);
    }
    onPrimaryChange(hex) {
        this.materialCssVarsService.setPrimaryColor(hex);
        this.palettePrimary = this.materialCssVarsService.getPaletteWithContrastForColor(hex);
    }
    onAccentChange(hex) {
        this.materialCssVarsService.setAccentColor(hex);
    }
    onWarnChange(hex) {
        this.materialCssVarsService.setWarnColor(hex);
    }
    onChangeThresholdPrimary(threshold) {
        this.threshold = threshold;
        this.materialCssVarsService.setContrastColorThresholdPrimary(threshold);
    }
    onChangeThresholdAccent(threshold) {
        this.threshold = threshold;
        this.materialCssVarsService.setContrastColorThresholdAccent(threshold);
    }
    onChangeThresholdWarn(threshold) {
        this.threshold = threshold;
        this.materialCssVarsService.setContrastColorThresholdWarn(threshold);
    }
    toggleAutoContrast() {
        this.materialCssVarsService.setAutoContrastEnabled(!this.materialCssVarsService.isAutoContrast);
    }
    toggleTheme() {
        this.isDarkTheme = !this.isDarkTheme;
        this.materialCssVarsService.setDarkTheme(this.isDarkTheme);
    }
    toggleTraditionalColor() {
        this.isAlternativeColorAlgorithm = !this.isAlternativeColorAlgorithm;
        this.materialCssVarsService.setAlternativeColorAlgorithm(this.isAlternativeColorAlgorithm);
    }
    get colorAlgorithm() {
        return this.isAlternativeColorAlgorithm ? 'Alternative' : 'Constantin (default)';
    }
    updateAllComplete() {
        this.allComplete = this.task.subtasks != null && this.task.subtasks.every(t => t.completed);
    }
    someComplete() {
        if (this.task.subtasks == null) {
            return false;
        }
        return this.task.subtasks.filter(t => t.completed).length > 0 && !this.allComplete;
    }
    setAll(completed) {
        this.allComplete = completed;
        if (this.task.subtasks == null) {
            return;
        }
        this.task.subtasks.forEach(t => t.completed = completed);
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__.MatSnackBar), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_projects_material_css_vars_src_lib_material_css_vars_service__WEBPACK_IMPORTED_MODULE_0__.MaterialCssVarsService)); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 469, vars: 68, consts: [["color", "primary", 1, "mat-elevation-z5", "app-header"], [1, "title"], [1, "content", "mat-typography"], [1, "box"], [1, "config-cards"], [1, "mat-elevation-z3"], [1, "color-picker-el", 3, "colorPicker", "cpAlphaChannel", "cpDialogDisplay", "cpOKButton", "cpOutputFormat", "cpToggle", "colorPickerChange"], [3, "checked", "change"], ["placeholder", "Threshold for primary contrast color", 3, "disabled", "ngModel", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], ["placeholder", "Threshold for Accent contrast color", 3, "disabled", "ngModel", "ngModelChange"], ["placeholder", "Threshold for Warn contrast color", 3, "disabled", "ngModel", "ngModelChange"], [2, "margin-bottom", "0"], [1, "palette", "mat-elevation-z5"], [1, "bg-50"], [1, "bg-100"], [1, "bg-200"], [1, "bg-300"], [1, "bg-400"], [1, "bg-500"], [1, "bg-600"], [1, "bg-700"], [1, "bg-800"], [1, "bg-900"], [1, "bga-50"], [1, "bga-100"], [1, "bga-200"], [1, "bga-300"], [1, "bga-400"], [1, "bga-500"], [1, "bga-600"], [1, "bga-700"], [1, "bga-800"], [1, "bga-900"], [1, "bgw-50"], [1, "bgw-100"], [1, "bgw-200"], [1, "bgw-300"], [1, "bgw-400"], [1, "bgw-500"], [1, "bgw-600"], [1, "bgw-700"], [1, "bgw-800"], [1, "bgw-900"], [2, "margin-top", "32px"], ["label", "Buttons"], [1, "example-button-row"], ["mat-button", ""], ["color", "primary", "mat-button", ""], ["color", "accent", "mat-button", ""], ["color", "warn", "mat-button", ""], ["disabled", "", "mat-button", ""], ["mat-button", "", "routerLink", "."], ["mat-raised-button", ""], ["color", "primary", "mat-raised-button", ""], ["color", "accent", "mat-raised-button", ""], ["color", "warn", "mat-raised-button", ""], ["disabled", "", "mat-raised-button", ""], ["mat-raised-button", "", "routerLink", "."], ["mat-stroked-button", ""], ["color", "primary", "mat-stroked-button", ""], ["color", "accent", "mat-stroked-button", ""], ["color", "warn", "mat-stroked-button", ""], ["disabled", "", "mat-stroked-button", ""], ["mat-stroked-button", "", "routerLink", "."], ["mat-flat-button", ""], ["color", "primary", "mat-flat-button", ""], ["color", "accent", "mat-flat-button", ""], ["color", "warn", "mat-flat-button", ""], ["disabled", "", "mat-flat-button", ""], ["mat-flat-button", "", "routerLink", "."], ["aria-label", "Example icon-button with a heart icon", "mat-icon-button", ""], ["aria-label", "Example icon-button with a heart icon", "color", "primary", "mat-icon-button", ""], ["aria-label", "Example icon-button with a heart icon", "color", "accent", "mat-icon-button", ""], ["aria-label", "Example icon-button with a heart icon", "color", "warn", "mat-icon-button", ""], ["aria-label", "Example icon-button with a heart icon", "disabled", "", "mat-icon-button", ""], ["mat-fab", ""], ["color", "primary", "mat-fab", ""], ["color", "accent", "mat-fab", ""], ["color", "warn", "mat-fab", ""], ["disabled", "", "mat-fab", ""], ["aria-label", "Example icon-button with a heart icon", "mat-fab", ""], ["mat-fab", "", "routerLink", "."], ["mat-mini-fab", ""], ["color", "primary", "mat-mini-fab", ""], ["color", "accent", "mat-mini-fab", ""], ["color", "warn", "mat-mini-fab", ""], ["disabled", "", "mat-mini-fab", ""], ["aria-label", "Example icon-button with a heart icon", "mat-mini-fab", ""], ["mat-mini-fab", "", "routerLink", "."], ["label", "Form Inputs"], [1, "input-section"], ["matInput", "", "placeholder", "First name"], ["matInput", "", "maxlength", "50", "placeholder", "Nickname"], ["nickname", ""], ["align", "end"], ["matPrefix", "", 1, "input-icon"], ["matInput", "", "placeholder", "Favorite phone"], ["matInput", "", "placeholder", "Motorcycle model"], [1, "checkbox-section"], [1, "checkbox-margin"], [1, "checkbox-margin", 3, "disabled"], [1, "checkbox-list-section"], [1, "checkbox-margin", 3, "checked", "color", "indeterminate", "change"], [4, "ngFor", "ngForOf"], ["label", "Spinner & Progress"], [1, "example-section"], [1, "example-margin"], [3, "ngModel", "ngModelChange"], ["value", "primary", 1, "example-margin"], ["value", "accent", 1, "example-margin"], ["value", "warn", 1, "example-margin"], ["value", "determinate", 1, "example-margin"], ["value", "indeterminate", 1, "example-margin"], ["class", "example-section", 4, "ngIf"], [1, "example-margin", 3, "color", "mode", "value"], ["aria-label", "Indeterminate progress-bar example", "mode", "indeterminate", 1, "progress"], ["aria-label", "Determinate progress-bar example", "color", "accent", "mode", "determinate", 1, "progress", 3, "value"], ["label", "Various"], ["selected", "true", 3, "color", 4, "ngFor", "ngForOf"], ["mat-icon-button", "", 3, "matMenuTriggerFor"], ["menu", "matMenu"], ["mat-menu-item", ""], ["disabled", "", "mat-menu-item", ""], ["value", "option1"], ["value", "option2", "disabled", ""], ["value", "option3"], ["color", "primary", "appearance", "fill"], ["matInput", "", 3, "matDatepicker"], ["matSuffix", "", 3, "for"], ["picker1", ""], ["color", "accent", "appearance", "fill"], ["picker2", ""], ["color", "warn", "appearance", "fill"], ["picker3", ""], ["color", "primary"], ["picker4", ""], ["appearance", "fill"], [3, "rangePicker"], ["matStartDate", "", "placeholder", "Start date"], ["matEndDate", "", "placeholder", "End date"], ["rangePicker1", ""], ["rangePicker2", ""], ["rangePicker3", ""], ["label", "Snackbar"], ["matInput", "", "value", "Disco party!"], ["message", ""], ["matInput", "", "value", "Dance"], ["action", ""], ["mat-stroked-button", "", 3, "click"], ["mat-fab", "", 1, "fab"], ["aria-label", "Example icon-button with a heart icon"], [3, "value"], [3, "ngModel", "color", "ngModelChange"], [1, "example-margin", 3, "ngModel", "ngModelChange"], ["selected", "true", 3, "color"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-sidenav-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-toolbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Angular Material CSS Vars Demo");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "section", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Configure Theme");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "mat-card", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Primary color");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("colorPickerChange", function AppComponent_Template_div_colorPickerChange_13_listener($event) { return ctx.onPrimaryChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "mat-card", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Accent color");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("colorPickerChange", function AppComponent_Template_div_colorPickerChange_18_listener($event) { return ctx.onAccentChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "mat-card", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Warn color");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("colorPickerChange", function AppComponent_Template_div_colorPickerChange_23_listener($event) { return ctx.onWarnChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "mat-card", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "Contrast Color");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "mat-slide-toggle", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function AppComponent_Template_mat_slide_toggle_change_28_listener() { return ctx.toggleAutoContrast(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "Auto Contrast Colors ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](30, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](31, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "mat-select", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function AppComponent_Template_mat_select_ngModelChange_33_listener($event) { return ctx.onChangeThresholdPrimary($event); })("ngModelChange", function AppComponent_Template_mat_select_ngModelChange_33_listener($event) { return ctx.materialCssVarsService.contrastColorThresholdPrimary = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](34, AppComponent_mat_option_34_Template, 2, 2, "mat-option", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](35, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](36, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "mat-select", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function AppComponent_Template_mat_select_ngModelChange_38_listener($event) { return ctx.onChangeThresholdAccent($event); })("ngModelChange", function AppComponent_Template_mat_select_ngModelChange_38_listener($event) { return ctx.materialCssVarsService.contrastColorThresholdAccent = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](39, AppComponent_mat_option_39_Template, 2, 2, "mat-option", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](40, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](41, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "mat-select", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function AppComponent_Template_mat_select_ngModelChange_43_listener($event) { return ctx.onChangeThresholdWarn($event); })("ngModelChange", function AppComponent_Template_mat_select_ngModelChange_43_listener($event) { return ctx.materialCssVarsService.contrastColorThresholdWarn = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](44, AppComponent_mat_option_44_Template, 2, 2, "mat-option", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "mat-card", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](48, "Dark/Light");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "mat-slide-toggle", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function AppComponent_Template_mat_slide_toggle_change_49_listener() { return ctx.toggleTheme(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](50, "Dark Theme Enabled ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "mat-card", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](54, "Color Algorithm");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "mat-slide-toggle", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function AppComponent_Template_mat_slide_toggle_change_55_listener() { return ctx.toggleTraditionalColor(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](56);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "mat-card", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "h2", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](60, "Palette");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](64, "50");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](67, "100");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](69, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](70, "200");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](71, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](72, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](73, "300");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](74, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](75, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](76, "400");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](77, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](78, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](79, "primary");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](80, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](81, "500");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](82, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](83, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](84, "600");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](85, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](86, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](87, "700");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](88, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](89, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](90, "800");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](91, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](92, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](93, "900");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](94, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](95, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](96, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](97, "50");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](98, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](99, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](100, "100");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](101, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](102, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](103, "200");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](104, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](105, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](106, "300");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](107, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](108, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](109, "400");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](110, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](111, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](112, "primary");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](113, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](114, "500");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](115, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](116, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](117, "600");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](118, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](119, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](120, "700");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](121, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](122, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](123, "800");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](124, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](125, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](126, "900");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](127, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](128, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](129, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](130, "50");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](131, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](132, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](133, "100");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](134, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](135, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](136, "200");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](137, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](138, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](139, "300");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](140, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](141, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](142, "400");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](143, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](144, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](145, "primary");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](146, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](147, "500");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](148, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](149, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](150, "600");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](151, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](152, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](153, "700");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](154, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](155, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](156, "800");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](157, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](158, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](159, "900");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](160, "section", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](161, "h1", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](162, "Demo Components");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](163, "mat-tab-group");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](164, "mat-tab", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](165, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](166, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](167, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](168, "Material Buttons");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](169, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](170, "button", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](171, "Basic");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](172, "button", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](173, "Primary ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](174, "button", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](175, "Accent ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](176, "button", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](177, "Warn ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](178, "button", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](179, "Disabled ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](180, "a", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](181, "Link");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](182, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](183, "button", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](184, "Basic");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](185, "button", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](186, "Primary ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](187, "button", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](188, "Accent ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](189, "button", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](190, "Warn ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](191, "button", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](192, "Disabled ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](193, "a", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](194, "Link");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](195, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](196, "button", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](197, "Basic");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](198, "button", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](199, "Primary ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](200, "button", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](201, "Accent ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](202, "button", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](203, "Warn ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](204, "button", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](205, "Disabled ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](206, "a", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](207, "Link");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](208, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](209, "button", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](210, "Basic");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](211, "button", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](212, "Primary ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](213, "button", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](214, "Accent ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](215, "button", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](216, "Warn ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](217, "button", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](218, "Disabled ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](219, "a", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](220, "Link");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](221, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](222, "button", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](223, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](224, "favorite");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](225, "button", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](226, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](227, "favorite");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](228, "button", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](229, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](230, "favorite");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](231, "button", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](232, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](233, "favorite");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](234, "button", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](235, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](236, "favorite");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](237, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](238, "button", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](239, "Basic");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](240, "button", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](241, "Primary ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](242, "button", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](243, "Accent ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](244, "button", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](245, "Warn ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](246, "button", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](247, "Disabled ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](248, "button", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](249, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](250, "favorite");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](251, "a", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](252, "Link");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](253, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](254, "button", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](255, "Basic");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](256, "button", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](257, "Primary ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](258, "button", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](259, "Accent ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](260, "button", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](261, "Warn ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](262, "button", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](263, "Disabled ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](264, "button", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](265, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](266, "favorite");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](267, "a", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](268, "Link");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](269, "mat-tab", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](270, "mat-card", 91);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](271, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](272, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](273, "Material Input");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](274, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](275, "input", 92);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](276, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](277, "input", 93, 94);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](279, "mat-hint", 95);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](280);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](281, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](282, "mat-icon", 96);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](283, "android ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](284, "input", 97);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](285, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](286, "mat-icon", 96);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](287, "motorcycle ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](288, "input", 98);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](289, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](290, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](291, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](292, "Material Checkbox");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](293, "section", 99);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](294, "mat-checkbox", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](295, "Check me!");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](296, "mat-checkbox", 101);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](297, "Disabled");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](298, "section", 99);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](299, "span", 102);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](300, "mat-checkbox", 103);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function AppComponent_Template_mat_checkbox_change_300_listener($event) { return ctx.setAll($event.checked); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](301);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](302, "span", 102);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](303, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](304, AppComponent_li_304_Template, 3, 3, "li", 104);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](305, "mat-tab", 105);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](306, "section", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](307, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](308, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](309, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](310, "Progress spinner configuration");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](311, "section", 106);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](312, "label", 107);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](313, "Color:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](314, "mat-radio-group", 108);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function AppComponent_Template_mat_radio_group_ngModelChange_314_listener($event) { return ctx.spinnerColor = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](315, "mat-radio-button", 109);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](316, " Primary ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](317, "mat-radio-button", 110);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](318, " Accent ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](319, "mat-radio-button", 111);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](320, " Warn ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](321, "section", 106);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](322, "label", 107);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](323, "Mode:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](324, "mat-radio-group", 108);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function AppComponent_Template_mat_radio_group_ngModelChange_324_listener($event) { return ctx.spinnerMode = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](325, "mat-radio-button", 112);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](326, " Determinate ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](327, "mat-radio-button", 113);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](328, " Indeterminate ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](329, AppComponent_section_329_Template, 4, 1, "section", 114);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](330, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](331, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](332, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](333, "Result");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](334, "mat-progress-spinner", 115);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](335, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](336, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](337, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](338, "Material Progress Bar");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](339, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](340, " Indeterminate progress-bar ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](341, "mat-progress-bar", 116);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](342, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](343);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](344, "mat-progress-bar", 117);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](345, "mat-tab", 118);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](346, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](347, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](348, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](349, "Material Chips");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](350, "mat-chip-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](351, AppComponent_mat_chip_351_Template, 2, 2, "mat-chip", 119);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](352, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](353, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](354, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](355, "Material Menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](356, "button", 120);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](357, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](358, "more_vert");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](359, "mat-menu", null, 121);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](361, "button", 122);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](362, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](363, "dialpad");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](364, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](365, "Redial");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](366, "button", 123);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](367, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](368, "voicemail");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](369, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](370, "Check voicemail");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](371, "button", 122);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](372, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](373, "notifications_off");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](374, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](375, "Disable alerts");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](376, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](377, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](378, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](379, "Material Select");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](380, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](381, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](382, "Choose an option");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](383, "mat-select");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](384, "mat-option", 124);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](385, "Option 1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](386, "mat-option", 125);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](387, "Option 2 (disabled)");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](388, "mat-option", 126);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](389, "Option 3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](390, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](391, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](392, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](393, "Material Date Picker");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](394, "mat-form-field", 127);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](395, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](396, "Choose a date (default)");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](397, "input", 128);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](398, "mat-datepicker-toggle", 129);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](399, "mat-datepicker", null, 130);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](401, "mat-form-field", 131);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](402, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](403, "Choose a date (accent)");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](404, "input", 128);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](405, "mat-datepicker-toggle", 129);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](406, "mat-datepicker", null, 132);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](408, "mat-form-field", 133);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](409, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](410, "Choose a date (warn)");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](411, "input", 128);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](412, "mat-datepicker-toggle", 129);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](413, "mat-datepicker", null, 134);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](415, "mat-form-field", 131);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](416, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](417, "Custom (accent/primary)");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](418, "input", 128);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](419, "mat-datepicker-toggle", 129);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](420, "mat-datepicker", 135, 136);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](422, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](423, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](424, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](425, "Material Date Range Picker");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](426, "mat-form-field", 137);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](427, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](428, "Enter a date range (default)");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](429, "mat-date-range-input", 138);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](430, "input", 139);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](431, "input", 140);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](432, "mat-datepicker-toggle", 129);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](433, "mat-date-range-picker", null, 141);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](435, "mat-form-field", 131);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](436, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](437, "Enter a date range (accent)");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](438, "mat-date-range-input", 138);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](439, "input", 139);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](440, "input", 140);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](441, "mat-datepicker-toggle", 129);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](442, "mat-date-range-picker", null, 142);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](444, "mat-form-field", 133);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](445, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](446, "Enter a date range (warn)");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](447, "mat-date-range-input", 138);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](448, "input", 139);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](449, "input", 140);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](450, "mat-datepicker-toggle", 129);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](451, "mat-date-range-picker", null, 143);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](453, "mat-tab", 144);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](454, "mat-form-field", 137);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](455, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](456, "Message");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](457, "input", 145, 146);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](459, "mat-form-field", 137);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](460, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](461, "Action");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](462, "input", 147, 148);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](464, "button", 149);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AppComponent_Template_button_click_464_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r27); const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](458); const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](463); return ctx.showSnackbar(_r15.value, _r16.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](465, "Show snack-bar");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](466, "button", 150);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](467, "mat-icon", 151);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](468, "favorite");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](278);
        const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](360);
        const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](400);
        const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](407);
        const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](414);
        const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](421);
        const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](434);
        const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](443);
        const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](452);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("background", ctx.materialCssVarsService.primary);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("colorPicker", ctx.materialCssVarsService.primary)("cpAlphaChannel", "disabled")("cpDialogDisplay", "inline")("cpOKButton", false)("cpOutputFormat", "hex")("cpToggle", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("background", ctx.materialCssVarsService.accent);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("colorPicker", ctx.materialCssVarsService.accent)("cpAlphaChannel", "disabled")("cpDialogDisplay", "inline")("cpOKButton", false)("cpOutputFormat", "hex")("cpToggle", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("background", ctx.materialCssVarsService.warn);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("colorPicker", ctx.materialCssVarsService.warn)("cpAlphaChannel", "disabled")("cpDialogDisplay", "inline")("cpOKButton", false)("cpOutputFormat", "hex")("cpToggle", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("checked", ctx.materialCssVarsService.isAutoContrast);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.materialCssVarsService.isAutoContrast)("ngModel", ctx.materialCssVarsService.contrastColorThresholdPrimary);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.hues);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.materialCssVarsService.isAutoContrast)("ngModel", ctx.materialCssVarsService.contrastColorThresholdAccent);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.hues);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.materialCssVarsService.isAutoContrast)("ngModel", ctx.materialCssVarsService.contrastColorThresholdWarn);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.hues);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("checked", ctx.isDarkTheme);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("checked", ctx.isAlternativeColorAlgorithm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", ctx.colorAlgorithm, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](224);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _r3.value.length, " / 50 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("checked", ctx.allComplete)("color", ctx.task.color)("indeterminate", ctx.someComplete());
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.task.name, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.task.subtasks);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.spinnerColor);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.spinnerMode);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.spinnerMode === "determinate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("color", ctx.spinnerColor)("mode", ctx.spinnerMode)("value", ctx.spinnerValue);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" Determinate progress bar - ", ctx.progress, "% ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx.progress);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.availableSpinnerColors);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matMenuTriggerFor", _r7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](41);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matDatepicker", _r8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("for", _r8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matDatepicker", _r9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("for", _r9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matDatepicker", _r10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("for", _r10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matDatepicker", _r11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("for", _r11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("rangePicker", _r12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("for", _r12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("rangePicker", _r13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("for", _r13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("rangePicker", _r14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("for", _r14);
    } }, directives: [_angular_material_sidenav__WEBPACK_IMPORTED_MODULE_4__.MatSidenavContainer, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__.MatToolbar, _angular_material_card__WEBPACK_IMPORTED_MODULE_6__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_6__.MatCardContent, ngx_color_picker__WEBPACK_IMPORTED_MODULE_7__.ColorPickerDirective, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_8__.MatSlideToggle, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatFormField, _angular_material_select__WEBPACK_IMPORTED_MODULE_10__.MatSelect, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgForOf, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_13__.MatTabGroup, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_13__.MatTab, _angular_material_button__WEBPACK_IMPORTED_MODULE_14__.MatButton, _angular_material_button__WEBPACK_IMPORTED_MODULE_14__.MatAnchor, _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__.MatIcon, _angular_material_input__WEBPACK_IMPORTED_MODULE_16__.MatInput, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatHint, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatPrefix, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_17__.MatCheckbox, _angular_material_radio__WEBPACK_IMPORTED_MODULE_18__.MatRadioGroup, _angular_material_radio__WEBPACK_IMPORTED_MODULE_18__.MatRadioButton, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_19__.MatProgressSpinner, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_20__.MatProgressBar, _angular_material_chips__WEBPACK_IMPORTED_MODULE_21__.MatChipList, _angular_material_menu__WEBPACK_IMPORTED_MODULE_22__.MatMenuTrigger, _angular_material_menu__WEBPACK_IMPORTED_MODULE_22__.MatMenu, _angular_material_menu__WEBPACK_IMPORTED_MODULE_22__.MatMenuItem, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatLabel, _angular_material_core__WEBPACK_IMPORTED_MODULE_23__.MatOption, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_24__.MatDatepickerInput, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_24__.MatDatepickerToggle, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatSuffix, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_24__.MatDatepicker, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_24__.MatDateRangeInput, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_24__.MatStartDate, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_24__.MatEndDate, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_24__.MatDateRangePicker, _angular_material_slider__WEBPACK_IMPORTED_MODULE_25__.MatSlider, _angular_material_chips__WEBPACK_IMPORTED_MODULE_21__.MatChip], styles: [".bg-50[_ngcontent-%COMP%] {\n  background: rgb(var(--palette-primary-50));\n  color: rgb(var(--palette-primary-contrast-50));\n}\n\n.bg-100[_ngcontent-%COMP%] {\n  background: rgb(var(--palette-primary-100));\n  color: rgb(var(--palette-primary-contrast-100));\n}\n\n.bg-200[_ngcontent-%COMP%] {\n  background: rgb(var(--palette-primary-200));\n  color: rgb(var(--palette-primary-contrast-200));\n}\n\n.bg-300[_ngcontent-%COMP%] {\n  background: rgb(var(--palette-primary-300));\n  color: rgb(var(--palette-primary-contrast-300));\n}\n\n.bg-400[_ngcontent-%COMP%] {\n  background: rgb(var(--palette-primary-400));\n  color: rgb(var(--palette-primary-contrast-400));\n}\n\n.bg-500[_ngcontent-%COMP%] {\n  background: rgb(var(--palette-primary-500));\n  color: rgb(var(--palette-primary-contrast-500));\n  border: 4px dashed rgb(var(--palette-accent-500));\n}\n\n.bg-600[_ngcontent-%COMP%] {\n  background: rgb(var(--palette-primary-600));\n  color: rgb(var(--palette-primary-contrast-600));\n}\n\n.bg-700[_ngcontent-%COMP%] {\n  background: rgb(var(--palette-primary-700));\n  color: rgb(var(--palette-primary-contrast-700));\n}\n\n.bg-800[_ngcontent-%COMP%] {\n  background: rgb(var(--palette-primary-800));\n  color: rgb(var(--palette-primary-contrast-800));\n}\n\n.bg-900[_ngcontent-%COMP%] {\n  background: rgb(var(--palette-primary-900));\n  color: rgb(var(--palette-primary-contrast-900));\n}\n\n.bga-50[_ngcontent-%COMP%] {\n  background: rgb(var(--palette-accent-50));\n  color: rgb(var(--palette-accent-contrast-50));\n}\n\n.bga-100[_ngcontent-%COMP%] {\n  background: rgb(var(--palette-accent-100));\n  color: rgb(var(--palette-accent-contrast-100));\n}\n\n.bga-200[_ngcontent-%COMP%] {\n  background: rgb(var(--palette-accent-200));\n  color: rgb(var(--palette-accent-contrast-200));\n}\n\n.bga-300[_ngcontent-%COMP%] {\n  background: rgb(var(--palette-accent-300));\n  color: rgb(var(--palette-accent-contrast-300));\n}\n\n.bga-400[_ngcontent-%COMP%] {\n  background: rgb(var(--palette-accent-400));\n  color: rgb(var(--palette-accent-contrast-400));\n}\n\n.bga-500[_ngcontent-%COMP%] {\n  background: rgb(var(--palette-accent-500));\n  color: rgb(var(--palette-accent-contrast-500));\n  border: 4px dashed rgb(var(--palette-primary-500));\n}\n\n.bga-600[_ngcontent-%COMP%] {\n  background: rgb(var(--palette-accent-600));\n  color: rgb(var(--palette-accent-contrast-600));\n}\n\n.bga-700[_ngcontent-%COMP%] {\n  background: rgb(var(--palette-accent-700));\n  color: rgb(var(--palette-accent-contrast-700));\n}\n\n.bga-800[_ngcontent-%COMP%] {\n  background: rgb(var(--palette-accent-800));\n  color: rgb(var(--palette-accent-contrast-800));\n}\n\n.bga-900[_ngcontent-%COMP%] {\n  background: rgb(var(--palette-accent-900));\n  color: rgb(var(--palette-accent-contrast-900));\n}\n\n.bgw-50[_ngcontent-%COMP%] {\n  background: rgb(var(--palette-warn-50));\n  color: rgb(var(--palette-warn-contrast-50));\n}\n\n.bgw-100[_ngcontent-%COMP%] {\n  background: rgb(var(--palette-warn-100));\n  color: rgb(var(--palette-warn-contrast-100));\n}\n\n.bgw-200[_ngcontent-%COMP%] {\n  background: rgb(var(--palette-warn-200));\n  color: rgb(var(--palette-warn-contrast-200));\n}\n\n.bgw-300[_ngcontent-%COMP%] {\n  background: rgb(var(--palette-warn-300));\n  color: rgb(var(--palette-warn-contrast-300));\n}\n\n.bgw-400[_ngcontent-%COMP%] {\n  background: rgb(var(--palette-warn-400));\n  color: rgb(var(--palette-warn-contrast-400));\n}\n\n.bgw-500[_ngcontent-%COMP%] {\n  background: rgb(var(--palette-warn-500));\n  color: rgb(var(--palette-warn-contrast-500));\n  border: 4px dashed rgb(var(--palette-primary-500));\n}\n\n.bgw-600[_ngcontent-%COMP%] {\n  background: rgb(var(--palette-warn-600));\n  color: rgb(var(--palette-warn-contrast-600));\n}\n\n.bgw-700[_ngcontent-%COMP%] {\n  background: rgb(var(--palette-warn-700));\n  color: rgb(var(--palette-warn-contrast-700));\n}\n\n.bgw-800[_ngcontent-%COMP%] {\n  background: rgb(var(--palette-warn-800));\n  color: rgb(var(--palette-warn-contrast-800));\n}\n\n.bgw-900[_ngcontent-%COMP%] {\n  background: rgb(var(--palette-warn-900));\n  color: rgb(var(--palette-warn-contrast-900));\n}\n\n.isDarkTheme[_nghost-%COMP%]     color-picker .color-picker, .isDarkTheme   [_nghost-%COMP%]     color-picker .color-picker {\n  color: #fff;\n  background: #585858;\n}\n\n.config-cards[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n}\n\n.config-cards[_ngcontent-%COMP%]    > mat-card[_ngcontent-%COMP%] {\n  flex: 1;\n  margin-right: 12px;\n}\n\n.config-cards[_ngcontent-%COMP%]    > mat-card[_ngcontent-%COMP%]:last-child {\n  margin-right: 0;\n}\n\n.palette[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n}\n\n.palette[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  flex: 1;\n  height: 50px;\n  text-align: center;\n  position: relative;\n}\n\n.palette[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n}\n\n[_nghost-%COMP%]     .mat-tab-body-content {\n  padding: 12px;\n}\n\n.content[_ngcontent-%COMP%] {\n  padding: 5px;\n}\n\n.box[_ngcontent-%COMP%] {\n  margin: 6px;\n}\n\n.content[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%] {\n  margin-top: 12px;\n}\n\n.content[_ngcontent-%COMP%]   mat-checkbox[_ngcontent-%COMP%] {\n  margin: 10px;\n}\n\n.toolbar-filler[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n}\n\n.fab[_ngcontent-%COMP%] {\n  position: fixed !important;\n  bottom: 20px;\n  right: 20px;\n  z-index: 3;\n}\n\n.spinner[_ngcontent-%COMP%] {\n  height: 30px;\n  width: 30px;\n  display: inline-block;\n}\n\n.button[_ngcontent-%COMP%] {\n  margin: 5px;\n}\n\n.progress[_ngcontent-%COMP%] {\n  margin: 5px;\n}\n\n.example-section[_ngcontent-%COMP%] {\n  display: flex;\n  align-content: center;\n  align-items: center;\n  height: 60px;\n}\n\n.example-margin[_ngcontent-%COMP%] {\n  margin: 10px;\n}\n\n.mat-slider-horizontal[_ngcontent-%COMP%] {\n  width: 300px;\n}\n\n.mat-slider-vertical[_ngcontent-%COMP%] {\n  height: 300px;\n}\n\nmat-chip[_ngcontent-%COMP%] {\n  max-width: 200px;\n}\n\n.picker-label[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  margin-bottom: 0;\n  font-weight: bold;\n}\n\n.example-button-row[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n}\n\n.example-button-row[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  margin: 4px;\n}\n\nmat-form-field[_ngcontent-%COMP%] {\n  margin-right: 12px;\n}\n\n.checkbox-section[_ngcontent-%COMP%] {\n  margin: 12px 0;\n}\n\n.checkbox-margin[_ngcontent-%COMP%] {\n  margin: 0 12px;\n}\n\nul[_ngcontent-%COMP%] {\n  list-style-type: none;\n  margin-top: 4px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuc2NzcyIsIi4uLy4uL3Byb2plY3RzL21hdGVyaWFsLWNzcy12YXJzL3NyYy9saWIvX3B1YmxpYy11dGlsLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBSUE7RUMyRUUsMENBQUE7RUFDQSw4Q0FBQTtBRDdFRjs7QUFLQTtFQ3VFRSwyQ0FBQTtFQUNBLCtDQUFBO0FEeEVGOztBQUlBO0VDbUVFLDJDQUFBO0VBQ0EsK0NBQUE7QURuRUY7O0FBR0E7RUMrREUsMkNBQUE7RUFDQSwrQ0FBQTtBRDlERjs7QUFFQTtFQzJERSwyQ0FBQTtFQUNBLCtDQUFBO0FEekRGOztBQUNBO0VDdURFLDJDQUFBO0VBQ0EsK0NBQUE7RUR0REEsaURBQUE7QUFHRjs7QUFBQTtFQ2tERSwyQ0FBQTtFQUNBLCtDQUFBO0FEOUNGOztBQURBO0VDOENFLDJDQUFBO0VBQ0EsK0NBQUE7QUR6Q0Y7O0FBRkE7RUMwQ0UsMkNBQUE7RUFDQSwrQ0FBQTtBRHBDRjs7QUFIQTtFQ3NDRSwyQ0FBQTtFQUNBLCtDQUFBO0FEL0JGOztBQUhBO0VDc0NFLHlDQUFBO0VBQ0EsNkNBQUE7QUQvQkY7O0FBSkE7RUNrQ0UsMENBQUE7RUFDQSw4Q0FBQTtBRDFCRjs7QUFMQTtFQzhCRSwwQ0FBQTtFQUNBLDhDQUFBO0FEckJGOztBQU5BO0VDMEJFLDBDQUFBO0VBQ0EsOENBQUE7QURoQkY7O0FBUEE7RUNzQkUsMENBQUE7RUFDQSw4Q0FBQTtBRFhGOztBQVJBO0VDa0JFLDBDQUFBO0VBQ0EsOENBQUE7RURqQkEsa0RBQUE7QUFZRjs7QUFUQTtFQ2FFLDBDQUFBO0VBQ0EsOENBQUE7QURBRjs7QUFWQTtFQ1NFLDBDQUFBO0VBQ0EsOENBQUE7QURLRjs7QUFYQTtFQ0tFLDBDQUFBO0VBQ0EsOENBQUE7QURVRjs7QUFaQTtFQ0NFLDBDQUFBO0VBQ0EsOENBQUE7QURlRjs7QUFaQTtFQ0NFLHVDQUFBO0VBQ0EsMkNBQUE7QURlRjs7QUFiQTtFQ0hFLHdDQUFBO0VBQ0EsNENBQUE7QURvQkY7O0FBZEE7RUNQRSx3Q0FBQTtFQUNBLDRDQUFBO0FEeUJGOztBQWZBO0VDWEUsd0NBQUE7RUFDQSw0Q0FBQTtBRDhCRjs7QUFoQkE7RUNmRSx3Q0FBQTtFQUNBLDRDQUFBO0FEbUNGOztBQWpCQTtFQ25CRSx3Q0FBQTtFQUNBLDRDQUFBO0VEb0JBLGtEQUFBO0FBcUJGOztBQWxCQTtFQ3hCRSx3Q0FBQTtFQUNBLDRDQUFBO0FEOENGOztBQW5CQTtFQzVCRSx3Q0FBQTtFQUNBLDRDQUFBO0FEbURGOztBQXBCQTtFQ2hDRSx3Q0FBQTtFQUNBLDRDQUFBO0FEd0RGOztBQXJCQTtFQ3BDRSx3Q0FBQTtFQUNBLDRDQUFBO0FENkRGOztBQ3JERTtFRG1DSSxXQUFBO0VBQ0EsbUJBcElTO0FBMEpmOztBQWpCQTtFQUNFLGFBQUE7RUFDQSxlQUFBO0FBb0JGOztBQWxCRTtFQUNFLE9BQUE7RUFDQSxrQkFBQTtBQW9CSjs7QUFsQkk7RUFDRSxlQUFBO0FBb0JOOztBQWZBO0VBQ0UsYUFBQTtFQUNBLGVBQUE7QUFrQkY7O0FBaEJFO0VBQ0UsT0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FBa0JKOztBQWhCSTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSxnQ0FBQTtBQWtCTjs7QUFaRTtFQUNFLGFBQUE7QUFlSjs7QUFYQTtFQUNFLFlBQUE7QUFjRjs7QUFYQTtFQUNFLFdBQUE7QUFjRjs7QUFYQTtFQUNFLGdCQUFBO0FBY0Y7O0FBWEE7RUFDRSxZQUFBO0FBY0Y7O0FBWEE7RUFDRSxjQUFBO0FBY0Y7O0FBVkE7RUFDRSwwQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtBQWFGOztBQVZBO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxxQkFBQTtBQWFGOztBQVZBO0VBQ0UsV0FBQTtBQWFGOztBQVZBO0VBQ0UsV0FBQTtBQWFGOztBQVZBO0VBQ0UsYUFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0FBYUY7O0FBVkE7RUFDRSxZQUFBO0FBYUY7O0FBVkE7RUFDRSxZQUFBO0FBYUY7O0FBVkE7RUFDRSxhQUFBO0FBYUY7O0FBVkE7RUFDRSxnQkFBQTtBQWFGOztBQVZBO0VBQ0UsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FBYUY7O0FBVkE7RUFDRSxtQkFBQTtBQWFGOztBQVhFO0VBQ0UsV0FBQTtBQWFKOztBQVRBO0VBQ0Usa0JBQUE7QUFZRjs7QUFUQTtFQUNFLGNBQUE7QUFZRjs7QUFUQTtFQUNFLGNBQUE7QUFZRjs7QUFUQTtFQUNFLHFCQUFBO0VBQ0EsZUFBQTtBQVlGIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4uLy4uL3Byb2plY3RzL21hdGVyaWFsLWNzcy12YXJzL3NyYy9saWIvcHVibGljLXV0aWwnO1xuXG4kbGlnaHRlci1kYXJrOiByZ2IoODgsIDg4LCA4OCk7XG5cbi5iZy01MCB7XG4gIEBpbmNsdWRlIG1hdC1jc3MtY29sb3ItYW5kLWNvbnRyYXN0LXByaW1hcnkoNTApO1xufVxuXG4uYmctMTAwIHtcbiAgQGluY2x1ZGUgbWF0LWNzcy1jb2xvci1hbmQtY29udHJhc3QtcHJpbWFyeSgxMDApO1xufVxuXG4uYmctMjAwIHtcbiAgQGluY2x1ZGUgbWF0LWNzcy1jb2xvci1hbmQtY29udHJhc3QtcHJpbWFyeSgyMDApO1xufVxuXG4uYmctMzAwIHtcbiAgQGluY2x1ZGUgbWF0LWNzcy1jb2xvci1hbmQtY29udHJhc3QtcHJpbWFyeSgzMDApO1xufVxuXG4uYmctNDAwIHtcbiAgQGluY2x1ZGUgbWF0LWNzcy1jb2xvci1hbmQtY29udHJhc3QtcHJpbWFyeSg0MDApO1xufVxuXG4uYmctNTAwIHtcbiAgQGluY2x1ZGUgbWF0LWNzcy1jb2xvci1hbmQtY29udHJhc3QtcHJpbWFyeSg1MDApO1xuICBib3JkZXI6IDRweCBkYXNoZWQgbWF0LWNzcy1jb2xvci1hY2NlbnQoKTtcbn1cblxuLmJnLTYwMCB7XG4gIEBpbmNsdWRlIG1hdC1jc3MtY29sb3ItYW5kLWNvbnRyYXN0LXByaW1hcnkoNjAwKTtcbn1cblxuLmJnLTcwMCB7XG4gIEBpbmNsdWRlIG1hdC1jc3MtY29sb3ItYW5kLWNvbnRyYXN0LXByaW1hcnkoNzAwKTtcbn1cblxuLmJnLTgwMCB7XG4gIEBpbmNsdWRlIG1hdC1jc3MtY29sb3ItYW5kLWNvbnRyYXN0LXByaW1hcnkoODAwKTtcbn1cblxuLmJnLTkwMCB7XG4gIEBpbmNsdWRlIG1hdC1jc3MtY29sb3ItYW5kLWNvbnRyYXN0LXByaW1hcnkoOTAwKTtcbn1cblxuXG4uYmdhLTUwIHtcbiAgQGluY2x1ZGUgbWF0LWNzcy1jb2xvci1hbmQtY29udHJhc3QtYWNjZW50KDUwKTtcbn1cblxuLmJnYS0xMDAge1xuICBAaW5jbHVkZSBtYXQtY3NzLWNvbG9yLWFuZC1jb250cmFzdC1hY2NlbnQoMTAwKTtcbn1cblxuLmJnYS0yMDAge1xuICBAaW5jbHVkZSBtYXQtY3NzLWNvbG9yLWFuZC1jb250cmFzdC1hY2NlbnQoMjAwKTtcbn1cblxuLmJnYS0zMDAge1xuICBAaW5jbHVkZSBtYXQtY3NzLWNvbG9yLWFuZC1jb250cmFzdC1hY2NlbnQoMzAwKTtcbn1cblxuLmJnYS00MDAge1xuICBAaW5jbHVkZSBtYXQtY3NzLWNvbG9yLWFuZC1jb250cmFzdC1hY2NlbnQoNDAwKTtcbn1cblxuLmJnYS01MDAge1xuICBAaW5jbHVkZSBtYXQtY3NzLWNvbG9yLWFuZC1jb250cmFzdC1hY2NlbnQoNTAwKTtcbiAgYm9yZGVyOiA0cHggZGFzaGVkIG1hdC1jc3MtY29sb3ItcHJpbWFyeSgpO1xufVxuXG4uYmdhLTYwMCB7XG4gIEBpbmNsdWRlIG1hdC1jc3MtY29sb3ItYW5kLWNvbnRyYXN0LWFjY2VudCg2MDApO1xufVxuXG4uYmdhLTcwMCB7XG4gIEBpbmNsdWRlIG1hdC1jc3MtY29sb3ItYW5kLWNvbnRyYXN0LWFjY2VudCg3MDApO1xufVxuXG4uYmdhLTgwMCB7XG4gIEBpbmNsdWRlIG1hdC1jc3MtY29sb3ItYW5kLWNvbnRyYXN0LWFjY2VudCg4MDApO1xufVxuXG4uYmdhLTkwMCB7XG4gIEBpbmNsdWRlIG1hdC1jc3MtY29sb3ItYW5kLWNvbnRyYXN0LWFjY2VudCg5MDApO1xufVxuXG5cbi5iZ3ctNTAge1xuICBAaW5jbHVkZSBtYXQtY3NzLWNvbG9yLWFuZC1jb250cmFzdC13YXJuKDUwKTtcbn1cblxuLmJndy0xMDAge1xuICBAaW5jbHVkZSBtYXQtY3NzLWNvbG9yLWFuZC1jb250cmFzdC13YXJuKDEwMCk7XG59XG5cbi5iZ3ctMjAwIHtcbiAgQGluY2x1ZGUgbWF0LWNzcy1jb2xvci1hbmQtY29udHJhc3Qtd2FybigyMDApO1xufVxuXG4uYmd3LTMwMCB7XG4gIEBpbmNsdWRlIG1hdC1jc3MtY29sb3ItYW5kLWNvbnRyYXN0LXdhcm4oMzAwKTtcbn1cblxuLmJndy00MDAge1xuICBAaW5jbHVkZSBtYXQtY3NzLWNvbG9yLWFuZC1jb250cmFzdC13YXJuKDQwMCk7XG59XG5cbi5iZ3ctNTAwIHtcbiAgQGluY2x1ZGUgbWF0LWNzcy1jb2xvci1hbmQtY29udHJhc3Qtd2Fybig1MDApO1xuICBib3JkZXI6IDRweCBkYXNoZWQgbWF0LWNzcy1jb2xvci1wcmltYXJ5KCk7XG59XG5cbi5iZ3ctNjAwIHtcbiAgQGluY2x1ZGUgbWF0LWNzcy1jb2xvci1hbmQtY29udHJhc3Qtd2Fybig2MDApO1xufVxuXG4uYmd3LTcwMCB7XG4gIEBpbmNsdWRlIG1hdC1jc3MtY29sb3ItYW5kLWNvbnRyYXN0LXdhcm4oNzAwKTtcbn1cblxuLmJndy04MDAge1xuICBAaW5jbHVkZSBtYXQtY3NzLWNvbG9yLWFuZC1jb250cmFzdC13YXJuKDgwMCk7XG59XG5cbi5iZ3ctOTAwIHtcbiAgQGluY2x1ZGUgbWF0LWNzcy1jb2xvci1hbmQtY29udHJhc3Qtd2Fybig5MDApO1xufVxuXG46Om5nLWRlZXAgY29sb3ItcGlja2VyIHtcbiAgLmNvbG9yLXBpY2tlciB7XG5cbiAgICBAaW5jbHVkZSBtYXQtY3NzLWRhcmstdGhlbWUge1xuICAgICAgY29sb3I6ICNmZmY7XG4gICAgICBiYWNrZ3JvdW5kOiAkbGlnaHRlci1kYXJrO1xuICAgIH1cbiAgfVxufVxuXG4uY29uZmlnLWNhcmRzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuXG4gID4gbWF0LWNhcmQge1xuICAgIGZsZXg6IDE7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMnB4O1xuXG4gICAgJjpsYXN0LWNoaWxkIHtcbiAgICAgIG1hcmdpbi1yaWdodDogMDtcbiAgICB9XG4gIH1cbn1cblxuLnBhbGV0dGUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG5cbiAgPiBkaXYge1xuICAgIGZsZXg6IDE7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgICBkaXYge1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgbGVmdDogNTAlO1xuICAgICAgdG9wOiA1MCU7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgICB9XG4gIH1cbn1cblxuOmhvc3QgOjpuZy1kZWVwIHtcbiAgLm1hdC10YWItYm9keS1jb250ZW50IHtcbiAgICBwYWRkaW5nOiAxMnB4O1xuICB9XG59XG5cbi5jb250ZW50IHtcbiAgcGFkZGluZzogNXB4O1xufVxuXG4uYm94IHtcbiAgbWFyZ2luOiA2cHg7XG59XG5cbi5jb250ZW50IG1hdC1jYXJkIHtcbiAgbWFyZ2luLXRvcDogMTJweDtcbn1cblxuLmNvbnRlbnQgbWF0LWNoZWNrYm94IHtcbiAgbWFyZ2luOiAxMHB4O1xufVxuXG4udG9vbGJhci1maWxsZXIge1xuICBmbGV4OiAxIDEgYXV0bztcbn1cblxuXG4uZmFiIHtcbiAgcG9zaXRpb246IGZpeGVkICFpbXBvcnRhbnQ7XG4gIGJvdHRvbTogMjBweDtcbiAgcmlnaHQ6IDIwcHg7XG4gIHotaW5kZXg6IDM7XG59XG5cbi5zcGlubmVyIHtcbiAgaGVpZ2h0OiAzMHB4O1xuICB3aWR0aDogMzBweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG4uYnV0dG9uIHtcbiAgbWFyZ2luOiA1cHg7XG59XG5cbi5wcm9ncmVzcyB7XG4gIG1hcmdpbjogNXB4O1xufVxuXG4uZXhhbXBsZS1zZWN0aW9uIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBoZWlnaHQ6IDYwcHg7XG59XG5cbi5leGFtcGxlLW1hcmdpbiB7XG4gIG1hcmdpbjogMTBweDtcbn1cblxuLm1hdC1zbGlkZXItaG9yaXpvbnRhbCB7XG4gIHdpZHRoOiAzMDBweDtcbn1cblxuLm1hdC1zbGlkZXItdmVydGljYWwge1xuICBoZWlnaHQ6IDMwMHB4O1xufVxuXG5tYXQtY2hpcCB7XG4gIG1heC13aWR0aDogMjAwcHg7XG59XG5cbi5waWNrZXItbGFiZWwge1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBtYXJnaW4tYm90dG9tOiAwO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmV4YW1wbGUtYnV0dG9uLXJvdyB7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG5cbiAgYnV0dG9uIHtcbiAgICBtYXJnaW46IDRweDtcbiAgfVxufVxuXG5tYXQtZm9ybS1maWVsZCB7XG4gIG1hcmdpbi1yaWdodDogMTJweDtcbn1cblxuLmNoZWNrYm94LXNlY3Rpb24ge1xuICBtYXJnaW46IDEycHggMDtcbn1cblxuLmNoZWNrYm94LW1hcmdpbiB7XG4gIG1hcmdpbjogMCAxMnB4O1xufVxuXG51bCB7XG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgbWFyZ2luLXRvcDogNHB4O1xufVxuIiwiQGltcG9ydCAndmFyaWFibGVzJztcbkBpbXBvcnQgJ2ludGVybmFsLWhlbHBlcic7XG5cbi8vIFV0aWxpdHkgbWl4aW5zIGZvciB0aGUgcHVibGljXG5cbi8vIGNvbG9yc1xuLy8gLS0tLS0tXG5AZnVuY3Rpb24gbWF0LWNzcy1jb2xvcigkaHVlOiA1MDAsICAkb3BhY2l0eTogbnVsbCwgJHBhbGV0dGU6ICdwcmltYXJ5JywgJGlzLWNvbnRyYXN0LWNvbG9yOiBmYWxzZSkge1xuICAkcGFsZXR0ZV86ICRtYXQtY3NzLXBhbGV0dGUtcHJpbWFyeTtcbiAgQGlmICgkaXMtY29udHJhc3QtY29sb3IgPT0gdHJ1ZSkge1xuICAgIEBpZiAoJHBhbGV0dGU9PSdwcmltYXJ5Jykge1xuICAgICAgJHBhbGV0dGVfOiAkbWF0LWNzcy1jb250cmFzdC1wYWxldHRlO1xuICAgIH0gQGVsc2UgaWYgKCRwYWxldHRlPT0nYWNjZW50Jykge1xuICAgICAgJHBhbGV0dGVfOiAkbWF0LWNzcy1jb250cmFzdC1wYWxldHRlLWFjY2VudDtcbiAgICB9IEBlbHNlIGlmICgkcGFsZXR0ZT09J3dhcm4nKSB7XG4gICAgICAkcGFsZXR0ZV86ICRtYXQtY3NzLWNvbnRyYXN0LXBhbGV0dGUtd2FybjtcbiAgICB9IEBlbHNlIHtcbiAgICAgIEBlcnJvciAnSW52YWxpZCBjb250cmFzdCBwYWxldHRlJztcbiAgICB9XG4gIH0gQGVsc2Uge1xuICAgIEBpZiAoJHBhbGV0dGU9PSdwcmltYXJ5Jykge1xuICAgICAgJHBhbGV0dGVfOiAkbWF0LWNzcy1wYWxldHRlLXByaW1hcnk7XG4gICAgfSBAZWxzZSBpZiAoJHBhbGV0dGU9PSdhY2NlbnQnKSB7XG4gICAgICAkcGFsZXR0ZV86ICRtYXQtY3NzLXBhbGV0dGUtYWNjZW50O1xuICAgIH0gQGVsc2UgaWYgKCRwYWxldHRlPT0nd2FybicpIHtcbiAgICAgICRwYWxldHRlXzogJG1hdC1jc3MtcGFsZXR0ZS13YXJuO1xuICAgIH0gQGVsc2Uge1xuICAgICAgQGVycm9yICdJbnZhbGlkIHBhbGV0dGUnO1xuICAgIH1cbiAgfVxuXG4gICRjb2xvcjogX21hdC1jc3Mtc3RyaXAtdmFyaWFibGUobWFwX2dldCgkcGFsZXR0ZV8sICRodWUpKTtcblxuICBAaWYgKHR5cGUtb2YoJG9wYWNpdHkpID09IG51bWJlcikge1xuICAgIEByZXR1cm4gcmdiYSgkY29sb3IsICRvcGFjaXR5KTtcbiAgfSBAZWxzZSB7XG4gICAgQHJldHVybiByZ2IoJGNvbG9yKTtcbiAgfVxuXG59XG5cbkBmdW5jdGlvbiBtYXQtY3NzLWNvbG9yLXByaW1hcnkoJGh1ZTogNTAwLCAgJG9wYWNpdHk6IG51bGwpIHtcbiAgQHJldHVybiBtYXQtY3NzLWNvbG9yKCRodWUsICRvcGFjaXR5LCAncHJpbWFyeScpO1xufVxuXG5AZnVuY3Rpb24gbWF0LWNzcy1jb2xvci1hY2NlbnQoJGh1ZTogNTAwLCAgJG9wYWNpdHk6IG51bGwpIHtcbiAgQHJldHVybiBtYXQtY3NzLWNvbG9yKCRodWUsICRvcGFjaXR5LCAnYWNjZW50Jyk7XG59XG5cbkBmdW5jdGlvbiBtYXQtY3NzLWNvbG9yLXdhcm4oJGh1ZTogNTAwLCAgJG9wYWNpdHk6IG51bGwpIHtcbiAgQHJldHVybiBtYXQtY3NzLWNvbG9yKCRodWUsICRvcGFjaXR5LCAnd2FybicpO1xufVxuXG4vLyBjb250cmFzdC1jb2xvcnNcbi8vIC0tLS0tLS0tLS0tLS0tLVxuQGZ1bmN0aW9uIG1hdC1jc3MtY29udHJhc3QtY29sb3IoJGh1ZTogNTAwLCAgJG9wYWNpdHk6IG51bGwsICRwYWxldHRlOiAncHJpbWFyeScpIHtcbiAgQHJldHVybiBtYXQtY3NzLWNvbG9yKCRodWUsICRvcGFjaXR5LCAkcGFsZXR0ZSwgdHJ1ZSk7XG59XG5cbkBmdW5jdGlvbiBtYXQtY3NzLWNvbnRyYXN0LWNvbG9yLXByaW1hcnkoJGh1ZTogNTAwLCAgJG9wYWNpdHk6IG51bGwpIHtcbiAgQHJldHVybiBtYXQtY3NzLWNvbnRyYXN0LWNvbG9yKCRodWUsICRvcGFjaXR5LCAncHJpbWFyeScpO1xufVxuXG5AZnVuY3Rpb24gbWF0LWNzcy1jb250cmFzdC1jb2xvci1hY2NlbnQoJGh1ZTogNTAwLCAgJG9wYWNpdHk6IG51bGwpIHtcbiAgQHJldHVybiBtYXQtY3NzLWNvbnRyYXN0LWNvbG9yKCRodWUsICRvcGFjaXR5LCAnYWNjZW50Jyk7XG59XG5cbkBmdW5jdGlvbiBtYXQtY3NzLWNvbnRyYXN0LWNvbG9yLXdhcm4oJGh1ZTogNTAwLCAgJG9wYWNpdHk6IG51bGwpIHtcbiAgQHJldHVybiBtYXQtY3NzLWNvbnRyYXN0LWNvbG9yKCRodWUsICRvcGFjaXR5LCAnd2FybicpO1xufVxuXG4vLyBtaXhpbnNcbi8vIC0tLS0tLVxuQG1peGluIG1hdC1jc3MtY29sb3ItYW5kLWNvbnRyYXN0KCRodWUpIHtcbiAgQHdhcm4gJ21hdC1jc3MtY29sb3ItYW5kLWNvbnRyYXN0KCkgaXMgZGVwcmVjYXRlZC4gUGxlYXNlIHVzZSBtYXQtY3NzLWNvbG9yLWFuZC1jb250cmFzdC1wcmltYXJ5KCkgaW5zdGVhZC4nO1xuICBAaW5jbHVkZSBtYXQtY3NzLWNvbG9yLWFuZC1jb250cmFzdC1wcmltYXJ5KCRodWUpO1xufVxuXG5AbWl4aW4gbWF0LWNzcy1jb2xvci1hbmQtY29udHJhc3QtcHJpbWFyeSgkaHVlKSB7XG4gIGJhY2tncm91bmQ6IG1hdC1jc3MtY29sb3ItcHJpbWFyeSgkaHVlKTtcbiAgY29sb3I6IG1hdC1jc3MtY29udHJhc3QtY29sb3IoJGh1ZSk7XG59XG5cbkBtaXhpbiBtYXQtY3NzLWNvbG9yLWFuZC1jb250cmFzdC1hY2NlbnQoJGh1ZSkge1xuICBiYWNrZ3JvdW5kOiBtYXQtY3NzLWNvbG9yLWFjY2VudCgkaHVlKTtcbiAgY29sb3I6IG1hdC1jc3MtY29udHJhc3QtY29sb3ItYWNjZW50KCRodWUpO1xufVxuXG5AbWl4aW4gbWF0LWNzcy1jb2xvci1hbmQtY29udHJhc3Qtd2FybigkaHVlKSB7XG4gIGJhY2tncm91bmQ6IG1hdC1jc3MtY29sb3Itd2FybigkaHVlKTtcbiAgY29sb3I6IG1hdC1jc3MtY29udHJhc3QtY29sb3Itd2FybigkaHVlKTtcbn1cblxuQG1peGluIG1hdC1jc3MtYmcoJGh1ZSkge1xuICBiYWNrZ3JvdW5kOiBtYXQtY3NzLWNvbG9yLXByaW1hcnkoJGh1ZSk7XG59XG5cbkBtaXhpbiBtYXQtY3NzLWRhcmstdGhlbWUge1xuICA6aG9zdC1jb250ZXh0KCN7JG1hdC1jc3MtZGFyay10aGVtZS1zZWxlY3Rvcn0pICYge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBtYXQtY3NzLWxpZ2h0LXRoZW1lIHtcbiAgOmhvc3QtY29udGV4dCgjeyRtYXQtY3NzLWxpZ2h0LXRoZW1lLXNlbGVjdG9yfSkgJiB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIG1hdC1jc3MtZGFyay10aGVtZS1nbG9iYWwge1xuICAjeyRtYXQtY3NzLWRhcmstdGhlbWUtc2VsZWN0b3J9ICYge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBtYXQtY3NzLWxpZ2h0LXRoZW1lLWdsb2JhbCB7XG4gICN7JG1hdC1jc3MtbGlnaHQtdGhlbWUtc2VsZWN0b3J9ICYge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBtYXQtY3NzLXNldC1wYWxldHRlLWRlZmF1bHRzKCRjc3MtdmFyLW1hcCwgJHBhbGV0dGVUeXBlOiAncHJpbWFyeScpIHtcbiAgJG5ldy1tYXA6ICgpO1xuICBAZWFjaCAkdmFyLCAkZGVmYXVsdFZhbCBpbiAkY3NzLXZhci1tYXAge1xuICAgIEBpZiAoJHZhciAhPSAnY29udHJhc3QnKSB7XG4gICAgICAkY29sb3JWYWw6IF9tYXQtY3NzLWhleC10by1yZ2IoJGRlZmF1bHRWYWwpO1xuICAgICAgQGlmICRjb2xvclZhbCAhPSBudWxsIHtcbiAgICAgICAgJG5ldy1tYXA6IG1hcF9tZXJnZSgkbmV3LW1hcCwgKC0tcGFsZXR0ZS0jeyRwYWxldHRlVHlwZX0tI3skdmFyfTogI3skY29sb3JWYWx9KSk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbiJdfQ== */"] });


/***/ }),

/***/ 4750:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ 6219);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 2050);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ 2650);
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/autocomplete */ 686);
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/badge */ 9379);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ 7752);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/card */ 8662);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/checkbox */ 9188);
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/chips */ 1933);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/core */ 4357);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/datepicker */ 6506);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/dialog */ 6298);
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/expansion */ 5082);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/form-field */ 3981);
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/grid-list */ 5409);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/icon */ 8852);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/input */ 8359);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/list */ 4021);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/menu */ 9872);
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/progress-bar */ 3776);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/progress-spinner */ 9372);
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/radio */ 7435);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/select */ 1036);
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/sidenav */ 1986);
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/slide-toggle */ 1232);
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/material/slider */ 5291);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/material/snack-bar */ 4996);
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/stepper */ 1792);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/table */ 3959);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/tabs */ 9391);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/toolbar */ 7727);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/tooltip */ 4731);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var ngx_color_picker__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ngx-color-picker */ 2608);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _projects_material_css_vars_src_lib_material_css_vars_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../projects/material-css-vars/src/lib/material-css-vars.module */ 875);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);






































class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ providers: [
        // tslint:disable-next-line
        { provide: _angular_common__WEBPACK_IMPORTED_MODULE_3__.APP_BASE_HREF, useValue: window['_app_base'] || '/' },
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__.BrowserModule,
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__.BrowserAnimationsModule,
            _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_6__.MatAutocompleteModule,
            _angular_material_button__WEBPACK_IMPORTED_MODULE_7__.MatButtonModule,
            _angular_material_card__WEBPACK_IMPORTED_MODULE_8__.MatCardModule,
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_9__.MatCheckboxModule,
            _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_10__.MatDatepickerModule,
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__.MatDialogModule,
            _angular_material_expansion__WEBPACK_IMPORTED_MODULE_12__.MatExpansionModule,
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__.MatFormFieldModule,
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__.MatIconModule,
            _angular_material_input__WEBPACK_IMPORTED_MODULE_15__.MatInputModule,
            _angular_material_list__WEBPACK_IMPORTED_MODULE_16__.MatListModule,
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_17__.MatMenuModule,
            _angular_material_core__WEBPACK_IMPORTED_MODULE_18__.MatNativeDateModule,
            _angular_material_core__WEBPACK_IMPORTED_MODULE_18__.MatOptionModule,
            _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_19__.MatProgressBarModule,
            _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_20__.MatProgressSpinnerModule,
            _angular_material_core__WEBPACK_IMPORTED_MODULE_18__.MatRippleModule,
            _angular_material_select__WEBPACK_IMPORTED_MODULE_21__.MatSelectModule,
            _angular_material_stepper__WEBPACK_IMPORTED_MODULE_22__.MatStepperModule,
            _angular_material_table__WEBPACK_IMPORTED_MODULE_23__.MatTableModule,
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_24__.MatTabsModule,
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_25__.MatToolbarModule,
            _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_26__.MatTooltipModule,
            _angular_material_chips__WEBPACK_IMPORTED_MODULE_27__.MatChipsModule,
            _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_28__.MatSlideToggleModule,
            _angular_material_badge__WEBPACK_IMPORTED_MODULE_29__.MatBadgeModule,
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_30__.MatSidenavModule,
            _angular_material_radio__WEBPACK_IMPORTED_MODULE_31__.MatRadioModule,
            _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_32__.MatGridListModule,
            _angular_material_slider__WEBPACK_IMPORTED_MODULE_33__.MatSliderModule,
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_34__.MatSnackBarModule,
            ngx_color_picker__WEBPACK_IMPORTED_MODULE_35__.ColorPickerModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_36__.FormsModule,
            _projects_material_css_vars_src_lib_material_css_vars_module__WEBPACK_IMPORTED_MODULE_1__.MaterialCssVarsModule.forRoot({
                primary: '#3f51b5',
                accent: '#e91e63',
                warn: '#f44336',
            }),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__.BrowserModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__.BrowserAnimationsModule,
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_6__.MatAutocompleteModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_7__.MatButtonModule,
        _angular_material_card__WEBPACK_IMPORTED_MODULE_8__.MatCardModule,
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_9__.MatCheckboxModule,
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_10__.MatDatepickerModule,
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__.MatDialogModule,
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_12__.MatExpansionModule,
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__.MatFormFieldModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__.MatIconModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_15__.MatInputModule,
        _angular_material_list__WEBPACK_IMPORTED_MODULE_16__.MatListModule,
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_17__.MatMenuModule,
        _angular_material_core__WEBPACK_IMPORTED_MODULE_18__.MatNativeDateModule,
        _angular_material_core__WEBPACK_IMPORTED_MODULE_18__.MatOptionModule,
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_19__.MatProgressBarModule,
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_20__.MatProgressSpinnerModule,
        _angular_material_core__WEBPACK_IMPORTED_MODULE_18__.MatRippleModule,
        _angular_material_select__WEBPACK_IMPORTED_MODULE_21__.MatSelectModule,
        _angular_material_stepper__WEBPACK_IMPORTED_MODULE_22__.MatStepperModule,
        _angular_material_table__WEBPACK_IMPORTED_MODULE_23__.MatTableModule,
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_24__.MatTabsModule,
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_25__.MatToolbarModule,
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_26__.MatTooltipModule,
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_27__.MatChipsModule,
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_28__.MatSlideToggleModule,
        _angular_material_badge__WEBPACK_IMPORTED_MODULE_29__.MatBadgeModule,
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_30__.MatSidenavModule,
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_31__.MatRadioModule,
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_32__.MatGridListModule,
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_33__.MatSliderModule,
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_34__.MatSnackBarModule,
        ngx_color_picker__WEBPACK_IMPORTED_MODULE_35__.ColorPickerModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_36__.FormsModule, _projects_material_css_vars_src_lib_material_css_vars_module__WEBPACK_IMPORTED_MODULE_1__.MaterialCssVarsModule] }); })();


/***/ }),

/***/ 8260:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 271:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 6219);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 4750);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 8260);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(271)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map