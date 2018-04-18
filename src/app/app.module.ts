import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';

import { StorageService } from './services/storage.service';
import { GastosService } from './services/gastos.service';

import { FormularioComponent } from './components/formulario/formulario.component';
import { TablaListadoComponent } from './components/tabla-listado/tabla-listado.component';

import { OrderByPipe } from './pipes/order.pipe';

@NgModule({
  declarations: [
    AppComponent,
    FormularioComponent,
    TablaListadoComponent,
    OrderByPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule.forRoot()
  ],
  providers: [
    StorageService,
    GastosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
