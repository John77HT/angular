import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CiudadService {
  // URL del backend para simulación
  URL = 'https://back-6s9j.onrender.com/ciudades'; // Ajusta el endpoint según tu configuración

  constructor(private http: HttpClient) {}

  // Obtener todas las ciudades
  fetchCiudad(): Observable<any> {
    return this.http.get<any>(this.URL); // Simula la obtención de datos
  }

  fetchCiudadById(id: string): Observable<any> {
    console.log('Obteniendo ciudad con ID:', id);
    return this.http.get<any>(`${this.URL}/${id}`); // Obtiene la ciudad con el ID proporcionado
  }

  

  // Crear una nueva ciudad
  postCiudad(ciudad: any): Observable<any> {
    console.log('Creando nueva ciudad simulada:', ciudad);
    return this.http.post<any>(this.URL, ciudad); // Simula la creación
  }

  // Actualizar una ciudad
  updateCiudad(id: string, ciudad: any): Observable<any> {
    console.log('Actualizando ciudad simulada con ID:', id, 'Datos:', ciudad);
    return this.http.put<any>(`${this.URL}/${id}`, ciudad); // Simula la actualización
  }

  // Eliminar una ciudad
  deleteCiudad(id: string): Observable<any> {
    console.log('Eliminando ciudad simulada con ID:', id);
    return this.http.delete<any>(`${this.URL}/${id}`); // Simula la eliminación
  }
}
