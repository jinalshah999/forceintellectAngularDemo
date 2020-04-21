import { Routes, RouterModule } from "@angular/router";
import { DemoComponent } from "./demo/demo.component";
import { UserSignupComponent } from "./user-signup/user-signup.component";
import { ForDemoComponent } from "./for-demo/for-demo.component";
import { SearchComponent } from "./search/search.component";
import { DemotaskComponent } from "./demotask/demotask.component";

const arr: Routes = [
  { path: "demo", component: DemoComponent },
  { path: "usersignup", component: UserSignupComponent },
  { path: "fordemo", component: ForDemoComponent },
  { path: "search", component: SearchComponent },
  { path: "demotask", component: DemotaskComponent },
];

export const miscRoutingArr = RouterModule.forChild(arr);
