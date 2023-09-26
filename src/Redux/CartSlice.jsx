import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-hot-toast";

const initialState={
    CartItems: localStorage.getItem("Cartlist")
    ? JSON.parse(localStorage.getItem("Cartlist"))
    : [],
  CartListTotalQty: 0,
}
const CartSlice=createSlice({
    name:"Cart",
    initialState,
    reducers:{
        setAddItemtoCart:(state,action)=>{
            const itemIndex = state.CartItems.findIndex(
                (items) => items.id === action.payload.id
              );
              console.log(itemIndex);
              if (itemIndex >= 0) {
                state.CartItems[itemIndex].cartQuantity += 1;
                toast.success(`Item QTY increases`);
              } else {
                const temp = { ...action.payload, cartQuantity: 1 };
                state.CartItems.push(temp);
                toast.success(`${action.payload.title} added to cart`);
              }
        console.log(initialState.CartItems);
              localStorage.setItem("Cartlist", JSON.stringify(state.CartItems));
            },
            setRemoveItem:(state,action)=>{
              const removeItem=state.CartItems.filter((items)=> items.id !== action.payload.id);
              state.CartItems=removeItem
              localStorage.setItem("Cartlist",JSON.stringify(state.CartItems))
              toast.success(`${action.payload.title} Removed From Cart`)
            }
        
    }
})


export const selectCartitems=(state)=>state.Cart.CartItems;

export const selectTotalQty=(state)=>state.Cart.CartListTotalQty;

export const {setAddItemtoCart,setRemoveItem}=CartSlice.actions;

export default CartSlice.reducer