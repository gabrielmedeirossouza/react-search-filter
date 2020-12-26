import { StyledTitle } from './styles'

const Title = ({ children, uppercase }) => {
  return (
    <StyledTitle
      uppercase={uppercase}
    >
      { children }
    </StyledTitle>
  )
}

export default Title
