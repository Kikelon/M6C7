import { Component, OnInit } from '@angular/core';
import { Ciudad } from 'src/app/models/ciudad';
import { Clima } from 'src/app/models/clima';

@Component({
  selector: 'app-vista',
  templateUrl: './vista.component.html',
  styleUrls: ['./vista.component.css']
})

export class VistaComponent implements OnInit {

  public ciudades : Ciudad[];
  public id : number;
  public mostrar : boolean;
  public ciudadHijo: Ciudad;
  
  constructor() {

    this.ciudades = [];

    this.ciudades = [
      new Ciudad ("Madrid", "España", "MAD", this.newClima()),
      new Ciudad ("Roma", "Italia", "ROM", this.newClima()),
      new Ciudad ("Auckland", "Nueva Zelanda", "AUK", this.newClima()),
      new Ciudad ("Amsterdam", "Holanda", "AMS", this.newClima()),
      new Ciudad ("Nueva York", "Estados Unidos", "NYC", this.newClima()),
      new Ciudad ("Port Au Prince", "Haiti", "PAP", this.newClima()),
      new Ciudad ("Quito", "Ecuador", "UIO", this.newClima()),
      new Ciudad ("Santander", "España", "SDR", this.newClima()),
      new Ciudad ("Sofía", "Bulgaria", "SOF", this.newClima()),
      new Ciudad ("Dubai", "Emiratos Árabes", "DXB", this.newClima()),
    ];
   }

   private newClima(): Clima{
    let temperatura = Math.floor(Math.random() * (50 + 90)) - 90;
    let viento = Math.floor(Math.random() * (12 - 0)) + 0;
    let precipitaciones = Math.floor(Math.random() * (100 - 0)) + 0;
    return new Clima(temperatura, viento, precipitaciones);
   };

   public eligeMostrar(mostrar: boolean){
     this.mostrar = mostrar;
   };

   public eligeCiudad(ciudad: Ciudad){
     this.ciudadHijo = ciudad;
   };

  ngOnInit(): void {
  }

}
