import { Component} from '@angular/core';
import {Todo} from "../todo";

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {
  todoList: Todo[] = [
    {
      task: "laundry",
      completed: false
    },
    {
      task: "washDishes",
      completed: true
    }
  ];
  constructor() {}

}
