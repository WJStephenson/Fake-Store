import { useState, createContext, useEffect } from "react";

//create context
export const CartContext = createContext();

export default function CartContextProvider(props) {
    const [cart, setCart] = useState([]);

    //get cart from session storage
    useEffect(
        () => {
            const storedCart = sessionStorage.getItem('cartList')
            if (storedCart) {
                setCart(JSON.parse(storedCart))
            }
        }, [])

    //save cart to session storage
    useEffect(
        () => {
            sessionStorage.setItem('cartList', JSON.stringify(cart))
        }, [cart])


    //create a function to add a product to state
    const addProduct = (productToAdd) => {
        let newCart = [...cart, productToAdd]
        setCart(newCart)
    }

    //create function to remove product
    const removeProduct = (productId) => {
        let newCart = (cart.filter(item => item.id != productId))
        setCart(newCart)
    }

    //pass the values through the contact provider
    return (
        <CartContext.Provider value={{ addProduct, cart, removeProduct, setCart }}>
            {props.children}
        </CartContext.Provider>
    );
}