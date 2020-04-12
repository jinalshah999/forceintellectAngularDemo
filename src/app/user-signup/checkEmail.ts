import { UserdataService } from "../userdata.service";
import { AsyncValidatorFn, AbstractControl } from "@angular/forms";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

export class CheckEmail {
  static validateEmail(_serviceObj: UserdataService): AsyncValidatorFn {
    return (
      control: AbstractControl
    ): Observable<{ [key: string]: any } | null> => {
      return _serviceObj.getUserByEmail(control.value).pipe(
        map((res: any) => {
          if (res.length == 1) {
            return { emailInUse: true };
          }
          return null;
        })
      );
    };
  }
}
