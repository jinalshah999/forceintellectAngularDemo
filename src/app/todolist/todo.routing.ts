import { Routes, RouterModule } from "@angular/router";
import { TodolistComponent } from "./todolist.component";
import { EdittodoComponent } from "./edittodo/edittodo.component";
import { AddtodoComponent } from "./addtodo/addtodo.component";
import { TodoresolverService } from "./todoresolver.service";

const arr: Routes = [
  {
    path: "", //localhost:4200/todo/
    children: [
      {
        path: "",
        resolve: { xyz: TodoresolverService },
        component: TodolistComponent,
      },
      { path: "addtodo", component: AddtodoComponent }, //localhost:4200/todo/addtodo
      { path: "edittodo/:id", component: EdittodoComponent },
    ],
  },
];

export const todoRoutingArr = RouterModule.forChild(arr);
