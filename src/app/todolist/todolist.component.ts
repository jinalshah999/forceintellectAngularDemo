import { Component, OnInit, OnDestroy } from "@angular/core";
import { Router } from "@angular/router";
import { Todo } from "./todo";
import { TododataService } from "./tododata.service";
import { Subscription } from "rxjs";

@Component({
  selector: "app-todolist",
  templateUrl: "./todolist.component.html",
  styleUrls: ["./todolist.component.css"],
})
export class TodolistComponent implements OnInit, OnDestroy {
  todos: Todo[] = [];
  sub: Subscription;
  constructor(private _tododata: TododataService, private _router: Router) {}

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
  ngOnInit(): void {
    this.sub = this._tododata.getAllTodos().subscribe(
      (res: Todo[]) => {
        console.log(res);
        this.todos = res;
      },
      function (error) {
        console.log(error);
      },
      function () {
        console.log("call is finished");
      }
    );
  }
  onDeleteClick(item: Todo): void {
    this._tododata.deleteTodo(item.Id).subscribe(
      (res: any) => {
        console.log(res);
        if (res.affectedRows == 1) {
          this.todos.splice(this.todos.indexOf(item), 1);
        }
      },
      function (error) {
        console.log(error);
      },
      function () {
        console.log("call is finished");
      }
    );
  }
  onEditClick(item: Todo): void {
    console.log(item);
    this._router.navigate(["/edittodo", item.Id]);
  }
}
