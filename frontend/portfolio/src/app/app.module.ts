import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutMeComponent } from './pages/about-me/about-me.component';
import { MyProjectsComponent } from './pages/my-projects/my-projects.component';
import { MyBioComponent } from './pages/my-bio/my-bio.component';
import { ResumeComponent } from './pages/resume/resume.component';
import { LoginComponent } from './private/login/login.component';
import { SignupComponent } from './private/signup/signup.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    AboutMeComponent,
    MyProjectsComponent,
    MyBioComponent,
    ResumeComponent,
    LoginComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
