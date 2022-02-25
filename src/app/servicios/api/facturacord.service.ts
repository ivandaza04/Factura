import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Factura } from "../../modelos/factura";

@Injectable({
  providedIn: 'root'
})
export class FacturacordService {

  readonly APIUrl = "https://localhost:7250/api";
  constructor(private http: HttpClient) { }

  // Metodos con clase Factura
  getFacturaLista(): Observable<Factura[]> {
    let direccion = this.APIUrl + '/facturas';
    console.log("Direcion Api:   " + direccion);
    return this.http.get<Factura[]>(direccion);
  }

  // Metodos sin clase Factura
  getFacturaList(): Observable<any[]> {
    let direccion = this.APIUrl + '/facturas';
    console.log("Direcion Api:   " + direccion);
    return this.http.get<any>(direccion);
  }
  addFactura(val: any) {
    return this.http.post(this.APIUrl + '/facturas', val);
  }
  updateFactura(val: any) {
    return this.http.put(this.APIUrl + '/facturas', val);
  }
  deleteFactura(id: any) {
    return this.http.delete(this.APIUrl + '/facturas/' + id);
  }

}
