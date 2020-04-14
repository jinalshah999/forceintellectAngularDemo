import { Component, OnInit } from "@angular/core";
import { RegisterDataService } from "../register-data.service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"],
})
export class HeaderComponent implements OnInit {
  constructor(private _regData: RegisterDataService) {}

  ngOnInit(): void {}
  onLogOut() {
    this._regData.logout();
  }
  get checkLoggedIn(): boolean {
    return this._regData.isLoggedIn;
  }
}
