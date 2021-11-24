import { Component, OnInit, Input } from '@angular/core';
import { Ciudad } from 'src/app/models/ciudad';
import { Clima } from 'src/app/models/clima';

@Component({
  selector: 'app-vista-nuevo',
  templateUrl: './vista-nuevo.component.html',
  styleUrls: ['./vista-nuevo.component.css']
})
export class VistaNuevoComponent implements OnInit {
 
  @Input() ciudades : Ciudad[];

  constructor() { }

  public addCity (nombre : string, pais : string, codigo : string){
    if ( nombre!== "" && pais !== "" && codigo !== "" && codigo.length === 3){
    let city = new Ciudad(nombre, pais, codigo.toUpperCase(), this.newClima());
    this.ciudades.push(city);}
    console.log(this.ciudades);
  }

  private newClima(): Clima{
    let temperatura = Math.floor(Math.random() * (50 + 90)) - 90;
    let viento = Math.floor(Math.random() * (12 - 0)) + 0;
    let precipitaciones = Math.floor(Math.random() * (100 - 0)) + 0;
    return new Clima(temperatura, viento, precipitaciones);
  }

  ngOnInit(): void {
  }

}
