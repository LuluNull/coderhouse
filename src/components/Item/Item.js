import './Item.css'

const Item = ({name, image}) => {
    return(
        <div className='item'>
            <div className='cont'><img src={image} alt={name} className='img' /></div>
            {name}
        </div>
    )
}
export default Item