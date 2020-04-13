import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { PagenotfoundComponent } from "./pagenotfound/pagenotfound.component";
import { HomeComponent } from "./home/home.component";

import { routingArr } from "./app.routing";

import { MiscModule } from "./misc.module";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    PagenotfoundComponent,
  ], //c,d,p
  imports: [BrowserModule, HttpClientModule, routingArr, MiscModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
