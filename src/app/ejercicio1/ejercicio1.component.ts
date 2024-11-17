import { Component } from '@angular/core';

@Component({
  selector: 'app-ejercicio1',
  standalone: true,
  imports: [],
  templateUrl: './ejercicio1.component.html',
  styleUrl: './ejercicio1.component.css'
})
export class Ejercicio1Component {
  horas: number = 0; // Inicializamos con 0
  salario: number = 0; // Salario inicial

  calcularSalario() {
    if (this.horas <= 40) {
      this.salario = this.horas * 16;
    } else {
      this.salario = (40 * 16) + ((this.horas - 40) * 20);
    }
  }

  actualizarHoras(event: Event) {
    const inputElement = event.target as HTMLInputElement; // Cast seguro
    this.horas = Number(inputElement.value); // Convertir el valor a número
  }
}