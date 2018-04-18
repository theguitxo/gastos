import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CurrencyPipe, DatePipe, DecimalPipe } from "@angular/common";

@Component({
  selector: 'app-tabla-listado',
  templateUrl: './tabla-listado.component.html',
  styleUrls: ['./tabla-listado.component.scss']
})
export class TablaListadoComponent implements OnInit {

  @Input('columnas') columnas: Array<any>;
  @Input('datos') datos: Array<any>;
  @Input('campoOrden') campoOrden: string;
  @Input('acciones') acciones: Array<string>;
  @Input('titulo') titulo: string = '';
  @Input('tipoOrden') tipoOrden: string = 'ASC';

  @Output('ejecutar') ejecutarAccion: EventEmitter<any> = new EventEmitter<any>();
  constructor() {
  }

  ngOnInit() {

    if(this.campoOrden === undefined) this.campoOrden = '';

    if(this.acciones === undefined) this.acciones = [];

    console.log('Columnas:');
    console.log(this.columnas);
    console.log('Datos:');
    console.log(this.datos);
    console.log('Campo orden: ' + this.campoOrden);

  }

  ejecutar(item) {
    console.log('TablaListadoComponent. Ejecutar acción: ', item);
    this.ejecutarAccion.emit(item);
  }

}
