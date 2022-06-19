import { useState, useContext } from 'react'
import './ItemDetail.css'
import cartContext from '../context/cartContext'
import { Link } from 'react-router-dom'


const Counter = ({ onAdd, stock, initial = 0 }) => {

    const [count, setCount] = useState(initial)

    const increment = () => {
        setCount(count + 1)
    }

    const decrement = () => {
        if (count > 0) setCount(count - 1)
    }

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={decrement}> <h4>-</h4> </button>
            <button onClick={increment}> <h4>+</h4> </button>
            <button onClick={() => onAdd(count)}>  <h4>Add to cart</h4></button>
        </div>
    )
}

const ItemDetail = ({ id, name, image, price, stock, description }) => {
    const [quantityAdded, setQuantityAdded] = useState(0)
    
    const { addItem } = useContext(cartContext)


    const handleOnAdd = (quantity) => {
        addItem({ item: { id, name, price }, quantity: quantity })
        setQuantityAdded(quantity)

    }

    return (

        <div className="itemDetail">
            <h1> {name}</h1>
            <div className='cont1'><img src={image} alt={name} className='img0' /></div>
            <h4> Price: {price}</h4>
            <h4> Stock: {stock}</h4>
            <h4> Description: {description}</h4>
            {
                quantityAdded === 0 
                ? <Counter onAdd={handleOnAdd} />
                : <Link to='/cart'> Checkout </Link>
            }
            

        </div>
    )
}

export default ItemDetail