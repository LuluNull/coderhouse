import './Header.css'
import Navbar from '../Navbar/Navbar'
import imageLogo from '../../resources/cute.svg'
import imageCart from '../../resources/shopping-cart.png'
import {useNavigate} from 'react-router-dom'
import { useContext } from 'react'
import cartContext from '../context/cartContext'



const Header = () => {

const navigate = useNavigate();

const goHome = () => {
    navigate ('/');}

const {getCartQuantity} = useContext(cartContext)

const totQuantity = getCartQuantity()


    return (
        <div className='header'>
            <div><img src={ imageLogo } alt='logo' className='img1' onClick={ goHome} /></div>
            <Navbar/>
            <div className='test2'><img src={ imageCart } alt='logo' className='img2'/> <div className='test' > <h1>{totQuantity}</h1></div></div>
        </div>
    )
}

export default Header