import styled from 'styled-components'

const ButtonDiv = styled.div ``

const ButtonArea = styled.button `
  width: 100%;
  height: 45px;
  border: none;
  border-radius: 2px;
  font-weight: bold;
  font-size: 1.1rem;
  background-color: #4693ef;
  color: #fff;
  margin: 20px 0 0 0;
`

function Button({text}) {
  return (
    <ButtonDiv>
      <ButtonArea type="submit">{text}</ButtonArea>
    </ButtonDiv>
  )
}

export default Button