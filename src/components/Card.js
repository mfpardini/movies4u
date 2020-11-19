import React, { Component } from 'react';
import './Card.css';

import { url_images_api } from '../url_utils';
import { Link } from 'react-router-dom';

class Card extends Component {

    getGenresNames(movieGenreIds) {
        const genreNames = movieGenreIds.map((mgid) => {
            let genreName = '';
            this.props.genres.forEach(g => {
                if (g.id === mgid) {
                    genreName = g.name;
                }
            });
            return genreName;
        });
        return genreNames.join(' - ');
    }

    render() {
        let enter = false;
        const movie = this.props.movie;
        const urlImage = url_images_api + 'w500' + (movie['poster_path'] ? movie['poster_path'] : '');
        return (
            <div className="card slide-top" title={(movie['overview']).slice(0, 100) + '... (clique para detalhes)'}>
                <img src={urlImage} className="card-img-top" alt={movie['title']} />
                <div className="card-body">
                    <h5 className="card-title">{movie['title']}</h5>
                    <p className="card-text">{this.getGenresNames(movie['genre_ids'])}</p>
                </div>
            </div>
        );
    }

}


export default Card;