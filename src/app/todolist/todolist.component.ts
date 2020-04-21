import { Component, OnInit, OnDestroy } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
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
  error: any;
  constructor(
    private _tododata: TododataService,
    private _router: Router,
    private _actRoutes: ActivatedRoute
  ) {}

  ngOnDestroy() {
    //this.sub.unsubscribe();
  }
  ngOnInit(): void {
    let obj = this._actRoutes.snapshot.data["xyz"];
    this.todos = obj.todo;
    this.error = obj.error;
    console.log(obj);
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
    this._router.navigate(["/todo/edittodo", item.Id], {
      queryParams: { id: item.Id },
      fragment: "loading",
    });
  }
}
