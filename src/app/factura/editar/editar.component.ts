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

  agregarFactura = new FormGroup({
    Id: new FormControl(''),
    codigoFactura: new FormControl(''),
    cliente: new FormControl(''),
    ciudad: new FormControl(''),
    nit: new FormControl(''),
    totalFactura: new FormControl(''),
  });

  constructor(private service: FacturacordService, private router: Router, private activatedRouter: ActivatedRoute) { }

  ngOnInit(): void {
    let facturaId = this.activatedRouter.snapshot.paramMap.get('id');
    console.log("Valor id: " + facturaId);
    this.service.getFactura(facturaId).subscribe(data => {
      console.log(data);
      this.agregarFactura.controls['Id'].setValue(data.Id);
      this.agregarFactura.controls['codigoFactura'].setValue(data.codigoFactura);
      this.agregarFactura.controls['cliente'].setValue(data.cliente);
      this.agregarFactura.controls['ciudad'].setValue(data.ciudad);
      this.agregarFactura.controls['nit'].setValue(data.nit);
      this.agregarFactura.controls['totalFactura'].setValue(data.totalFactura);
      console.log(this.agregarFactura.value);
    })
  }

  postForm(from: Factura) {
    console.log(from);
    this.service.putFactura(from).subscribe(data => {
      console.log(data);
    });
  }

}
