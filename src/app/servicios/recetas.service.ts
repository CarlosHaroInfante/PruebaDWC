import { Injectable } from '@angular/core';
import { Receta } from '../modelos/receta';

@Injectable({
  providedIn: 'root'
})
export class RecetasService {
  private recetas: Receta[] = [];

  constructor() { }

  añadirReceta(receta: Receta): void {
    this.recetas.push(receta);
  }

  obtenerRecetas(): Receta[] {
    return this.recetas;
  }
}
