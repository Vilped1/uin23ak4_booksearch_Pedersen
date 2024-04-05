import { useEffect, useState } from 'react'
// import './App.css'
import { Routes, Route, Navigate, useLocation } from 'react-router-dom'
import Layout from './components/Layout'
import Bookcard from './components/Bookcard'

function App() {

  const [books, setBooks] = useState([])
  const [query, setQuery] = useState(sessionStorage.getItem("booktittle"))
  const [loading, setLoading] = useState(false)
  const location = useLocation()

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
      getData()
      setLoading(true)
      if (location.pathname === "/") {
        setQuery("james+bond")
      }
      sessionStorage.setItem("booktittle", query.replace(/\s+/g, '+').toLowerCase())
    },[query, location])

  return (
    <>
     <Layout books={books} setQuery={setQuery} query={query} loading={loading} setLoading={setLoading}>
      <Routes>
        <Route index element={<Navigate replace to="/books" />} />
        <Route path=":slug" element={<Bookcard books={books} loading={loading}/>}/>
      </Routes>
    </Layout>
    </>
  )
}

export default App
