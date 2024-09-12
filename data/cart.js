import { updateCartQuantity } from "../scripts/amazon.js";

export const cart = [
  {
  productId: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
  quantity: 2
  },
  {
  productId: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
  quantity: 1
  }
];
updateCartQuantity();

export function addToCart(productId, quantity) {
  let matchingProduct;
    cart.forEach((cartItem) => {
      if(productId === cartItem.productId)
        matchingProduct = cartItem;
    });

    if(matchingProduct) {
      matchingProduct.quantity += quantity;
    } else {
      cart.push({
        productId,
        quantity
      });
    }
}
