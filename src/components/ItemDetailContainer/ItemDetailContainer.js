import { useState, useEffect } from "react"
import { getProductByID } from "../AsyncMock"
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from 'react-router-dom'
import './ItemDetailContainer.css'
import { db } from '../../services/firebase'
import { getDoc, doc } from "firebase/firestore"

const ItemDetailContainer = () => {

    const [product, setProduct] = useState()

    const params = useParams()

    useEffect(() => {
        const docRef = doc(db, 'products', params.productID)

        getDoc(docRef).then(doc => {
            const productFormatted = {id: doc.id, ...doc.data()}
            setProduct(productFormatted)
        }).catch(error => console.log(error))
        // getProductByID(params.productID).then(response => {
        //     setProduct(response)
        // })
    }, [params.productID])

    return (
        <div className='itemDetailCont'>
            <h1> Product Details </h1>
            <ItemDetail {...product} />
        </div>
    )

}
export default ItemDetailContainer