import { Injectable } from "@angular/core";
import { CacheEntry, MAX_TIME_OUT } from "./cacheentry";
import { HttpRequest, HttpResponse } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class CachedataService {
  cacheMap = new Map<string, CacheEntry>();
  constructor() {}
  get(req: HttpRequest<any>) {
    const entry = this.cacheMap.get(req.urlWithParams);
    if (!entry) {
      return null;
    }
    const isExpired = Date.now() - entry.entryTime > MAX_TIME_OUT;
    return isExpired ? null : entry.res;
  }
  put(req: HttpRequest<any>, resp: HttpResponse<any>) {
    const entry: CacheEntry = {
      url: req.urlWithParams,
      res: resp,
      entryTime: Date.now(),
    };
    this.cacheMap.set(req.urlWithParams, entry);
    this.deleteCacheItem();
  }
  deleteCacheItem() {
    this.cacheMap.forEach((entry) => {
      if (Date.now() - entry.entryTime > MAX_TIME_OUT) {
        this.cacheMap.delete(entry.url);
      }
    });
  }
}
