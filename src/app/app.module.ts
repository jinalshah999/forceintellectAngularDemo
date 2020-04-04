import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";
import { DemoComponent } from "./demo/demo.component";
import { TodolistComponent } from "./todolist/todolist.component";
import { ProductlistComponent } from "./productlist/productlist.component";
import { AddproductComponent } from "./productlist/addproduct/addproduct.component";
import { HighlightDirective } from './highlight.directive';
import { DemoelemetDirective } from './productlist/demoelemet.directive';

@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    TodolistComponent,
    ProductlistComponent,
    AddproductComponent,
    HighlightDirective,
    DemoelemetDirective,
  ], //c,d,p
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
