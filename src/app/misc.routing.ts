import { Routes, RouterModule } from "@angular/router";
import { DemoComponent } from "./demo/demo.component";
import { UserSignupComponent } from "./user-signup/user-signup.component";
import { ForDemoComponent } from "./for-demo/for-demo.component";

const arr: Routes = [
  { path: "demo", component: DemoComponent },
  { path: "usersignup", component: UserSignupComponent },
  { path: "fordemo", component: ForDemoComponent },
];

export const miscRoutingArr = RouterModule.forChild(arr);
