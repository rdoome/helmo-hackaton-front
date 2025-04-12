import { Injectable } from '@angular/core';
import { Store, StoreConfig } from '@datorama/akita';
import { Product } from '../../../domain/Product';

export interface CartState {
  products: Product[];
  isOpen: boolean;
}

export function createInitialState(): CartState {
  return {
    products: [],
    isOpen: false
  };
}

@Injectable({ providedIn: 'root' })  // <-- Add the Injectable decorator
@StoreConfig({ name: 'cartSession' })
export class CartStore extends Store<CartState> {
  constructor() {
    super(createInitialState());
  }
}
