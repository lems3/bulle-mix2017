import { UserService } from './../user/user.service';
import { Injectable } from '@angular/core';
import { CanActivate, Router }    from '@angular/router';

@Injectable()
export class AuthGuardService {

  constructor(
    private userService : UserService,
    private router: Router
  ) { }

  canActivate() {
    return this.userService.currentUser.map((user)=>{
      if(user){
        console.log(user);
        return true;
      } else {
        this.router.navigate['/'];
        console.log("pas correct");
        return false;
      }
    });
  }
}

@Injectable()
export class BenevoleAuthGuardService {

  constructor(
    private userService : UserService,
    private router: Router
  ) { }

  canActivate() { 
    return this.userService.currentUser.map((user)=>{
      if(user && (user.rank == "benevole" || user.rank == "admin")){
        console.log(user);
        return true;
      } else {
        this.router.navigate['/'];
        console.log("pas correct");
        return false;
      }
    });
  }
}

@Injectable()
export class AdminAuthGuardService {

  constructor(
    private userService : UserService,
    private router: Router
  ) { }

  canActivate() { 
    return this.userService.currentUser.map((user)=>{
      if(user && (user.rank == "admin")){
        console.log(user);
        return true;
      } else {
        this.router.navigate['/'];
        console.log("pas correct");
        return false;
      }
    });
  }
} 

@Injectable()
export class GuestAuthGuardService {

  constructor(
    private userService : UserService,
    private router: Router
  ) { }

  canActivate() { 
    return this.userService.currentUser.map((user)=>{
      if(user == null){
        console.log("user: "+user);
        return true;
      } else {
        this.router.navigate['/'];
        console.log("pas correct");
        return false;
      }
    });
  }
} 