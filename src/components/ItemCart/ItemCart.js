import cartContext from "../context/cartContext"
import { useContext } from "react"

const ItemCart = ({ item, quantity }) => {
    const { name, price } = item
    const { removeItem } = useContext(cartContext)

    const remove = () => {
        removeItem(item.id)
    }

    return (
        <div>
            <p>{`Producto: ${name} | Cantidad: ${quantity} | Precio: ${price}`}       
            <button className='button' onClick={remove}>
                Remover
            </button>
            </p>
        </div>
    )
}
export default ItemCart