import { Component, OnInit } from "@angular/core";
import { DemoreactiveService } from "../demoreactive.service";
import { catchError } from "rxjs/operators";
import { EMPTY } from "rxjs";

@Component({
  selector: "app-demotask",
  templateUrl: "./demotask.component.html",
  styleUrls: ["./demotask.component.css"],
})
export class DemotaskComponent {
  errorMessage: string = "";
  errorMessage1: string = "";
  constructor(private demoservice: DemoreactiveService) {}
  todo$ = this.demoservice.todo$.pipe(
    catchError((error) => {
      this.errorMessage = error;
      return EMPTY;
    })
  );
  products$ = this.demoservice.allProducts$.pipe(
    catchError((err) => {
      this.errorMessage1 = err;
      return EMPTY;
    })
  );
}
