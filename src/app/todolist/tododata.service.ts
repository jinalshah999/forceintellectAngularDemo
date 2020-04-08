import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from "../../environments/environment";
import { Todo } from "./todo";
@Injectable({
  providedIn: "root",
})
export class TododataService {
  private url: string = environment.url + "tasks/";
  constructor(private _http: HttpClient) {}

  getTodoById(id: string) {
    return this._http.get<Todo[]>(this.url + id);
  }
  getAllTodos() {
    return this._http.get<Todo[]>(this.url);
  }
  deleteTodo(id: string) {
    let h = new HttpHeaders().set(
      environment.headerName,
      environment.headerValue
    );
    return this._http.delete(this.url + id, { headers: h });
  }
  addTodo(item: Todo) {
    let body = JSON.stringify(item);
    let h = new HttpHeaders().set(
      environment.headerName,
      environment.headerValue
    );
    return this._http.post(this.url, body, { headers: h });
  }
  editTodo(item: Todo) {
    let body = JSON.stringify(item);
    let h = new HttpHeaders().set(
      environment.headerName,
      environment.headerValue
    );
    return this._http.put(this.url + item.Id, body, { headers: h });
  }
}
