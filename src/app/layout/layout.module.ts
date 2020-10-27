import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SidebarComponent } from '../layout/sidebar/sidebar.component';
import { FootbarComponent } from '../layout/footbar/footbar.component';
import { SettingbarComponent } from '../layout/settingbar/settingbar.component';
import { TopnavbarComponent } from '../layout/topnavbar/topnavbar.component';
import { FirstcontentComponent } from '../content/firstcontent/firstcontent.component';
import { SecondcontentComponent } from '../content/secondcontent/secondcontent.component';



@NgModule({
  declarations: [
    SidebarComponent,
    FootbarComponent,
    SettingbarComponent,
    TopnavbarComponent,
    FirstcontentComponent,
    SecondcontentComponent
  ],
  imports: [
    CommonModule,
  ],
  exports:[
    TopnavbarComponent,
    SidebarComponent,
    FootbarComponent,
    SettingbarComponent,
    FirstcontentComponent,
    SecondcontentComponent
  ]
})
export class LayoutModule { }
