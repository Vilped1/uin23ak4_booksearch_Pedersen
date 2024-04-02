import { Link } from 'react-router-dom'

export default function Bookcard ({content, setCurrentId}) {

    console.log("Home", content)

    return (
        <section id='card'>
            {content?.map(item =>
                <article key={item.key}>
                    {item.cover_edition_key ? (
                        <img src={`https://covers.openlibrary.org/b/olid/${item.cover_edition_key}.jpg`} alt="Book cover" />
                    ) : (
                        <p className='noimg'>NO IMAGE</p>
                    )}
                    <section id='content'>
                        <h3>{item.title}</h3>
                        {/* <img src={`https://covers.openlibrary.org/b/olid/${item.cover_edition_key}.jpg`} alt="Book cover" /> */}
                        <ul>
                            <li>Publisert: {item.first_publish_year}</li>
                            <li>Forfatter: {item.author_name}</li>
                            <li>Gjennomsnittsvurdering: {formatRating(item.ratings_average)}</li>
                            <li>Amazon: <a href={`https://www.amazon.com/s?k=${item.id_amazon}`}>Kjøp her!</a></li>
                                {/* <Link to={`https://www.amazon.com/s?k=${item.id_amazon}`} onClick={() => handleClick()}>Kjøp her!</Link></li> */}

                                {/* Åpner en ny fane!! */}
                                {/* target='_blank' */}
                        </ul>
                    </section>
                </article>
                )}
        </section>
    )
}
function formatRating(rating) {
    const parsedRating = parseFloat(rating);
    if (!isNaN(parsedRating)) {
        const fixedRating = parsedRating.toFixed(2);
        return fixedRating.replace(/\.?0*$/, ''); 
    }
}