import {
  EnvironmentProviders,
  inject,
  makeEnvironmentProviders,
  ModuleWithProviders,
  NgModule,
  provideEnvironmentInitializer,
} from "@angular/core";
import { CommonModule } from "@angular/common";
import { MaterialCssVariablesConfig } from "./model";
import { MATERIAL_CSS_VARS_CFG } from "../mat-css-config-token.const";
import { MaterialCssVarsService } from "./material-css-vars.service";

@NgModule({
  imports: [CommonModule],
})
// eslint-disable-next-line @typescript-eslint/no-extraneous-class
export class MaterialCssVarsModule {
  static forRoot(
    config?: Partial<MaterialCssVariablesConfig>,
  ): ModuleWithProviders<MaterialCssVarsModule> {
    return {
      ngModule: MaterialCssVarsModule,
      providers: [provideMaterialCssVars(config)],
    };
  }
}

export function provideMaterialCssVars(
  config?: Partial<MaterialCssVariablesConfig>,
): EnvironmentProviders {
  return makeEnvironmentProviders([
    { provide: MATERIAL_CSS_VARS_CFG, useValue: config },
    provideEnvironmentInitializer(() => inject(MaterialCssVarsService)),
  ]);
}
