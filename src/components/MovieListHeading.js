import React from 'react';


const MovieListHeading = (props) => {
    return (
        <h3>{`${props.heading} ${props.searchValue}`}</h3>
    )
}


export default MovieListHeading;