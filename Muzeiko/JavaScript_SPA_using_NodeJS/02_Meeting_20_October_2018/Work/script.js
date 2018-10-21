// Примери за използване на различни променливи за създаване на котки
var name = 'Puhcho';
var powNumber = 4;
var hasTail = true;

var name2 = 'Lapcho';
var powNumber2 = 4;
var hasTail2 = true;

var name3 = 'Tapcho';
var powNumber3 = 4;
var hasTail3 = true;

// Построяване на обекта котка
var cat = {
    name: null,
    powNumber: null,
    hasTail: null
};

// Построяване на обекта град
var name = 'Pleven';
var population = 37850;
var country = 'Bulgaria';
var town = {name, population, country};

// Пример за JavaScript Closure 
function countTheCount() {
	var count = 0;
	function increase() {
		console.log(++count);
	}
	return increase;
}

// Пример за модулен дизайн използвайки JavaScript Closure
var module = (function () {
	var testName = 0;
	var testMe = true;
	return {
		testFunc: function() {
			return testMe;
		},
		testName: testName,
		iAmSuperMAN: function () {
			console.log("I am Superman!!!!");
		}
	}
})();