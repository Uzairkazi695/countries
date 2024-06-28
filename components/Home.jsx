import Header from './Header'
import SearchBar from './SearchBar'
import SelectMenu from './SelectMenu'
import CountriesContainer from './CountriesContainer'
import '../App.css'
import { useContext, useState } from 'react'
import { ThemeContext } from '../contexts/ThemeContext'


export default function Home() {
  const [query,setQuery] = useState('')
  const [isDark] = useContext(ThemeContext)
  
  return (
    <>
      <main className={`${isDark && 'dark'} `}>
      <div className='search-filter-container'>
        <SearchBar setQuery={setQuery}/>
        <SelectMenu setQuery={setQuery}/>
      </div>
      <CountriesContainer query={query}/>
      </main>
    </>
  )
}
