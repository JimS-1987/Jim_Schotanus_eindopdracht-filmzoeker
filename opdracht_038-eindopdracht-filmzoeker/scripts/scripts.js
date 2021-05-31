const searchBar = document.getElementById("search-bar")
const buttons = document.getElementById("radio-buttons");
const moviesPosters = document.getElementById("movie-posters")
const allRadioButtons = document.querySelectorAll("input");
const resetButton = document.getElementById("reset-btn")


const addMoviesToDom = (moviesArray) => {
    moviesArray.forEach(movie => {
        const newLi = document.createElement('li');
        newLi.innerHTML = `<a class="movie__list-li__a" href="http://www.imdb.com/title/${movie.imdbID}" target="_blank">
        <img class="movie__list-li__img" src ="${movie.Poster}"></img></a>`;
        moviesPosters.appendChild(newLi);
    });
}

addMoviesToDom(movies)

const addEventListeners = () => {
    allRadioButtons.forEach(radio => {
        radio.addEventListener('change', (event) => {
            handleOnChangeEvent(event.target.value)
        });
    });
    resetButton.addEventListener('click', () => {
        resetDom();
        searchBar.value = '';
        addMoviesToDom(movies);
    });
    searchBar.addEventListener('keyup', (event) => {
        handleOnChangeEvent(event.target.value.toLowerCase());
    });
};
addEventListeners(allRadioButtons, resetButton, searchBar);


const resetDom = () => {
    return (moviesPosters.innerHTML = "");
};
const handleOnChangeEvent = (value) => {
    switch (value) {
        case "new":
            resetDom();
            return addMoviesToDom(movies.filter((movie) => movie.Year >= "2014"));
        case "avengers":
            resetDom();
            return addMoviesToDom(movies.filter((movie) => movie.Title.toLocaleLowerCase().includes(value))
            );
        case "princess":
            resetDom();
            return addMoviesToDom(movies.filter((movie) => movie.Title.toLocaleLowerCase().includes(value))
            );
        case "batman":
            resetDom();
            return addMoviesToDom(movies.filter((movie) => movie.Title.toLocaleLowerCase().includes(value))
            );
        case "x-men":
            resetDom()
            return addMoviesToDom(movies.filter((movie) => movie.Title.toLocaleLowerCase().includes(value))
            );
        default:
            resetDom();
            return addMoviesToDom(movies.filter((movie) => movie.Title.toLocaleLowerCase().includes(value))
            );

    }
};
