import { CartStore } from "./cart.state";

 
export class SessionService {
  constructor(private sessionStore: CartStore) {}

  updateUserName(updatedProduct: Product[]) {
    this.sessionStore.update({ products: updatedProduct });
  }  
}