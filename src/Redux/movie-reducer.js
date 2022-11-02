import { movieAPI } from "../API/api"

const SET_LIST = 'SET_LIST'
const SET_PAGE = 'SET_PAGE'
const SET_FILTERS = 'SET_FILTERS'

let initialState = {
    filters: {},
    page: 1,
    list: []
}

const movieReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_LIST:
            return { ...state, list: action.list }
        case SET_PAGE:
            return { ...state, page: action.page }
        case SET_FILTERS: {
            return { ...state, filters: { ...state.filters, ...action.filters } }
        }
        default:
            return state;
    }
}

export const movie_creator = list => ({ type: SET_LIST, list })
export const set_page_creator = page => ({ type: SET_PAGE, page })
export const set_filters = filters => ({ type: SET_FILTERS, filters })

export const getMovie = (page, filters = {}) => {
    return (dispatch) => {

        movieAPI.getMovie(page, filters)
            .then(({ data } = {}) => {
                dispatch(movie_creator(data.results));
                dispatch(set_page_creator(page));
            })
    }
}

export const setFilters = (filters) => {
    return dispatch => dispatch(set_filters(filters))
}

export default movieReducer;

/*import { movieAPI } from "../API/api"

const SET_LIST = 'SET_LIST'
const SET_PAGE = 'SET_PAGE'
const SET_FILTERS = 'SET_FILTERS'
const SET_TRENDING = 'SET_TRENDING'
const SET_MEDIA_TYPE = 'SET_MEDIA_TYPE'
const SET_TIME_WINDOW = 'SET_TIME_WINDOW'
const SET_PERSON = 'SET_PERSON'

let initialState = {
    filters: {},
    page: 1,
    list: [],
    trending: [],
    media_type: '',
    time_window: '',
    person: []
}

const movieReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_LIST:
            return { ...state, list: action.list }
        case SET_PAGE:
            return { ...state, page: action.page }
        case SET_FILTERS: {
            return { ...state, filters: { ...state.filters, ...action.filters } }
        }
        case SET_TRENDING: {
            return { ...state, trending: action.trending }
        }
        case SET_MEDIA_TYPE: {
            return { ...state, media_type: action.media_type }
        }
        case SET_TIME_WINDOW: {
            return { ...state, time_window: action.time_window }
        }
        case SET_PERSON: {
            return { ...state, person: action.person }
        }
        default:
            return state;
    }
}

export const movie_creator = list => ({ type: SET_LIST, list })
export const set_page_creator = page => ({ type: SET_PAGE, page })
export const set_filters = filters => ({ type: SET_FILTERS, filters })
export const trending_creator = trending => ({ type: SET_TRENDING, trending })
export const media_type_creator = media_type => ({ type: SET_MEDIA_TYPE, media_type })
export const time_window_creator = time_window => ({ type: SET_TIME_WINDOW, time_window })
export const person_creator = person => ({ type: SET_PERSON, person })

export const getMovie = (page, filters = {}) => {
    return (dispatch) => {

        movieAPI.getMovie(page, filters)
            .then(({ data } = {}) => {
                dispatch(movie_creator(data.results));
                dispatch(set_page_creator(page));
            })
    }
}

export const setFilters = (filters) => {
    return dispatch => dispatch(set_filters(filters))
}

export const getTrending = (media_type, time_window, page) => {
    return (dispatch) => {
        movieAPI.getTrending(media_type, time_window, page)
            .then(({ data } = {}) => {
                dispatch(trending_creator(data.results));
                dispatch(set_page_creator(page));
                dispatch(media_type_creator(media_type));
                dispatch(time_window_creator(time_window))
            })
    }
}
export const getPerson = (time_window, page) => {
    return (dispatch) => {
        movieAPI.getPerson(time_window, page)
            .then(({ data } = {}) => {
                dispatch(person_creator(data.results));
                dispatch(set_page_creator(page));
                dispatch(time_window_creator(time_window))
            })
    }
}


export default movieReducer;*/