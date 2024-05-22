import { Component, OnInit } from '@angular/core';
import { LibroService } from '../../services/libro.service'; // Asegúrate de que el path sea correcto
import { Libro } from '../../models/libro.model';

@Component({
  selector: 'app-listar-libros',
  templateUrl: './listar-libros.component.html',
  styleUrls: ['./listar-libros.component.css']
})
export class ListarLibrosComponent implements OnInit {
  libros: Libro[] = [];
  nuevoLibro: Libro = {
    nombre: '',
    autor: '',
    fechaEscritura: '',
    numeroEdicion: 0,
    precio: 0,
    tipo: 'Entretenimiento',
    famaEscritor: 'Alta'
  };

  constructor(private libroService: LibroService) { }

  ngOnInit(): void {
    this.libroService.listarLibros().subscribe((data: Libro[]) => {
      this.libros = data;
    });
  }

  crearLibro(): void {
    this.libroService.crearLibro(this.nuevoLibro).subscribe((libro: Libro) => {
      this.libros.push(libro);
      this.resetFormulario();
    });
  }

  resetFormulario(): void {
    this.nuevoLibro = {
      nombre: '',
      autor: '',
      fechaEscritura: '',
      numeroEdicion: 0,
      precio: 0,
      tipo: 'Entretenimiento',
      famaEscritor: 'Alta'
    };
  }
}
