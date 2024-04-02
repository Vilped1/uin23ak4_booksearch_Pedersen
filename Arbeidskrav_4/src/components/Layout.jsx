import Home from "./Home";
import Search from "./Search";

export default function Layout({ children, content, setQuery, query }) {
    return (
        <>
            <main>
                <Home />
                <Search content={content} setQuery={setQuery} query={query}/>
                {children}
            </main>
        </>
    )
}