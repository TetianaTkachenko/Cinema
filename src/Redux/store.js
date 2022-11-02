import { applyMiddleware, compose, combineReducers, createStore } from 'redux'
import thunkMiddleware from 'redux-thunk'
import movieReducer from './movie-reducer'
import personReducer from './persons-reducer'
import trendingReducer from './trending-reducer'

const reducers = combineReducers({
    movies: movieReducer,
    person: personReducer,
    trending: trendingReducer

})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(reducers, composeEnhancer(applyMiddleware(thunkMiddleware)))

export default store
