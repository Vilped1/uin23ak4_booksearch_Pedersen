import { useLocation, useParams } from "react-router-dom";

export default function ReadMore({books}) {

    const { key } = useParams();
    const book = books.find(book => book.key === key);

    return (
        <>
        <div className="infocard">
            <article>
                {book?.cover_edition_key ? (
                    <img src={`https://covers.openlibrary.org/b/olid/${book?.cover_edition_key}.jpg`} alt="Book cover" />
                ) : (
                    <p className='noimg'>NO IMAGE</p>
                )}

                <section>
                    <h2>{book.title}</h2>

                </section>
            </article>
        </div>
        
        </>
    )
}