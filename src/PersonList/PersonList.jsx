import style from './PersonList.module.css'
import CardPerson from "../components/CardPerson/CardPerson";
import Pagination from "../components/Pagination/Pagination";

const PersonList = (props) => {
    return (
        <div>
            <div className={style.wrapCard}>
                {props.person.map(card => (
                    <CardPerson {...card} key={card.id} />
                ))}
            </div>
            <Pagination
                page={props.page}
                setPage={(page) => props.onPageChanged(page)}
            />
        </div>
    )
}

export default PersonList;