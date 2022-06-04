import './ItemContainer.css'
import { getProducts } from '../AsyncMock'
import { useState, useEffect } from 'react'
import ItemList from '../../components/ItemList/ItemList';

const ItemContainer = (props) => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        getProducts().then(response => {
            setProducts(response)
        })
    }, [])

    const productsComponents = products.map(product => {
        return (
            <li key={product.id}>
                {product.name}
            </li>
        )
    })

    return (
        <nav className='itemcont'>
            <div>
                <h1 className='h1'> Hola {props.greeting} </h1>
                <ItemList products={products} />
            </div>
        </nav>
    )
}

export default ItemContainer