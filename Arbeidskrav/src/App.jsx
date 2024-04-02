import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Layout from './components/Layout'
import FrontPage from './components/FrontPage'
import Search from './components/Search'

function App() {

  const [books, setBooks] = useState([])

  const getBooks = async() => {
    try {
      const response = await fetch(`https://openlibrary.org/search.json?title=james+bond+original+series`)
      const data = await response.json()
      setBooks(data.docs)
    } catch {
      console.error("Errorrrrrr")
    }
  }

  useEffect(() => {
    getBooks()
  },[])

  console.log("APP", books)

  return (
    <>
    {/* <Layout>
      <Routes>
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
