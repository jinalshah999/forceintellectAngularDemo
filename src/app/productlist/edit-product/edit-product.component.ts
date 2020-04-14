import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { ProductdataService } from "../productdata.service";
import { Product } from "../product";
import { FormGroup, FormControl } from "@angular/forms";

@Component({
  selector: "app-edit-product",
  templateUrl: "./edit-product.component.html",
  styleUrls: ["./edit-product.component.css"],
})
export class EditProductComponent implements OnInit {
  edit_product: FormGroup;
  id: string;
  qid: string;
  frag: string;
  currentProduct: Product;
  originalProduct: Product;
  constructor(
    private _act: ActivatedRoute,
    private _router: Router,
    private _productData: ProductdataService
  ) {}

  get isDirty(): boolean {
    return (
      JSON.stringify(this.originalProduct) !=
      JSON.stringify(this.currentProduct)
    );
  }
  ngOnInit(): void {
    this.edit_product = new FormGroup({
      pro_id: new FormControl(null),
      pro_name: new FormControl(null),
      pro_price: new FormControl(null),
      pro_desc: new FormControl(null),
      pro_qty: new FormControl(null),
      pro_mfg: new FormControl(null),
      pro_img: new FormControl(null),
    });
    this.id = this._act.snapshot.params["id"];
    this._productData.getProductById(this.id).subscribe((res: Product[]) => {
      this.assignData(res[0]);
    });

    // this._act.params.subscribe((x) => {
    //   this.id = x.id;
    // });

    // this.qid = this._act.snapshot.queryParams["proid"];
    //this.frag = this._act.snapshot.fragment;

    console.log("params", this.id);

    // console.log("query params", this.qid);
    //console.log("fragment", this.frag);
    this.edit_product.valueChanges.subscribe((x) => {
      this.currentProduct = this.edit_product.value;
    });
  }
  OnButtonClick() {
    this._router.navigate(["/editproduct", 10]);
  }
  onEditProduct() {
    console.log(this.edit_product.value);
    this._productData
      .editProduct(this.edit_product.value)
      .subscribe((res: any) => {
        this._router.navigate(["/products"]);
      });
  }

  assignData(obj: Product) {
    this.currentProduct = obj;
    this.originalProduct = obj;
    this.edit_product.patchValue({
      pro_id: obj.pro_id,
      pro_name: obj.pro_name,
      pro_price: obj.pro_price,
      pro_desc: obj.pro_desc,
      pro_qty: obj.pro_qty,
      pro_mfg: obj.pro_mfg,
      pro_img: obj.pro_img,
    });
  }
}
