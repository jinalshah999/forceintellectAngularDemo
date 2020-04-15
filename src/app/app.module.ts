import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { PagenotfoundComponent } from "./pagenotfound/pagenotfound.component";
import { HomeComponent } from "./home/home.component";

import { routingArr } from "./app.routing";

import { MiscModule } from "./misc.module";
import { HttploggerService } from "./httplogger.service";
import { HttpinterceptorscacheddemoService } from "./httpinterceptorscacheddemo.service";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    PagenotfoundComponent,
  ], //c,d,p
  imports: [BrowserModule, HttpClientModule, routingArr, MiscModule],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: HttploggerService, multi: true },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpinterceptorscacheddemoService,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
