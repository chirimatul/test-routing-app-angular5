import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { HomelayoutComponent } from './home/homelayout/homelayout.component';

const routes: Routes = [
  { path: "", component: LoginComponent, pathMatch: "full" },
  { path: "register", component: RegisterComponent },
  { path: "forgotpassword", component: ForgotpasswordComponent },
  {
    path: "home", component: HomelayoutComponent, 
    children: [
      { path: "", loadChildren: "app/home/home.module#HomeModule" }
    
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: false })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
