import { Injectable } from "@angular/core";
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpResponse,
} from "@angular/common/http";
import { CachedataService } from "./cachedata.service";
import { of } from "rxjs";
import { tap, catchError } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class HttpinterceptorscacheddemoService implements HttpInterceptor {
  constructor(private _cacheData: CachedataService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    if (req.method !== "GET") {
      return next.handle(req);
    }

    const cacheResponce = this._cacheData.get(req);
    if (cacheResponce) {
      console.log("from cached");
      return of(cacheResponce);
    }

    return next.handle(req).pipe(
      tap((x) => {
        if (x instanceof HttpResponse) {
          console.log("adding to cache");
          this._cacheData.put(req, x);
        }
      })
    );
  }
}
