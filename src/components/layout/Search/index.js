import { useState, useEffect } from 'react'
import Title from '../../general/Title'
import SearchBar from '../../general/SearchBar'
import CountryList from '../../general/CountryList'

const SearchPage = () => {
  const [input, setInput] = useState('')
  const [countryListDefault, setCountryListDefault] = useState()
  const [countryList, setCountryList] = useState()

  const fetchData = async () => {
    return await fetch('https://restcountries.eu/rest/v2/all')
      .then(response => response.json())
      .then(data => {
        setCountryList(data)
        setCountryListDefault(data)
      })
  }

  const updateInput = async (input) => {
     const filtered = countryListDefault.filter(country => {
      return country.name.toLowerCase().includes(input.toLowerCase())
     })

     setInput(input)
     setCountryList(filtered)
  }

  useEffect(() => {
    fetchData()
  },[])

  return (
    <>
      <Title uppercase={true}>Country List</Title>
      <SearchBar
        input={input}
        onChange={updateInput}
      />
      <CountryList countryList={countryList}/>
    </>
  )
}

export default SearchPage
