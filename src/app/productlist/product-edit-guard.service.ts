import { Injectable } from "@angular/core";
import {
  CanDeactivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from "@angular/router";
import { EditProductComponent } from "./edit-product/edit-product.component";

@Injectable({
  providedIn: "root",
})
export class ProductEditGuardService
  implements CanDeactivate<EditProductComponent> {
  constructor() {}

  canDeactivate(
    component: EditProductComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextstate?: RouterStateSnapshot
  ) {
    if (component.currentProduct == component.originalProduct) {
      return true;
    } else {
      alert("hello");
      return false;
    }
  }
}
