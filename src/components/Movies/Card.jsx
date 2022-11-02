import style from './Card.module.css'

const Card = (props) => {
    const baseUrlForPoster = 'https://image.tmdb.org/t/p/w185/'
    return (
        <div>
            <div className={style.box}>
                <div className={style.card}
                    style={props.poster_path
                        ? { backgroundImage: `url(${baseUrlForPoster}${props.poster_path})` }
                        : { backgroundImage: `url(https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg)` }
                    }>
                </div>
                <div className={style.cardInfo}>
                    <h4>
                        {props.title}
                    </h4>
                    <p className={style.overview}>
                        {props.overview.length > 100
                            ? `${props.overview.substring(0, 100)}...`
                            : props.overview}
                    </p>
                    <div className={style.level}>
                        &#9733; {props.vote_average}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Card;