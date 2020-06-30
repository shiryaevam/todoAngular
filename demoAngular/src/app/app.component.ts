import { Component } from '@angular/core';
export interface Todo {
  id: number;
  title: string;
  completed: boolean;
  date?: any;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  appTitle = ' Todo app';

  public todos: Todo[] = [
    { id: 1, title: 'Гречка', completed: false, date: new Date() },
    { id: 2, title: 'Рис', completed: true, date: new Date() },
    { id: 3, title: 'Макароны', completed: false, date: new Date() },
  ];
}
