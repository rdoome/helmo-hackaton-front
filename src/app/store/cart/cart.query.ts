import { Injectable } from '@angular/core';
import { Query } from '@datorama/akita';
import { CartStore, CartState } from './cart.state';

@Injectable({ providedIn: 'root' })
export class CartQuery extends Query<CartState> {
  constructor(protected override store: CartStore) {
    super(store);
  }
}
