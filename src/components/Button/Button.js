import './Button.css'
import {useNavigate} from 'react-router-dom'
import {Link} from 'react-router-dom'

function Button(props) {


  const navigate = useNavigate();

  const goCategories = () => {
  navigate (`/categories/${props.category}` )}

    return (
      <button className='button' id='hello' onClick={goCategories}>
        {props.buttonName}
      </button>
    );
  }
  
  export default Button;