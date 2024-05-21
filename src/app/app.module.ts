import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PmloginComponent } from './pmlogin/pmlogin.component';
import { MainPageComponent } from './main-page/main-page.component';
import { ProjectDetailsComponent } from './project-details/project-details.component';
import { ProfileComponent } from './profile/profile.component';





@NgModule({
  declarations: [
    AppComponent,
    PmloginComponent,
    MainPageComponent,
    ProjectDetailsComponent,
    ProfileComponent,
  
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
