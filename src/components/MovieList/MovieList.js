import React from 'react';
import './MovieList.css'



const renderButton = (nominated, movie, handleNominationsClick, text) => {
    const result = nominated?.find(nom => nom.imdbID === movie.imdbID)
    if (result) {
        return (
            <div>
                <button className="button" disabled="true">{text}</button>
            </div>
        )
    } else {
        return (
            <div>
                <button className="button" onClick={() => handleNominationsClick(movie)}>{text}</button>
            </div>
        )
    }
}

const MovieList = (props) => {

    const { type } = props
    const text = type === 'add' ? 'Nominate' : 'remove'

    return props.movies?.length > 0 ?
        (
            <>
                {props.movies.map((movie, index) => (
                    <li className='image-container d-flex justify-content-start m-2'
                        key={index}>
                        <img
                            className="poster"
                            src={movie.Poster} alt='movie'>
                        </img>
                        <div
                            className='overlay'
                        >
                            <p>{movie.Title}</p>
                            {renderButton(props.nominated, movie, props.handleNominationsClick, text)}
                        </div>
                    </li>
                ))}
            </>
        ) : null;

};

export default MovieList;