import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PRODUCT_CATEGORIES } from '../../constants/product-item-type.constant';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-products',
  imports: [CommonModule],
  templateUrl: 'products.component.html',
  styleUrls: ['products.component.css'],
})
export class ProductsComponent implements OnInit {
  gender: string | null = null;
  itemType: string | null = null;
  subtypes: Array<{ id: string; name: string }> = [];
  activeItem: string = 'All'; // Par défaut, "All" est actif

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.gender = params['gender'];
      this.itemType = params['item'];

      if (this.gender && this.itemType) {
        const genderKey = this.gender as 'men' | 'women';
        const itemKey = this.itemType as keyof typeof PRODUCT_CATEGORIES[typeof genderKey];

        if (PRODUCT_CATEGORIES[genderKey] && PRODUCT_CATEGORIES[genderKey][itemKey]) {
          this.subtypes = PRODUCT_CATEGORIES[genderKey][itemKey].subtypes;
        } else {
          this.subtypes = [];
        }
      }
    });
  }

  setActive(item: string): void {
    this.activeItem = item;
  }
}
