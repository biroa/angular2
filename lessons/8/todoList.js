/**
 * Created by biroa on 11/21/2015.
 */
import {Component, NgFor} from "angular2/angular2";
import {TodoService} from "./todoService";

@Component({
    selector: 'todo-list',
    directives: [NgFor],
    template:`
        <div>
            <div *ng-for="#todo of todoService.todos">
            {{todo.title}}
            </div>
        </div>
    `
})
export class TodoList{
    constructor(
        public todoService:TodoService
){}
}