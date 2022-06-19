import './Item.css'
import {Link} from 'react-router-dom'
import { useContext } from 'react'
import { context } from '../../App'

const Item = ({id, name, image}) => {

   // const context = useContext(context)
    return(
        <div className='item'>
            <div className='cont'><img src={image} alt={name} className='img' /></div>
            {name}
            <footer>
                <Link to ={`/detail/${id}`}> Ver detalle</Link>
            </footer>
        </div>
    )
}
export default Item