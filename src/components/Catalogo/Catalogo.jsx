import Navbar from '../Navbar/index';
import Input from "../Form/Input.jsx"
import Button from "../Button/Button.jsx"
import Footer from '../Footer/index.jsx';

const Catalogo = () => {
  return (
    <div className='container-catalogo'>
      {/* Navbar */}
     <Navbar/>
     {/* Main */}
      <main>
        <section className="search">
          <form>
            <Input type={"text"} placeholder={"Procure um game"}/>
            <Button title={"Procurar"} type={"button"}/>
          </form>
        </section>
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
      </main>
      <Footer/>
    </div>
  );
};

export default Catalogo;