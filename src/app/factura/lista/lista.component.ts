import { Component, OnInit } from '@angular/core';
// Agrega imports
import { FacturacordService } from "../../servicios/api/facturacord.service";
import { Factura } from "../../modelos/factura";
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  constructor(private service: FacturacordService, private router: Router) { }

  // Variables con clase Factura
  Facturas: Factura[];
  dataSaved = false;
  massage: String;

  // Variables sin clase Factura
  FacturaList: any = [];
  ModalTitle: string;
  ActivateEditarFacturaComp: boolean = false;
  factura: any;

  ngOnInit(): void {
    this.refreshFacturaLista();
  }

  // Metodos con clase Factura
  refreshFacturaLista() {
    this.service.getFacturaLista().subscribe(data => {
      this.Facturas = data;
    });
  }

  agregarFactura() {
    this.router.navigate(['agregar']);
  }

  editarFactura(id) {
    console.log("Id factura " + id);
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

  // Metodos sin clase Factura
  refreshFacturaList() {
    this.service.getFacturaLista().subscribe(data => {
      this.FacturaList = data;
    });
  }

  addClick() {
    this.factura = {
      codigoFactura: "",
      cliente: "",
      ciudad: "",
      nit: "",
      totalFactura: ""
    }
    this.ModalTitle = "Agregar Factura";
    this.ActivateEditarFacturaComp = true;
  }

  closeClick() {
    this.ActivateEditarFacturaComp = false;
    this.refreshFacturaList();
  }

}
