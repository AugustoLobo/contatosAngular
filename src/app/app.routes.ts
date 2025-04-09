import { Routes } from '@angular/router';
import { FormularioComponent } from './formulario/formulario.component';
import { ListaComponent } from './lista/lista.component';

export const routes: Routes = [
    { path: '', component: FormularioComponent },
    { path: 'contatos', component: ListaComponent }
]
