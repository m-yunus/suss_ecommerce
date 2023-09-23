import { configureStore } from "@reduxjs/toolkit";
import WishSlice from "./WishSlice"

const Store=configureStore({
    reducer:{
        Wishlist:WishSlice,
    }
})

export default Store