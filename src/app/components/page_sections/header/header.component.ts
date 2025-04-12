import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PRODUCT_CATEGORIES } from '../../../constants/product-item-type.constant';
import { StylistSuggestionsComponent } from '../../stylist-suggestions/stylist-suggestions.component';
import { CartStore } from '../../../store/cart/cart.state';
import { Product } from '../../../../domain/Product';
import { CardComponent } from "../../card/card.component";
import { CartQuery } from '../../../store/cart/cart.query';
import { Subscription } from 'rxjs';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { CartService } from '../../../store/cart/cart.store';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';



export interface DropdownItem {
  label: string;
  gender: string;
  type: string;
}

export interface DropdownGroup {
  title: string;
  items: DropdownItem[];
}

@Component({
  selector: 'app-header',
  imports: [CommonModule, RouterModule, CardComponent, FontAwesomeModule, StylistSuggestionsComponent],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
  dropdowns: DropdownGroup[];
  private cartQuery = inject(CartQuery);
  private cartStore = inject(CartStore);
  private cartService = inject(CartService);
  cart: Product[] = [];
  isCartOpen = false;
  private subscriptions = new Subscription();
  faTrash = faTrash;


  ngOnInit(): void {
    const productsSub = this.cartQuery.select(state => state.products)
      .subscribe(products => {
        this.cart = products;
      });

    const isOpenSub = this.cartQuery.select(state => state.isOpen)
      .subscribe(isOpen => {
        this.isCartOpen = isOpen;
      });

    this.subscriptions.add(productsSub);
    this.subscriptions.add(isOpenSub);
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  toggleCart(event: Event) {
    event.preventDefault(); // 👈 empêche le reload
    this.isCartOpen = !this.isCartOpen;
    this.cartStore.update({ isOpen: this.isCartOpen });
  }

  constructor() {
    this.dropdowns = [
      {
        title: 'Men',
        items: Object.entries(PRODUCT_CATEGORIES.men).map(([key, value]) => ({
          label: value.label,
          gender: 'men',
          type: key
        }))
      },
      {
        title: 'Women',
        items: Object.entries(PRODUCT_CATEGORIES.women).map(([key, value]) => ({
          label: value.label,
          gender: 'women',
          type: key
        }))
      }
    ];
  }

  clearCart(): void {
    this.cartService.clearCart();
  }
}
