import { Component } from '@angular/core';
import { ViewComponent } from '../view/view.component'; 
import { Contatos } from '../models/contatos'; 
import { FormsModule } from '@angular/forms';
import { ContatosServicesService } from '../Services/contatos-services.service'; 

@Component({
  selector: 'formularioComponent',
  imports: [ViewComponent, FormsModule],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent {
  contatoAdd: Contatos = { id: null, nome: '', telefone: null, email: '', profissao: '' }

  constructor(private contatoService: ContatosServicesService) { }

  cadastrar() {
    if (!this.contatoAdd.nome.trim()) {
      alert('Campo obrigatório: "Nome" em branco, não foi possível cadastrar o aluno.')
      return
    }
    if (!this.contatoAdd.email.trim() && !this.contatoAdd.telefone) {
      alert('Campo obrigatório: "Telefone" ou "E-mail" em branco, não foi possível cadastrar o aluno.')
      return
    }

    this.contatoService.addContato(this.contatoAdd);

    this.contatoAdd = { id: null, nome: '', telefone: null, email: '', profissao: '' };
  }
}