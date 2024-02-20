import FormTitle from "./FormTitle";
import Input from "./Input";
import Button from "../Button/Button";

function FormGames() {
  return ( 
  <>
    <FormTitle title={"Cadastrar games"}/>
    <form>
        <Input type="text" placeholder={"nome do game"} />

        <div className='input-container'>
          <Input type="text" placeholder={"categoria"} />
          <Input type="text" placeholder={"url do game"} />
        </div>

        <Input type="password" placeholder={"url imagem do game"} />

        <textarea name="description" id="description" 
        cols="50" rows="10" placeholder="descrição (max 200 caracteres)"/>

        <Button type={"submit"} title={"Cadastrar"}/>
      </form>
    </>
   );
}

export default FormGames;