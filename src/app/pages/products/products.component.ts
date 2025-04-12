import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PRODUCT_CATEGORIES } from '../../constants/product-item-type.constant';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../../components/card/card.component';
import {CARDIGAN_COLLECTION} from '../../constants/products/cardigan.constant';

@Component({
  selector: 'app-products',
  imports: [CommonModule, CardComponent],
  templateUrl: 'products.component.html',
  styleUrls: ['products.component.css'],
})
export class ProductsComponent implements OnInit {
  gender: string | null = null;
  itemType: string | null = null;
  subtypes: Array<{ id: string; name: string }> = [];
  activeItem: string = 'All'; // Par défaut, "All" est actif

  constructor(private route: ActivatedRoute) {}


  products = [
    {
      imageUrl: 'images/card-item1.jpg',
      category: 'shoes',
      title: 'Sneakers',
    },
    {
      imageUrl: 'images/card-item2.jpg',
      category: 'clothes',
      title: 'T-shirt',
    },
    {
      imageUrl: 'images/card-item3.jpg',
      category: 'accessories',
      title: 'Watch',
    },
    {
      imageUrl: 'images/card-item4.jpg',
      category: 'clothes',
      title: 'Jeans',
    },
    {
      imageUrl: 'images/card-item5.jpg',
      category: 'shoes',
      title: 'Boots',
    },
    {
      imageUrl: 'images/card-item6.jpg',
      category: 'accessories',
      title: 'Sunglasses',
    },
    {
      imageUrl: 'images/card-item7.jpg',
      category: 'clothes',
      title: 'Jacket',
    }
  ];

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

  protected readonly CARDIGAN_COLLECTION = CARDIGAN_COLLECTION;
}
