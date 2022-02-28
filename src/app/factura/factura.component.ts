import { Component, OnInit } from '@angular/core';
// Agrega imports
import { FacturacordService } from "../servicios/api/facturacord.service";
import { Factura } from "../modelos/factura";
import { Router } from '@angular/router';

@Component({
  selector: 'app-factura',
  templateUrl: './factura.component.html',
  styleUrls: ['./factura.component.css']
})
export class FacturaComponent implements OnInit {

  // Variables clase Factura
  Facturas: Factura[];
  dataSaved = false;
  massage: String;

  ActivateAddEditEmpComp:boolean=false;

  constructor(private service: FacturacordService, private router: Router) { }

  ngOnInit(): void {
    this.refreshFacturaLista();
  }

  // Metodos clase Factura
  refreshFacturaLista() {
    this.service.getFacturaLista().subscribe(data => {
      this.Facturas = data;
    });
  }

  agregarFactura() {
    this.router.navigate(['agregar']);
  }

  editarFactura(id) {
    this.router.navigate(['editar', id]);
  }

  eliminarFactura(id: string) {
    if (confirm("Seguro que desea eliminar el registro?")) {
      this.service.deleteFactura(id).subscribe(
        () => {
          this.dataSaved = true;
          this.massage = "El registo ha sido eliminado";
          this.refreshFacturaLista();
        }
      );
    }
  }
  
  addClick() {
    this.ActivateAddEditEmpComp=true;
  }

  closeClick() {
    this.ActivateAddEditEmpComp=false;
    this.refreshFacturaLista();
  }
}
