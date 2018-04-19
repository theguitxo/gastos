import { Component, Injectable, OnInit } from '@angular/core';
import { NgForm, FormControl, Validators, FormGroup } from '@angular/forms';
import { NgbDatepickerI18n, NgbDateAdapter } from "@ng-bootstrap/ng-bootstrap";
import { I18n, CustomDatepickerI18n } from '../../services/custom-datepicker-i18n.service';
import { DateNativeAdapterService } from '../../services/date-native-adapter.service';
import { GastoItem } from '../../interfaces/gasto-item';
import { GastosService } from '../../services/gastos.service';

@Component({
  selector: "app-formulario",
  templateUrl: "./formulario.component.html",
  styleUrls: ["./formulario.component.scss"],
  providers: [
    I18n,
    {
      provide: NgbDatepickerI18n,
      useClass: CustomDatepickerI18n
    },
    {
      provide: NgbDateAdapter,
      useClass: DateNativeAdapterService
    }
  ]
})
export class FormularioComponent implements OnInit {

  public isCollapsed: boolean;

  public formulario: FormGroup;
  public fecha: FormControl;
  public concepto: FormControl;
  public importe: FormControl;

  public enviado: boolean;

  constructor(private gastos: GastosService) {
    this.isCollapsed = false;
  }

  ngOnInit() {

    this.fecha = new FormControl();
    this.concepto = new FormControl('', Validators.required);
    this.importe = new FormControl('', [Validators.required, Validators.min(0.01)]);

    this.enviado = true;

    this.formulario = new FormGroup({
      fecha: this.fecha,
      concepto: this.concepto,
      importe: this.importe
    });

  }

  mostrarFormulario(): void {
    this.isCollapsed = false;
  }

  ocultarFormulario(): void {
    this.isCollapsed = true;
    this.resetFormulario();
  }

  guardar(): void {

    this.enviado = true;

    if(this.formulario.valid) {
      this.guardarDatos();
    }

  }

  private guardarDatos() {

    console.log(this.formulario);

    let item: GastoItem = {
      concepto: this.formulario.value.concepto,
      importe: this.formulario.value.importe,
      fecha: this.formulario.value.fecha ? this.formulario.value.fecha : new Date()
    }

    this.gastos.anyadirGasto(item);

    this.resetFormulario();

  }

  private resetFormulario(): void {

    this.enviado = false;
    this.formulario.reset();

  }

}
