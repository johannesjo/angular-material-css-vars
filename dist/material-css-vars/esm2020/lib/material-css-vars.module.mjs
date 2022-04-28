import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MATERIAL_CSS_VARS_CFG } from '../mat-css-config-token.const';
import * as i0 from "@angular/core";
export class MaterialCssVarsModule {
    static forRoot(config) {
        return {
            ngModule: MaterialCssVarsModule,
            providers: [{ provide: MATERIAL_CSS_VARS_CFG, useValue: config }]
        };
    }
}
MaterialCssVarsModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: MaterialCssVarsModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
MaterialCssVarsModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: MaterialCssVarsModule, imports: [CommonModule] });
MaterialCssVarsModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: MaterialCssVarsModule, imports: [[
            CommonModule
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: MaterialCssVarsModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [],
                    imports: [
                        CommonModule
                    ]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWF0ZXJpYWwtY3NzLXZhcnMubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvbWF0ZXJpYWwtY3NzLXZhcnMvc3JjL2xpYi9tYXRlcmlhbC1jc3MtdmFycy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFzQixRQUFRLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDNUQsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBRTdDLE9BQU8sRUFBQyxxQkFBcUIsRUFBQyxNQUFNLCtCQUErQixDQUFDOztBQVFwRSxNQUFNLE9BQU8scUJBQXFCO0lBQ2hDLE1BQU0sQ0FBQyxPQUFPLENBQUMsTUFBNEM7UUFDekQsT0FBTztZQUNMLFFBQVEsRUFBRSxxQkFBcUI7WUFDL0IsU0FBUyxFQUFFLENBQUMsRUFBQyxPQUFPLEVBQUUscUJBQXFCLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBQyxDQUFDO1NBQ2hFLENBQUM7SUFDSixDQUFDOztrSEFOVSxxQkFBcUI7bUhBQXJCLHFCQUFxQixZQUg5QixZQUFZO21IQUdILHFCQUFxQixZQUp2QjtZQUNQLFlBQVk7U0FDYjsyRkFFVSxxQkFBcUI7a0JBTmpDLFFBQVE7bUJBQUM7b0JBQ1IsWUFBWSxFQUFFLEVBQUU7b0JBQ2hCLE9BQU8sRUFBRTt3QkFDUCxZQUFZO3FCQUNiO2lCQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtNb2R1bGVXaXRoUHJvdmlkZXJzLCBOZ01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0NvbW1vbk1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7TWF0ZXJpYWxDc3NWYXJpYWJsZXNDb25maWd9IGZyb20gJy4vbW9kZWwnO1xuaW1wb3J0IHtNQVRFUklBTF9DU1NfVkFSU19DRkd9IGZyb20gJy4uL21hdC1jc3MtY29uZmlnLXRva2VuLmNvbnN0JztcblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbXSxcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZVxuICBdXG59KVxuZXhwb3J0IGNsYXNzIE1hdGVyaWFsQ3NzVmFyc01vZHVsZSB7XG4gIHN0YXRpYyBmb3JSb290KGNvbmZpZz86IFBhcnRpYWw8TWF0ZXJpYWxDc3NWYXJpYWJsZXNDb25maWc+KTogTW9kdWxlV2l0aFByb3ZpZGVyczxNYXRlcmlhbENzc1ZhcnNNb2R1bGU+IHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IE1hdGVyaWFsQ3NzVmFyc01vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogW3twcm92aWRlOiBNQVRFUklBTF9DU1NfVkFSU19DRkcsIHVzZVZhbHVlOiBjb25maWd9XVxuICAgIH07XG4gIH1cbn1cbiJdfQ==