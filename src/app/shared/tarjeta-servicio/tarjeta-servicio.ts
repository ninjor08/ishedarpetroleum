import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-tarjeta-servicio',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './tarjeta-servicio.html',
  styleUrl: './tarjeta-servicio.css',
})
export class TarjetaServicio {

  //PROPERTY BINDING, recibimos el objeto desde el componente padre (Galería / Servicios)
  @Input() servicio: any;

  //EVENTO para comunicar al componente padre qué servicio seleccionó el usuario
  @Output() seleccionado = new EventEmitter<string>();

  //EVENT BINDING
  seleccionarServicio(){
    this.seleccionado.emit(this.servicio?.nombre);
  }
}
