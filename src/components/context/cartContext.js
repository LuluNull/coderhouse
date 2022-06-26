import { useState, createContext } from 'react';

export const cartContext = createContext()

export const CartProvider = ({ children }) => {

    const [cart, setCart] = useState([])

    const addItem = (product) => {
        const newCart = cart.map(e => ({ ...e }))

        if (!isInCart(product)) {
            setCart([...newCart, product])
        }
    }

    const isInCart = (product) => {
        const item = cart.filter(e => e.item.id === product.item.id)

        return item.length > 0
    }

    const removeItem = (id) => {
        let newCart = cart.map(item => ({ ...item }))
        newCart.forEach(item => {
            if (item.item.id === id) {
                if (item.quantity > 1) {
                    item.quantity = item.quantity - 1
                }
                else {
                    newCart = newCart.filter(item => item.item.id !== id)
                }
            }
        })

        setCart([...newCart])
    }


    const getCartQuantity = () => {
        const quantities = cart.map(e => e.quantity)

        const count = quantities.reduce((prev, curr) => prev + curr, 0)

        return count
    }

    return (

        <cartContext.Provider value={{
            cart, addItem, removeItem, getCartQuantity
        }}>
            {children}
        </cartContext.Provider>
    )
}

export default cartContext