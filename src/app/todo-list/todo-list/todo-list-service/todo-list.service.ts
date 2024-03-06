import {Injectable} from '@angular/core';
import {TodoItem} from "../../../interfaces/todo-item";

@Injectable({
  providedIn: 'root'
})
export class TodoListService {
  items: TodoItem[] = [];

  getAll(): TodoItem[] {
    return this.items;
  }

  get(id: number): TodoItem {
    return this.items.find((todoItem) => todoItem.id == id)
      ?? {id: -1, title: ""};
  }

  create(name: string): TodoItem {
    let item = {
      id: this.items.length,
      title: name
    } as TodoItem
    this.items.push(item);
    return item;
  }

  update(id: number, title: string)
  {
    let currentItem = this.items.find((todoItem) => todoItem.id == id);
    currentItem!.title = title;
  }

  delete(id: number) {
    let currentItem = this.items.find((todoItem) => todoItem.id == id);
    if (currentItem != undefined) {
      let index = this.items.indexOf(currentItem, 0)
      this.items.splice(index, 1)
    }
  }

  constructor() {
  }
}
