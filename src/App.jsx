import './App.css'
import FormUser from './components/Form/FormUser';
import FormTitle from './components/Form/FormTitle';
import FormGames from './components/Form/FormGames';
// maxtcastro@gmail.com
function App() {

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
      
       <FormGames/>
    </div>
    </>
  )
}

export default App
