import { Injectable } from '@angular/core';

@Injectable()
export class StorageService {

  private sesion: string = 'SESSION';
  private local: string = 'LOCAL';

  constructor() { }

  /**
   * almacen
   * @param tipo una string con un valor para indicar el tipo de storage a usar
   *             SESSION = session storage, LOCAL = local storage
   * @return null si no se ha indicado un tipo de storage válido o el storage en caso de que si
   */
  private almacen(tipo: string): any | null {

    if(tipo.toUpperCase() === this.sesion) {
      return sessionStorage;
    } else if(tipo.toLocaleUpperCase() === this.local) {
      return localStorage
    }

    return null;

  }

  /**
   * guardarValor
   * @param tipo
   * @param clave
   * @param valor
   */
  guardarValor(tipo: string, clave: string, valor: string): boolean {

    try{
      this.almacen(tipo).setItem(clave.toUpperCase(), valor);
      return true;
    }catch(e) {
      return false;
    }

  }

  /**
   * obtenerValor
   * @param tipo
   * @param clave
   */
  obtenerValor(tipo: string, clave: string): null | string {

    try {
      return this.almacen(tipo).getItem(clave.toUpperCase());
    }catch(e) {
      return null;
    }

  }

  /**
   * existeClave
   * @param tipo
   * @param clave
   */
  existeClave(tipo: string, clave: string): null | boolean {

    try {
      return this.almacen(tipo).hasOwnProperty(clave.toUpperCase());
    } catch(e) {
      return null;
    }

  }

  /**
   * borrarValor
   * @param tipo
   * @param clave
   */
  borrarValor(tipo: string, clave: string): void {

    try {
      this.almacen(tipo).removeItem(clave.toUpperCase());
    } catch(e) {

    }

  }

}
