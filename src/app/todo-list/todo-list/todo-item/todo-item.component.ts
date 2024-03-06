import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {TodoItem} from "../../../interfaces/todo-item";
import {TodoListService} from "../todo-list-service/todo-list.service";
import {FormControl, ReactiveFormsModule} from "@angular/forms";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-todo-item',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NgIf
  ],
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.css',
})
export class TodoItemComponent implements OnInit{
  @Input() item!: TodoItem;
  newTitle = new FormControl<string>('');

  editMode: boolean = false;

  constructor(private todoListService: TodoListService) {
  }

  ngOnInit() {
    this.openEditMode()
  }

  deleteItem(id: number) {
    this.todoListService.delete(id)
  }

  openEditMode() {
    this.newTitle.setValue(this.item.title)
    this.editMode = true
  }

  save() {
    this.todoListService.update(this.item.id, this.newTitle.value!)
    this.editMode = false;
  }
}
