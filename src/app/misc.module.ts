import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { DemoComponent } from "./demo/demo.component";
import { HighlightDirective } from "./highlight.directive";
import { DemoelemetDirective } from "./productlist/demoelemet.directive";
import { CredticardDirective } from "./credticard.directive";
import { MessageComponent } from "./message/message.component";
import { MessagewraperComponent } from "./messagewraper/messagewraper.component";
import { DblPipe } from "./dbl.pipe";
import { UserSignupComponent } from "./user-signup/user-signup.component";
import { miscRoutingArr } from "./misc.routing";
import { LoginComponent } from "./login/login.component";
import { ForDemoComponent } from "./for-demo/for-demo.component";
import { SearchComponent } from './search/search.component';
import { DemotaskComponent } from './demotask/demotask.component';

@NgModule({
  declarations: [
    DemoComponent,
    HighlightDirective,
    DemoelemetDirective,
    CredticardDirective,
    MessageComponent,
    MessagewraperComponent,
    DblPipe,
    UserSignupComponent,
    LoginComponent,
    ForDemoComponent,
    SearchComponent,
    DemotaskComponent,
  ],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, miscRoutingArr],
})
export class MiscModule {}
