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
import { CredticardDirective } from './credticard.directive';
import { SidebarComponent } from './productlist/sidebar/sidebar.component';
import { MessageComponent } from './message/message.component';
import { MessagewraperComponent } from './messagewraper/messagewraper.component';

@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    TodolistComponent,
    ProductlistComponent,
    AddproductComponent,
    HighlightDirective,
    DemoelemetDirective,
    CredticardDirective,
    SidebarComponent,
    MessageComponent,
    MessagewraperComponent,
  ], //c,d,p
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
