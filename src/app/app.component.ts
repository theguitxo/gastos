import { Component } from '@angular/core';
import { GastosService } from './services/gastos.service';
import { GastoItem } from './interfaces/gasto-item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  columnasListado: Array<any>;
  tituloTabla: string;
  campoOrden: string;

  constructor(
    private gastos: GastosService) {

    this.columnasListado = [
      {
        titulo: 'Fecha',
        campo: 'fecha',
        alineacion: 'izquierda',
        tipo: 'fecha'
      },
      {
        titulo:'Concepto',
        campo: 'concepto',
        alineacion: 'izquierda',
        tipo: 'texto'
      },
      {
        titulo: 'Importe',
        campo: 'importe',
        alineacion: 'derecha',
        tipo: 'moneda'
      }
    ];
    this.tituloTabla = 'MIS GASTOS';
    this.campoOrden = 'fecha';
  }

  obtenerListaGastos(): Array<GastoItem> {
    return this.gastos.obtenerGastos();
  }

}
