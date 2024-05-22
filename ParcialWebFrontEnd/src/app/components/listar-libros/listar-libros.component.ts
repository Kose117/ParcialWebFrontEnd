import { Component, OnInit } from '@angular/core';
import { LibroService } from '../../service/libro.service';
import { Libro } from '../../models/libro.model';

@Component({
  selector: 'app-listar-libros',
  templateUrl: './listar-libros.component.html',
  styleUrls: ['./listar-libros.component.css']
})
export class ListarLibrosComponent implements OnInit {
  libros: Libro[] = [];

  constructor(private libroService: LibroService) { }

  ngOnInit(): void {
    this.libroService.listarLibros().subscribe((data: Libro[]) => {
      this.libros = data;
    });
  }
}
