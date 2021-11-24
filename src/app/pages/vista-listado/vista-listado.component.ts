import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Ciudad } from 'src/app/models/ciudad';
import { Clima } from 'src/app/models/clima';

@Component({
  selector: 'app-vista-listado',
  templateUrl: './vista-listado.component.html',
  styleUrls: ['./vista-listado.component.css']
})
export class VistaListadoComponent implements OnInit {
  
  @Input() ciudades : Ciudad[];
  @Input() id : number;
  @Input() mostrar : boolean;

  @Output() eventoCiudad = new EventEmitter<Ciudad>();
  @Output() eventoMostrar = new EventEmitter<boolean>();


  public ciudad : Ciudad;

  constructor() {
    this.id = 0;
    this.mostrar = false;
  }

  public datosCiudad(index : number){
    this.id = index;
    this.ciudad = this.ciudades[index];
    this.mostrar = !this.mostrar;
    this.eventoCiudad.emit(this.ciudad);
    this.eventoMostrar.emit(this.mostrar);
}


  ngOnInit(): void {
  }

}
