import style from './CardPerson.module.css'

const CardPerson = (props) => {
    const baseUrlForPoster = 'https://image.tmdb.org/t/p/w185/'
    return (
        <div className={style.wrapper}>
            <div
                className={style.photo}
                style={props.profile_path
                    ? { backgroundImage: `url(${baseUrlForPoster}${props.profile_path})` }
                    : { backgroundImage: `url(https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg)` }}
            />
            <div className={style.info}>
                <h1>{props.name}</h1>
                <p className={style.symbol}>
                    &#9733; {props.popularity.toFixed(1)}
                </p>
                {props.known_for
                    ? <ul>
                        {props.known_for.map(card => (
                            <li key={card.id}>{card.title}</li>
                        ))
                        }
                    </ul>
                    : ''
                }
            </div>

        </div>
    )
}

export default CardPerson;
/*<div className={style.wrapper}>
            <div className={style.photo}
                style={props.profile_path
                    ? { backgroundImage: `url(${baseUrlForPoster}${props.profile_path})` }
                    : { backgroundImage: `url(https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg)` }}>
            </div>
            <div className={style.info}>
                <h1>{props.name}</h1>
                <p>&#9733; {props.popularity.toFixed(1)}</p>
                <p>Known for:</p>
                {props.known_for ?
                    props.known_for.map(card => (
                        <div key={card.id}>{card.original_title}</div>
                    ))
                    : <div>I don't know why I here</div>}
            </div>

        </div>*/