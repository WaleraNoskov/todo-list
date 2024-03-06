import {Component, ViewChild} from '@angular/core';
import {TodoListService} from "./todo-list-service/todo-list.service";
import {TodoItem} from "../../interfaces/todo-item";
import {TodoItemComponent} from "./todo-item/todo-item.component";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [
    TodoItemComponent,
    NgForOf
  ],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css',
})
export class TodoListComponent {
  items: TodoItem[] = [];

  constructor(private todoListService: TodoListService) {
    this.items = this.todoListService.items.reverse();
  }

  createItem(){
    this.todoListService.create('');
  }
}
