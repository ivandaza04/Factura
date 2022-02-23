import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class FacturacordService {

  readonly APIUrl = "https://localhost:7250/api";

  constructor(private http: HttpClient) { }

  getFcturaList(): Observable<any[]> {
    let direccion = this.APIUrl + '/facturas';
    console.log("Direcion Api:   " + direccion);
    return this.http.get<any>(direccion);
  }
}
