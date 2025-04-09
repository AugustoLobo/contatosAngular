import { Component } from '@angular/core';
import { ViewComponent } from '../view/view.component'; 
import { NgFor, NgIf } from '@angular/common';
import { ContatosServicesService } from '../Services/contatos-services.service';
import { Contatos } from '../models/contatos';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'listaComponent',
  imports: [ViewComponent, NgFor, NgIf, FormsModule],
  templateUrl: './lista.component.html',
  styleUrl: './lista.component.css'
})
export class ListaComponent {
  contatoEdit: Contatos = { id: null, nome: '', telefone: null, email: '', profissao: '' }
  contatos: Contatos[] = []
  statusEdit = 0

  constructor(private contatoService: ContatosServicesService) { }

  ngOnInit() {
    this.contatos = this.contatoService.getContatos()
  }

  editarContato(id: number | null) {
    if (id != null) {
      this.statusEdit = id;
      const contato = this.contatos.find(c => c.id === id);
      if (contato) {
        this.contatoEdit = { ...contato };
      }
    }
  }

  excluirContato(id: number | null) {
    if (id != null) {
      this.contatoService.excluirContato(id);
      this.contatos = this.contatoService.getContatos()
    }
  }

  cancelar() {
    this.contatoEdit = { id: null, nome: '', telefone: null, email: '', profissao: '' };
    this.statusEdit = 0;
  }

  editar() {
    this.contatoService.editContato(this.contatoEdit)
    this.cancelar()
  }
}
