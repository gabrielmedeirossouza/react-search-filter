import { StyledBar } from './styles'

const SearchBar = ({ input: keyword, onChange: setKeyword }) => {
  return (
    <StyledBar
     value={keyword}
     placeholder={"Search country"}
     onChange={(e) => setKeyword(e.target.value)}
    />
  )
}

export default SearchBar
