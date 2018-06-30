import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { UserComponent } from './user/user.component';
import { AboutComponent } from './about/about.component';
import { AnimationComponent } from './animation/animation.component';

const routes: Routes = [
  {path:"", component:UsersComponent},
  {path:"users", component:UsersComponent},
  {path:"user", component:UserComponent},
  {path:"user/:id", component:UserComponent},
  {path:"about", component:AboutComponent},
  {path:"animation", component:AnimationComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
