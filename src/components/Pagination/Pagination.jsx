import React from 'react'
import style from './Pagination.module.css'

const Pagination = (props) => {
    return <div>
        <div className={style.btnContainer}>
            {props.page > 1
                ? <button className={style.arrow} onClick={() => props.setPage(props.page - 1)}>
                    &#8592;
                </button>
                : <button className={style.arrow} disabled >
                    &#8592;
                </button>
            }

            {props.page > 1 &&
                <button onClick={() => props.setPage(props.page - 1)}>
                    {props.page - 1}
                </button>
            }

            <button className={style.activeBtn}
                onClick={() => props.setPage(props.page)}>
                {props.page}
            </button>

            {props.page !== props.total_pages
                ? <button onClick={() => props.setPage(props.page + 1)}>
                    {props.page + 1}
                </button>
                : <button disabled>{props.page + 1}</button>
            }

            {props.page !== props.total_pages
                ? <button className={style.arrow}
                    onClick={() => props.setPage(props.page + 1)}>
                    &#8594;
                </button>
                : <button disabled className={style.arrow}>&#8594;</button>
            }
        </div>
    </div>
}

export default Pagination;