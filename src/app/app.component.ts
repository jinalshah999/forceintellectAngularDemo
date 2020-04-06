import {
  Component,
  ViewChild,
  AfterViewInit,
  ChangeDetectorRef,
  OnInit,
  ViewChildren,
  QueryList,
} from "@angular/core";
import { MessageComponent } from "./message/message.component";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit, AfterViewInit {
  title = "demoapp";
  //@ViewChild(MessageComponent) mc: MessageComponent;
  //@ViewChildren(MessageComponent) mcs: QueryList<MessageComponent>;
  arr: string[] = [];
  constructor(private cd: ChangeDetectorRef) {}

  ngOnInit() {
    this.arr = this.getMessages();
  }
  ngAfterViewInit() {}
  // ngAfterViewInit() {
  //   console.log(this.mcs);
  //   this.mcs.forEach((x) => {
  //     x.str = "jinal";
  //     console.log(x.str);
  //   });
  // }
  getMessages() {
    return ["hello", "demo", "testing1"];
  }
  // ngAfterViewInit() {
  //   console.log(this.mc);
  //   this.mc.str = "hello from parent";
  //   this.cd.detectChanges();
  // }
}
