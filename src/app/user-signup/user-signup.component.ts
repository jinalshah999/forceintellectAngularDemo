import { Component, OnInit } from "@angular/core";
import {
  FormGroup,
  FormControl,
  Validators,
  AbstractControl,
  FormArray,
} from "@angular/forms";
import { CheckEmail } from "./checkEmail";
import { UserdataService } from "../userdata.service";

@Component({
  selector: "app-user-signup",
  templateUrl: "./user-signup.component.html",
  styleUrls: ["./user-signup.component.css"],
})
export class UserSignupComponent implements OnInit {
  user_signup: FormGroup;
  invalidNames: string[] = ["abc", "xyz"];
  constructor(private _userdata: UserdataService) {}

  ngOnInit(): void {
    this.user_signup = new FormGroup({
      user_name: new FormControl(null, [
        Validators.required,
        Validators.minLength(3),
        Validators.pattern("[a-zA-z]*"),
        this.invalidNamesFun.bind(this),
      ]),
      user_notification: new FormControl("email"),
      user_email: new FormControl(
        null,
        [Validators.required, Validators.email],
        CheckEmail.validateEmail(this._userdata)
      ),
      user_phone: new FormControl(null),
      password_group: new FormGroup(
        {
          user_password: new FormControl(null, Validators.required),
          user_confirm_password: new FormControl(null),
        },
        this.matchPassword.bind(this)
      ),
      user_hobbies: new FormArray([]),
    });

    this.user_signup
      .get("user_notification")
      .valueChanges.subscribe((x) => this.setValidation(x));
  }
  onUserSubmit() {
    console.log(this.user_signup.value);
    console.log(this.user_signup.get("user_name").value);
  }
  getHobbies() {
    return (<FormArray>this.user_signup.get("user_hobbies")).controls;
  }
  onAddHobby() {
    const cntrl = new FormControl(null);
    (<FormArray>this.user_signup.get("user_hobbies")).push(cntrl);
  }
  onHobbyRemove(i) {
    (<FormArray>this.user_signup.get("user_hobbies")).removeAt(i);
  }
  invalidNamesFun(c: AbstractControl): { [key: string]: boolean } | null {
    if (this.invalidNames.indexOf(c.value) >= 0) {
      return { nameNotAllowed: true };
    }
    return null;
  }
  matchPassword(c: AbstractControl): { [key: string]: boolean } | null {
    if (c.get("user_password").value != c.get("user_confirm_password").value) {
      return { passwordNotMatched: true };
    }
    return null;
  }
  setValidation(value: string): void {
    let emailcontrol = this.user_signup.get("user_email");
    let phonecontrol = this.user_signup.get("user_phone");
    if (value == "email") {
      phonecontrol.clearValidators();
      emailcontrol.setValidators([Validators.required, Validators.email]);
    } else {
      emailcontrol.clearValidators();
      phonecontrol.setValidators([Validators.required]);
      emailcontrol.setValidators([Validators.email]);
    }
    emailcontrol.updateValueAndValidity();
    phonecontrol.updateValueAndValidity();
  }
}
