import './App.css'

import FormUser from './components/Form/FormUser';
import FormTitle from './components/Form/FormTitle';
import FormGames from './components/Form/FormGames';

import Modal from 'react-modal';
import ModalForm from './components/ModalForm';

import { useState } from 'react';
import Button from './components/Button/Button';
import Input from './components/Form/Input';
import FormText from './components/Form/FormText';

function App() {
  const [modalIsOpen, setIsOpen] = useState(false)

  function openModal(){
    setIsOpen(true);
  }

  function closeModal(){
    setIsOpen(false);
  }

  return (
    <>
    <header>
        <nav>
          <ul>
            <li>Logo</li>
            <li>Games</li>
            <li>Login</li>
          </ul>
        </nav>
      </header>
    <div className='container'>
      {/* <FormTitle title={"Faça seu Cadastro"}/> */}
      {/* <FormUser/> */}

      <button onClick={openModal}>+</button>
      <div className="modal-container">
       <Modal
       isOpen={modalIsOpen}
       contentLabel={"Example Modal"}
       overlayClassName={"modal-overlay"}
       className="modal-content"
      >
      <div className='modal-title'>
        <h4>Faça <span>Login</span></h4>
        <h4>ou <span>Cadastre-se</span></h4>
      </div>
      <div className="line"></div>
      <form>
      <Input type={"email"} placeholder={"E-mail"}/>
      <Input type={"password"} placeholder={"Senha"}/>

      <div className='input-container'>
          <Button type={"button"} title={"Cancelar"} width={160} onclick={closeModal}/>
          <Button type={"submit"} title={"Entrar"} width={160}/>
      </div>

      <FormText firstText={"Não possui conta?"} redText={"Clique aqui"} 
      lastText={"para se cadastrar"}/>
     </form>
    </Modal>
  </div>

       <FormGames/>
    </div>
    </>
  )
}

export default App
