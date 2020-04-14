import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";
import { RegisterDataService } from "../register-data.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  login_form: FormGroup;
  constructor(private _regData: RegisterDataService, private _router: Router) {}

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm() {
    this.login_form = new FormGroup({
      user_name: new FormControl(null),
      user_password: new FormControl(null),
    });
  }

  onLoginSubmit() {
    if (
      this.login_form.get("user_name").value == "admin" &&
      this.login_form.get("user_password").value == "1234"
    ) {
      this._regData.logIn(
        this.login_form.get("user_name").value,
        this.login_form.get("user_password").value
      );
      if (this._regData.redirectURL) {
        this._router.navigateByUrl(this._regData.redirectURL);
      } else {
        this._router.navigate(["/"]);
      }
    } else {
      alert("invalid uname and password");
    }
  }
}
