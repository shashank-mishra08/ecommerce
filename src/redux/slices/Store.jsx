import { configureStore } from "@reduxjs/toolkit";
import { cartSlice } from "./cartSlice";


export const store = configureStore({
    // iske andaar input me object aata hai, and iske andar ham likhte hain reducer -> fir reducer ke andar object banate ho jahan pe saare slices list krte ho
    // yahan key ke andar slice ka naam aata hai and value ke andar jo v slice ka naam hai 
    // ab jao main.jsx ke andar aur provider ka use karo import karo, store={store} v import krna
    reducer:{
        cart: cartSlice.reducer
    }
})