import styled from 'styled-components'

const TitleArea = styled.h2 `
  display: flex;
  justify-content: center;
  align-items: center;
  margin: -20px -20px 20px -20px;
  background-color: #4693ef;
  height: 50px;
  color: #fff;
  border-radius: 6px 6px 0 0;
`

function Title({text}) {
  return (
      <TitleArea>{text}</TitleArea>
  )
}

export default Title