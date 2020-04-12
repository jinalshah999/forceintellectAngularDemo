import { Routes, RouterModule } from "@angular/router";
import { TodolistComponent } from "./todolist/todolist.component";
import { EdittodoComponent } from "./todolist/edittodo/edittodo.component";
import { AddtodoComponent } from "./todolist/addtodo/addtodo.component";
import { DemoComponent } from "./demo/demo.component";
import { ProductlistComponent } from "./productlist/productlist.component";
import { PagenotfoundComponent } from "./pagenotfound/pagenotfound.component";
import { AddproductComponent } from "./productlist/addproduct/addproduct.component";
import { UserSignupComponent } from "./user-signup/user-signup.component";
import { EditProductComponent } from "./productlist/edit-product/edit-product.component";

const arr: Routes = [
  //{path:'',redirectTo:'/home'},
  { path: "", component: TodolistComponent },
  { path: "addtodo", component: AddtodoComponent },
  { path: "edittodo/:id", component: EdittodoComponent },
  { path: "demo", component: DemoComponent },
  { path: "products", component: ProductlistComponent },
  { path: "addproduct", component: AddproductComponent },
  { path: "editproduct/:id", component: EditProductComponent },
  { path: "usersignup", component: UserSignupComponent },
  { path: "pagenotfound", component: PagenotfoundComponent },
  { path: "**", redirectTo: "/pagenotfound" },
];

export const routingArr = RouterModule.forRoot(arr);
