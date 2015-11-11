/**
 * Created by biroa on 11/11/2015.
 */
export class TodoService{
    todos:string[] = [];

    addTodo(value:any):void {
        this.todos.push(value);
    }
}