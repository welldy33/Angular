import { NgModule } from '@angular/core';
import { Routes, RouterModule }   from '@angular/router';
import { CommonModule } from '@angular/common';
import { ListLineComponent }  from './list-line/list-line.component';


const appRoutes: Routes = [
  { path: '', component:  ListLineComponent},
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(appRoutes),
    CommonModule
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }
