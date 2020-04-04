import { Directive, HostListener, HostBinding, Input } from "@angular/core";

@Directive({
  selector: "[appHighlight]",
})
export class HighlightDirective {
  backColor: string = "";

  @Input() color: string = "red";
  constructor() {}

  @HostListener("mouseenter") mouseover() {
    this.backColor = this.color;
  }
  @HostListener("mouseleave") mouseleave() {
    this.backColor = "white";
  }
  @HostBinding("style.background-color") get setColor1() {
    return this.backColor;
  }
}
