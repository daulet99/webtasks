const sort_price = function(a, b) {
	return a.price - b.price;
}
const sort_name = function(a, b) {
 	const A = a.maker.toUpperCase();
 	const B = b.maker.toUpperCase();
 	if (A < B) { return -1; }
 	if (A > B) { return 1; }
 	return 0;
};
function sortCars(sortFunc) {
	this.carInfo.sort(sortFunc);
	this.printCars();
}
function err() {
	document.getElementById("loading").style.display = "none";
	const btn = document.querySelectorAll('button');
	btn[0].textContent = "Some Error Occured";
}
function onResponse(response) {
	if(response.ok) {
		return response.json();
	}
	else {
		err()
		return ;
	}
}
class Car {
	constructor(carContainer, maker, model, price) {
		const card = document.createElement('div');
		const ma = document.createElement('span');
		const mo = document.createElement('span');
		const pr = document.createElement('span');
		ma.innerHTML = maker;
		mo.innerHTML = model;
		pr.innerHTML = price;
		card.className = "card";
		ma.className = "title";
		mo.className = "title";
		pr.className = "price";
		card.appendChild(ma)
		card.appendChild(mo)
		card.appendChild(pr);
		carContainer.appendChild(card);
	}
}
function onJsonReady(data) {
	this.carInfo = data;
	this.printCars();
}
function printCars() {
	const carContainer = document.querySelector('#cards');
	carContainer.innerHTML = '';
	for(const info of this.carInfo) {
		const car = new Car(carContainer, info.maker, info.model, info.price);
	}
	const btn = document.querySelectorAll('button');
	btn[0].textContent = "Items are loaded";
}
function load() {
	document.getElementById("loading").style.display = "flex";
	const btn = document.querySelectorAll('button');
	btn[0].textContent = "Loading";
	fetch("http://demo4296963.mockable.io/listCars").catch(err).then(onResponse).then(onJsonReady);
}
const btn = document.querySelectorAll('button');
for (const i of btn) {
    i.addEventListener('click', load);
}
document.getElementById("sortByMaker").onclick = function() {
	sortCars(sort_name);
};
document.getElementById("sortByPrice").onclick = function() {
	sortCars(sort_price);
};
