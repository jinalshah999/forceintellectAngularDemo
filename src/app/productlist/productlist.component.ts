import { Component, OnInit } from "@angular/core";
import { ProductdataService } from "./productdata.service";
import { Product } from "./product";
import { DemodataService } from "./demodata.service";

@Component({
  selector: "app-productlist",
  templateUrl: "./productlist.component.html",
  styleUrls: ["./productlist.component.css"],
})
export class ProductlistComponent implements OnInit {
  products: Product[] = [];
  str: String = "";
  cat_name: String = "Watch";
  constructor(
    private _prodData: ProductdataService,
    private _demoData: DemodataService
  ) {}

  ngOnInit(): void {
    this.products = this._prodData.getAllProducts();
    this.str = this._demoData.helloworld();
  }
  onMyEvent(val) {
    this.products = this.products.filter((x) => x.pname.startsWith(val));
  }
}
