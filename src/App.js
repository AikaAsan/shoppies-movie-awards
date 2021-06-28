
import React, { useState, useEffect } from 'react';
import MovieList from './components/MovieList/MovieList';
import MovieListHeading from './components/MovieListHeading';
import SearchInput from './components/SearchInput/SearchInput'
import Banner from 'react-js-banner';
import Header from './components/Header/Header';
import filmActionEnum from './Types/filmActionsEnum'



function App() {

  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState('day');
  const [nominations, setNominations] = useState([]);
  const [showBanner, setShowBanner] = useState(false);


  const getMovieRequest = async (searchValue) => {
    if (searchValue === '') {
      return
    }
    const url = `https://www.omdbapi.com/?s=${searchValue}&apikey=${process.env.REACT_APP_API_KEY}&type=movie`;

    const response = await fetch(url);
    const responseJson = await response.json();

    console.log(response);
    if (responseJson.Search) {
      setMovies(responseJson.Search);
    }
  };

  useEffect(() => {
    getMovieRequest(searchValue);
  }, [searchValue]);

  useEffect(() => {
    const movieNominations = JSON.parse(localStorage.getItem('the-shoppies-nominations'));
    setNominations(movieNominations);
  }, [])


  useEffect(() => {
    (nominations?.length >= 5 ? setShowBanner(true) : setShowBanner(false))
  }, [nominations]);


  const saveToLocalStorage = (items) => {
    localStorage.setItem('the-shoppies-nominations', JSON.stringify(items));

  }

  const addToNominations = (movie) => {
    let newNominations;
    if (nominations) {
      newNominations = [...nominations, movie];
    } else {
      newNominations = [movie]
    }
    setNominations(newNominations);
    saveToLocalStorage(newNominations);
  }

  const removeFromNominations = (movie) => {
    const newNominations = nominations.filter((nomination) =>
      nomination.imdbID !== movie.imdbID);
    setNominations(newNominations);
    saveToLocalStorage(newNominations);
  }


  return (
    <>
      <div className="container mx-auto">
        <Header />
        <Banner
          showBanner={showBanner}
          title="You have added 5 nominations to the list!"
        />
        <SearchInput searchValue={searchValue}
          setSearchValue={setSearchValue} />
        <MovieListHeading
          heading="Search results:"
          searchValue={searchValue} />
        <div className="">

          <MovieList
            type={filmActionEnum.ADD_NOMINATION}
            movies={movies}
            nominated={nominations}
            heading="Nominate"
            handleNominationsClick={addToNominations}
          />
        </div>
        <MovieListHeading
          heading="Nominations:" />
        <div className="">
          <MovieList
            type={filmActionEnum.REMOVE_NOMINATION}
            movies={nominations}
            heading="Remove"
            handleNominationsClick={removeFromNominations} />
        </div>
      </div>
    </>
  );
}

export default App;
