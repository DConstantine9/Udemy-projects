'use strict';

let numberofFilms

function start() {
	numberofFilms = +prompt("How many movies have you watched?", "")

	while (numberofFilms == "" || numberofFilms == null || isNaN(numberofFilms)) {
		numberofFilms = +prompt("How many movies have you watched?", "")

	}
}

start()


let personalMovieDB = {
	count: numberofFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false
}

function rememberMyFilms() {
	for (let i = 0; i < 2; i++) {
		let a = prompt("Last watched movie?", "")
		let b = +prompt("Your raiting?", "")
		
		if (a !== null && b !== null && a != "" && b != "" && a.length < 50) {
			personalMovieDB.movies[a] = b 
		} 
	}
}

//rememberMyFilms()


function detecteronalLevel() {
	if (personalMovieDB.count < 10) {
		console.log("not enough")
	} else if (personalMovieDB.count > 10 && personalMovieDB.count < 30 ) {
		console.log("regular")
	} else if (personalMovieDB.count > 30) {
		console.log("you are movie maniac")
	} else {
		console.log("error")
	}
}

//detecteronalLevel()


function showMyDB(hidden) {
	if (!hidden) {
		console.log(personalMovieDB)
	}
}

showMyDB(personalMovieDB.privat)


function writeYourGenres() {
	for (let i = 1; i <= 3; i++) {
		let a = prompt(`Your fav genre ${i}`, "")
		personalMovieDB.genres[i - 1] = a
	}
	
}

writeYourGenres()

console.log(personalMovieDB)

/* Задание на урок:

1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres

P.S. Функции вызывать не обязательно*/