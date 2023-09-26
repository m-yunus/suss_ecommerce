import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-hot-toast";

const initialState={
    CartItems: localStorage.getItem("cart")
    ? JSON.parse(localStorage.getItem("cart"))
    : [],
  CartListTotalQty: 0,
  cartTotalamount:0
}
const CartSlice=createSlice({
    name:"Cart",
    initialState,
    reducers:{
      setAddItemToCart: (state, action) => {
        const itemIndex = state.CartItems.findIndex(
          (items) => items.id === action.payload.id
        );
        if (itemIndex >= 0) {
          state.CartItems[itemIndex].cartQuantity += 1;
          toast.success(`Item QTY increases`);
        } else {
          const temp = { ...action.payload, cartQuantity: 1 };
          state.CartItems.push(temp);
          toast.success(`${action.payload.title} added to cart`);
        }
  
        localStorage.setItem("cart", JSON.stringify(state.CartItems));
      },
      setRemoveItem:(state,action)=>{
        const removeItem=state.CartItems.filter((Items)=>Items.id !==action.payload.id)
        state.CartItems=removeItem
        localStorage.setItem("cart",JSON.stringify(state.CartItems))
        toast.success(`${action.payload.title} Removed From Cart`)
      },
      setIncreaseQty:(state,action)=>{
        const itemIndex = state.CartItems.findIndex(
          (items) => items.id === action.payload.id
        );
        if (itemIndex >= 0) {
          state.CartItems[itemIndex].cartQuantity += 1;
          toast.success(`Item QTY increased`);
        }
        localStorage.setItem("cart",JSON.stringify(state.CartItems))
          
      },
      setDecreaseQty:(state,action)=>{
        const itemIndex = state.CartItems.findIndex(
          (items) => items.id === action.payload.id
        );
        if (state.CartItems[itemIndex].cartQuantity > 1) {
          state.CartItems[itemIndex].cartQuantity -= 1;
          toast.success(`Item QTY decreased`);
        }
        localStorage.setItem("cart",JSON.stringify(state.CartItems))
  
      },
      setClearcartitems:(state,action)=>{
        state.CartItems=[]
        toast.success('Cart Cleared')
        localStorage.setItem("cart",JSON.stringify(state.CartItems))
      },
      setGetTotals:(state,action)=>{
        let {totalAmount,totalQty}=  state.CartItems.reduce((cartTotal,CartItems)=>{
            const {price,cartQuantity}=CartItems;
            const totalPrice=price * cartQuantity;
            cartTotal.totalAmount +=totalPrice
            cartTotal.totalQty +=cartQuantity
            return cartTotal
          },{
            totalAmount:0,
            totalQty:0,
          })
          state.cartTotalamount=totalAmount 
          state.cartTotalQntity=totalQty
      }
    },
})


export const selectCartitems=(state)=>state.Cart.CartItems;

export const selectTotalAmount = (state) => state.Cart.cartTotalamount;
export const selectTotalQty = (state) => state.Cart.CartListTotalQty;

export const {setAddItemToCart,setRemoveItem,setDecreaseQty,setIncreaseQty,setClearcartitems,setGetTotals}=CartSlice.actions;

export default CartSlice.reducer