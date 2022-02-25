import { NgModule } from '@angular/core';
// Agregar imports de RouterModule, Routes y componentes
import { RouterModule, Routes } from '@angular/router';
import { FacturaComponent } from "./factura/factura.component";
import { EditarComponent } from './factura/editar/editar.component';
import { AgregarComponent } from './factura/agregar/agregar.component';

// Agregar path de los componentes
const routes: Routes = [
  { path: 'factura', component: FacturaComponent },
  { path: 'editar/:id', component: EditarComponent },
  { path: 'agregar', component: AgregarComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
