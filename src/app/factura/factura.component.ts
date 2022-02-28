import { Component, OnInit } from '@angular/core';
// Agrega imports
import { FacturacordService } from "../servicios/api/facturacord.service";
import { Factura } from "../modelos/factura";
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

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

  ActivateAddEditEmpComp: boolean = false;

  datosFactura = new FormGroup({
    Id: new FormControl(''),
    codigoFactura: new FormControl(''),
    cliente: new FormControl(''),
    ciudad: new FormControl(''),
    nit: new FormControl(''),
    totalFactura: new FormControl(''),
    estado: new FormControl(''),
  });

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
    this.ActivateAddEditEmpComp = true;
  }

  closeClick() {
    this.ActivateAddEditEmpComp = false;
    this.refreshFacturaLista();
  }

  actualizarEstado(id: string) {
    console.log("id: " + id);
    this.service.getFactura(id).subscribe(data => {
      console.log(data);
      this.datosFactura.controls['Id'].setValue(data.Id);
      this.datosFactura.controls['codigoFactura'].setValue(data.codigoFactura);
      this.datosFactura.controls['cliente'].setValue(data.cliente);
      this.datosFactura.controls['ciudad'].setValue(data.ciudad);
      this.datosFactura.controls['nit'].setValue(data.nit);
      this.datosFactura.controls['totalFactura'].setValue(data.totalFactura);
      this.datosFactura.controls['estado'].setValue(data.estado);
      console.log(this.datosFactura.value);
      this.service.estadoFactura(data).subscribe(data => {
        alert("Se actualizo el estado de la factura " + this.datosFactura.controls['codigoFactura'].value);
      });
    })
  }

}
