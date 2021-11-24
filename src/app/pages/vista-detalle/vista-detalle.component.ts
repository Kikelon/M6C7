import { Component, OnInit, Input } from '@angular/core';
import { Ciudad } from 'src/app/models/ciudad';

@Component({
  selector: 'app-vista-detalle',
  templateUrl: './vista-detalle.component.html',
  styleUrls: ['./vista-detalle.component.css']
})
export class VistaDetalleComponent implements OnInit {

  @Input() ciudad : Ciudad;
  @Input() mostrar : boolean;
  @Input() id: number;

  constructor() { }

  ngOnInit(): void {
  }

}
