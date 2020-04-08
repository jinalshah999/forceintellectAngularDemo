import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { AppComponent } from "./app.component";
import { DemoComponent } from "./demo/demo.component";
import { TodolistComponent } from "./todolist/todolist.component";
import { ProductlistComponent } from "./productlist/productlist.component";
import { AddproductComponent } from "./productlist/addproduct/addproduct.component";
import { HighlightDirective } from "./highlight.directive";
import { DemoelemetDirective } from "./productlist/demoelemet.directive";
import { CredticardDirective } from "./credticard.directive";
import { SidebarComponent } from "./productlist/sidebar/sidebar.component";
import { MessageComponent } from "./message/message.component";
import { MessagewraperComponent } from "./messagewraper/messagewraper.component";
import { DblPipe } from "./dbl.pipe";
import { FilterPipe } from "./todolist/filter.pipe";
import { routingArr } from "./app.routing";
import { HeaderComponent } from './header/header.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { AddtodoComponent } from './todolist/addtodo/addtodo.component';
import { EdittodoComponent } from './todolist/edittodo/edittodo.component';
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
    DblPipe,
    FilterPipe,
    HeaderComponent,
    PagenotfoundComponent,
    AddtodoComponent,
    EdittodoComponent,
  ], //c,d,p
  imports: [BrowserModule, FormsModule, HttpClientModule, routingArr],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
