import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  //
  
  URL = 'https://back-6s9j.onrender.com'

  constructor(private http: HttpClient) { }

  fetchUser(): Observable<any> {
    return this.http.get<any>(`${this.URL}/usuarios`); // Ruta para obtener los usuarios simulados
  }
  fetchUserById(id: string): Observable<any> {
    return this.http.get<any>(`${this.URL}/usuarios/${id}`); // Ruta para obtener un usuario por ID simulado
  }
  postUser(user: any): Observable<any> {
    return this.http.post<any>(`${this.URL}/usuarios`, user); // Ruta para crear usuarios simulados
  }
  
  updateUser(id: string, user: any): Observable<any> {
    return this.http.put<any>(`${this.URL}/usuarios/${id}`, user); // Ruta para actualizar usuarios simulados
  }
  
  deleteUser(id: string): Observable<any> {
    return this.http.delete<any>(`${this.URL}/usuarios/${id}`); // Ruta para eliminar usuarios simulados
  }
  
}
