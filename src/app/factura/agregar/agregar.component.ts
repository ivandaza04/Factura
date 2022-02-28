import { Component, OnInit } from '@angular/core';
// Agrega imports
import { FacturacordService } from "../../servicios/api/facturacord.service";
import { Factura } from "../../modelos/factura";
import { Router, ActivatedRoute, Data } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {

  datosFactura = new FormGroup({
    Id: new FormControl(''),
    codigoFactura: new FormControl(''),
    cliente: new FormControl(''),
    ciudad: new FormControl(''),
    nit: new FormControl(''),
    totalFactura: new FormControl(''),
    estado: new FormControl(''),
  });

  constructor(private service: FacturacordService, private router: Router, private activatedRouter: ActivatedRoute) { }

  ngOnInit(): void {
  }

  postForm(datos: Factura) {
    console.log(datos);
    this.service.postFactura(datos).subscribe(data => {
      alert("Factura " + this.datosFactura.controls['codigoFactura'].value + " se guardo exitosamente");
    });
    this.router.navigate(['/factura']);
  }

}
