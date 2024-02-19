import Button from "../Button/Button";
import FormText from "./FormText";
import Input from "./Input";

function Form() {
  return ( 
    <form>
        <Input type="text" placeholder={"exemplo@email.com"} />
        <Input type="password" placeholder={"Senha"} />
        <Input type="date" style={{color: 'rgba(255, 255, 255, 0.3)'}}/>

        <div className='input-container'>
          <Input type="text" placeholder={"Estado"} />
          <Input type="text" placeholder={"País"} />
        </div>
        <Button type={"submit"} title={"Entrar"}/>

        <FormText 
        firstText={"Já possui conta?"} 
        redText={"Clique aqui"}
        lastText={"para entrar"}/>
      </form>
   );
}

export default Form;