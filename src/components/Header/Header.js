import './Header.css'
import Navbar from '../Navbar/Navbar'
import imageLogo from '../../resources/cute.svg'
import imageCart from '../../resources/shopping-cart.png'

const Header = () => {
    return (
        <div className='header'>
            <div><img src={ imageLogo } alt='logo' className='img1'/></div>
            <Navbar/>
            <div><img src={ imageCart } alt='logo' className='img2'/></div>
        </div>
    )
}

export default Header