/**
 * Created by biroa on 11/20/2015.
 */
export class TodoService{
    todos:string[] = [
    "eat",
    "sleep",
    "code"
];

    addTodo(value:any):void {
        this.todos.push(value);
    }
}