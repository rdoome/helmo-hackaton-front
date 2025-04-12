import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PRODUCT_CATEGORIES } from '../../../constants/product-item-type.constant';
import {StylistSuggestionsComponent} from '../../stylist-suggestions/stylist-suggestions.component';


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
  imports: [CommonModule, RouterModule, StylistSuggestionsComponent],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  dropdowns: DropdownGroup[];

  isCartOpen = false;

  toggleCart(event: Event) {
    event.preventDefault(); // 👈 empêche le reload
    this.isCartOpen = !this.isCartOpen;
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
}
