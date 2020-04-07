import { Pipe, PipeTransform } from "@angular/core";
import { Todo } from "./todo";

@Pipe({
  name: "filter",
  pure: false,
})
export class FilterPipe implements PipeTransform {
  transform(value: Todo[], str: string): Todo[] {
    return value.filter((x) => x.Title.startsWith(str));
  }
}
