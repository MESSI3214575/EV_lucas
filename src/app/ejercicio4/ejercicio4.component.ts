import { Component } from '@angular/core';

@Component({
  selector: 'app-ejercicio4',
  standalone: true,
  imports: [],
  templateUrl: './ejercicio4.component.html',
  styleUrl: './ejercicio4.component.css'
})
export class Ejercicio4Component {
  numero: number = 0; // Número ingresado por el usuario
  suma: number = 0; // Resultado de la suma de los dígitos
  mensaje: string = ''; // Mensaje de resultado

  sumarDigitos() {
    // Convertimos el número a cadena para poder extraer cada dígito
    let numeroStr = this.numero.toString();
    this.suma = 0;
    this.mensaje = ''; // Reseteamos el mensaje en cada nueva operación

    // Verificamos que el número tenga exactamente 4 dígitos
    if (numeroStr.length !== 4) {
      this.mensaje = 'Por favor ingrese un número de 4 dígitos';
      this.suma = 0; // Reseteamos la suma si no es válido
      return; // Detenemos la ejecución si no tiene 4 dígitos
    }

    // Sumamos cada uno de los dígitos del número
    for (let i = 0; i < numeroStr.length; i++) {
      this.suma += parseInt(numeroStr[i], 10); // Sumamos el dígito
    }
  }

  actualizarNumero(event: any) {
    // Convertimos el valor ingresado a número
    this.numero = parseInt(event.target.value, 10);
    this.mensaje = ''; // Limpiamos el mensaje cuando se ingresa un nuevo número
  }
}