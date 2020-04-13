import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { PagenotfoundComponent } from "./pagenotfound/pagenotfound.component";

const arr: Routes = [
  { path: "", component: HomeComponent }, //localhost:4200
  {
    path: "todo", //localhost:4200/todo/addtodo
    loadChildren: () =>
      import("./todolist/todo.module").then((x) => x.TodoModule),
  },
  {
    path: "products", //localhost:4200/products/
    loadChildren: () =>
      import("./productlist/product.module").then((x) => x.ProductModule),
  },
  { path: "pagenotfound", component: PagenotfoundComponent },
  { path: "**", redirectTo: "/pagenotfound" },
];

export const routingArr = RouterModule.forRoot(arr);
