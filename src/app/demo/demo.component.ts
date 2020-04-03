import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-demo",
  templateUrl: "./demo.component.html",
  styleUrls: ["./demo.component.css"]
})
export class DemoComponent implements OnInit {
  no1: number = 0;
  no2: number = 0;
  res: number = 0;
  ans: number = 0;
  str: string = "";
  constructor() {}

  ngOnInit(): void {}

  onAddClick(): void {
    this.res = this.no1 + this.no2;
  }
  onAdd1Click(a, b): void {
    this.ans = parseInt(a) + parseInt(b);
  }
}
