import { Component, OnInit } from '@angular/core';
import { FacturacordService } from "../../servicios/api/facturacord.service";

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  constructor(private service: FacturacordService) { }

  FacturaList: any = [];

  ngOnInit(): void {
    this.refreshFacturaList();
  }

  refreshFacturaList() {
    this.service.getFacturaList().subscribe(data => {
      this.FacturaList = data;
    });
  }

}
