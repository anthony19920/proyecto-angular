import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  convertirMoneda(): void {
    const tasa = 3950;
    const cantidadInput = document.getElementById('cantidad') as HTMLInputElement;
    const resultado = document.getElementById('resultado');

    if (cantidadInput && resultado) {
      const valor = parseFloat(cantidadInput.value);
      resultado.innerText = isNaN(valor)
        ? 'Valor inválido'
        : `USD $${(valor / tasa).toFixed(2)}`;
    }
  }

  limpiarCantidad(): void {
    const input = document.getElementById('cantidad') as HTMLInputElement;
    const resultado = document.getElementById('resultado');

    if (input) {
      input.value = '';
    }

    if (resultado) {
      resultado.innerText = '';
    }
  }

}
