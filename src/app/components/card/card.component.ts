import {Component, inject, input, Input} from '@angular/core';
import { faCartPlus, faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatTooltipModule } from '@angular/material/tooltip';
import { CartService } from '../../store/cart/cart.store';
import { CARDIGAN_COLLECTION } from '../../constants/products/cardigan.constant';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card',
  imports: [FontAwesomeModule, MatTooltipModule, CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  id = input.required<string>();
  imageUrl = input.required<string>();
  category = input.required<string>();
  actionButton= input.required<'addToCart' | 'removeFromCart' | ''>();
  title = input.required<string>();
  private cartService = inject(CartService);
  products = CARDIGAN_COLLECTION;

  faCartPlus = faCartPlus;
  faCircleXMark = faCircleXmark;

  addToCart() {
    const product = this.products.find(product => product.id === this.id());
    if (product) {
      this.cartService.addProductToCart(product);
    }
  }

  removeFromCart(){
    const product = this.products.find(product => product.id === this.id());
    if (product) {
      this.cartService.deleteProductFromCart(product);
    }
  }
}


