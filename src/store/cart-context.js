import React from "react";

const CartContext = React.createContext({
    cartItem: [],
    totalAmount: 0,
    addCartItem: (item)=>{},
    removeCartItem: (id)=>{}
});

export default CartContext;