import style from './TrendingCard.module.css'

const TrendingCard = (props) => {
    const baseUrlForPoster = 'https://image.tmdb.org/t/p/w185/'
    return (
        <section className={style.wrapper}>
            <div className={style.cardBox}>
                <div className={style.card}
                    style={{ backgroundImage: `url(${baseUrlForPoster}${props.poster_path})` }}>
                </div>
                <p className={style.symbol}>
                    &#9733;{props.vote_average.toFixed(1)}
                </p>
            </div>
            <div>
                <h1 className={style.title}>(
                    {props.title || props.name})
                </h1>
                <h2 className={style.title}>
                    {props.original_title || props.original_name}
                </h2>
                <p className={style.overview}>
                    {props.overview}
                </p>
            </div>
        </section>
    )
}
export default TrendingCard;