import { configureStore } from "@reduxjs/toolkit";
import WishSlice from "./WishSlice"
import CartSlice from "./CartSlice";

const Store=configureStore({
    reducer:{
        Wishlist:WishSlice,
        Cart:CartSlice
    }
})

export default Store