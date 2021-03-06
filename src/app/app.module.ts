import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app.routing.module';
import { AppComponent } from './app.component';
//import { ListLineComponent } from './list-line/list-line.component';

//import { HttpClientModule } from '@angular/common/http';
//import { AppnavbarComponent } from './appnavbar/appnavbar.component';
//import { SidebarComponent } from './sidebar/sidebar.component';
import { LoginModule } from './login/login.module';
import {LayoutModule} from './layout/layout.module';
import {ContentModule } from './content/content.module';

//import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [
    //AppnavbarComponent,
    AppComponent
  //  ListLineComponent,
   // SidebarComponent,
   // LoginComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginModule,
    LayoutModule,
    ContentModule
   // HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
