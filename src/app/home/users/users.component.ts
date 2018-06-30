import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: User[];
  constructor(private userService: UserService, private router: Router) {

    this.users = [];
  }

  ngOnInit() {

    this.users = this.userService.getUsers();
    
  }

  deleteUser(user: User): void {
    // delete user from list
    this.userService.deleteUser(user.id);
    this.users = this.userService.getUsers();
  }

  editUser(user: User): void {
    this.router.navigate(["home/user/" + user.id ]);
    //this.router.navigate(["home/user" ]);
  }


}
