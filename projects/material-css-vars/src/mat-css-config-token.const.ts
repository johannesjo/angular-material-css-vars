import { InjectionToken } from "@angular/core";
import { MaterialCssVariablesConfig } from "./lib/model";

export const MATERIAL_CSS_VARS_CFG = new InjectionToken<
  MaterialCssVariablesConfig | undefined
>("Mat Css Config");
