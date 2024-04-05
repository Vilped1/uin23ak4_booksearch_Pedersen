import { useEffect, useState } from "react"

export default function Search({ books, setQuery, setCurrentId, loading, setLoading }) {

    const [search, setSearch] = useState("")
    const [searchError, setSearchError] = useState(false)


    const handleSubmit = (e) => {
        e.preventDefault()
        if (search.length <= 2) {
            setSearchError(true)
        } else {
            setSearchError(false)
            setQuery(search)
            setLoading(true)
        }
    }

    const handleChange = (event) => {
        setSearch(event.target.value)
    }

    useEffect(() => {
        setLoading(false)
        if (books.length > 0)
            setLoading(false)
    }, [books])

    console.log("S", books)

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label htmlFor="search">Søk etter tittel: </label>
                <input type="text" id="search" placeholder="James Bond..." onChange={handleChange} />
                <input type="submit" value="Søk" />
                {searchError && <p id="error">Skriv minimum 3 karakterer for å kunne søke</p>}
            </form>
            {loading && <p>Laster...</p> }
            {books.length === 0 && !loading && <p>Ingen resultater</p>}
        </>
    )
}