function Button({type, title, width, onclick}) {
  return ( 
    <button type={type} style={{width: width}} onClick={onclick}>{title}</button>
   );
}

export default Button;