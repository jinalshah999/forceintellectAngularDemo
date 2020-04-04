import { Injectable } from "@angular/core";
import { Product } from "./product";

@Injectable({
  providedIn: "root",
})
export class ProductdataService {
  constructor() {}

  products: Product[] = [new Product("1", "xyz"), new Product("2", "abc")];

  getAllProducts(): Product[] {
    return this.products;
  }
  addProduct(item: Product): void {
    this.products.push(item);
  }
  deleteProduct(item: Product): void {
    this.products.splice(this.products.indexOf(item), 1);
  }
}
