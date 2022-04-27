'use strict';

let numberofFilms = +prompt("How many movies have you watched?", "")

let personalMovieDB = {
    count: numberofFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
}

for (let i = 0; i < 2; i++) {
    let a = prompt("Last watched movie?", "")
    let b = +prompt("Your raiting?", "")
    
    if (a !== null && b !== null && a != "" && b != "" && a.length < 50) {
        personalMovieDB.movies[a] = b 
    } 
}


if (personalMovieDB.count < 10) {
    console.log("not enough")
} else if (personalMovieDB.count > 10 && personalMovieDB.count < 30 ) {
    console.log("regular")
} else if (personalMovieDB.count > 30) {
    console.log("you are movie maniac")
} else {
    console.log("error")
}


console.log(personalMovieDB)

