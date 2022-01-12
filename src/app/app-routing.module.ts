import { Component, NgModule } from '@angular/core';
import { TestComponentRenderer } from '@angular/core/testing';
import { RouterModule, Routes } from '@angular/router';
import { DeployementComponent } from './deployement/deployement.component';
import { DevelopmentComponent } from './development/development.component';
import { GalaryComponent } from './galary/galary.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';
import { ServiceComponent } from './service/service.component';
import { TestingComponent } from './testing/testing.component';

const routes: Routes = [

{
  path:'home',
 component:HomeComponent

},


{
  path:'galary',
  component:GalaryComponent

},

{
  path:'service',
  component:ServiceComponent

},

{
  path:'register',
  component:RegisterComponent

},

{
  path:'login',
  component:LoginComponent

},

{
  path:'service',
  children:[
    {
      path:'dev',
      component:DevelopmentComponent
    },
    {
      path:'test',
      component:TestingComponent
    },
  {
    path:'deply',
    component:DeployementComponent
  }
  ]
}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
