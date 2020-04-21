import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Todo } from "../todo";
import { TododataService } from "../tododata.service";

@Component({
  selector: "app-edittodo",
  templateUrl: "./edittodo.component.html",
  styleUrls: ["./edittodo.component.css"],
})
export class EdittodoComponent implements OnInit {
  Id: string = "";
  Title: string = "";
  Status: string = "pending";
  statusarr: string[] = ["done", "pending"];
  constructor(
    private _tododata: TododataService,
    private _actroute: ActivatedRoute,
    private _router: Router
  ) {}

  ngOnInit(): void {
    //this.Id = this._actroute.snapshot.params["id"];
    this._actroute.params.subscribe((x) => {
      this.Id = x.id;
      console.log(x);
    });

    let qid = this._actroute.snapshot.queryParams["id"];
    let frag = this._actroute.snapshot.fragment;
    this._tododata.getTodoById(this.Id).subscribe((res) => {
      this.Title = res[0].Title;
      this.Status = res[0].Status;
    });
  }
  onEditTodoClick() {
    let obj = new Todo(this.Id, this.Title, this.Status);
    this._tododata.editTodo(obj).subscribe((res: any) => {
      this._router.navigate(["/"]);
    });
  }
  onClick() {
    this._router.navigate(["/todo/edittodo", 1010]);
  }
}
