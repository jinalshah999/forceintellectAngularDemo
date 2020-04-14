import { Injectable } from "@angular/core";
import {
  CanLoad,
  Route,
  Router,
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from "@angular/router";
import { RegisterDataService } from "./register-data.service";

@Injectable({
  providedIn: "root",
})
export class UserGuardService implements CanLoad, CanActivate {
  constructor(private _regData: RegisterDataService, private _router: Router) {}
  canLoad(_route: Route): boolean {
    if (localStorage.getItem("user_name") != null) {
      return true;
    } else {
      this._regData.redirectURL = _route.path;
      this._router.navigate(["/login"]);
      return false;
    }
  }
  canActivate(
    _next: ActivatedRouteSnapshot,
    _state: RouterStateSnapshot
  ): boolean {
    if (localStorage.getItem("user_name") != null) {
      return true;
    } else {
      this._regData.redirectURL = _state.url;
      this._router.navigate(["/login"]);
      return false;
    }
  }
}
