
import styled from 'styled-components'

const InputArea = styled.input `
  width: 100%;
  height: 45px;
  border: none;
  padding-left: 5px;
  border-bottom: 2px solid gray;
`

const TextInput = styled.label `
  display: flex;
  flex-direction: column;
`
const InputComponent = styled.div `
  margin-bottom: 10px;
`


function Input({id, type, placeholder, value, text, handleOnChange}) {
  return (
     <InputComponent>
       <TextInput htmlFor={id}>{text}</TextInput>
       <InputArea 
         id={id}
         type={type}
         placeholder={placeholder}
         value={value}
         onChange={handleOnChange}
       />
     </InputComponent>
  )
}

export default Input