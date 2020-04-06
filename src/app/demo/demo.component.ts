import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  OnChanges,
  DoCheck,
  AfterContentChecked,
  AfterContentInit,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
} from "@angular/core";

@Component({
  selector: "app-demo",
  templateUrl: "./demo.component.html",
  styleUrls: ["./demo.component.css"],
})
export class DemoComponent
  implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentChecked,
    AfterContentInit,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy {
  @ViewChild("id1") paracmp: ElementRef;
  no1: number = 0.453234243;
  no2: number = 0;
  res: number = 0;
  ans: number = 0;
  str: string = "jinal";
  dt = new Date(2020, 3, 5);
  object: Object = {
    foo: "bar",
    baz: "qux",
    nested: { xyz: 3, numbers: [1, 2, 3, 4, 5] },
  };
  constructor() {
    console.log("hello from constructor");
  }

  ngOnInit(): void {
    console.log("hello from oninit");
  }
  ngOnChanges() {
    console.log("hello from changes");
  }
  ngDoCheck() {
    console.log("hello from docheck");
  }
  ngAfterContentChecked() {
    console.log("hello from contentchecked");
  }

  ngAfterContentInit() {
    console.log("hello from contetninit");
  }
  ngAfterViewInit() {
    console.log("hello from afterviewinit");
    console.log("para", this.paracmp);
  }
  ngAfterViewChecked() {
    console.log("hello from afterviewchecked");
  }
  ngOnDestroy() {
    console.log("hello from destory");
  }
  onAddClick(): void {
    this.res = this.no1 + this.no2;
  }
  onAdd1Click(a, b): void {
    this.ans = parseInt(a) + parseInt(b);
  }
}
