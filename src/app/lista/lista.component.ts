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
  cancelar: any;

  constructor(private contatoService: ContatosServicesService) { }

  ngOnInit() {
    this.contatoService.getContatos().subscribe(data => {
      this.contatos = data;
    });
  }
  
  excluirContato(id: number | null) {
    if (id != null) {
      this.contatoService.excluirContato(id).subscribe(() => {
        this.contatoService.getContatos().subscribe(data => this.contatos = data);
      });
    }
  }
  
  editar() {
    this.contatoService.editContato(this.contatoEdit).subscribe(() => {
      this.cancelar();
      this.contatoService.getContatos().subscribe(data => this.contatos = data);
    });
  }
  
}
