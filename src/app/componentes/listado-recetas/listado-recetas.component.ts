import { Component, OnInit } from '@angular/core';
import { RecetasService } from '../../servicios/recetas.service';
import { Receta } from '../../modelos/receta';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-listado-recetas',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './listado-recetas.component.html',
  styleUrl: './listado-recetas.component.css'
})
export class ListadoRecetasComponent implements OnInit{

  recetas: Receta[] = [];

  constructor(private recetasService: RecetasService) {}

  ngOnInit(): void {
    this.recetas = this.recetasService.obtenerRecetas();
  }

}
