export default function FrontPage({ books }) {


    return (
        <section>
            {books?.map(item =>
                <article key={item.key}>
                    <h3>{item.title}</h3>
                    <img src={item.cover_edition_key} alt="Book cover" />
                    <ul>
                        <li>Publisert: {item.first_publish_year}</li>
                        <li>Forfatter: {item.author_name}</li>
                        <li>Gjennomsnittsvurdering: {item.ratings_average}</li>
                        {/* <li>Amazon:<Link to={item.id_amazon} onClick={() => handleClick()}>Kjøp her!</Link></li> */}
                    </ul>

                    {/* https://www.amazon.com/s?k= */}

                </article>
            )}
        </section>
    )
}