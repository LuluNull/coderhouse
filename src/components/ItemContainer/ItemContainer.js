import './ItemContainer.css'
import { getProducts, getProductsByCategory } from '../AsyncMock'
import { useState, useEffect } from 'react'
import ItemList from '../../components/ItemList/ItemList';
import { useParams } from 'react-router-dom'

const ItemContainer = (props) => {
    const [products, setProducts] = useState([])

    const params = useParams();

    useEffect(() => {
        if (params.category !== undefined) {
            getProductsByCategory(params.category).then(response => {
                setProducts(response)
            })
        } else {
            getProducts().then(response => {
                setProducts(response)
            })
        }
    }, [params.category])

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