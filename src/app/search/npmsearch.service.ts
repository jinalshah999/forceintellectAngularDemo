import { Injectable } from "@angular/core";
import { Observable, of, throwError } from "rxjs";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { map, tap, catchError, retry, take } from "rxjs/operators";

export interface NpmPackageInfo {
  name: string;
  version: string;
  description: string;
}

@Injectable({
  providedIn: "root",
})
export class NpmsearchService {
  ///query?q=
  public url: string = "https://npmsearch.com";

  constructor(public _http: HttpClient) {}

  public search(searchTerm: string): Observable<NpmPackageInfo[]> {
    if (!searchTerm.trim()) {
      return of([]);
    }
    return this._http.get(this.url + searchTerm).pipe(
      retry(3),
      map((data: any) => {
        return data.results.map(
          (x) =>
            ({
              name: x.name[0],
              version: x.version[0],
              description: x.description[0],
            } as NpmPackageInfo)
        );
      }),
      tap((x) => console.log("from service", x)),
      take(1),
      catchError(this.handleError)
    );
  }

  private handleError(ex: HttpErrorResponse) {
    if (ex.error instanceof ErrorEvent) {
      console.log("client side");
    } else {
      console.log("server side");
    }
    return throwError("something went wrong");
  }
}
