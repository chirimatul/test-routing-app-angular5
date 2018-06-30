import { Component, OnInit } from '@angular/core';
import { User, Roles } from '../../models/user';
import { UserService } from '../../services/user.service';
import * as $ from 'jquery';
import { Observable } from 'rxjs/Rx';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap, tap } from 'rxjs/operators';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  user: User = new User();
  newUser: User;
  addingUser: boolean = false;
  formsHeader:string=" Add user";
  constructor(private userService: UserService, private route: ActivatedRoute) {

  }

  ngOnInit() {
    
    let id = this.route.snapshot.paramMap.get('id');
    debugger
    if (id != undefined) {
      var u = this.userService.getUser(Number(id));

      if (u != null) {
        this.user = u;
        this.formsHeader = "Update user";
      }
    }

  }

  addUpdateUser(): void {
    
    if (this.user.id > 0) this.addUser();
    else this.updateUser();

  }

  private addUser() {
    this.user.role = Roles.admin;
    this.user.dob = new Date();
    this.userService.addUser(this.user);

    this.newUser = this.user;
    this.user = new User();
    this.addingUser = true;

    let timer = Observable.timer(2000, 5000);
    let subscription = timer.subscribe(() => {
      this.addingUser = false;
      $('#btnModal').click();
      subscription.unsubscribe();
    });
  }

  private updateUser() {
    this.userService.updateUser(this.user);
    
  }

}
