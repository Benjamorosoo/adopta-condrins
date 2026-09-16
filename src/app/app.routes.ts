import { Routes } from '@angular/router';
import { authGuard } from './guards/auth-guard';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
    canActivate: [authGuard],
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'detalle/:id',
    loadComponent: () => import('./detalle/detalle.page').then( m => m.DetallePage),
    canActivate: [authGuard],
  },
  {
    path: 'nuevo-perro',
    loadComponent: () => import('./nuevo-perro/nuevo-perro.page').then( m => m.NuevoPerroPage),
    canActivate: [authGuard],
  },
  {
    path: 'editar-perro/:id',
    loadComponent: () => import('./nuevo-perro/nuevo-perro.page').then( m => m.NuevoPerroPage),
    canActivate: [authGuard],
  },
  {
    path: 'registro',
    loadComponent: () => import('./registro/registro.page').then( m => m.RegistroPage)
  },
  {
    path: 'login',
    loadComponent: () => import('./login/login.page').then( m => m.LoginPage)
  },
];