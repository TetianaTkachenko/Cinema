import * as axios from "axios";

const instance = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
    params: {
        api_key: 'da2cfe483fc1c148634f06d0028cbc4f'
    }
})

export const movieAPI = {
    getMovie(page, filters) {
        return instance.get('/discover/movie', {
            params: {
                page,
                ...filters
            }
        })
    },
    getTrending(media_type, time_window, page) {
        return instance.get(`/trending/${media_type}/${time_window}`, {
            params: {
                page
            }
        })
    },
    getPerson(time_window, page) {
        return instance.get(`/trending/person/${time_window}`, {
            params: {
                page
            }
        })
    }
}