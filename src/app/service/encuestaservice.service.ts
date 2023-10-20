import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Encuesta } from '../model/encuesta.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EncuestaserviceService {

  private apiUrl = 'http://localhost:8080/rest';
  constructor(private http: HttpClient) { }

  guardarEncuesta(encuestaData: any) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      
      // Otros encabezados personalizados si es necesario
    });
    return this.http.post(`${this.apiUrl}/registrarEncuesta`,encuestaData,{headers: headers});
  }

  obtenerEncuestas():Observable<any[]>{
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      
      // Otros encabezados personalizados si es necesario
    });
    return this.http.get<Encuesta[]>(`${this.apiUrl}/encuestas`);
    

  }


}
