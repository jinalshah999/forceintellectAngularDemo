import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { tap, catchError } from "rxjs/operators";
import { throwError } from "rxjs";
import { Product } from "./productlist/product";

@Injectable({
  providedIn: "root",
})
export class DemoreactiveService {
  private url: string = environment.url + "tasks/";
  private url1: string = environment.url + "products/";

  constructor(private _http: HttpClient) {}

  //getAllTodos
  todo$ = this._http.get(this.url).pipe(
    tap((data) => console.log("todos", JSON.stringify(data))),
    catchError(this.handleError)
  );

  //getAllProducts
  allProducts$ = this._http.get<Product[]>(this.url1).pipe(
    tap((x) => console.log("prodcts", x)),
    catchError(this.handleError)
  );

  private handleError(ex: HttpErrorResponse) {
    if (ex.error instanceof ErrorEvent) {
      console.log("client side");
    } else {
      console.log("server side");
    }
    return throwError("something went wrong");
  }
}
