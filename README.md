<p align="center"><img alt="logo" src="logo.png"></p>

You want to style your angular material dynamically with all the colors in the rainbow? Look no further!

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
 
    // optional
    $mat-css-dark-theme-selector: '.isDarkTheme';
    $mat-css-light-theme-selector: '.isLightTheme';
 
    // init theme
    @include init-material-css-vars() {
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

There are also [some additional hacks](additional-hacks.md) (e.g. adding a color to the elevation shadow) available in case you need them.

## Initialization Options
You can provide different options before initialization to change the body class used for the dark theme and to provide different default styles:
```scss
// $mat-css-default-light-theme: ... ;
// $mat-css-text: ... ;
$mat-css-dark-theme-selector: '.isDarkTheme';
$mat-css-light-theme-selector: '.isLightTheme';

@include init-material-css-vars();

``` 
To make those variables take effect with your mixins, you need to make sure that they are also defined before using them. E.g.:
```scss
// probably best put in a common variables file and imported before the mixins
$mat-css-dark-theme-selector: '.isDarkThemeCUSTOM';

@import '~angular-material-css-vars/public-util';

.my-component {
  @include mat-css-dark-theme {
    // dark theme styles ...  
  } 
}
```
 

A full list of the theme map [can be found here](https://github.com/johannesjo/angular-material-css-vars/blob/master/projects/material-css-vars/src/lib/_variables.scss).


### Set default (fallback palettes)
There are two ways to set the default fallback theme. One is using the `mat-css-palette-defaults` mixin.
```scss
@import '../projects/material-css-vars/src/lib/public-util';
@import '../projects/material-css-vars/src/lib/main';

@include init-material-css-vars();

@include mat-css-set-palette-defaults($mat-light-blue, 'primary');
@include mat-css-set-palette-defaults($mat-pink, 'accent');
@include mat-css-set-palette-defaults($mat-red, 'warn');
```
The other is to include your own variables for [$mat-css-default-light-theme](https://github.com/johannesjo/angular-material-css-vars/blob/master/projects/material-css-vars/src/lib/_variables.scss).
```scss
@import '../projects/material-css-vars/src/lib/main';

$mat-css-default-light-theme: map-merge(
  // if you don't want to enter ALL the properties
  $mat-css-default-light-theme,
  (
  --palette-primary-50: _mat-css-hex-to-rgb(#e1f5fe),
  --palette-primary-100: _mat-css-hex-to-rgb(#b3e5fc),
  --palette-primary-200: _mat-css-hex-to-rgb(#81d4fa),
  --palette-primary-300: _mat-css-hex-to-rgb(#4fc3f7),
  --palette-primary-400: _mat-css-hex-to-rgb(#29b6f6),
  --palette-primary-500: _mat-css-hex-to-rgb(#03a9f4),
  // ...
  )
);

@include init-material-css-vars();

```

## IE 11
This lib won't work  with IE11 but thanks to @Coly010 there is [a workaround for that too](https://github.com/johannesjo/angular-material-css-vars/issues/11#issuecomment-572749449).

## App Theme Mixins
The `init-material-css-vars` mixin allows content to be passed into it. This allows you to create app themes that can take advantage of the dynamic theme created inside this mixin. It may be possible to do all theming using the utility mixins outlined above, but in other cases, you may need access to the theme palette, including foreground and background palettes.

See the Material guide on [Theming your custom component](https://material.angular.io/guide/theming-your-components) for more information.

## Font config
If needed the typography can be adjusted as well.
```scss
// example
$custom-typography: mat-typography-config(
  $font-family: 'Roboto, monospace',
  $headline: mat-typography-level(32px, 48px, 700),
  $body-1: mat-typography-level(16px, 24px, 500)
);

@include init-material-css-vars($typography-config: $custom-typography) {
  @include app-theme($mat-css-theme);
};
```

## upgrading to angular v12
Angular material v12 interoduces some big changes, which leaves you with two options when upgrading to ng12: You can either stay at angular material v11 and angular-material-css-vars v1.2.0 or you can use v2+ which thanks to @pedrojrivera adds full support for the new version.

## angular material v11 or lower
Use v1.2.0 of this lib.


## Credit...
...goes to @zbirizdo [project](https://github.com/zbirizdo/material-css-vars) on which parts of this are based which is in turn supposedly based on [this gist](https://gist.github.com/shprink/c7f333e3ad51830f14a6383f3ab35439).

...and to @pedrojrivera without whom there would be no support for @angular/material v12.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.
