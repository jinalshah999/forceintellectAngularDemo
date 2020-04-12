import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../environments/environment";
@Injectable({
  providedIn: "root",
})
export class UserdataService {
  url: string = environment.url + "users/";
  constructor(private _http: HttpClient) {}

  getUserByEmail(id: string) {
    return this._http.get(this.url + id);
  }
}
