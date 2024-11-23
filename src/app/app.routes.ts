import { Routes } from '@angular/router';
//import {UsersComponent} from './components/users/users.component' ;

import { UsersComponent } from './components/users/users.component';
import { ContenidoComponent } from './components/contenido/contenido.component';
import { RegistrosComponent } from './components/registros/registros.component';
import { NuevousuarioComponent } from './components/nuevousuario/nuevousuario.component';
import { NuevaciudadComponent } from './components/nuevaciudad/nuevaciudad.component';
import { EditarUsuarioComponent } from './components/editar-usuario/editar-usuario.component';
import { CiudadComponent } from './components/ciudad/ciudad.component';
import { EditarCiudadComponent } from './components/editar-ciudad/editar-ciudad.component';



export const routes: Routes = [
    
    { path: 'usuario', component: UsersComponent },
    { path: 'contenido', component: ContenidoComponent },
    { path: 'registros', component: RegistrosComponent },
    { path: 'nuevousuario', component: NuevousuarioComponent },
    { path: 'nuevaciudad', component: NuevaciudadComponent },
    { path: 'editarusuario', component: EditarUsuarioComponent },
    { path: 'editar-usuario/:id_usuario', component: EditarUsuarioComponent }, // Ruta con parámetro
    //{ path: '', redirectTo: '/registros', pathMatch: 'full' },

    { path: 'ciudad', component: CiudadComponent },
    { path: 'editarciudad', component: EditarCiudadComponent },
    { path: 'editar-ciudad/:id_ciudad', component: EditarCiudadComponent }, // Ruta con parámetro
    //{ path: '', redirectTo: '/ciudad', pathMatch: 'full' },


    


];

