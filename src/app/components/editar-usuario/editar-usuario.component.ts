import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuarioService } from '../../services/usuario.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-editar-usuario',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './editar-usuario.component.html',
  styleUrls: ['./editar-usuario.component.css']
})
export class EditarUsuarioComponent implements OnInit {
  usuario: any = { id_usuario: '' }; // Objeto para el usuario a editar
  originalIdUsuario: string = ''; // Para almacenar el ID original antes de editar
  mensaje: string = ''; // Para mostrar el mensaje de respuesta del backend

  constructor(
    private usuarioService: UsuarioService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.obtenerUsuario(); // Llama a obtenerUsuario al inicializar el componente
  }

  obtenerUsuario() {
    const id_usuario = this.activatedRoute.snapshot.paramMap.get('id_usuario');
    if (id_usuario) {
      this.originalIdUsuario = id_usuario; // Almacena el ID original
      this.usuarioService.fetchUserById(id_usuario).subscribe(
        (res) => {
          this.mensaje = res.message; // Muestra el mensaje de simulación
          console.log('Respuesta del backend:', res);
        },
        (err) => {
          console.error('Error al obtener el usuario:', err);
        }
      );
    }
  }

  actualizarUsuario() {
    const usuarioActualizado = { ...this.usuario }; // Copia del objeto usuario para simular la actualización

    console.log('Intentando actualizar usuario:', usuarioActualizado);
    this.usuarioService.updateUser(this.originalIdUsuario, usuarioActualizado).subscribe(
      (res) => {
        this.mensaje = res.message; // Muestra el mensaje del backend
        console.log('Respuesta del backend:', res);
        this.router.navigate(['/registros']); // Redirige a la lista de registros
      },
      (err) => {
        console.error('Error al actualizar el usuario:', err);
      }
    );
  }
}
