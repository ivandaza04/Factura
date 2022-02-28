import { Component, OnInit } from '@angular/core';
// Agrega imports
import { FacturacordService } from "../../servicios/api/facturacord.service";
import { Factura } from "../../modelos/factura";
import { Router, ActivatedRoute, Data } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {

  datosFactura = new FormGroup({
    Id: new FormControl(''),
    codigoFactura: new FormControl(''),
    cliente: new FormControl(''),
    ciudad: new FormControl(''),
    nit: new FormControl(''),
    totalFactura: new FormControl(''),
    subTotal: new FormControl(''),
    iva: new FormControl(''),
    retencion: new FormControl(''),
    estado: new FormControl(''),
    pagada: new FormControl(''),
  });

  constructor(private service: FacturacordService, private router: Router, private activatedRouter: ActivatedRoute) { }

  ngOnInit(): void {
    let facturaId = this.activatedRouter.snapshot.paramMap.get('id');
    this.EditarFactura(facturaId);
  }

  EditarFactura(id: string) {
    console.log("id: " + id);
    this.service.getFactura(id).subscribe(data => {
      console.log(data);
      this.datosFactura.controls['Id'].setValue(data.Id);
      this.datosFactura.controls['codigoFactura'].setValue(data.codigoFactura);
      this.datosFactura.controls['cliente'].setValue(data.cliente);
      this.datosFactura.controls['ciudad'].setValue(data.ciudad);
      this.datosFactura.controls['nit'].setValue(data.nit);
      this.datosFactura.controls['totalFactura'].setValue(data.totalFactura);
      this.datosFactura.controls['subTotal'].setValue(data.subTotal);
      this.datosFactura.controls['iva'].setValue(data.iva);
      this.datosFactura.controls['retencion'].setValue(data.retencion);
      this.datosFactura.controls['estado'].setValue(data.estado);
      this.datosFactura.controls['pagada'].setValue(data.pagada);
      console.log(this.datosFactura.value);
    })
  }

  postForm(datos: Factura) {
    console.log(datos);
    this.service.putFactura(datos).subscribe(data => {
      console.log(data);
    });
    this.router.navigate(['/factura']);
  }

}
