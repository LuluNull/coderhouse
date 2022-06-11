import './Navbar.css'
import Button from '../Button/Button'

const Navbar = () => {
    return (
            
        <nav className='navbar'>
            <Button buttonName='New In' category = 'newin'/>
            <Button buttonName='Accesorios' category = 'misc'/>
            <Button buttonName='Make up' category = 'makeup'/>
        </nav>
    )
}

export default Navbar