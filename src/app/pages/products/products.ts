import { Component } from '@angular/core';
import { Product, Products } from '../../services/products';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-products',
  templateUrl: './products.html',
  styleUrls: ['./products.css'],
  imports: [CommonModule] // ⬅️ Aquí importas ngIf y ngFor

})
export class ProductsComponent {
  productos: Product[] = [];
  productoSeleccionado: Product | null = null;
  mostrarModal: boolean = false;

  constructor(private productService: Products) {
    this.productos = this.productService.getProducts();
  }

  verMas(producto: Product) {
  this.productoSeleccionado = producto;
  this.mostrarModal = true;
}

  cerrarModal() {
    this.mostrarModal = false;
  }
}
