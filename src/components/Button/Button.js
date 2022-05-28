import './Button.css'

function Button(props) {
    return (
      <button className='button' id='hello' onClick={ () => console.log ('Clicked!')}>
        {props.buttonName}
      </button>
    );
  }
  
  export default Button;