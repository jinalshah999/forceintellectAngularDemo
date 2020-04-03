import { Component, OnInit } from "@angular/core";
import { Todo } from "./todo";

@Component({
  selector: "app-todolist",
  templateUrl: "./todolist.component.html",
  styleUrls: ["./todolist.component.css"]
})
export class TodolistComponent implements OnInit {
  Id: string = "";
  Title: string = "";
  Status: string = "pending";
  flag: boolean = false;
  todos: Todo[] = [
    new Todo("1", "push your code to github", "done"),
    new Todo("2", "Email to your manager", "pending")
  ];
  statusarr: string[] = ["done", "pending"];
  constructor() {}

  ngOnInit(): void {}
  onDeleteClick(item: Todo): void {
    this.todos.splice(this.todos.indexOf(item), 1);
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
    this.todos.push(new Todo(this.Id, this.Title, this.Status));
    this.clearValues();
    this.flag = false;
  }
  clearValues(): void {
    this.Id = "";
    this.Title = "";
    this.Status = "pending";
  }
}
