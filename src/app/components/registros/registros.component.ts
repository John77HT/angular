// registros.component.ts
import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-registros',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './registros.component.html',
  styleUrls: ['./registros.component.css']
})
export class RegistrosComponent implements OnInit {
  usuarios: any[] = []; // Lista de usuarios

  constructor(private usuarioService: UsuarioService, private router: Router) { }

  ngOnInit(): void {
    this.obtenerUsuarios(); // Cargar usuarios al iniciar el componente
  }

  obtenerUsuarios() {
    this.usuarioService.fetchUser().subscribe(
      (res) => {
        console.log('Respuesta del backend:', res.message); // Muestra el mensaje simulado
        this.usuarios = []; // Mantén la lista vacía o usa datos simulados
      },
      (err) => {
        console.error('Error al obtener usuarios:', err);
      }
    );
  }
  

  editarUsuario(id_usuario: string) {
    this.usuarioService.updateUser(id_usuario, {}).subscribe(
      (res) => {
        console.log('Respuesta del backend:', res.message); // Muestra el mensaje simulado
      },
      (err) => {
        console.error('Error al actualizar usuario:', err);
      }
    );
  }
  

  eliminarUsuario(id_usuario: string) {
    this.usuarioService.deleteUser(id_usuario).subscribe(
      (res) => {
        console.log('Respuesta del backend:', res.message); // Muestra el mensaje simulado
      },
      (err) => {
        console.error('Error al eliminar usuario:', err);
      }
    );
  }
  

  irANuevoUsuario() {
    this.usuarioService.postUser({}).subscribe(
      (res) => {
        console.log('Respuesta del backend:', res.message); // Muestra el mensaje simulado
      },
      (err) => {
        console.error('Error al crear usuario:', err);
      }
    );
  }
  
}
