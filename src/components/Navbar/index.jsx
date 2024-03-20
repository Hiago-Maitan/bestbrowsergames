import {Link} from 'react-router-dom'

function Navar({onclick}) {
  return ( 
    <header>
        <div>
          <Link to={`/`}><img src="/BBG.png" alt="BBG Logo" className='imgLogo' /></Link>
        </div>
        <nav className='navItems'>
          <ul>
            <li>
              <img src="/games.png" alt="" id='gameImg' />
              <a href={`/games`}>GAMES</a>
            </li>
            <li>
              <img src="/usuario.png" alt="" id='loginImg' />
              <a href="#" onClick={onclick}>LOGIN</a>
            </li>
            <li>
            <img src="/carrinho.png" alt="" id='compraImg' />
              <a href={`/Carrinho`}>CARRINHO</a>
            </li>
          </ul>
        </nav>
      </header>
   );
}

export default Navar;