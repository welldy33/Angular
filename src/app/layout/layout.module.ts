import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SidebarComponent } from '../layout/sidebar/sidebar.component';
import { FootbarComponent } from '../layout/footbar/footbar.component';
import { SettingbarComponent } from '../layout/settingbar/settingbar.component';
import { TopnavbarComponent } from '../layout/topnavbar/topnavbar.component';


@NgModule({
  declarations: [
    SidebarComponent,
    FootbarComponent,
    SettingbarComponent,
    TopnavbarComponent
  ],
  imports: [
    CommonModule,
  ],
  exports:[
    TopnavbarComponent,
    SidebarComponent,
    FootbarComponent,
    SettingbarComponent
  ]
})
export class LayoutModule { }
