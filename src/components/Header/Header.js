import './Header.css'
import Navbar from '../Navbar/Navbar'
import image from '../../resources/cute.svg'

const Header = () => {
    return (
        <div className='header'>
            <img src={ image } alt='logo' className='img'/>
            <Navbar/>
        </div>
    )
}

export default Header