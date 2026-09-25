import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-comp-1',
  styleUrl: './comp-1.css',
  templateUrl: './comp-1.html',
})
export class Comp1 {
  imagenes : string [] =[
    "nl.png",
    "pl.png",
    "qt.png",
    "rusia.png"
  ]
  paises: string [] =[
    "ID", 
    "US",
    "CA",
    "JP"
  ]
}
