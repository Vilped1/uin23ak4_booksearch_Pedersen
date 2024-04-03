import { useEffect, useState } from "react"
import { Link } from 'react-router-dom'
import Searchresult from "./Searchresult"

export default function Search({ content, setQuery, setCurrentId }) {

    console.log(content)
    const [search, setSearch] = useState("")
    const [searchError, setSearchError] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        if (search.length <= 2) {
            setSearchError(true)
        } else {
            setSearchError(false)
            setQuery(search)
        }
    }

    const handleChange = (event) => {
        setSearch(event.target.value)
    }

    // const handleClick = (id) => {
    //     setCurrentId(id)
    //     localStorage.setItem("BokID", id)
    // }

    console.log("S", content)

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label htmlFor="search">Søk etter tittel: </label>
                <input type="text" id="search" placeholder="James Bond..." onChange={handleChange} />
                <input type="submit" value="Søk" />
                {searchError && <p id="error">Skriv minimum 3 karakterer for å kunne søke</p>}
            </form>
        </>
    )
}