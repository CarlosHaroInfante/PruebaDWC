import { Component } from '@angular/core';
import { Receta } from '../../modelos/receta';
import { RecetasService } from '../../servicios/recetas.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-formulario-receta',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './formulario-receta.component.html',
  styleUrls: ['./formulario-receta.component.css'] // Corrige 'styleUrl' a 'styleUrls'
})
export class FormularioRecetaComponent {
  receta: Receta = { // Asegúrate de usar la interfaz Receta
    nombre: '',
    ingredientes: [],
    foto: '',
    pasos: []
  };

  constructor(private recetasServices: RecetasService) {}

  agregarRecetas() {
    this.recetasServices.añadirReceta(this.receta); // Guarda la receta en el servicio
    console.log('Receta agregada:', this.receta);
    // Resetea el formulario si es necesario
    this.receta = {
      nombre: '',
      ingredientes: [],
      foto: '',
      pasos: []
    };
  }

  actualizarIngredientes(ingredientesInput: string) {
    this.receta.ingredientes = ingredientesInput.split(',').map(ingrediente => ingrediente.trim());
  }

  actualizarPasos(pasosInput: string) {
    this.receta.pasos = pasosInput.split(',').map(paso => paso.trim());
  }
}
