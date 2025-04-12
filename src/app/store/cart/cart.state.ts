import { Store, StoreConfig } from '@datorama/akita';

export interface CartState {
   products: Product[];
}

export function createInitialState(): CartState {
  return {
    products: [],
  };
}


@StoreConfig({ name: 'cartSession' })
export class CartStore extends Store<CartState> {
  constructor() {
    super(createInitialState());
  }
}