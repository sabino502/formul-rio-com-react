import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react'
import Input from '../components/Input.jsx'
import Button from '../components/Button.jsx'
import Title from '../components/Title.jsx'
import NavigateLink from '../components/Navigate.jsx'

function Login() {

  const [ name, setName ] = useState("")
  const [ email, setEmail ] = useState("")
  const [ senha, setSenha ] = useState("")
  const [ cadastros, setCadastros ] = useState([])

  useEffect(() => {
    if(localStorage.getItem("registro")) {
      setCadastros(prevCadastros => JSON.parse(localStorage.getItem("registro")))
    } 
  }, [])
  
   return (
    <div>
      <form onSubmit={(e) => {
        e.preventDefault()

        cadastros.forEach((posicao) => {
          if(posicao.name === name && posicao.email === email && posicao.senha === senha ) {
            alert("SUCESSO AO TENTAR LOGAR")
          } 
        })
        
      }}>
        <Title text="Login" />
        
        <Input
         id="name"
         type="text"
         placeholder="digite seu nome"
         text="Nome"
         value={name}
         handleOnChange={(e) => setName(e.target.value)}
       />
        <Input
         id="email"
         type="email"
         placeholder="digite seu email"
         text="E-mail"
         value={email}
         handleOnChange={(e) => setEmail(e.target.value)}
       />
       <Input
         id="password"
         type="password"
         placeholder="digite sua senha"
         text="Senha"
         value={senha}
         handleOnChange={(e) => setSenha(e.target.value)}
       />

       <Button text="Logar" />

       <NavigateLink text="Não tem uma conta? " textReference="Cadastrar-se" to="/registro"/>
      </form>
    </div>
   )
}

export default Login


















