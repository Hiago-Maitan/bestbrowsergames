import Navbar from '../Navbar/index'
import Button from '../Button/Button';
import Input from '../Form/Input';
import FormText from '../Form/FormText'
import Footer from '../Footer'

import Modal from 'react-modal';

import { useState } from 'react';

const HomePage = () => {
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal(){
    setIsOpen(true);
  }

  function closeModal(){
    setIsOpen(false);
  }

  return (
    <div className='container-catalogo'>

     {/* Modal */}
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
  {/* Fim do modal */}

       {/* Navbar */}
       <Navbar onclick={openModal}/>
      <main>
        <section className="content">
          <h1>BestBrowserGames</h1>
          <div className='community-title'>
            <h5>A melhor comunidade gamer</h5>
            <img src="/dado.png" alt="logo dado" id="community-title" />
          </div>
        </section>

        <h2>Mais populares</h2>
        <div className='cards'>
          <section className="popular-games">
            <article className="cardGame">
              <figure >
                <img src="/valorant.png" alt="" />
                <figcaption className="descricao">
                  <h3>Valorant</h3>
                  <h5>FPS</h5>
                  <h5>Valorant é um jogo eletrônico multijogador gratuito para jogar de tiro em primeira pessoa desenvolvido e publicado pela Riot Games.</h5>
                  <a href="#">Acessar site oficial</a>
                </figcaption>
              </figure>
            </article>
          </section>
          <section className="popular-games">
            <article className="cardGame">
              <figure >
                <img src="/wow.png" alt="" />
                <figcaption className="descricao">
                  <h3>World of Warcraft</h3>
                  <h5>MMORPG</h5>
                  <h5>World of Warcraft é um jogo on-line do gênero MMORPG, desenvolvido e distribuído pela produtora Blizzard Entertainment e lançado em 2004.</h5>
                  <a href="#">Acessar site oficial</a>
                </figcaption>
              </figure>
            </article>
          </section>
          <section className="popular-games">
            <article className="cardGame">
              <figure >
                <img src="/fifa.jpg" alt="" />
                <figcaption className="descricao">
                  <h3>Fifa 21</h3>
                  <h5>sports</h5>
                  <h5>FIFA 21 é um videogame de simulação de esportes desenvolvido e publicado pela Electronic Arts, tendo como estrela da capa o jogador Kylian Mbappé.</h5>
                  <a href="#">Acessar site oficial</a>
                </figcaption>
              </figure>
            </article>
          </section>

        </div>
        <section className='catalog'>
          <h4><a href={`/games`}>ver catalogo</a></h4>
        </section>
      </main>
      <Footer/>
    </div>
    
  );
};

export default HomePage;