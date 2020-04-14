import { Routes, RouterModule } from "@angular/router";
import { ProductlistComponent } from "./productlist.component";
import { AddproductComponent } from "./addproduct/addproduct.component";
import { EditProductComponent } from "./edit-product/edit-product.component";
import { ProductEditGuardService } from "./product-edit-guard.service";

const arr: Routes = [
  {
    path: "",
    children: [
      { path: "", component: ProductlistComponent },
      { path: "addproduct", component: AddproductComponent },
      {
        path: "editproduct/:id",
        // canDeactivate: [ProductEditGuardService],
        component: EditProductComponent,
      },
    ],
  }, //localhost:4200/products/
];

export const productRoutingArr = RouterModule.forChild(arr);
