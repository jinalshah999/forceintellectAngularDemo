import { Component, OnInit, OnDestroy } from "@angular/core";
import { Todo } from "./todo";
import { TododataService } from "./tododata.service";
import { Subscription } from "rxjs";

@Component({
  selector: "app-todolist",
  templateUrl: "./todolist.component.html",
  styleUrls: ["./todolist.component.css"],
})
export class TodolistComponent implements OnInit, OnDestroy {
  Id: string = "";
  Title: string = "";
  Status: string = "pending";
  flag: boolean = false;
  todos: Todo[] = [];
  statusarr: string[] = ["done", "pending"];
  sub: Subscription;
  constructor(private _tododata: TododataService) {}

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
    //
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
    if (item.Status === "done") {
      item.Status = "pending";
    } else {
      item.Status = "done";
    }
  }
  onAddTodoClick(): void {
    this.flag = true;
  }
  onSaveTodo(): void {
    let obj = new Todo(this.Id, this.Title, this.Status);
    console.log(obj);
    this._tododata.addTodo(obj).subscribe((res: any) => {
      console.log(res);
      this.todos.push(obj);
      this.clearValues();
      this.flag = false;
    });
  }
  clearValues(): void {}
}
