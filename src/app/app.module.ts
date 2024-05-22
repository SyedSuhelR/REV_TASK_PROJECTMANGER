import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PmloginComponent } from './pmlogin/pmlogin.component';
import { MainPageComponent } from './main-page/main-page.component';
import { ProjectDetailsComponent } from './project-details/project-details.component';
import { FormsModule } from '@angular/forms';
import { ProfileComponent } from './profile/profile.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';








@NgModule({
  declarations: [
    AppComponent,
    PmloginComponent,
    MainPageComponent,
    ProjectDetailsComponent,
    ProfileComponent,
    EditProfileComponent
    

  
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
