import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-pagina-404',
  imports: [RouterLink],
  templateUrl: './pagina-404.html',
  styleUrl: './pagina-404.css',
})
export class Pagina404 {

  constructor(private location: Location) {}

  goBack(){
    this.location.back();
  }
}
