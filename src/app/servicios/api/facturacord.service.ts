import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class FacturacordService {

  readonly APIUrl = "https://localhost:7250/api";
  constructor(private http: HttpClient) { }

  getFacturaList(): Observable<any[]> {
    let direccion = this.APIUrl + '/facturas';
    console.log("Direcion Api:   " + direccion);
    return this.http.get<any>(direccion);
  }
  addFactura(val: any) {
    return this.http.post(this.APIUrl + '/Facturas', val);
  }
  updateFactura(val: any) {
    return this.http.put(this.APIUrl + '/Facturas', val);
  }
  deleteFactura(id: any) {
    return this.http.delete(this.APIUrl + '/Facturas/' + id);
  }
}
