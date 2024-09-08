import {createContext,useContext,useState} from 'react';

const CartContext=createContext();        /*hook*/
export const CartProvider=({children})=>{
    const [cartItems,setCartItems]=useState([]);
    const addToCart=(item)=>{
        setCartItems([...cartItems,item]);   /*the add to cart function got the aruguments those arguments values sent to cartitems*/
    }
    const removeFromCart=(item)=>{
        setCartItems(cartItems.filter((apple)=>apple!==item))
    }
    return(
        <CartContext.Provider value={{cartItems,addToCart,removeFromCart}}>
            {children}
        </CartContext.Provider>
    )
}
export const useCart=()=>{
    return useContext(CartContext)
}
