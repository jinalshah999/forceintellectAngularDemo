import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Todo } from "../todo";
import { TododataService } from "../tododata.service";

@Component({
  selector: "app-addtodo",
  templateUrl: "./addtodo.component.html",
  styleUrls: ["./addtodo.component.css"],
})
export class AddtodoComponent implements OnInit {
  Id: string = "";
  Title: string = "";
  Status: string = "pending";
  statusarr: string[] = ["done", "pending"];
  constructor(private _tododata: TododataService, private _router: Router) {}

  ngOnInit(): void {}
  onAddTodoClick(): void {
    let obj = new Todo(this.Id, this.Title, this.Status);
    console.log(obj);
    this._tododata.addTodo(obj).subscribe((res: any) => {
      if (res != null) {
        this._router.navigate(["/"]);
      }
    });
  }
}
