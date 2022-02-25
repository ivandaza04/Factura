import { Injectable } from '@angular/core';
// Agrega imports
import { HttpClient, HttpHandler } from "@angular/common/http";
import { Observable } from "rxjs";
import { Factura } from "../../modelos/factura";

@Injectable({
  providedIn: 'root'
})
export class FacturacordService {

  readonly APIUrl = "https://localhost:7250/api";
  constructor(private http: HttpClient) { }

  // Metodos con clase Factura
  getFacturaLista(): Observable<any[]> {
    let direccion = this.APIUrl + '/facturas';
    console.log("Direcion Api:   " + direccion);
    return this.http.get<any[]>(direccion);
  }

  getFactura(val: any) {
    let direccion = this.APIUrl + '/facturas/' + val;
    console.log("Direcion Api:   " + direccion);
    return this.http.get<Factura>(direccion);
  }

  postFactura(val: any): Observable<Response> {
    let direccion = this.APIUrl + '/facturas';
    return this.http.post<Response>(this.APIUrl + '/facturas', val);
  }

  putFactura(val: any): Observable<Response> {
    let direccion = this.APIUrl + '/facturas/' + val.Id;
    console.log("Direcion Api:   " + direccion);
    return this.http.put<Response>(direccion, val)
  }

  deleteFactura(id: string): Observable<number> {
    let direccion = this.APIUrl + '/facturas/' + id;
    console.log("Direcion Api:   " + direccion);
    return this.http.delete<number>(direccion);
  }

}
