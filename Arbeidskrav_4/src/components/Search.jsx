import { useState } from "react"
import { Link } from 'react-router-dom'
import Searchresult from "./Searchresult"

export default function Search({content, setQuery, setCurrentId}) {

    console.log(content)
    const [search, setSearch] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        setQuery(search)
    }

    const handleChange = (event) => {
        setSearch(event.target.value)
        // <Searchresult/>
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
        </form>
        {/* <ul className='category-list'>
            {content.map(item =>
                <li key={item.key}><Link to={item.name} onClick={() => handleClick(item.id)}>{item.name}</Link></li>
            )}
        </ul> */}
        </>
    )
}