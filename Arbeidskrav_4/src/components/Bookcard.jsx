import { Link } from 'react-router-dom'

export default function Bookcard ({content, setCurrentId}) {

    console.log("Home", content)

    return (
        <div id='card'>
            {content?.map((item, index) =>
                <article key={index}>
                    {item.cover_edition_key ? (
                        <img src={`https://covers.openlibrary.org/b/olid/${item.cover_edition_key}.jpg`} alt="Book cover" />
                    ) : (
                        <p className='noimg'>NO IMAGE</p>
                    )}
                    <section id='content'>
                        <h3>{item.title}</h3>
                        {/* <img src={`https://covers.openlibrary.org/b/olid/${item.cover_edition_key}.jpg`} alt="Book cover" /> */}
                        <ul>
                            <li><strong>Publisert: </strong>{item.first_publish_year}</li>
                            {/* <li>Forfatter: {item.author_name}</li> */}

                            <li><strong>Forfatter: </strong>{item.author_name?.join(', ')}</li>
                            
                            {formatRating(item.ratings_average) ? (
                                <li><strong>Vurdering: </strong>{formatRating(item.ratings_average)}</li>
                            ) : (
                                <li><strong>Vurdering: </strong>Ingen vurdering</li>
                            )}

                            {!item.isbn || item.isbn[0] === "" ? (
                                <span>Link ikke tilgjengelig<br /></span>
                            ) : (
                                <li><strong>Amazon: </strong><a href={`https://www.amazon.com/s?k=${item?.isbn[0]}`}>Kjøp her!</a></li>
                            )}

                            <br />
                            
                            {item.key ? (
                                <li><a href={`https://openlibrary.org${item.key}`}>Mer om boka...</a></li>
                            ) : (
                                <span>Link ikke tilgjengelig</span>
                            )}
                                {/* <Link to={`https://www.amazon.com/s?k=${item.id_amazon}`} onClick={() => handleClick()}>Kjøp her!</Link></li> */}

                                {/* Åpner en ny fane!! */}
                                {/* target='_blank' */}
                                {/* id_amazon */}
                        </ul>
                    </section>
                </article>
                )}
        </div>
    )
}

function formatRating(rating) {
    const parsedRating = parseFloat(rating);
    if (!isNaN(parsedRating)) {
        const fixedRating = parsedRating.toFixed(2);
        return fixedRating.replace(/\.?0*$/, ''); 
    }
}