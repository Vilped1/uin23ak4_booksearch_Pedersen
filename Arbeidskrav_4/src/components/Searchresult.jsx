import Bookcard from "./Bookcard"

export default function Searchresult({content, query}) {

    const getCharacter = async() => {
        fetch(`https://openlibrary.org/search.json?title=${query}`)
        .then(response => response.json())
        .then(data => setPost(data.docs))
        .catch(error => console.log(error))
    }

    useEffect(() => {
        getCharacter()
    }, [query])
    
    return (
        <Bookcard/>
    )
}