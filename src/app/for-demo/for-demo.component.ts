import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-for-demo",
  templateUrl: "./for-demo.component.html",
  styleUrls: ["./for-demo.component.css"],
})
export class ForDemoComponent implements OnInit {
  employees: any[];
  ngOnInit() {}
  constructor() {
    this.employees = [
      {
        code: "1001",
        name: "drashti",
        gender: "Female",
        salary: 55500,
      },
      {
        code: "1002",
        name: "namrata",
        gender: "Female",
        salary: 57000,
      },
      {
        code: "1003",
        name: "shreeja",
        gender: "Female",
        salary: 59000,
      },
      {
        code: "1004",
        name: "shreenil",
        gender: "Male",
        salary: 65000,
      },
    ];
  }
  trackByEmpCode(index: number, employee: any): string {
    return employee.code;
  }
  getEmployees(): void {
    this.employees = [
      {
        code: "1001",
        name: "drashti",
        gender: "Female",
        salary: 55500,
      },
      {
        code: "1002",
        name: "namrata",
        gender: "Female",
        salary: 57000,
      },
      {
        code: "1003",
        name: "shreeja",
        gender: "Female",
        salary: 59000,
      },
      {
        code: "1004",
        name: "shreenil",
        gender: "Female",
        salary: 65000,
      },
      {
        code: "1005",
        name: "tejas",
        gender: "Male",
        salary: 67000,
      },
    ];
  }
}
