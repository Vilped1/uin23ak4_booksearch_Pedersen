import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'

export default function Bookcard ({books, loading}) {

    console.log("Home", books)

    return (
        <div id='card'>
                {/* Mapper gjennom  */}
                {books?.map((item, index) => 
                    <article key={index}>
                        {item?.cover_edition_key ? (
                            <img src={`https://covers.openlibrary.org/b/olid/${item?.cover_edition_key}.jpg`} alt="Book cover" />
                        ) : (
                            <p className='noimg'>NO IMAGE</p>
                        )}
                        <section id='content'>
                            <h3>{item?.title}</h3>
                            <ul>
                                <li><strong>Publisert: </strong>{item?.first_publish_year}</li>

                                <li><strong>Forfatter: </strong>{item?.author_name?.join(', ')}</li>

                                {item?.ratings_average ? (
                                    <li><strong>Vurdering: </strong>{item?.ratings_average.toFixed(2).replace(/\.?0*$/, '')}</li>
                                ) : (
                                    <li><strong>Vurdering: </strong>Ingen vurdering</li>
                                )}

                                {!item?.isbn || item?.isbn[0] === "" ? (
                                    <span>Link ikke tilgjengelig<br /></span>
                                ) : (
                                    <li><strong>Amazon: </strong><a href={`https://www.amazon.com/s?k=${item?.isbn[0]}`} target='_blank'>Kjøp her!</a></li>
                                )}

                                <br />
                                
                                {item?.key ? (
                                    <li><a href={`https://openlibrary.org${item?.key}`}>Mer om boka...</a></li>
                                ) : (
                                    <span>Link ikke tilgjengelig</span>
                                )}
                                    {/* <Link to={`https://www.amazon.com/s?k=${item?.id_amazon}`} onClick={() => handleClick()}>Kjøp her!</Link></li> */}
                            </ul>
                        </section>
                    </article>
                )}
        </div>
    )
}