import React, { useState } from "react";
import styled from "styled-components";
import { useCartStore } from "../store/CartStore";
import { FaTrash } from "react-icons/fa";

const Container = styled.div`
  width: 100%;
  min-height: 50vh;
  margin: auto;
  background-color: white;
  border-radius: 8px;
  padding: 16px;
  @media (max-width: 768px) {
    padding: 8px;
  }
`;

const CheckoutButton = styled.button`
  background-color: #1a73e8;
  color: white;
  padding: 12px 24px;
  border-radius: 25px;
  font-weight: bold;
  text-align: center;
  cursor: pointer;
  &:hover {
    background-color: #1669d1;
  }
  @media (max-width: 768px) {
    width: 100%;
    padding: 12px;
  }
`;


const ItemContainer = styled.div`
  display:flex;
  gap:16px;
  padding:16px;
  margin-bottom:16px;
    @media (max-width: 768px) {
    width: 100%;
    padding: 6px;
  }
`;

const Cart = () => {
  const [shippingCharge, setShippingCharge] = useState(24);
  const cart = useCartStore((state) => state.cart);
  const totalPrice = useCartStore((state) =>
    state.cart.reduce(
      (total, item) => total + item.product.price * item.quantity,
      0
    )
  );
  const increaseQuantity = useCartStore((state) => state.increaseQuantity);
  const decreaseQuantity = useCartStore((state) => state.decreaseQuantity);
  const removeFromCart = useCartStore((state) => state.removeFromCart);

  const calculateTotalPrice = () => {
    const total = parseFloat(totalPrice.toFixed(2)) + shippingCharge;
    return total.toFixed(2);
  };

  if (cart.length === 0)
    return (
      <Container>
        <h2 className="text-2xl font-bold mb-4">Shopping Cart</h2>
        <p>Add some items to your cart to see them here.</p>
      </Container>
    );

  return (
    <Container>
      <h2 className="text-2xl font-bold mb-4">Shopping Cart</h2>

      {cart.map(({ product, quantity }, idx) => (
        <ItemContainer key={idx}>
          <div className="bg-gray-200 rounded-2xl h-[100px] min-w-[100px] sm:w-44 sm:h-36 ">
            <img
              src={product.image}
              alt={product.title}
              className=" w-full h-full object-contain rounded-lg p-2 mix-blend-multiply"
            />
          </div>
          <div className="flex flex-col sm:flex-row w-full justify-between">
            <div className="flex-grow">
              <h3 className="text-[16px] sm:text-lg font-semibold">{product.title}</h3>
              <p className="text-xs sm:text-sm text-gray-500">{product.category}</p>
              <span className="text-xs sm:text-sm text-green-600">In Stock</span>
              <div className="flex gap-6 items-end sm:items-center mt-3 flex-col sm:flex-row ">
                <div className="flex justify-between items-center gap-4">
                  <button
                    className="text-xl text-black font-bold px-3 border bg-gray-200 rounded-md"
                    onClick={() => decreaseQuantity(product.id)}
                  >
                    -
                  </button>
                  <span>{quantity}</span>
                  <button
                    className="text-xl text-black font-bold px-3 border bg-gray-200 rounded-md"
                    onClick={() => increaseQuantity(product.id)}
                  >
                    +
                  </button>
                </div>
                <div className="flex items-center gap-2 text-sm bg-red-500 px-2 py-1 rounded-full text-white">
                  <FaTrash />
                  <button onClick={() => removeFromCart(product.id)}>
                    Remove
                  </button>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-end mt-3 sm:mt-0">
              <span className="font-bold">${product.price}</span>
            </div>
          </div>
        </ItemContainer>
      ))}

      <div className="flex justify-between p-4 border-t">
        <div>
          <p className="text-lg font-semibold">Subtotal:</p>
          <p className="text-lg font-semibold">Shipping:</p>
        </div>
        <div>
          <p className="text-lg">${totalPrice.toFixed(2)}</p>
          <p className="text-lg">${shippingCharge}</p>
        </div>
      </div>

      <div className="flex justify-between p-4">
        <p className="text-xl font-bold">Total:</p>
        <p className="text-xl font-bold">${calculateTotalPrice()}</p>
      </div>

      <div className="flex justify-end mt-4">
        <CheckoutButton>Proceed to Checkout</CheckoutButton>
      </div>
    </Container>
  );
};

export default Cart;
