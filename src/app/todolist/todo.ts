export class Todo {
  constructor(public Id: string, public Title: string, public Status: string) {}
}

export interface TodoInterface {
  Id: string;
  Title: string;
  Status: string;
}

export interface todoResolved {
  todo: TodoInterface;
  error?: any;
}
