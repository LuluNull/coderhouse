import './Button.css'

function Button(props) {
    return (
      <button className='button' id='hello'>
        {props.buttonName}
      </button>
    );
  }
  
  export default Button;