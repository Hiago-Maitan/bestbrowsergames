import './App.css'
import Form from './components/Form/Form';
import FormTitle from './components/Form/FormTitle';
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
      <FormTitle title={"Faça seu Cadastro"}/>
      <Form/>
    </div>
    </>
  )
}

export default App
