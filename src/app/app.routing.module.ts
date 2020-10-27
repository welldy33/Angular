import { NgModule } from '@angular/core';
import { Routes, RouterModule }   from '@angular/router';


const appRoutes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full'}
 // { path: '', component:  ListLineComponent},
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }
