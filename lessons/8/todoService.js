/**
 * Created by biroa on 11/21/2015.
 */
export class TodoModel{
    status:string = "started";

    constructor(
        public title:string = ""
){}
}



export class TodoService{
    todos:TodoModel[] = [
    new TodoModel("eat"),
    new TodoModel("sleep"),
    new TodoModel("code")
];

    addTodo(value:TodoModel):void {
        this.todos.push(value);
    }
}