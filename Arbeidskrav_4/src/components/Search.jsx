import { useEffect, useState } from "react"

// SearchError pluss Loading er modifisert kode fra Chat-gpt

export default function Search({ books, setQuery, setCurrentId, loading, setLoading }) {

    const [search, setSearch] = useState("")
    const [searchError, setSearchError] = useState(false)


    const handleSubmit = (e) => {
        e.preventDefault()
        // Test for å sjekke om brukeren har skrevet 3 eller mer for å kunne søke
        if (search.length <= 2) {
            // Gir feil meldig om at de må ha tre tegn eller fler
            setSearchError(true)
        } else {
            // Tar vekk nevnte feilmeldig nå det har skrevet fler enn 3
            setSearchError(false)
            // Sier att setQuery skal være det som står i search
            setQuery(search)
            // Setter Loading til true for å vise at siden laster etter at et søk er gjordt
            setLoading(true)
        }
    }

    // Setter search verdien til valuen som står i innput feltet
    const handleChange = (event) => {
        setSearch(event.target.value)
    }

    useEffect(() => {
        // Setter Loading til false slik når siden er lastet inn slik at det kan vise "ingen resultater" og at den ikke skal vises hvis arrayen er er lenger enn 0
        setLoading(false)
        if (books.length > 0) {
            setLoading(false)
        }
    }, [books])

    console.log("S", books)

    return (
        <>
            {/* Strukturen til søkefeltet */}
            <form onSubmit={handleSubmit}>
                <label htmlFor="search">Søk etter tittel: </label>
                <input type="text" id="search" placeholder="James Bond..." onChange={handleChange} />
                <input type="submit" value="Søk" />
                {/* Error meldingen for at man her for få tegn */}
                {searchError && <p id="error">Skriv minimum 3 karakterer for å kunne søke</p>}
            </form>

            {/* Dette er ved hjelp av Chat-gpt */}
            {/* Viser brukeren at siden laster etter at de har trykket søk */}
            {loading && <p>Laster...</p> }
            {/* Hvis lengden på arrayen er lik 0 vil det komme opp en melding om dette at søket ikke ga noen resultater og at loading ikke lenger skal vises */}
            {books.length === 0 && !loading && <p>Ingen resultater</p>}
        </>
    )
}