import './Item.css'
import {Link} from 'react-router-dom'

const Item = ({id, name, image}) => {
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