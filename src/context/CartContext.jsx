import { useState, createContext, useEffect } from "react";

//create context
export const CartContext = createContext();

export default function CartContextProvider(props) {
    const [cart, setCart] = useState([]);

    // //get theme from localstorage
    // useEffect(
    //     () => {
    //         const storedFavorites = localStorage.getItem('favoritesList')
    //         if (storedFavorites) {
    //             setFavorites(JSON.parse(storedFavorites))
    //         }
    //     }, [])

    // //save favorites to local storage
    // useEffect(
    //     () => {
    //         localStorage.setItem('favoritesList', JSON.stringify(favorites))
    //     }, [favorites])


    //create a function to add a character to state
    const addProduct = (productToAdd) => {
        let newCart = [...cart, productToAdd]
        setCart(newCart)
    }

    //create function to remove character
    const removeProduct = (productId) => {
        let newCart = (cart.filter(item => item.id != productId))
        setCart(newCart)
    }

    return (
        <CartContext.Provider value={{ addProduct, cart, removeProduct }}>
            {props.children}
        </CartContext.Provider>
    );
}