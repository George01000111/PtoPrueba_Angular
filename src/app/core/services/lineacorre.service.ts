import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Lineacorre } from './../models/lineacorre.model'

@Injectable({
  providedIn: 'root'
})
export class LineacorreService {

  url='http://192.168.1.35:5009/api/LineaCorre'


  constructor(

    private http: HttpClient

  ) { 

  }

  
  getAllLineacorre(){
    return this.http.get<Lineacorre[]>(this.url)
  }
 
  getLineacorre(id:number){
    return this.http.get<Lineacorre>(`${this.url}/GetLineaCorrexid/${id}`)
  }

  busqLineacorre(id:string){
    if (id!=''){
      return this.http.get<Lineacorre[]>(`${this.url}/BusqLineaCorre/${id}`)
    }else{
      return this.http.get<Lineacorre[]>(this.url)
    }
    
  }

  createLineacorre(data: Partial<Lineacorre>){
    return this.http.post<Lineacorre>(this.url,data);
  }

  updateLineacorre(id: number,data: Partial<Lineacorre>){
    return this.http.put<Lineacorre>(`${this.url}/${id}`, data);
  }

  deleteLineacorre(id:number){
    return this.http.delete(`${this.url}/${id}`)
  }

}
