
import { useEffect, useRef, useState } from 'react'
import './App.css'
import useFetch from './hooks/useFetch'
import getRandomNumber from './utils/getRandomNumber'
import LocationInfo from './components/LocationInfo'
import ResidentCard from './components/ResidentCard'

function App() {

  const [inputValue, setInputValue] = useState(getRandomNumber(126))


  const url = `https://rickandmortyapi.com/api/location/${inputValue || 'Hola'}`
  const [ location, getLocation, hasError ] = useFetch(url)

  useEffect(() => {
    getLocation()
  }, [inputValue])
  
  const inputSearch = useRef()

  const handleSubmit = e => {
    e.preventDefault()
    setInputValue(inputSearch.current.value.trim())
  }

  return (
    <div>
      <section className="banner">
      <img src="/238256.jpg" alt="" />
      </section>      
      <form onSubmit={handleSubmit}>
        <input ref={inputSearch} type="text" />
        <button>Search</button>
      </form>
      {
        hasError
        ? <h2>❌Hey you most provide an id from 1 to 126</h2>
        : (
        <>
          <LocationInfo
            location={location}
          />
          <div className='principal'>
            {
              location?.residents.map(url => (
                <ResidentCard 
                  key={url}
                  url={url}
                />
              ))
            }
          </div>
        </>
        )
      
}
    </div>
  )
}


export default App
