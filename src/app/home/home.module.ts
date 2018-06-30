import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//import { HomeRoutingModule } from './home-routing.module';
import { UsersComponent } from './users/users.component';
import { UserComponent } from './user/user.component';
import { AboutComponent } from '../home/about/about.component';
import { AnimationComponent } from './animation/animation.component';
import { UserService } from '../services/user.service';
import { FormsModule }   from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    //HomeRoutingModule,
    FormsModule
  ],
  declarations: [UsersComponent, UserComponent, AboutComponent, AnimationComponent],
  providers: [UserService],
  exports:[]
})
export class HomeModule { }
