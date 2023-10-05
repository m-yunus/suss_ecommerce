import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-hot-toast";

const initialState = {
  CartItems: localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [],
  cartTotalAmount: 0,
  cartTotalQty: 0,
};

const CartSlice = createSlice({
  name: "Cart",
  initialState,
  reducers: {
    setAddItemToCart: (state, action) => {
      const item = action.payload;
      console.log("Item added to cart:", item._id);

      const existingItemIndex = state.CartItems.findIndex(
        (cartItem) => cartItem._id === item._id
      );
console.log(existingItemIndex);
      if (existingItemIndex !== -1) {
        
        state.CartItems[existingItemIndex].count += 1;
        toast.success(`${action.payload.name } quantity increses`)
      } else {
   
        state.CartItems.push({ ...item, count: 1 });
        toast.success(`${action?.payload.name} add to cart`)
      }

   
      localStorage.setItem('cart', JSON.stringify(state.CartItems));

 
      console.log("Updated Cart Items:", state.CartItems);
    },
    setRemoveItem: (state, action) => {
      const removeItemId = action.payload.id;
      state.CartItems = state.CartItems.filter((item) => item.id !== removeItemId);
      localStorage.setItem('cart', JSON.stringify(state.CartItems));
      toast.success(`${action.payload.title} removed from cart`);
    },
    setIncreaseQty: (state, action) => {
      const itemIndex = state.CartItems.findIndex((item) => item._id === action.payload._id);
      if (itemIndex >= 0) {
        state.CartItems[itemIndex].count += 1;
        localStorage.setItem('cart', JSON.stringify(state.CartItems));
        toast.success(`Quantity increased for ${action.payload.title}`);
      }
    },
    setDecreaseQty: (state, action) => {
      const itemIndex = state.CartItems.findIndex((item) => item._id === action.payload._id);
      if (itemIndex >= 0 && state.CartItems[itemIndex].count > 1) {
        state.CartItems[itemIndex].count -= 1;
        localStorage.setItem('cart', JSON.stringify(state.CartItems));
        toast.success(`Quantity decreased for ${action.payload.title}`);
      }
    },
    setClearCartItems: (state) => {
      state.CartItems = [];
      localStorage.removeItem('cart');
      toast.success('Cart cleared');
    },
    setGetTotals: (state) => {
      state.cartTotalAmount = state.CartItems.reduce((total, item) => {
        return total + item.price || item?.vendordetails.offer_price * item.count;
      }, 0);
      state.cartTotalQty = state.CartItems.reduce((totalQty, item) => {
        return totalQty + item.count;
      }, 0);
    },
  },
});

export const {
  setAddItemToCart,
  setRemoveItem,
  setDecreaseQty,
  setIncreaseQty,
  setClearCartItems,
  setGetTotals,
} = CartSlice.actions;

export const selectCartItems = (state) => state.Cart.CartItems;
export const selectCartTotalAmount = (state) => state.Cart.cartTotalAmount;
export const selectCartTotalQty = (state) => state.Cart.cartTotalQty;

export default CartSlice.reducer;
