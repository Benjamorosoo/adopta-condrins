import { Service, signal } from '@angular/core';
import { Usuario } from '../models/usuario.model';

@Service()
export class Usuarios {
  private listaUsuarios: Usuario[] = [];

  usuarioActual = signal<Usuario | null>(null);

  registrar(usuario: Usuario): boolean {
    const yaExiste = this.listaUsuarios.some((u) => u.correo === usuario.correo);
    if (yaExiste) {
      return false;
    }
    this.listaUsuarios.push(usuario);
    return true;
  }

  login(correo: string, clave: string): boolean {
    const usuario = this.listaUsuarios.find((u) => u.correo === correo && u.clave === clave);
    if (usuario) {
      this.usuarioActual.set(usuario);
      return true;
    }
    return false;
  }

  logout() {
    this.usuarioActual.set(null);
  }

  estaLogueado(): boolean {
    return this.usuarioActual() !== null;
  }
}