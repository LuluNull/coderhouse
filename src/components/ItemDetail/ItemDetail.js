import './ItemDetail.css'

const ItemDetail = ({ id, name, image, price, stock, description }) => {
    return (
        <>
            <div className="itemDetail">
                <h1> {name}</h1>   
                <div className='cont1'><img src={image} alt={name} className='img0' /></div>   
                <h4> Price: {price}</h4>   
                <h4> Stock: {stock}</h4>   
                <h4> Description: {description}</h4>   

            </div>
        </>
    )
}

export default ItemDetail