import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'

export default function Bookcard ({books, loading}) {

    console.log("Home", books)

    return (
        <div id='card'>
                {/* Mapper gjennom API-et */}
                {books?.map((item, index) => 
                    // Gir hvært artikkelkort en egen key
                    <article key={index}>
                        {/* Sjekker om at hvis cover_edition_key eksisterer så send ut resultatet, hvis ikke så skriv "NO IMAGE" */}
                        {item?.cover_edition_key ? (
                            <img src={`https://covers.openlibrary.org/b/olid/${item?.cover_edition_key}.jpg`} alt="Book cover" />
                        ) : (
                            <p className='noimg'>NO IMAGE</p>
                        )}
                        {/* Legger resten av innhodet i en egen section for css-en sin del */}
                        <section id='content'>
                            <h2>{item?.title}</h2>
                            <ul>
                                <li><strong>Publisert: </strong>{item?.first_publish_year}</li>

                                {/* Henter ut forfattere og hvis det er flere inn en så sett in komma med mellomrom */}
                                <li><strong>Forfatter: </strong>{item?.author_name?.join(', ')}</li>

                                {/* Sjekker om at hvis ratings_average eksisterer så send ut resultatet, hvis ikke så skriv "Ingen vurdering" */}
                                {item?.ratings_average ? (
                                    // Gjør at det ikke skal vises mer enn to tall bak komma, og hvis det tallet er 0 så ta det heller vekk 
                                    <li><strong>Vurdering: </strong>{item?.ratings_average.toFixed(2).replace(/\.?0*$/, '')}</li>
                                ) : (
                                    <li><strong>Vurdering: </strong>Ingen vurdering</li>
                                )}

                                {/* Sjekker om at hvis isbn ikke eksisterer eller hvis det er en tom tekststreng så skriv "Link ikke tilgjengelig", og hvis den eksisterer med innhold så send ut resultatet */}
                                {!item?.isbn || item?.isbn[0] === "" ? (
                                    <span>Link ikke tilgjengelig<br /></span>
                                ) : (
                                    <li><strong>Amazon: </strong><a href={`https://www.amazon.com/s?k=${item?.isbn[0]}`} target='_blank'>Kjøp her!</a></li>
                                )}

                                <br />
                                
                                {/* Er klar over at det er ikke dette dere mente med ekstra oppgaven, men jeg fikk ikke tid til å legge det inn slik dere ville ha det og jeg syns det var litt gøy at dette var en mulighet :) */}
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