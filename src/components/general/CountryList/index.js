const CountryList = ({countryList=[]}) => {
  return (
    <>
    { countryList.map(data => {
        if (data) {
          return (
            <div key={data.name}>
              <h1>{data.name}</h1>
	    </div>
    	   )
    	 }
    	 return null
    }) }
    </>
  )
}

export default CountryList
