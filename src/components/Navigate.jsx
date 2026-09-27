import styled from 'styled-components'
import { Link } from 'react-router-dom'

const NavigateArea = styled.div `
  display: flex;
  justify-content: center;
`
const NavigateText = styled.p `
  font-size: .85rem;
  margin-bottom: 10px;
`

function NavigateLink({text, textReference, to}) {
  return (
    <NavigateArea>
      <NavigateText>
        {text}
        <Link to={to}>
          {textReference}
        </Link>
      </NavigateText>
    </NavigateArea>
  )
}

export default NavigateLink