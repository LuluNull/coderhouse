import cartContext from "../context/cartContext"
import { useContext, useEffect, useState } from "react"
import ItemCart from "../ItemCart/ItemCart";
import { useNavigate } from 'react-router-dom'

const Cart = () => {
    const [price, setPrice] = useState(0)
    const { cart } = useContext(cartContext)
    const navigate = useNavigate()

    useEffect(() => {
        const price = cart.reduce((prev, next) => (prev?.item?.price ?? 0) * prev.quantity + (next?.item?.price ?? 0) * next.quantity, 0)
        setPrice(price)
    }, [])

    const goHome = () => {
        navigate('/')
    }

    return (
        <div >
            {cart.length === 0 ?
                <h1 onClick={goHome}>El carrito está vacío!</h1>
                :
                <div>
                    {cart.map((item, key) => <ItemCart key={key} {...item} />)}
                    <p>Precio total: ${price}</p>
                </div>
            }
        </div>
    )
}
export default Cart