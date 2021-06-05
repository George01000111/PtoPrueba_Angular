import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Linea } from './../models/linea.model'


@Injectable({
  providedIn: 'root'
})
export class LineaService {


  url='http://192.168.1.35:5009/api/Linea/GetLinea'

  constructor(
    private http: HttpClient

  ) {

   }


   getAllLinea(){
    return this.http.get<Linea[]>(this.url)
  }



}
