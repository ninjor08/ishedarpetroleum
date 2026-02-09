import { Component } from '@angular/core';
import { TarjetaServicio } from '../tarjeta-servicio/tarjeta-servicio';
import { SERVICIOS } from './servicios.data';

@Component({
  selector: 'app-servicios',
  standalone: true,
  imports: [TarjetaServicio],
  templateUrl: './servicios.html',
  styleUrl: './servicios.css',
})
export class Servicios {

subtitulo: string='OFRECEMOS SOLUCIONES INTEGRALES Y COMERCIALIZAMOS EQUIPOS PARA LA INDUSTRIA OIL & GAS';

servicioSeleccionado:string='ninguno';

  //ARREGLO DE SERVICIOS (se encuentra en un archivo TypeScript separado)
  servicios = SERVICIOS;

  //ARREGLO PARA FILTRAR LOS SERVICIOS
  serviciosFiltrados=this.servicios;

  //EVENT BINDING, solo para informar al usuario que servicio seleccionó
  seleccionar(nombre:string){
    this.servicioSeleccionado=nombre;
  }
  busqueda(event: Event){
    const valorFiltrado=(event.target as HTMLInputElement).value;
    this.subtitulo = `Resultados para: ${valorFiltrado}`;
    this.serviciosFiltrados=this.servicios.filter(s =>
      s.nombre.toLowerCase().includes(valorFiltrado.toLowerCase())
    );
  }
}
