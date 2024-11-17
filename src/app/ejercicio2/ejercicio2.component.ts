import { Component } from '@angular/core';

@Component({
  selector: 'app-ejercicio2',
  standalone: true,
  imports: [],
  templateUrl: './ejercicio2.component.html',
  styleUrl: './ejercicio2.component.css'
})
export class Ejercicio2Component {
  numero: number = 0; // Número ingresado por el usuario
  resultado: string = ''; // Mensaje de resultado

  verificarNumeroPerfecto() {
    let sumaDivisores = 0;

    // Verificar que el número sea mayor a 0
    if (this.numero <= 0) {
      this.resultado = 'Por favor ingrese un número natural mayor a 0';
      return;
    }

    // Encontramos los divisores del número
    for (let i = 1; i < this.numero; i++) {
      if (this.numero % i === 0) { // Si i es un divisor de numero
        sumaDivisores += i;
      }
    }

    // Comprobamos si el número es perfecto
    if (sumaDivisores === this.numero) {
      this.resultado = 'Es perfecto';
    } else {
      this.resultado = 'No es perfecto';
    }
  }

  actualizarNumero(event: any) {
    // Convertir el valor del input a número (de texto a número)
    this.numero = parseInt(event.target.value, 10);
  }
}