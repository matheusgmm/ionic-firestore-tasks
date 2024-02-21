import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Task } from '../../models/task.model';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.scss'],
})
export class TaskItemComponent  implements OnInit {

  @Input() task?: Task;
  @Output() done = new EventEmitter<Task>();
  @Output() update = new EventEmitter<Task>();
  @Output() delete = new EventEmitter<Task>();

  constructor() { }

  ngOnInit() {}

}
