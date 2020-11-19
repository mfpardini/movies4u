import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Card from '../components/Card';
import { headers_api, url_api, url_genres_movies } from '../url_utils';
import { moviesClassificationRoutes } from '../routes';
import './Movies.css';
import Loader from '../components/Loader';
const axios = require('axios');

class Movies extends Component {

    constructor(props) {
        super(props);
        this.state = {
            language: 'pt-BR',
            loading: true,
            error: false,
            errorMsg: '',
            genres: [],
            isLoaded: false,
            movies: [],
            totalPages: 0,
            actualPage: 0,
            totalResults: 0
        };
    }

    getQueryParams(param) {
        return new URLSearchParams(this.props.location.search).get(param);
    }

    getActualPathname() {
        return this.props.location.pathname;
    }

    transformLinkToName(link) {
        let name = link.replace('/', '').replace('_', ' ');
        return (name.charAt(0).toUpperCase() + name.slice(1));
    }

    checkIsActiveRoute(route) {
        return route === this.getActualPathname();
    }

    componentDidMount() {
        this.loadGenresData();
        this.loadMoviesData();
    }

    loadGenresData() {
        const urlGenres = url_genres_movies + "?language=" + this.state.language;
        axios.get(urlGenres, { headers: headers_api })
            .then(
                (result) => {
                    this.setState({
                        genres: result.data.genres
                    });
                },
                (error) => {
                    this.setState({
                        error: true,
                        errorMsg: error
                    });
                }
            )
    }

    loadMoviesData() {
        const urlApi = url_api + "movie" + this.getActualPathname() + "?language=" + this.state.language;
        axios.get(urlApi, { headers: headers_api })
            .then(
                (result) => {
                    this.setState({
                        loading: false,
                        isLoaded: true,
                        movies: result['data']['results'],
                        totalPages: result['data']['total_pages'],
                        actualPage: result['data'['page']],
                        totalResults: result['data']['total_results']
                    });
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error: true,
                        errorMsg: error
                    });
                }
            )
    }

    renderCard(movie, i) {
        return (
            <div className="col-sm-6 col-md-4 col-lg-3 col-xl-2" key={movie.id}>
                <Link to={'/movie/detail/' + movie.id}>
                    <Card movie={movie} genres={this.state.genres} />
                </Link>
            </div>
        );
    }

    renderButtons(link, i) {
        let name = this.transformLinkToName(link)
        return (
            <Link
                key={i}
                onClick={
                    () => {
                        this.setState({loading: true})
                        setTimeout(() => {
                        this.loadMoviesData()
                    }, 50)
                }
                }
                className={"btn my-2 mx-2 " + (this.checkIsActiveRoute(link) ? "btn-success" : "btn-secondary")}
                to={link} >
                {name}
            </Link>
        );
    }

    render() {
        return (
            <div className="full-bg">
                <div className="movie-main">
                    <div className="container-fluid">
                        <div className="row justify-content-center">
                            {/* begin button group */}
                            <div className="dropdown button-group">
                                <button
                                    className="btn btn-success dropdown-toggle"
                                    type="button"
                                    id="dropdownMenuButton"
                                    data-toggle="dropdown"
                                    aria-haspopup="true"
                                    aria-expanded="false"
                                >
                                    {this.transformLinkToName(this.getActualPathname())}
                                </button>
                                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                    {moviesClassificationRoutes.map((route, i) => {
                                        return (
                                            <Link
                                                className="dropdown-item"
                                                key={i}
                                                to={route}
                                                onClick={
                                                    () => {
                                                        this.setState({loading: true})
                                                        setTimeout(() => {
                                                        this.loadMoviesData()
                                                    }, 50)
                                                }
                                                }>
                                                {this.transformLinkToName(route)}
                                            </Link>
                                        );
                                    })}
                                </div>
                            </div>
                            {/* end button group */}
                            {/* begin button list */}
                            <div className="button-list">
                                {moviesClassificationRoutes.map((route, i) => this.renderButtons(route, i))}
                            </div>
                            {/* end button list */}
                        </div>
                        <div className="row">
                            {this.state.loading ? (<Loader />) : (this.state.movies.map((m, i) => this.renderCard(m, i)))}
                        </div>
                    </div>

                </div>
            </div>
        );
    }

}

export default Movies;
