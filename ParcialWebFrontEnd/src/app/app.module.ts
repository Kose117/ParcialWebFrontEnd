import { NgModule, importProvidersFrom } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ListarLibrosComponent } from './components/listar-libros/listar-libros.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    RouterModule.forRoot([
      { path: 'listar-libros', component: ListarLibrosComponent },
      { path: '', redirectTo: '/listar-libros', pathMatch: 'full' }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent] 
})
export class AppModule { }
