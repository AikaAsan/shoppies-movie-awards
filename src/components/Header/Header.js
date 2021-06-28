import React from 'react';

const Header = () => {
    return (
        <div className=" border-b border-gray-200 mt-6">
            <div className="sm:flex sm:justify-between sm:items-baseline">
                <div className="sm:w-0 sm:flex-1">
                    <h1 id="message-heading" className="text-3xl font-medium text-gray-900">
                        Shoppies Awards
                    </h1>
                    <p className=" text-lg text-gray-500 overflow-hidden overflow-ellipsis">
                        Browse and save 5 of your favorite movies for the Shoppies Nominations!
                    </p>
                </div>
            </div>
        </div>
    )
}


export default Header;