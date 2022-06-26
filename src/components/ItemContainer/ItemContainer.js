import './ItemContainer.css'
import { useState, useEffect } from 'react'
import ItemList from '../../components/ItemList/ItemList';
import { useParams } from 'react-router-dom'
import { getDocs, collection, query, where } from 'firebase/firestore';
import { db } from '../../services/firebase'

const ItemContainer = (props) => {
    const [products, setProducts] = useState([])

    const { categoryID } = useParams();

    useEffect(() => {

        const collectRef = categoryID ? (
            query(collection(db, 'products'), where('category', '==', categoryID))
        ) : (collection(db, 'products'))

        console.log('categoriaaa', categoryID)

        getDocs(collectRef).then(response => {
            console.log(response)
            const prodsFormatted = response.docs.map(doc => {
                return { id: doc.id, ...doc.data() }
            })
            setProducts(prodsFormatted)
        }).catch(error => {
            console.log(error)
        })

    }, [categoryID])

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