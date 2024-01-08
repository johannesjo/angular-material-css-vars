import { ApplicationConfig } from "@angular/core";
import { provideMaterialCssVars } from "../../projects/material-css-vars/src/lib/material-css-vars.module";
import { APP_BASE_HREF } from "@angular/common";
import { provideAnimations } from "@angular/platform-browser/animations";

export const appConfig: ApplicationConfig = {
  providers: [
    provideMaterialCssVars({
      primary: "#3f51b5",
      accent: "#e91e63",
      warn: "#f44336",
    }),
    { provide: APP_BASE_HREF, useValue: window._app_base ?? "/" },
    provideAnimations(),
  ],
};
