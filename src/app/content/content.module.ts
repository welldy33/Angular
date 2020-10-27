import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContentRoutingModule } from './content-routing.module';
import { FirstcontentComponent } from '../content/firstcontent/firstcontent.component';
import { SecondcontentComponent } from '../content/secondcontent/secondcontent.component';

@NgModule({
  declarations: [
    FirstcontentComponent,SecondcontentComponent
  ],
  imports: [
    CommonModule,
    ContentRoutingModule
  ]
})
export class ContentModule { }
