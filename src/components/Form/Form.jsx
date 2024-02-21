import Button from "../Button/Button";
import Navbar from "../Navbar";
import FormText from "./FormText";
import Input from "./Input";
import FormTitle from "./FormTitle";
import Footer from "../Footer";

function Form() {
  return ( 
    <>
    <Navbar/>
    <div className="container">
      <FormTitle title={"Faça seu cadastro"}/>
    <form>
        <Input type="text" placeholder={"exemplo@email.com"} />
        <Input type="password" placeholder={"Senha"} />
        <Input type="date" style={{color: 'rgba(255, 255, 255, 0.3)'}}/>

        <div className='input-container'>
          <Input type="text" placeholder={"Estado"} />
          <Input type="text" placeholder={"País"} />
        </div>
        <Button type={"submit"} title={"Entrar"}/>
      </form>
      </div>
      <Footer/>
      </>
   );
}

export default Form;