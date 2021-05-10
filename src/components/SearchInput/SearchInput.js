import React from 'react';




const SearchInput = (props) => {
    return (
        <div className="search col col-md-8 mx-auto mb-4">
            <input
                value={props.value}
                onChange={(event) => props.setSearchValue(event.target.value)}
                className="form-control"
                placeholder="Search for a movie">
            </input>
        </div>
    )
}

export default SearchInput;
