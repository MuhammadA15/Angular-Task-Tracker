import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task } from "../../Task";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {
  @Input() task: Task;
  showExpandedTask: boolean = false;
  @Output() btnClick: EventEmitter<Task> = new EventEmitter;
  @Output() onToggleReminder: EventEmitter<Task> = new EventEmitter;
  faTimes = faTimes;

  constructor() { }

  ngOnInit(): void {
  }

  onDelete(task: Task) {
    this.btnClick.emit(task);
  }
  
  onToggle(task: Task) {
    this.onToggleReminder.emit(task);
  }

  onExpand(task: Task, showExpandedTask: boolean) {
    this.showExpandedTask = !this.showExpandedTask;
  }
}
