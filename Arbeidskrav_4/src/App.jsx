import { useEffect, useState } from 'react'
// Fjernet nedlastet css, for å ta i bruk egen
// import './App.css'
import { Routes, Route, Navigate, useLocation } from 'react-router-dom'
import Layout from './components/Layout'
import Bookcard from './components/Bookcard'
import ReadMore from './components/ReadMore'

// Har skjønt minstekravet med komponentet Searchresult, men siden appen er så liten har jeg funnet en annen løsning som funker like bra

function App() {


  const [books, setBooks] = useState([])
  // Sier at det som står i sessionStorage skal hentes
  const [query, setQuery] = useState(sessionStorage.getItem("booktittle"))
  const [loading, setLoading] = useState(true)
  const location = useLocation()

  // Variabel for å hente ut info fra API-et
  const getData = async() => {
    try {
      const response = await fetch(`https://openlibrary.org/search.json?title=${query}`)
      const data = await response.json()
      setBooks(data.docs)
    } catch {
      console.error("Errorrr")
    }
  }

  useEffect(()=>{
      // Kjører funksjonen som fetcher det vi trenger fra API-et
      getData()
      // Setter Loading til true når siden laster inn, for å ikke få opp "ingen resultater" siden arrayen vil være tom i noen sekunder
      setLoading(true)
      // Gjør slik at siden starter på james bond og at hvis du fjerner det som er etter Localhost så vil den tilbake til james bond
      if (location.pathname === "/") {
        setQuery("james+bond")
      }
      // Legger det som blir søkt på inn i sessionStorage
      sessionStorage.setItem("booktittle", query.replace(/\s+/g, '+').toLowerCase())
    },[query, location])

  return (
    <>
     <Layout books={books} setQuery={setQuery} query={query} loading={loading} setLoading={setLoading}>
      <Routes>
        <Route index element={<Navigate replace to="/books" />} />
        <Route path='books' element={<Bookcard books={books} loading={loading}/>}/>
        {/* <Route path='/readmore' element={<ReadMore />} /> */}
        <Route path='books/:key' element={<ReadMore books={books} />}/>
          {/* <ReadMore/>
        </Route> */}
      </Routes>
    </Layout>
    </>
  )
}

export default App
