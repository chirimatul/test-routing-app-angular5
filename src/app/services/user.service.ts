import { Injectable } from '@angular/core';
import { User, Roles } from '../models/user';

@Injectable()
export class UserService {

  users: User[] = [];

  constructor() {

    let u: User = new User();
    u.id = 1;
    u.fName = "Atul";
    u.lName = "Chirame";
    u.mobNum = 8600724161;
    u.emailId = "atulchirame@gmail.com";
    u.dob = new Date();
    u.gender = true;
    u.address = "sainath nagar pune";
    u.city = "Pune";
    u.countryId = 4;
    u.role = Roles.admin;
    u.about = "I love Avengers";
    u.zipCode = "514508";
    this.users.push(u);

    u = new User();
    u.id = 2;
    u.fName = "Captain america";
    u.lName = "";
    u.mobNum = 8600724161;
    u.emailId = "Captainamerica@gmail.com";
    u.dob = new Date();
    u.gender = true;
    u.address = "sky high";
    u.city = "Pune";
    u.countryId = 4;
    u.role = Roles.admin;
    u.about = "I love Avengers";
    u.zipCode = "514508";
    this.users.push(u);

    u = new User();
    u.id = 3;
    u.fName = "Atul";
    u.lName = "Chirame";
    u.mobNum = 8600724161;
    u.emailId = "atulchirame@gmail.com";
    u.dob = new Date();
    u.gender = true;
    u.address = "sainath nagar pune";
    u.city = "Pune";
    u.countryId = 4;
    u.role = Roles.admin;
    u.about = "I love Avengers";
    u.zipCode = "514508";
    this.users.push(u);

    u = new User();
    u.id = 4;
    u.fName = "Atul";
    u.lName = "Chirame";
    u.mobNum = 8600724161;
    u.emailId = "atulchirame@gmail.com";
    u.dob = new Date();
    u.gender = true;
    u.address = "sainath nagar pune";
    u.city = "Pune";
    u.countryId = 4;
    u.role = Roles.admin;
    u.about = "I love Avengers";
    u.zipCode = "514508";
    this.users.push(u);

    u = new User();
    u.id = 5;
    u.fName = "Atul";
    u.lName = "Chirame";
    u.mobNum = 8600724161;
    u.emailId = "atulchirame@gmail.com";
    u.dob = new Date();
    u.gender = true;
    u.address = "sainath nagar pune";
    u.city = "Pune";
    u.countryId = 4;
    u.role = Roles.admin;
    u.about = "I love Avengers";
    u.zipCode = "514508";
    this.users.push(u);


  }

  getUsers(): User[] {
    
    return this.users;
  }

  addUser(newUser: User): void {
    debugger
    newUser.id = 100 + this.users.length;
    this.users.push(newUser);
  }

  updateUser(user: User): boolean {
    for (var i = 0; i < this.users.length; i++) {
      if (this.users[i].id === user.id) {
        this.users[i] = user;
        break;
      }
    }
    return true;
  }

  deleteUser(id: number): boolean {
    for (var i = 0; i < this.users.length; i++) {
      if (this.users[i].id == id) {
        // splice array
        return true;
      }
    }
    return false;
  }

  getUser(id: number): User {

    for (var i = 0; i < this.users.length; i++) {
      if (this.users[i].id == id) {
        return this.users[i];
      }
    }
    return null;

  }

  getData(){
    return "atul";
  }


}
