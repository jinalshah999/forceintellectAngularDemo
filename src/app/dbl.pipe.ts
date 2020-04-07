import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "dbl",
})
export class DblPipe implements PipeTransform {
  transform(value: number, args?: any): number {
    return value * 2;
  }
}
