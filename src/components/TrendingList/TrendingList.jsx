import Pagination from '../Pagination/Pagination';
import TrendingCard from '../TrendingCard/TrendingCard';

const TrendingList = (props) => {

    return (
        <div>
            <div>
                {props.trending.map(card => (
                    <TrendingCard {...card} key={card.id} />
                ))}
            </div>
            )
            <Pagination
                page={props.page}
                total_pages={props.total_pages}
                total_results={props.total_results}
                setPage={(page) => props.onPageChanged(page)}
            />
        </div>
    )
}
export default TrendingList;
