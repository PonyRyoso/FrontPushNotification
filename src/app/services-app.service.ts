import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ServicesAppService {

  constructor(private http: HttpClient) { }


  public Enviar( data?:any ){
    return this.http.post('http://0.0.0.0:9000/api/enviar', data)
  }
}
