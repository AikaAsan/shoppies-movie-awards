import React from 'react';


const MovieListHeading = (props) => {
    return (
        <h3 className="my-6 text-xl">{`${props.heading} ${props.searchValue ?? ""}`}</h3>
    )
}


export default MovieListHeading;