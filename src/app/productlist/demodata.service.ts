import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class DemodataService {
  constructor() {}

  helloworld(): String {
    return "hello world";
  }
}
