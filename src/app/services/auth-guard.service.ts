import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivateChild } from
 '@angular/router';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthGuardService implements CanActivate, CanActivateChild  {
  
  
  canActivate(route: ActivatedRouteSnapshot,
     state: RouterStateSnapshot):
   boolean | Observable<boolean> | 
   Promise<boolean> {
     
    return false;
  }


  canActivateChild(childRoute:
     ActivatedRouteSnapshot, 
     state: RouterStateSnapshot):
   boolean | Observable<boolean> |
    Promise<boolean> {
    
    return true;
  }
  constructor() { }

}
