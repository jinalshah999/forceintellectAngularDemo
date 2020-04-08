import { Routes, RouterModule } from "@angular/router";
import { TodolistComponent } from "./todolist/todolist.component";
import { EdittodoComponent } from "./todolist/edittodo/edittodo.component";
import { AddtodoComponent } from "./todolist/addtodo/addtodo.component";
import { DemoComponent } from "./demo/demo.component";
import { ProductlistComponent } from "./productlist/productlist.component";
import { PagenotfoundComponent } from "./pagenotfound/pagenotfound.component";

const arr: Routes = [
  //{path:'',redirectTo:'/home'},
  { path: "", component: TodolistComponent },
  { path: "addtodo", component: AddtodoComponent },
  { path: "edittodo/:id", component: EdittodoComponent },
  { path: "demo", component: DemoComponent },
  { path: "products", component: ProductlistComponent },
  { path: "pagenotfound", component: PagenotfoundComponent },
  { path: "**", redirectTo: "/pagenotfound" },
];

export const routingArr = RouterModule.forRoot(arr);
