import { useState, useEffect } from "react"
import { getProductByID } from "../AsyncMock"
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from 'react-router-dom'
import './ItemDetailContainer.css'

const ItemDetailContainer = () => {

    const [product, setProduct] = useState()

    const params = useParams()

    useEffect(() => {
        getProductByID(params.productID).then(response => {
            setProduct(response)
        })
    }, [])

    return (
        <div className='itemDetailCont'>
            <h1> Product Details </h1>
            <ItemDetail {...product} />
        </div>
    )

}
export default ItemDetailContainer