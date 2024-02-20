import Button from "../Button/Button";
import FormText from "../Form/FormText";
import Input from "../Form/Input";

function ModalForm(fechar) {
  return ( 
    <>
     <form>
      <Input type={"email"} placeholder={"E-mail"}/>
      <Input type={"password"} placeholder={"Senha"}/>

      <div className='input-container'>
          <Button type={"button"} title={"Cancelar"} width={160} onclick={fechar}/>
          <Button type={"submit"} title={"Entrar"} width={160}/>
      </div>

      <FormText firstText={"Não possui conta?"} redText={"Clique aqui"} 
      lastText={"para se cadastrar"}/>
     </form>
    </>
   );
}

export default ModalForm;