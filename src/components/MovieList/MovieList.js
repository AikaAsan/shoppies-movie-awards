import React from 'react';

import cs from 'classnames';
import filmActionsEnum from '../../Types/filmActionsEnum';

const NominateButton = ({ nominated, movie, handleNominationsClick, type }) => {
    const result = nominated?.find(nom => nom.imdbID === movie.imdbID)
    const disabled = (result && type === filmActionsEnum.REMOVE_NOMINATION) || (result && type === filmActionsEnum.ADD_NOMINATION);
    return (
        <button
            disabled={disabled}
            className={cs("w-full rounded-lg py-2", {
                "bg-yellow-500": result,
                "bg-green-500": !result,
                "opacity-30": disabled,
            })}
            onClick={() => handleNominationsClick(movie)} >{type === filmActionsEnum.ADD_NOMINATION ? 'Nominate' : 'Remove'
            }</button>

    )

}

const MovieList = (props) => {

    return props.movies?.length > 0 &&
        (
            <div className="grid lg:grid-cols-5 md:grid-cols-3 gap-8 ">

                {props.movies.map((movie) => (

                    <div className=' text-center flex flex-col justify-between items-center shadow-md transition transform hover:scale-110'
                        key={movie.Title}>
                        <img
                            className="w-full h-60 object-cover sm:object-center sm:ml-44 md:ml-0"
                            src={movie.Poster} alt='movie'>
                        </img>

                        <div className="font-bold text-black-500 w-full">
                            <p className="px-2 text-center mb-1"> {movie.Title} </p>
                            <p className="px-2 text-center mb-2"> ({movie.Year}) </p>
                            <NominateButton
                                {...props} movie={movie} />
                        </div>
                    </div>




                ))}
            </div>
        )

};

export default MovieList;