import React from 'react';
import { SearchIcon } from '@heroicons/react/solid'



const SearchInput = (props) => {
    return (
        <div className="my-6">
            <div className="w-full max-w-lg">
                <label htmlFor="search" className="sr-only">
                    Search
                </label>
                <div className="relative">
                    <div className="pointer-events-none absolute inset-y-0 left-0 pl-3 flex items-center">
                        <SearchIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                    </div>
                    <input
                        id="search"
                        name="search"
                        className="block w-full bg-white-700 border border-gray-300 rounded-md py-2 pl-10 pr-3 text-sm placeholder-black-400 focus:outline-none focus:bg-white focus:border-gray-300 focus:ring-white focus:text-gray-900 focus:placeholder-gray-500 
                        sm:text-lg"
                        placeholder="Search for a movie"
                        type="search"
                        value={props.value}
                        onChange={(event) => props.setSearchValue(event.target.value)}
                    />
                </div>
            </div>
        </div>





        // <div className="mb-8">
        //     <input
        //         value={props.value}
        //         onChange={(event) => props.setSearchValue(event.target.value)}
        //         className="form-control"
        //         placeholder="Search for a movie">
        //     </input>
        // </div>
    )
}

export default SearchInput;
