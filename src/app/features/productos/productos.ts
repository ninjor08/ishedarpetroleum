import { Component } from '@angular/core';
import { Servicios } from '../../shared/servicios/servicios';

@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [Servicios],
  templateUrl: './productos.html',
  styleUrl: './productos.css',
})
export class Productos {

}
