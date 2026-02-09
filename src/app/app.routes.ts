import { Routes } from '@angular/router';
import { Home } from './features/home/home';
import { Productos } from './features/productos/productos';
import { Acerca } from './features/acerca/acerca';
import { Pagina404 } from './shared/pagina-404/pagina-404';

export const routes: Routes = [
    //RUTA INICIAL
    {path:'', component:Home},

    //RUTAS DE NAVEGACIÓN
    {path:'productos', component:Productos},
    {path:'acerca', component:Acerca},
    {path:'nosotros', component:Acerca},



    //FINAL
    //RUTA PARA CUANDO EL USUARIO ESCRIBE MAL UNA DIRECCION O URL (RUTA)
    {path:'**', component:Pagina404}

];
