import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FirstcontentComponent} from './firstcontent/firstcontent.component';
import {SecondcontentComponent} from './secondcontent/secondcontent.component';

const routes: Routes = [
  {path: 't1', component: FirstcontentComponent},
  {path: 't2', component: SecondcontentComponent}
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContentRoutingModule { }
