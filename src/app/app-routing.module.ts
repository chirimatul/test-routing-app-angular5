import { NgModule } from '@angular/core';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { HomelayoutComponent } from './home/homelayout/homelayout.component';
import { UsersComponent } from './home/users/users.component';
import { UserComponent } from './home/user/user.component';
import { AboutComponent } from './home/about/about.component';
import { AnimationComponent } from './home/animation/animation.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthGuardService } from './services/auth-guard.service';

import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [

  { path: "register", component: RegisterComponent },
  { path: "forgotpassword", component: ForgotpasswordComponent },

  {
    path: "home", component: HomelayoutComponent,
    canActivate:[AuthGuardService],
    canActivateChild:[AuthGuardService],
    children: [
      { path: "users", component: UsersComponent },
      { path: "user", component: UserComponent },
      { path: "user/:id", component: UserComponent },
      { path: "about", component: AboutComponent },
      //{ path: "animation", component: AnimationComponent },
      { path: "", component: UsersComponent }
    ]
  },
  { path: "", component: LoginComponent, pathMatch: "full" },
  { path: "**", component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }


// {
//   path: "home", component: HomelayoutComponent,
//   //canActivate:[AuthGuardService],
//   //canActivateChild:[AuthGuardService],
//   children: [  
//     {path: "users",  component: UsersComponent},
//     { path: "user", component: UserComponent },
//     { path: "user/:id", component: UserComponent },
//     { path: "about", component: AboutComponent },
//     { path: "animation", component: AnimationComponent },
//     {path: "", component: UsersComponent }
//   ]
// },
// {
//   path: "home", component: HomelayoutComponent, 
//   children: [
//     { path: "", loadChildren: "app/home/home.module#HomeModule" }
//   ]
// },
