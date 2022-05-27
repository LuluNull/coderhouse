import './ItemContainer.css'

const ItemContainer = (props) => {
    return (
        <nav className='itemcont'>
            <div> 
                <h1 className='h1'> Hola {props.greeting} </h1>
            </div>
        </nav>
    )
}

export default ItemContainer