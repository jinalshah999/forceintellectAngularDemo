import { Routes, RouterModule } from "@angular/router";
import { TodolistComponent } from "./todolist.component";
import { EdittodoComponent } from "./edittodo/edittodo.component";
import { AddtodoComponent } from "./addtodo/addtodo.component";

const arr: Routes = [
  {
    path: "", //localhost:4200/todo/
    children: [
      { path: "", component: TodolistComponent },
      { path: "addtodo", component: AddtodoComponent }, //localhost:4200/todo/addtodo
      { path: "edittodo/:id", component: EdittodoComponent },
    ],
  },
];

export const todoRoutingArr = RouterModule.forChild(arr);
