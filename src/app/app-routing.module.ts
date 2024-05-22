import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { ProjectDetailsComponent } from './project-details/project-details.component';
import { ProfileComponent } from './profile/profile.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';



const routes: Routes = [
  { path: '', component: MainPageComponent ,pathMatch:'full'},
  {path:'project-details',component:ProjectDetailsComponent},
  {path:'profile',component:ProfileComponent},
  {path:'editprofile',component:EditProfileComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
