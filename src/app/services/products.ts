
import { Injectable } from '@angular/core';

export interface Product{
  id: number;
  nombre:string;
  descripcion: string;
  precio: number;
  imagen: string;
  descripcionLarga?: string; // solo para el modal

}

@Injectable({
  providedIn: 'root'
})

export class Products {
  
  private products:Product[] = [
    {
      id: 1,
      nombre: 'Collar de Perlas(Corazón)',
      descripcion : 'Ideal para cualquier ocasión',
      precio: 300,
      imagen: '/img/producto1.png',  
   
    },
    {
      id: 2,
      nombre: 'Anillo de diamante',
      descripcion: 'Elegante para ocasión especial',
      precio: 3200,
      imagen: '/img/producto2.png',
  
    },
    {
      id: 3,
      nombre: 'Aretes de perla',
      descripcion: 'Moderna y económica',
      precio: 250,
      imagen: '/img/producto3.png',
  
    },
   {
      id: 4,
      nombre: 'Collar de perlas(normal)',
      descripcion: 'Moderna y elegante',
      precio: 250,
      imagen: '/img/producto4.png',

   }
]
  constructor(){}
  getProducts():Product[]{
    return this.products;
  }
  
}

