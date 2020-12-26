import styled, { css } from 'styled-components'
import PropTypes from 'prop-types'

export const StyledTitle = styled.h1`
  font-family: Roboto, sans-serif;
  font-size: 2.2rem;
  color: #1D1A31;

  ${({ uppercase }) => uppercase && css`
    text-transform: uppercase;
  `}
`
StyledTitle.propTypes = {
  uppercase: PropTypes.bool
}
