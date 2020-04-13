import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";

import { ProductlistComponent } from "./productlist.component";
import { AddproductComponent } from "./addproduct/addproduct.component";
import { EditProductComponent } from "./edit-product/edit-product.component";
import { SidebarComponent } from "./sidebar/sidebar.component";

import { productRoutingArr } from "./product.routing";

@NgModule({
  declarations: [
    ProductlistComponent,
    AddproductComponent,
    EditProductComponent,
    SidebarComponent,
  ],
  imports: [CommonModule, ReactiveFormsModule, FormsModule, productRoutingArr],
})
export class ProductModule {}
