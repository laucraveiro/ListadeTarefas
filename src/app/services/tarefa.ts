import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Tarefa {

  tarefas = [
    { titulo: 'Estudar Angular', concluida: false },
    { titulo: 'Fazer exercício de programação', concluida: true },
    { titulo: 'Revisar conteúdo da aula', concluida: false }
  ];

  adicionar(titulo: string) {
    if (titulo.trim() !== '') {
      this.tarefas.push({
        titulo: titulo,
        concluida: false
      });
    }
  }

  remover(indice: number) {
    this.tarefas.splice(indice, 1);
  }

  contarConcluidas() {
    return this.tarefas.filter(tarefa => tarefa.concluida).length;
  }
}