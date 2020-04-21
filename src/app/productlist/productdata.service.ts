import { Injectable } from "@angular/core";
import { Product } from "./product";
import { environment } from "src/environments/environment";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class ProductdataService {
  private url: string = environment.url + "products/";
  constructor(private _http: HttpClient) {}

  getProductById(id: string) {
    return this._http.get<Product[]>(this.url + id);
  }
  getAllProducts() {
    return this._http.get<Product[]>(this.url);
  }
  deleteProduct(id: string) {
    let h = new HttpHeaders().set(
      environment.headerName,
      environment.headerValue
    );
    return this._http.delete(this.url + id, { headers: h });
  }
  addProduct(item: Product) {
    let body = JSON.stringify(item);
    let h = new HttpHeaders().set(
      environment.headerName,
      environment.headerValue
    );
    return this._http.post(this.url, body, { headers: h });
  }
  editProduct(item: Product) {
    let body = JSON.stringify(item);
    let h = new HttpHeaders().set(
      environment.headerName,
      environment.headerValue
    );
    return this._http.put(this.url + item.pro_id, body, { headers: h });
  }
}
