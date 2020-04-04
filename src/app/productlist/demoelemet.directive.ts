import { Directive, ElementRef } from "@angular/core";

@Directive({
  selector: "[appDemoelemet]",
})
export class DemoelemetDirective {
  constructor(private ele: ElementRef) {
    console.log(ele);
  }
}
