import { Injectable } from "@angular/core";
import { Router } from "@angular/router";

@Injectable({
  providedIn: "root",
})
export class RegisterDataService {
  redirectURL: string = "";
  currentUser = null;
  constructor(private _router: Router) {}

  get isLoggedIn(): boolean {
    return !!this.currentUser;
  }

  logIn(userName: string, password: string) {
    localStorage.setItem("user_name", userName);
    if (userName == "admin") {
      this.currentUser = {
        id: "admin@gmail.com",
        uname: "admin",
        isAdmin: true,
      };
      return;
    }
    this.currentUser = {
      id: userName + "gmail.com",
      uname: userName,
      isAdmin: false,
    };
  }
  logout() {
    this.currentUser = null;
    localStorage.clear();
    this._router.navigate(["/login"]);
  }
}
