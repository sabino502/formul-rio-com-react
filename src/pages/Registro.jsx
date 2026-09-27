import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react'
import Input from '../components/Input.jsx'
import Button from '../components/Button.jsx'
import Title from '../components/Title.jsx'
import NavigateLink from '../components/Navigate.jsx'



function Registro() {

  const [ name, setName ] = useState("")
  const [ email, setEmail ] = useState("")
  const [ senha, setSenha ] = useState("")
  const [ registro, setRegistro ] = useState([])

  function cadastrar(e) {
    e.preventDefault()
        if(name && email && senha) {

          let novoRegistro = [...registro, {name: name.trim(), email: email.trim(), senha: senha.trim()}]

          setRegistro(novoRegistro)

          localStorage.setItem("registro", JSON.stringify(novoRegistro))

          setName("")
          setEmail("")
          setSenha("")

          alert("Usuario " + name + " cadastrado com sucesso")
          
        } else {
          alert("campos obrigatorios não preenchidos")
        }
  }
  
  
  
  return (
    <div>
      <form onSubmit={cadastrar}>
        <Title text="Cadastro" />
        
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

       <Button text="Cadastrar" />

       <NavigateLink text="Já tem uma conta? " textReference="Logar" to="/login"/>
      </form>
    </div>

  )
}

export default Registro