import { Injectable } from '@angular/core';
import { GastoItem } from '../interfaces/gasto-item';
import { StorageService } from '../services/storage.service';

@Injectable()
export class GastosService {

  private gastos: Array<GastoItem>;

  constructor(private storage: StorageService) {

    this.gastos = [];

    this.cargarGastos();

  }

  obtenerGastos(): Array<GastoItem> {
    return this.gastos;
  }

  cargarGastos(): void {

    this.gastos = [];

    if(this.storage.existeClave('LOCAL', 'gastos')) {
      try {
        this.gastos = JSON.parse(this.storage.obtenerValor('LOCAL', 'gastos'));
      }catch(e) {
        console.log(e);
      }
    }

  }

  anyadirGasto(item: GastoItem): void {

    this.gastos.push(item);

    this.storage.guardarValor('LOCAL', 'gastos', JSON.stringify(this.gastos));

    this.cargarGastos();

  }

}
