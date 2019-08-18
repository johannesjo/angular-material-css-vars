# AngularMaterialCssVars
You want to style your angular material dynamically with all the colors in the rainbow and don't really care about IE11 (support for css variables is required)? Look no further!

[Check out the Demo!](https://johannesjo.github.io/angular-material-css-vars/)

## Setup
1. Install:
    ```bash
    npm i angular-material-css-vars -S
    ```
2. If @angular/material is already configured remove `@import '~@angular/material/theming';` from your main stylesheet file if present.
3. Add this to your main stylesheet instead:
    ```scss
    @import '~angular-material-css-vars/main';
    @include initMaterialCssVars();
    ```
4. Then use it like so:
    ```typescript
    import {MaterialCssVarsService} from 'angular-material-css-vars';
    
    export class SomeComponentOrService {
      constructor(public materialCssVarsService: MaterialCssVarsService) {
        const hex = '#3f51b5';
        this.materialCssVarsService.setDarkTheme(true);
        this.materialCssVarsService.changePrimaryColor(hex);
        this.materialCssVarsService.changeAccentColor('#333');
      }
    }
    ```
## Additional Features
* Auto or manually set contrast color via 
  * `setAutoContrastEnabled(bool)`
  * `changeContrastColorThreshold(hueVal: HueValue)`
* Helper to set all variables
  * `setVariable(cssVarName: MaterialCssVariables, value: string)`
  * You can use the `MaterialCssVariables` enum [from here](https://github.com/johannesjo/angular-material-css-vars/blob/master/projects/material-css-vars/src/lib/model.ts) to make sure you get the variable name right.
* Rudimentary dark theme support via body class
  * `setDarkTheme(isDark: boolean)`

## Utility
There are also several [utility functions and mixins](https://github.com/johannesjo/angular-material-css-vars/blob/master/projects/material-css-vars/src/lib/_public-util.scss).
```scss
@import '~angular-material-css-vars/public-util';

.with-color {
  border-color: mat-css-color-primary(300);
}

.color-and-contrast {
  @include mat-css-color-and-contrast(300);
}

.with-bg {
  @include mat-css-bg(300);
}
```
## Initialization Options
You can provide different options during initialization to change the body class used for the dark theme and to provide different default styles:
```scss
@mixin initMaterialCssVars(
  $default-theme: $css-vars-default-light-theme,
  $dark-theme-body-class: 'isDarkTheme',
  $default-theme-text: $css-vars-text
) {
  // ...
}
``` 
A full list of the theme map [can be found here](https://github.com/johannesjo/angular-material-css-vars/blob/master/projects/material-css-vars/src/lib/_variables.scss).


## Credit...
...goes to @zbirizdo [project](https://github.com/zbirizdo/material-css-vars) on which parts of this are based which is in turn supposedly based on [this gist](https://gist.github.com/shprink/c7f333e3ad51830f14a6383f3ab35439).

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.
