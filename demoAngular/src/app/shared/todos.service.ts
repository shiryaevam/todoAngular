import { Injectable } from '@angular/core';

export interface Todo {
  id: number;
  title: string;
  completed: boolean;
  date?: any;
}

@Injectable({ providedIn: 'root' })
export class TodosService {
  public todos: Todo[] = [
    { id: 1, title: 'Гречка', completed: false, date: new Date() },
    { id: 2, title: 'Рис', completed: true, date: new Date() },
    { id: 3, title: 'Макароны', completed: false, date: new Date() },
  ];

  onToggle(id: number) {
    const numbIndex = this.todos.findIndex((t) => t.id === id);
    this.todos[numbIndex].completed = !this.todos[numbIndex].completed;
  }
}
