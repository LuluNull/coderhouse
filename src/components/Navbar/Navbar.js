import './Navbar.css'
import Button from '../Button/Button'

const Navbar = () => {
    return (
            
        <nav className='navbar'>
            <Button buttonName='New In'/>
            <Button buttonName='Ropa'/>
            <Button buttonName='Accesorios'/>
            <Button buttonName='Make up'/>
        </nav>
    )
}

export default Navbar