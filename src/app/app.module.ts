import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { GalaryComponent } from './galary/galary.component';
import { HomeComponent } from './home/home.component';
import { ServiceComponent } from './service/service.component';
import { DevelopmentComponent } from './development/development.component';
import { TestingComponent } from './testing/testing.component';
import { DeployementComponent } from './deployement/deployement.component';
import { ErrorpageComponent } from './errorpage/errorpage.component';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    GalaryComponent,
    HomeComponent,
    ServiceComponent,
    DevelopmentComponent,
    TestingComponent,
    DeployementComponent,
    ErrorpageComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
