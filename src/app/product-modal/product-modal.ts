import { Component, Input } from '@angular/core';
import { Product } from '../services/products';


@Component({
  selector: 'app-product-modal',
  imports: [],
  templateUrl: './product-modal.html',
  styleUrl: './product-modal.css'
})
export class ProductModal {
@Input() product: Product | null = null;
@Input() showModal: boolean = false;

closeModal() {
    this.showModal = false;
  }
}
