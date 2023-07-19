import { ModuleWithProviders, NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MaterialCssVariablesConfig } from "./model";
import { MATERIAL_CSS_VARS_CFG } from "../mat-css-config-token.const";
import { MaterialCssVarsService } from "./material-css-vars.service";

@NgModule({
  declarations: [],
  imports: [CommonModule],
})
export class MaterialCssVarsModule {
  static forRoot(
    config?: Partial<MaterialCssVariablesConfig>,
  ): ModuleWithProviders<MaterialCssVarsModule> {
    return {
      ngModule: MaterialCssVarsModule,
      providers: [{ provide: MATERIAL_CSS_VARS_CFG, useValue: config }],
    };
  }

  // This is necessary so the service is constructed, even if the service is never injected
  constructor(private materialCssVarsService: MaterialCssVarsService) {}
}
