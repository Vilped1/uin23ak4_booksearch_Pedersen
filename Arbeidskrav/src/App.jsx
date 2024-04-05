import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Routes, Route, useLocation, Navigate } from 'react-router-dom'
import './App.css'
import Layout from './components/Layout'
import FrontPage from './components/FrontPage'
import Search from './components/Search'

function App() {

  const [books, setBooks] = useState([])
  const [query, setQuery] = useState(sessionStorage.getItem("1booktittle"))
  const [currentId, setCurrentId] = useState("")
  const location = useLocation()
  const [loading, setLoading] = useState(false)


  const getBooks = async() => {
    try {
      const response = await fetch(`https://openlibrary.org/search.json?title=${query}`)
      const data = await response.json()
      setBooks(data.docs)
    } catch {
      console.error("Errorrrrrr")
    }
  }

  useEffect(() => {
      getBooks()
      // if (location.pathname === "/") {
      //   setQuery("james+bond")
      // }
      sessionStorage.setItem("1booktittle", query.replace(/\s+/g, '+').toLowerCase())
      setLoading(true)
    },[query, location])

  console.log("APP", books)

  return (
    <>
     <Layout books={books} setQuery={setQuery} query={query} loading={loading} setLoading={setLoading}>
       <Routes>
         <Route index element={<Navigate replace to="books" />} />
         <Route path=":slug" element={<Search books={books} setQuery={setQuery} query={query} loading={loading} setLoading={setLoading}/>}>
           {/* <Route path=":slug" element={<Bookcard content={content} setCurrentId={setCurrentId} loading={loading}/>}/> */}

         </Route>
           {/* <Route path=':slug' element={<Searchresult content={content} query={query}/>} /> */}
           {/* <Route
             path={`/${query.replace(/\s+/g, '-')[0].toLowerCase()}`}
             element={<Searchresult content={content} query={query} setQuery={setQuery} />}/> */}
       </Routes>
     </Layout>

    {/* <Layout>
      <Search setQuery={setQuery} query={query}/>
      {/* <Routes>
        <Route index element={<FrontPage />}>
          <Route />
          <Route path=':slug' element={<} />
        </Route>
      </Routes> 
    </Layout> */}
    </>
  )
}

export default App

