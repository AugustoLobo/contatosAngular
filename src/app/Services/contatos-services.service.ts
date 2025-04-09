import { Injectable } from '@angular/core';
import { Contatos } from '../models/contatos'; 

@Injectable({
  providedIn: 'root'
})
export class ContatosServicesService {
  contatos : Contatos[] = [];
  private contador: number = 1;

  addContato(contato: Contatos) {
    if (contato.id === null) {
      contato.id = this.contador++;
    }
    this.contatos.push(contato);
  }

  getContatos(){
    return this.contatos;
  }

  editContato(contato: Contatos) {
    if (contato.id !== null) {
      const index = this.contatos.findIndex(c => c.id === contato.id);
      this.contatos[index] = contato; 
    } else {
      alert('Contato não encontrado para edição');
    }
  }

  excluirContato(id: number) {
    this.contatos = this.contatos.filter(contato => contato.id !== id);
  }
  constructor() { }
}
