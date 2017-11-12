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
    return this.userService.currentUser.subscribe((user)=>{
      if(user)
        return true;
      else{
        this.router.navigate['/'];
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
    return this.userService.currentUser.subscribe((user)=>{
      if(user && (user.rank == "benevole" || user.rank == "admin"))
        return true;
      else{
        this.router.navigate['/'];
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
    return this.userService.currentUser.subscribe((user)=>{
      if(user && (user.rank == "admin"))
        return true;
      else{
        this.router.navigate['/'];
        return false;
      }
    });
  }
} 