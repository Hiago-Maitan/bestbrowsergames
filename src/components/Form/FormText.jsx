function FormText({firstText, redText, lastText}) {
  return ( 
    <div className='form-text'>
          <h5>{firstText}</h5>
          <h5><span>{redText}</span> {lastText}</h5>
        </div>
   );
}

export default FormText;