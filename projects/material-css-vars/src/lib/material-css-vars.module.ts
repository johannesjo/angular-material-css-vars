import {ModuleWithProviders, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MaterialCssVariablesConfig} from './model';
import {DEFAULT_MAT_CSS_CFG} from './default-cfg.const';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class MaterialCssVarsModule {
  static forRoot(config?: Partial<MaterialCssVariablesConfig>): ModuleWithProviders {
    return {
      ngModule: MaterialCssVarsModule,
      providers: [{provide: DEFAULT_MAT_CSS_CFG, useValue: config}]
    };
  }
}
