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
  onProductAdd(f) {
    console.log(f);
    this._prodData.addProduct(f.value).subscribe((res: any) => {
      console.log(res);
    });
  }
}
