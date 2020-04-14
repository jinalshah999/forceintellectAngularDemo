import { Injectable } from "@angular/core";
import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from "@angular/router";
import { todoResolved } from "./todo";
import { Observable, of } from "rxjs";
import { TododataService } from "./tododata.service";
import { map, catchError } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class TodoresolverService implements Resolve<todoResolved> {
  constructor(private _todoData: TododataService) {}
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> {
    return this._todoData.getAllTodos().pipe(
      map((x) => ({ todo: x })),
      catchError((error) => {
        const message = error;
        console.log(message);
        return of({ todo: null, error: message });
      })
    );
  }
}
