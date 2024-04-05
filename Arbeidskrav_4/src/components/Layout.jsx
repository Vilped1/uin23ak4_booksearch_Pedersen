import Home from "./Home";
import Search from "./Search";

export default function Layout({ children, books, setQuery, query, loading, setLoading }) {
    return (
        <>
            <main>
                <Home />
                <Search books={books} setQuery={setQuery} query={query} loading={loading} setLoading={setLoading}/>
                {children}
            </main>
            <footer>Alt av innhold er hentet fra <a href="https://openlibrary.org/">Openlibrary.org</a></footer>
        </>
    )
}