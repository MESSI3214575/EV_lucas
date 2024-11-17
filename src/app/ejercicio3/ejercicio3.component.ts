import { Component } from '@angular/core';

@Component({
  selector: 'app-ejercicio3',
  standalone: true,
  imports: [],
  templateUrl: './ejercicio3.component.html',
  styleUrl: './ejercicio3.component.css'
})
export class Ejercicio3Component {
  valorMoto: number = 6000;  // Valor de la moto
  dia: string = '';          // Día de la compra
  precioConDescuento: number = 0;  // Precio con descuento

  calcularPrecio() {
    let diaLower = this.dia.toLowerCase().trim();

    // Aplicar los descuentos según el día
    if (diaLower === 'martes') {
      this.precioConDescuento = this.valorMoto * 0.88; // 12% de descuento
    } else if (diaLower === 'sabado') {
      this.precioConDescuento = this.valorMoto * 0.82; // 18% de descuento
    } else if (diaLower === 'feriado') {
      this.precioConDescuento = this.valorMoto * 0.75; // 25% de descuento
    } else {
      this.precioConDescuento = this.valorMoto; // Sin descuento si el día no es válido
    }
  }

  actualizarDia(event: any) {
    this.dia = event.target.value; // Asignamos el valor ingresado al día
  }
}
