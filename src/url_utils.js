export const url_api = 'https://api.themoviedb.org/3/';
const authToken = require('./auth_token');
export const headers_api = {
    'Content-Type': 'application/json;charset=utf-8',
    'Authorization': authToken.default
};
export const url_images_api = 'https://image.tmdb.org/t/p/';
export const url_genres_movies = 'https://api.themoviedb.org/3/genre/movie/list';