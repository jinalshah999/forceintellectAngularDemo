import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { TodolistComponent } from "./todolist.component";
import { AddtodoComponent } from "./addtodo/addtodo.component";
import { EdittodoComponent } from "./edittodo/edittodo.component";
import { FilterPipe } from "./filter.pipe";

import { todoRoutingArr } from "./todo.routing";

@NgModule({
  declarations: [
    TodolistComponent,
    AddtodoComponent,
    EdittodoComponent,
    FilterPipe,
  ],
  imports: [CommonModule, FormsModule, todoRoutingArr],
})
export class TodoModule {}
