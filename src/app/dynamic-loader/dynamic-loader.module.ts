import {
  ANALYZE_FOR_ENTRY_COMPONENTS,
  ModuleWithProviders,
  NgModule,
  NgModuleFactoryLoader,
  SystemJsNgModuleLoader,
  Type
} from '@angular/core';
import { ROUTES } from '@angular/router';
import { CommonModule } from '@angular/common';
import {
  DYNAMIC_COMPONENT,
  DYNAMIC_COMPONENT_MANIFESTS,
  DYNAMIC_MODULE,
  DynamicComponentManifest
} from './dynamic-loader-manifest';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class DynamicLoaderModule { }
