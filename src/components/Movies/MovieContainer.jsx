import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMovie } from '../../Redux/movie-reducer';
import FilterBar from '../FilterBar/FilterBar';
import MoviesList from './MoviesList';

const MovieContainer = () => {
    const dispatch = useDispatch()
    const movies = useSelector(({ movies } = {}) => {
        return {
            movies: movies.list,
            page: movies.page,
            filters: movies.filters
        }
    })

    useEffect(() => {
        dispatch(getMovie(movies.page, movies.filters))
    }, [movies.page, movies.filters, dispatch])

    const onPageChanged = (page) => {
        dispatch(getMovie(page, movies.filters))
    }

    return (
        <div>
            <FilterBar
                page={movies.page}
                onPageChanged={onPageChanged}
            />
            <MoviesList
                movies={movies.movies}
                page={movies.page}
                onPageChanged={onPageChanged}
            />
        </div>
    )
}

export default MovieContainer;

/*import React from 'react'
import { connect } from 'react-redux';
import { getMovie, setFilters } from '../../Redux/movie-reducer';
import FilterBar from '../FilterBar/FilterBar';
import MoviesList from './MoviesList';

class MovieContainer extends React.Component {

    componentDidMount() {
        this.props.getMovie(this.props.page)
    }

    onPageChanged = (page) => {
        this.props.getMovie(page, this.props.filters)
    }

    applyFilter = async (paramName, paramValue) => {
        await this.props.setFilters({ [paramName]: paramValue })
        this.props.getMovie(this.props.page, this.props.filters)
    }

    render() {
        return (
            <div>
                <FilterBar
                    applyFilter={this.applyFilter}
                />
                <MoviesList
                    movies={this.props.movies}
                    pageSize={this.props.pageSize}
                    total_pages={this.props.total_pages}
                    total_results={this.props.total_results}
                    page={this.props.page}
                    onPageChanged={this.onPageChanged}
                />
            </div>
        )
    }
}

const mapStateToProps = ({ movies } = {}) => {
    return {
        movies: movies.list,
        pageSize: movies.pageSize,
        total_pages: movies.total_pages,
        total_results: movies.total_results,
        page: movies.page,
        filters: movies.filters
    }
}

export default connect(mapStateToProps, { getMovie, setFilters })(MovieContainer);*/
