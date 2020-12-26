import { StyledCountryName } from './styles'

const CountryList = ({countryList=[]}) => {
  return (
    <>
    {
      countryList.map((data, key) => {
        if (data) {
          return (
            <div key={key}>
              <StyledCountryName>
                {data.name}
              </StyledCountryName>
	          </div>
    	    )
    	  }
    	  return null
      })
    }
    </>
  )
}

export default CountryList
