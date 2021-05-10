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
    if (props.movies?.length > 0) {
        return (
            <>
                {props.movies.map((movie, index) => (
                    <div className='image-container d-flex justify-content-start m-2'>
                        <img className="poster" src={movie.Poster} alt='movie'></img>

                        {/* <AddToNominations /> */}

                        <div
                            className='overlay'
                        >
                            <p>{movie.Title}</p>
                            {renderButton(props.nominated, movie, props.handleNominationsClick, text)}
                        </div>
                    </div>
                ))}
            </>
        );
    }

    return null

};

export default MovieList;