import React from 'react'
import Pagination from '../Pagination/Pagination'
import Card from './Card'
import style from './Card.module.css'

const MoviesList = (props) => {

    return (
        <div>
            <div className={style.flexBox}>
                {props.movies.map(card => (
                    <Card {...card} key={card.id} />
                ))}
            </div>
            <div>
                <Pagination
                    page={props.page}
                    total_pages={props.total_pages}
                    total_results={props.total_results}
                    setPage={(page) => props.onPageChanged(page)}
                />
            </div>
        </div>
    )
}

export default MoviesList;
