import { Service } from '@angular/core';
import { Perro } from '../models/perro.model';
import { Filtro } from '../models/filtro.model';

@Service()
export class Perros {
    // array en private para que nadie de afuera pueda modificarlo
    // solo modificable a traves de los metodos que hare abajo
    private listaPerros: Perro[] = [
        {id: 1, nombre: 'Astrid Seraphine', edad: 0, raza:'Basset Hound',  descripcion: 'Muy cariñosa', foto: 'assets/img/perros/Astrid.jpeg', adoptado: true},
        {id: 2, nombre: 'Kai Izamu', edad: 9, raza:'Dachshound',  descripcion: 'Le encanta salir', foto: 'assets/img/perros/Kai.jpeg', adoptado: false},
        {id: 3, nombre: 'Snupita', edad: 10, raza:'Yorkshire',  descripcion: 'Timida', foto: 'assets/img/perros/snupita.jpeg', adoptado: false},
        {id: 4, nombre: 'Floki Ronaldo', edad: 0, raza:'Weimaraner',  descripcion: 'Muy jugueton', foto: 'assets/img/perros/floki.jpeg', adoptado: false},
        {id: 5, nombre: 'Eliott Messi', edad: 6, raza:'Golden Retrieve',  descripcion: 'Muy jugueton', foto: 'assets/img/perros/eliott.jpeg', adoptado: false},
        {id: 6, nombre: 'Estrella', edad: 3, raza:'Gato',  descripcion: 'Muy fiera', foto: 'assets/img/perros/estrella.jpeg', adoptado: false},



    ];
    // 1. metodo listar todos los perros
    listar(): Perro[] {
        return this.listaPerros;
    }
    // 2. metodo obtener la mascota por su id
    obtenerPorId(id: number): Perro | undefined {
        return this.listaPerros.find((perro) => perro.id === id);
        // la funcion find devuelve el primer elemento que cumpla la condicion
        // retorna la lista (this.listaPerros) que cumplan la condicion, si ninguno cumple 
        // devuelve undefined

    }

    // 3. metodo agregar
    agregar(perro: Perro){
            this.listaPerros.push(perro);

            // metodo push permite agregar elementos a la lista
            // la funcion no devuelve nada, solo modifica
        }

    // 4. metodo eliminar
    eliminar(id: number): void {
        this.listaPerros = this.listaPerros.filter((perro) => perro.id !== id);
        // metodo de eliminar, filtra por el id del perro, modificamos la lista a todos los
        // elementos a excepcion de los que cumplan la condicion
        // void ya que modificamos, no devolvemos nada
    }

    //5. metodo editar
    editar(perroEditado: Perro): void{
        const indice = this.listaPerros.findIndex((perro) => perro.id === perroEditado.id) 
        // creamos la constante indice, que es el indice del perro que queremos editar
        if (indice !== -1){
            this.listaPerros[indice] = perroEditado;
        }
    }

    // 6. filtrar 
    filtrar(filtro: Filtro): Perro[] {
        return this.listaPerros.filter((perro) => (filtro.id === undefined || perro.id === filtro.id) 
    && (filtro.nombre === undefined || perro.nombre === filtro.nombre) 
    && (filtro.edad === undefined || perro.edad === filtro.edad) 
    && (filtro.raza === undefined || perro.raza === filtro.raza) 
    && (filtro.adoptado === undefined || perro.adoptado === filtro.adoptado));
        
    }
}
