/**
 * Created by biroa on 11/11/2015.
 */
import {bootstrap, Component} from "angular2/angular2";
import {TodoInput} from "./todoInput";
import {TodoService} from "./todoService";

@Component({
    selector: 'app',
    directives: [TodoInput],
    template: `
        <div><todo-input></todo-input></div>
    `
})
class App {
}

bootstrap(App, [TodoService]);