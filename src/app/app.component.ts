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
import {
  Router,
  NavigationStart,
  NavigationCancel,
  NavigationEnd,
  NavigationError,
} from "@angular/router";

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
  constructor(private cd: ChangeDetectorRef, private _router: Router) {
    this.checkRoutes(this._router);
  }
  isLoading: boolean = false;
  ngOnInit() {
    this.arr = this.getMessages();
  }

  checkRoutes(_router: Router) {
    _router.events.subscribe((x) => {
      if (x instanceof NavigationStart) {
        this.isLoading = true;
      }
      if (
        x instanceof NavigationCancel ||
        x instanceof NavigationEnd ||
        x instanceof NavigationError
      ) {
        this.isLoading = false;
      }
    });
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
