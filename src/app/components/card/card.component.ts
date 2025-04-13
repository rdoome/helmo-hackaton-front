import { Component, inject, input, OnInit } from '@angular/core';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatTooltipModule } from '@angular/material/tooltip';
import { CartService } from '../../store/cart/cart.store';
import { CommonModule } from '@angular/common';
import { PRODUCTS } from '../../constants/data';

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
  displayAddToCart = input<boolean>(true);
  title = input.required<string>();
  private cartService = inject(CartService);
  products = PRODUCTS;

  faCartPlus = faCartPlus;

  addToCart() {
    const product = this.products.find(product => product.id === this.id());
    if (product) {
      this.cartService.addProductToCart(product);
    }
  }
}


