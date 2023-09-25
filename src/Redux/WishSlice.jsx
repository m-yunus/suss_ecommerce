import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-hot-toast";

const initialState = {
  WishState: false,
  WishItems: localStorage.getItem("Wishlist")
    ? JSON.parse(localStorage.getItem("Wishlist"))
    : [],
  WishListTotalQty: 0,
};

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    setAddItemtoWishlist: (state, action) => {
      const temp = { ...action.payload, WishListTotalQty: 1 };
      state.WishItems.push(temp);
      toast.success(`${action.payload.title} added to wishlist`);
      localStorage.setItem("Wishlist", JSON.stringify(state.WishItems));
    },
    removedFromWishlist:(state,action)=>{
        const productIdToRemove = action.payload.id;
        const indexToRemove = state.WishItems.findIndex(
            (item) => item.id === productIdToRemove
          );
            if (indexToRemove !== -1){
                state.WishItems.splice(indexToRemove,1)
                localStorage.setItem("Wishlist", JSON.stringify(state.WishItems));
                toast.error(`${action.payload.title} removed from wishlist`);
            }
    }
  },
});

export const { setAddItemtoWishlist,removedFromWishlist } = wishlistSlice.actions;
export default wishlistSlice.reducer;
