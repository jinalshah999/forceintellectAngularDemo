import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  OnDestroy,
  ChangeDetectorRef,
} from "@angular/core";
import { Subject, Observable, Subscription, EMPTY } from "rxjs";
import { NpmPackageInfo, NpmsearchService } from "./npmsearch.service";
import {
  tap,
  debounceTime,
  distinctUntilChanged,
  switchMap,
  map,
  catchError,
} from "rxjs/operators";

@Component({
  selector: "app-search",
  templateUrl: "./search.component.html",
  styleUrls: ["./search.component.css"],
  //changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchComponent implements OnInit {
  search_subject = new Subject<string>();
  packages: Observable<NpmPackageInfo[]>;
  arr: NpmPackageInfo[];
  errorMessage: string = "";
  constructor(
    private _searchData: NpmsearchService,
    private _cd: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.packages = this.search_subject.pipe(
      debounceTime(1000),
      distinctUntilChanged(),
      switchMap((x) => this._searchData.search(x)),
      catchError((err) => {
        this.errorMessage = err;
        return EMPTY;
      })
    );
  }
  search(serchTerm: string) {
    this.search_subject.next(serchTerm);
  }
}
