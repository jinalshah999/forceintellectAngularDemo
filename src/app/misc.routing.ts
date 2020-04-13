import { Routes, RouterModule } from "@angular/router";
import { DemoComponent } from "./demo/demo.component";
import { UserSignupComponent } from "./user-signup/user-signup.component";

const arr: Routes = [
  { path: "demo", component: DemoComponent },
  { path: "usersignup", component: UserSignupComponent },
];

export const miscRoutingArr = RouterModule.forChild(arr);
