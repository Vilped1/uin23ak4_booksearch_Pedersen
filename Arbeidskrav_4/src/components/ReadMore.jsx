import { useLocation, useParams } from "react-router-dom";

export default function ReadMore({books}) {

    // Hvordan jeg koblet Read more med search er modifisert kode fra Chat-gpt
    const { key } = useParams();
    // Leter gjennom API-et for å finne den som har book.key som er lik key
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

                {/* Henter info fra API-et */}
                <section>
                    <h2>{book.title}</h2>
                    <h3>Av {book?.author_name}</h3>
                    <ul>
                        {book?.ratings_average ? (
                            // Gjør at det ikke skal vises mer enn to tall bak komma, og hvis det tallet er 0 så ta det heller vekk 
                            <li>Vurdering: {book?.ratings_average.toFixed(2).replace(/\.?0*$/, '')}/5</li>
                        ) : (
                            <li>Vurdering: Ingen vurdering</li>
                        )}
                        {/* Og gjør slik at hvis det ikke er noen rating_counts så skal det bare ikke stå noe siden den over alt har det jeg trenger */}
                        {book?.ratings_count ? (
                            <li>{book?.ratings_count} Vurderinger</li>

                        ) : null}

                        <li>Vil lese: {book?.want_to_read_count}</li>
                        <li>Leser nå: {book?.currently_reading_count}</li>
                        <li>Har lest: {book?.already_read_count}</li>
                    </ul>

                    <ul>
                        <li>Forfatter: {book?.author_name}</li>
                        <li>Utgiver: {book?.publisher[0]}</li>
                    </ul>

                </section>
            </article>
        </div>
        
        </>
    )
}