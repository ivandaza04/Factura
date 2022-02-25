import { Component, OnInit } from '@angular/core';
// Agrega imports
import { FacturacordService } from "../../servicios/api/facturacord.service";
import { Factura } from "../../modelos/factura";
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {

  constructor(private service: FacturacordService, private router: Router, private activatedRouter: ActivatedRoute) { }

  ngOnInit(): void {
    let facturaId = this.activatedRouter.snapshot.paramMap.get('id');
    console.log(facturaId);
  }

}
