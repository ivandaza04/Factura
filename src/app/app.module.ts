import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FacturaComponent } from './factura/factura.component';
import { EditarComponent } from './factura/editar/editar.component';
import { AgregarComponent } from './factura/agregar/agregar.component';

// Importar FacturacordService, HttpClientModule, FormsModule, ReactiveFormsModule
import { FacturacordService } from "./servicios/api/facturacord.service";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule,ReactiveFormsModule } from "@angular/forms";


@NgModule({
  declarations: [
    AppComponent,
    FacturaComponent,
    EditarComponent,
    AgregarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // Agregar imports
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  // Agregar FacturacordService
  providers: [FacturacordService],
  bootstrap: [AppComponent]
})
export class AppModule { }
