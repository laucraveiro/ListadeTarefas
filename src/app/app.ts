import { Component } from '@angular/core';
import { ItemTarefa } from './component/item-tarefa/item-tarefa';

@Component({
  selector: 'app-root',
  imports: [ItemTarefa],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

}
