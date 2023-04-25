<p align="center"><img alt="logo" src="logo.png"></p>

You want to style your angular material dynamically with all the colors in the rainbow? Look no further!

[Check out the Demo!](https://johannesjo.github.io/angular-material-css-vars/)

## Setup
1. Install:
    ```bash
    npm i angular-material-css-vars -S
    ```
2. If @angular/material is already configured remove `@import '@angular/material/theming';` from your main stylesheet file if present.
3. Add this to your main stylesheet instead:
    ```scss
    @use 'angular-material-css-vars/main' as mat-css;
 
    // init theme
    @include mat-css.init-material-css-vars(
      // optional
      $dark-theme-selector: '.isDarkTheme',
      $light-theme-selector: '.isLightTheme',
   ) using($mat-css-theme) {
      // If your app has any theme mixins, call them here. 
      // $mat-css-theme gets set to an appropriate value before this content is called.
      // @include your-custom-component-theme($mat-css-theme);
    };
    ```
4. Add to your main module:
```typescript
import {MaterialCssVarsModule} from 'angular-material-css-vars';

@NgModule({
  imports: [
    MaterialCssVarsModule.forRoot({
      // all optional
      isAutoContrast: true,
      darkThemeClass: 'isDarkTheme',
      lightThemeClass: 'isLightTheme',
      // ...
    }),
  ],
})
export class AppModule {
}
```
5. Then use it like so:
    ```typescript
    import {MaterialCssVarsService} from 'angular-material-css-vars';
    
    export class SomeComponentOrService {
      constructor(public materialCssVarsService: MaterialCssVarsService) {
        const hex = '#3f51b5';
        this.materialCssVarsService.setDarkTheme(true);
        this.materialCssVarsService.setPrimaryColor(hex);
        this.materialCssVarsService.setAccentColor('#333');
      }
    }
    ```
## Additional Features
* Auto or manually set contrast color via 
  * `setAutoContrastEnabled(bool)`
  * `setContrastColorThreshold(hueVal: HueValue)`
* Helper to set all variables
  * `setVariable(cssVarName: MaterialCssVariables, value: string)`
  * You can use the `MaterialCssVariables` enum [from here](https://github.com/johannesjo/angular-material-css-vars/blob/master/projects/material-css-vars/src/lib/model.ts) to make sure you get the variable name right.
* Rudimentary dark theme support via body class
  * `setDarkTheme(isDark: boolean)`

## Utility
There are also several [utility functions and mixins](https://github.com/johannesjo/angular-material-css-vars/blob/master/projects/material-css-vars/src/lib/_public-util.scss).
```scss
@use 'angular-material-css-vars/public-util' as mat-css-utilities;

.with-color {
  border-color: mat-css-utilities.mat-css-color-primary(300);
}

.color-and-contrast {
  @include mat-css-utilities.mat-css-color-and-contrast(300);
}

.with-bg {
  @include mat-css-utilities.mat-css-bg(300);
}
```

There are also [some additional hacks](additional-hacks.md) (e.g. adding a color to the elevation shadow) available in case you need them.

## Initialization Options
You can provide different options before initialization to change the body class used for the dark theme and to provide different default styles:
```scss
...
@use 'angular-material-css-vars/main' as mat-css;
...

@include mat-css.init-material-css-vars(
  // $default-light-theme: ... ;
  // $text: ... ;
  $dark-theme-selector: '.isDarkTheme',
  $light-theme-selector: '.isLightTheme',
);

``` 
To make those variables take effect with your mixins, you need to make sure that they are also defined before using them. E.g.:
```scss
@use 'angular-material-css-vars/main' as mat-css;
@use 'angular-material-css-vars/public-util' as mat-css-utilities;

@include mat-css.init-material-css-vars(
  // probably best put in a common variables file and imported before the mixins
  $dark-theme-selector: '.isDarkTheme',
);

.my-component {
  @include mat-css-utilities.mat-css-dark-theme {
    // dark theme styles ...  
  } 
}
```
 

A full list of the theme map [can be found here](https://github.com/johannesjo/angular-material-css-vars/blob/master/projects/material-css-vars/src/lib/_variables.scss).


### Set default (fallback palettes)
There are two ways to set the default fallback theme. One is using the `mat-css-palette-defaults` mixin.
```scss
@use 'angular-material-css-vars/public-util' as mat-css-utilities;
@use 'angular-material-css-vars/main' as mat-css-main;
@use '@angular/material/theming' as mat-theming;

@include mat-css-main.init-material-css-vars();

@include mat-css-utilities.mat-css-set-palette-defaults(mat-theming.$mat-light-blue, 'primary');
@include mat-css-utilities.mat-css-set-palette-defaults(mat-theming.$mat-pink, 'accent');
@include mat-css-utilities.mat-css-set-palette-defaults(mat-theming.$mat-red, 'warn');
```
The other is to include your own variables for [$mat-css-default-light-theme](https://github.com/johannesjo/angular-material-css-vars/blob/master/projects/material-css-vars/src/lib/_variables.scss).
```scss
@use 'angular-material-css-vars/main' as mat-css-main;
@use 'angular-material-css-vars/variables' as mat-css-vars;
@use 'angular-material-css-vars/public-util' as mat-css-utilities;

$mat-css-default-light-theme: map-merge(
  // if you don't want to enter ALL the properties
    mat-css-vars.$default-light-theme,
  (
  --palette-primary-50: mat-css-utilities.hex-to-rgb(#e1f5fe),
  --palette-primary-100: mat-css-utilities.hex-to-rgb(#b3e5fc),
  --palette-primary-200: mat-css-utilities.hex-to-rgb(#81d4fa),
  --palette-primary-300: mat-css-utilities.hex-to-rgb(#4fc3f7),
  --palette-primary-400: mat-css-utilities.hex-to-rgb(#29b6f6),
  --palette-primary-500: mat-css-utilities.hex-to-rgb(#03a9f4),
  // ...
  )
);

@include mat-css-main.init-material-css-vars();

```

## IE 11
This lib won't work  with IE11 but thanks to @Coly010 there is [a workaround for that too](https://github.com/johannesjo/angular-material-css-vars/issues/11#issuecomment-572749449).

## App Theme Mixins
The `init-material-css-vars` mixin allows content to be passed into it. This allows you to create app themes that can take advantage of the dynamic theme created inside this mixin. It may be possible to do all theming using the utility mixins outlined above, but in other cases, you may need access to the theme palette, including foreground and background palettes.

See the Material guide on [Theming your custom component](https://material.angular.io/guide/theming-your-components) for more information.

## Font config
If needed the typography can be adjusted as well.
```scss
@use 'angular-material-css-vars/main' as mat-css-main;
@use '@angular/material' as mat;
@use '@angular/material/theming' as mat-theming;

// example
$custom-typography: mat.mat-typography-config(
  $font-family: 'Roboto, monospace',
  $headline: mat-theming.mat-typography-level(32px, 48px, 700),
  $body-1: mat-theming.mat-typography-level(16px, 24px, 500)
);

@include mat-css-main.init-material-css-vars($typography-config: $custom-typography) using($mat-css-theme) {
  @include app-theme($mat-css-theme);
};

@mixin app-theme($theme) {
  // Your app theme
}
```

## Legacy components support
Angular Material v15 introduces MDC based components, which is basically a re-write for a lot of the available components. `angular-material-css-vars` v5+ only supports MDC components.

In case you are still using the legacy components, you can use the package [angular-material-css-vars-legacy](https://github.com/json-derulo/angular-material-css-vars-legacy).

## Angular compatibility table

| Angular | angular-material-css-vars |
|---------|---------------------------|
| 16      | 5.x                       |
| 15      | 4.x                       |
| 13/14   | 3.x                       |
| 12      | 2.x                       |
| 11      | 1.x                       |

## Credit...
...goes to @zbirizdo [project](https://github.com/zbirizdo/material-css-vars) on which parts of this are based which is in turn supposedly based on [this gist](https://gist.github.com/shprink/c7f333e3ad51830f14a6383f3ab35439).

...and to @pedrojrivera without whom there would be no support for @angular/material v12.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.
