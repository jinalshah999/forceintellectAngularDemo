import { Component, OnInit } from "@angular/core";
import { ProductdataService } from "./productdata.service";
import { Product } from "./product";
import { DemodataService } from "./demodata.service";
import { Router } from "@angular/router";
import { Observable } from "rxjs";

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
    private _demoData: DemodataService,
    private _router: Router
  ) {}

  ngOnInit(): void {
    //this.products = this._prodData.getAllProducts();

    this._prodData.getAllProducts().subscribe((res) => {
      this.products = res;
    });
    this.str = this._demoData.helloworld();
  }
  onMyEvent(val) {
    //this.products = this.products.filter((x) => x.pname.startsWith(val));
  }
  onEditProduct(item: Product) {
    this._router.navigate(["/products/editproduct", item.pro_id]);
  }
  // {
  //   queryParams: { proid: item.pro_id },
  //   fragment: "loading",
  // }
}
