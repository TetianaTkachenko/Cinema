import { movieAPI } from "../API/api"

const SET_PAGES = 'SET_PAGES'
const SET_TIME_WINDOW = 'SET_TIME_WINDOW'
const SET_PERSON = 'SET_PERSON'

let initialState = {
    pages: 1,
    time_window: '',
    person: []
}

const personReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PAGES:
            return { ...state, pages: action.pages }
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

export const set_pages_creator = pages => ({ type: SET_PAGES, pages })
export const time_window_creator = time_window => ({ type: SET_TIME_WINDOW, time_window })
export const person_creator = person => ({ type: SET_PERSON, person })

export const getPerson = (time_window, pages) => {
    return (dispatch) => {
        movieAPI.getPerson(time_window, pages)
            .then(({ data } = {}) => {
                dispatch(person_creator(data.results));
                dispatch(set_pages_creator(pages));
                dispatch(time_window_creator(time_window))
            })
    }
}

export default personReducer;
