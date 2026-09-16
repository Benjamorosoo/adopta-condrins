import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { Usuarios } from '../services/usuarios';

export const authGuard: CanActivateFn = (route, state) => {
  const usuariosService = inject(Usuarios);
  const router = inject(Router);

  if (usuariosService.estaLogueado()) {
    return true;
  }

  router.navigate(['/login']);
  return false;
};