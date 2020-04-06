import {
  Component,
  OnInit,
  ContentChild,
  AfterContentInit,
  ContentChildren,
  QueryList,
} from "@angular/core";
import { MessageComponent } from "../message/message.component";

@Component({
  selector: "app-messagewraper",
  templateUrl: "./messagewraper.component.html",
  styleUrls: ["./messagewraper.component.css"],
})
export class MessagewraperComponent implements OnInit, AfterContentInit {
  //@ContentChild(MessageComponent) mc: MessageComponent;
  @ContentChildren(MessageComponent) mcs: QueryList<MessageComponent>;
  constructor() {}

  ngOnInit(): void {}
  ngAfterContentInit() {
    console.log(this.mcs);
  }
}
