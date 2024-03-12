import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  public todos: any[] = [];
  public title: String = "minhas tarefas"

  constructor() {
    this.todos.push('passear com o doguinho')
    this.todos.push('passear com o gatinho')
    this.todos.push('ir ao mercado')
  }

  alteraTexto(){
    this.title= 'teste'
  }
  
}
