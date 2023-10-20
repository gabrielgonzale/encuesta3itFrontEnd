import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { estiloMusical } from '../model/estiloMusical.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EstiloMusicalService {

  
  private apiUrl = 'http://localhost:8080/estiloMusical';
  constructor(private http: HttpClient) { }

  listarEstiloMusical(): Observable<estiloMusical[]> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      
      // Otros encabezados personalizados si es necesario
    });
    return this.http.get<estiloMusical[]>(`${this.apiUrl}/estilosMusicales`);
    
  }
}
