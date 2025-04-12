import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PRODUCT_CATEGORIES } from '../../constants/product-item-type.constant';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../../components/card/card.component';
import {CARDIGAN_COLLECTION} from '../../constants/products/cardigan.constant';
import {getProductCollectionByType} from '../../factories/ProductFactory';
import {Product} from '../../../domain/Product';

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

  products = CARDIGAN_COLLECTION;

  protected PRODUCT_COLLECTION: Product[] = [];

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.gender = params['gender'];
      this.itemType = params['item'];

      if (this.gender && this.itemType) {
        const genderKey = this.gender as 'men' | 'women';
        const itemKey = this.itemType as keyof typeof PRODUCT_CATEGORIES[typeof genderKey];
        console.log(itemKey)
        this.PRODUCT_COLLECTION = getProductCollectionByType(itemKey)

        this.subtypes = this.subtypes = Object.entries(PRODUCT_CATEGORIES[genderKey])
          .map(([id, { label }]) => ({
            id,
            name: label
          }));
      }
    });
  }

  setActive(item: string, key: string): void {
    this.activeItem = item;
    this.PRODUCT_COLLECTION = getProductCollectionByType(key)
  }

  // protected readonly PRODUCT_COLLECTION = CARDIGAN_COLLECTION;
}
