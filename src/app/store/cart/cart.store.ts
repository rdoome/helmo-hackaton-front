import { Injectable } from '@angular/core';
import { Product } from "../../../domain/Product";
import { CartStore } from "./cart.state";

@Injectable({ providedIn: 'root' })  // <-- Add the Injectable decorator
export class CartService {
  constructor(private sessionStore: CartStore) {}

  updateCart(updatedProduct: Product[]) {
    this.sessionStore.update({ products: updatedProduct });
  }

  addProductToCart(product: Product) {
    const currentProducts = this.sessionStore.getValue().products;
    this.sessionStore.update({ products: [...currentProducts, product], isOpen: true });
  }

  deleteProductFromCart(product: Product) {
    const currentProducts = this.sessionStore.getValue().products;
    const updatedProducts = currentProducts.filter((p) => p.id !== product.id);
    this.sessionStore.update({ products: updatedProducts });
  }

  clearCart() {
    this.sessionStore.update({ products: [] });
  }
}
