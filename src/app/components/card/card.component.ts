import {Component, inject, input, Input} from '@angular/core';
import { faCartPlus, faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatTooltipModule } from '@angular/material/tooltip';
import { CartService } from '../../store/cart/cart.store';
import { CommonModule } from '@angular/common';
import { PRODUCTS } from '../../constants/data';
import {EventBusService} from '../../services/eventBus.service';


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
  products = PRODUCTS;

  constructor(private eventBus: EventBusService) {}

  faCartPlus = faCartPlus;
  faCircleXMark = faCircleXmark;

  addToCart() {
    const product = this.products.find(product => product.id === this.id());
    if (product) {
      this.cartService.addProductToCart(product);
      this.eventBus.emit('NEW_MESSAGE', "I just added " + product.name + " to my cart. Could you recommend an item that matches it?");
    }
  }

  removeFromCart(){
    const product = this.products.find(product => product.id === this.id());
    if (product) {
      this.cartService.deleteProductFromCart(product);
    }
  }
}


