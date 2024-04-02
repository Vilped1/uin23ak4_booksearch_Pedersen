import { useEffect, useState } from 'react'
// import './App.css'
import { Routes, Route, Navigate, useLocation } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './components/Home'
import Search from './components/Search'
import Bookcard from './components/Bookcard'
import Searchresult from './components/Searchresult'

function App() {

  const [content, setContent] = useState([])
  const [query, setQuery] = useState(sessionStorage.getItem("booktittle") || "james+bond")
  const [currentId, setCurrentId] = useState("")
  const location = useLocation()

  // https://openlibrary.org/search.json?title=james+bond+original+series
  // https://openlibrary.org/search.json?title=${query}
  const getData = async() => {
    try {
      const response = await fetch(`https://openlibrary.org/search.json?title=${query}`)
      const data = await response.json()
      setContent(data.docs)
    } catch {
      console.error("Errorrr")
    }
  }

  useEffect(()=>{
      getData()
      // setCurrentId(localStorage.getItem("karakterID"))
      if (location.pathname === "/") {
        setQuery("james+bond")
      }
      sessionStorage.setItem("booktittle", query.replace(/\s+/g, '+').toLowerCase())
    },[query, location])

  // useEffect(() => {
  // }, [query])

    // https://openlibrary.org/search.json?q=james+bond&fields=key,title,author_name,editions

  return (
    <>
     <Layout content={content} setQuery={setQuery} query={query}>
      <Routes>
        <Route index element={<Navigate replace to="/james+bond" />} />
        <Route path=":slug" element={<Bookcard content={content} setCurrentId={setCurrentId} />}>
          </Route>
          {/* <Route path=':slug' element={<Searchresult content={content} query={query}/>} /> */}
          {/* <Route
            path={`/${query.replace(/\s+/g, '-')[0].toLowerCase()}`}
            element={<Searchresult content={content} query={query} setQuery={setQuery} />}/> */}
      </Routes>
    </Layout>
    </>
  )
}

export default App
