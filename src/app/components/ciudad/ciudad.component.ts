import { Component, OnInit } from '@angular/core';
import { CiudadService } from '../../services/ciudad.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ciudad',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './ciudad.component.html',
  styleUrls: ['./ciudad.component.css'] // Corregido: "styleUrl" -> "styleUrls"
})
export class CiudadComponent implements OnInit {
  ciudad: any[] = []; // Lista de ciudades simuladas
  mensaje: string = ''; // Mensaje para mostrar respuesta del backend

  constructor(private ciudadService: CiudadService, private router: Router) { }

  ngOnInit(): void {
    this.obtenerCiudad(); // Cargar ciudades al iniciar el componente
  }

  // Obtener ciudades simuladas
  obtenerCiudad() {
    this.ciudadService.fetchCiudad().subscribe(
      (res: any) => {
        this.mensaje = res.message; // Mostrar el mensaje del backend
        console.log('Respuesta del backend:', res);
      },
      (err) => {
        console.error('Error al obtener ciudades:', err);
      }
    );
  }

  // Editar una ciudad (simulación)
  editarCiudad(id_ciudad: string) {
    console.log(`Redirigiendo a la edición de la ciudad con ID: ${id_ciudad}`);
    this.router.navigate(['/editar-ciudad', id_ciudad]); // Redirige a la ruta con el id_ciudad
  }

  // Eliminar una ciudad (simulación)
  eliminarCiudad(id_ciudad: string) {
    console.log(`Eliminando ciudad con ID: ${id_ciudad}`);
    this.ciudadService.deleteCiudad(id_ciudad).subscribe(
      (res: any) => {
        this.mensaje = res.message; // Mostrar el mensaje del backend
        console.log('Respuesta del backend:', res);
        this.obtenerCiudad(); // Actualiza la lista después de eliminar
      },
      (err) => {
        console.error('Error al eliminar el registro de la ciudad:', err);
      }
    );
  }

  // Navegar a la creación de una nueva ciudad
  irANuevaCiudad() {
    console.log('Redirigiendo a la creación de una nueva ciudad');
    this.router.navigate(['/nuevaciudad']);
  }
}
