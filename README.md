# AngularMaterialCssVars
You want to style your angular material dynamically with all the colors in the rainbow and don't really care about IE11 (support for css variables is required)? Look no further!

[Check out the Demo!](https://johannesjo.github.io/angular-material-css-vars/)

# Setup
1. Install:
    ```bash
    npm i angular-material-css-vars -S
    ```
2. Remove `@import '~@angular/material/theming';` from your main stylesheet file.
3. Add this to your main stylesheet instead:
    ```scss
    @import '~angular-material-css-vars/main';
    @include initMaterialCssVars();
    ```
4. Change the main theme color like so:
    ```typescript
    import {MaterialCssVarsService} from 'angular-material-css-vars';
    
    export class SomeComponentOrService {
      constructor(public materialCssVarsService: MaterialCssVarsService) {
        const hex = '#3f51b5';
        this.materialCssVarsService.changePrimaryColor(hex);
      }
    }
    ```

# Credit...
...goes to @zbirizdo [project](https://github.com/zbirizdo/material-css-vars) on which parts of this are based which is in turn supposedly based on [this gist](https://gist.github.com/shprink/c7f333e3ad51830f14a6383f3ab35439).

# Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.
