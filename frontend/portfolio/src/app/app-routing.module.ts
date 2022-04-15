import { ResumeviewComponent } from './pages/resumeview/resumeview.component';
import { MyProjectsComponent } from './pages/my-projects/my-projects.component';
import { AboutMeComponent } from './pages/about-me/about-me.component';
import { HomeComponent } from './pages/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyBioComponent } from './pages/my-bio/my-bio.component';

const routes: Routes = [
  {path:'', redirectTo: 'home', pathMatch:'full'},
  {path:'home', component: HomeComponent},
  {path:'about', component: AboutMeComponent},
  {path:'bio', component: MyBioComponent},
  {path:'projects', component: MyProjectsComponent},
  {path:'resume', component: ResumeviewComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
