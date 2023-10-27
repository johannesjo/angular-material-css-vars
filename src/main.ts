import { enableProdMode, importProvidersFrom } from "@angular/core";

import { environment } from "./environments/environment";
import { AppComponent } from "./app/app.component";
import { MaterialCssVarsModule } from "../projects/material-css-vars/src/lib/material-css-vars.module";
import { provideAnimations } from "@angular/platform-browser/animations";
import { bootstrapApplication } from "@angular/platform-browser";
import { APP_BASE_HREF } from "@angular/common";

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(
      MaterialCssVarsModule.forRoot({
        primary: "#3f51b5",
        accent: "#e91e63",
        warn: "#f44336",
      }),
    ),
    { provide: APP_BASE_HREF, useValue: window._app_base ?? "/" },
    provideAnimations(),
  ],
}).catch((err) => {
  console.error(err);
});

declare global {
  interface Window {
    _app_base?: string;
  }
}
