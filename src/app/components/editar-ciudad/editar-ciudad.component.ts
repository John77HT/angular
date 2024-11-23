import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CiudadService } from '../../services/ciudad.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-editar-ciudad',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './editar-ciudad.component.html',
  styleUrls: ['./editar-ciudad.component.css']
})
export class EditarCiudadComponent implements OnInit {
  ciudad: any = { id_ciudad: '' }; // Objeto para la ciudad a editar
  originalIdciudad: string = ''; // Para almacenar el ID original antes de editar

  constructor(
    private ciudadService: CiudadService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.obtenerCiudad(); // Llama a obtenerCiudad al inicializar el componente
  }

  obtenerCiudad() {
    const id_ciudad = this.activatedRoute.snapshot.paramMap.get('id_ciudad');
    if (id_ciudad) {
      this.originalIdciudad = id_ciudad; // Almacena el ID original
      this.ciudadService.fetchCiudadById(id_ciudad).subscribe(
        (res) => {
          this.ciudad = res; // Asigna el objeto ciudad directamente
        },
        (err) => {
          console.error('Error al obtener la ciudad:', err);
        }
      );
    }
  }

  actualizarCiudad() {
    const id_original = this.ciudad.id_ciudad; // Obtén el ID de la ciudad que deseas actualizar
    const ciudadActualizada = {
      nombre: this.ciudad.nombre,  // Actualiza el nombre de la ciudad (agrega más campos si es necesario)
    };

    console.log('Actualizando ciudad:', ciudadActualizada);
    this.ciudadService.updateCiudad(id_original, ciudadActualizada).subscribe(
      (res) => {
        console.log('Ciudad actualizada:', res);
        this.router.navigate(['/ciudad']); // Redirige a la lista de ciudades
      },
      (err) => {
        console.error('Error al actualizar la ciudad:', err);
      }
    );
  }
}
