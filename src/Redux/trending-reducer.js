import { movieAPI } from "../API/api"

const SET_TRENDING_PAGE = 'SET_TRENDING_PAGE'
const SET_TRENDING = 'SET_TRENDING'
const SET_MEDIA_TYPE = 'SET_MEDIA_TYPE'
const SET_TIME_WINDOW = 'SET_TIME_WINDOW'

let initialState = {
    trendingPage: 1,
    trending: [],
    media_type: '',
    time_window: '',
}

const trendingReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_TRENDING_PAGE:
            return { ...state, trendingPage: action.trendingPage }
        case SET_TRENDING: {
            return { ...state, trending: action.trending }
        }
        case SET_MEDIA_TYPE: {
            return { ...state, media_type: action.media_type }
        }
        case SET_TIME_WINDOW: {
            return { ...state, time_window: action.time_window }
        }
        default:
            return state;
    }
}

export const set_page_creator = trendingPage => ({ type: SET_TRENDING_PAGE, trendingPage })
export const trending_creator = trending => ({ type: SET_TRENDING, trending })
export const media_type_creator = media_type => ({ type: SET_MEDIA_TYPE, media_type })
export const time_window_creator = time_window => ({ type: SET_TIME_WINDOW, time_window })

export const getTrending = (media_type, time_window, trendingPage) => {
    return (dispatch) => {
        movieAPI.getTrending(media_type, time_window, trendingPage)
            .then(({ data } = {}) => {
                dispatch(trending_creator(data.results));
                dispatch(set_page_creator(trendingPage));
                dispatch(media_type_creator(media_type));
                dispatch(time_window_creator(time_window))
            })
    }
}

export default trendingReducer;