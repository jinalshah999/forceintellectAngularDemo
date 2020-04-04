import { Component, OnInit } from "@angular/core";
import { ProductdataService } from "../productdata.service";
import { Product } from "../product";

@Component({
  selector: "app-addproduct",
  templateUrl: "./addproduct.component.html",
  styleUrls: ["./addproduct.component.css"],
})
export class AddproductComponent implements OnInit {
  pid: string = "";
  pname: string = "";

  constructor(private _prodData: ProductdataService) {}

  ngOnInit(): void {}
  onAddProduct(): void {
    this._prodData.addProduct(new Product(this.pid, this.pname));
  }
}
