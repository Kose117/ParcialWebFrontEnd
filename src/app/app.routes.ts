import { Routes } from '@angular/router';
import { ListarLibrosComponent } from './components/listar-libros/listar-libros.component';

export const APP_ROUTES: Routes = [
  { path: 'listar-libros', component: ListarLibrosComponent },
  { path: '', redirectTo: '/listar-libros', pathMatch: 'full' }
];
