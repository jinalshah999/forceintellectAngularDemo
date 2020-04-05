import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-demo",
  templateUrl: "./demo.component.html",
  styleUrls: ["./demo.component.css"],
})
export class DemoComponent implements OnInit {
  no1: number = 0.453234243;
  no2: number = 0;
  res: number = 0;
  ans: number = 0;
  str: string = "jinal shah";
  dt = new Date(2020, 3, 5);
  object: Object = {
    foo: "bar",
    baz: "qux",
    nested: { xyz: 3, numbers: [1, 2, 3, 4, 5] },
  };
  constructor() {}

  ngOnInit(): void {}

  onAddClick(): void {
    this.res = this.no1 + this.no2;
  }
  onAdd1Click(a, b): void {
    this.ans = parseInt(a) + parseInt(b);
  }
}
