import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Contatos } from '../models/contatos';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContatosServicesService {

  private apiUrl = 'http://localhost:8080/api/contatos';

  constructor(private http: HttpClient) { }

  getContatos(): Observable<Contatos[]> {
    return this.http.get<Contatos[]>(this.apiUrl);
  }

  addContato(contato: Contatos): Observable<Contatos> {
    return this.http.post<Contatos>(this.apiUrl, contato);
  }

  editContato(contato: Contatos): Observable<Contatos> {
    return this.http.put<Contatos>(`${this.apiUrl}/${contato.id}`, contato);
  }

  excluirContato(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
