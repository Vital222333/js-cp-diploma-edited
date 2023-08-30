let selectSeanse = JSON.parse(sessionStorage.selectSeanse);
let places = "";
let price = 0;

selectSeanse.salesPlaces.forEach(salePlace => {
	if (places) {
		places += ", ";
	};
	places += `${salePlace.row}/${salePlace.place}`;
	price += salePlace.type === "standart" ? Number(selectSeanse.priceStandart) : Number(selectSeanse.priceVip);
});

document.querySelector(".ticket__title").innerHTML = selectSeanse.filmName;
document.querySelector(".ticket__chairs").innerHTML = places;
document.querySelector(".ticket__hall").innerHTML = selectSeanse.hallName;
document.querySelector(".ticket__start").innerHTML = selectSeanse.seanceTime;
document.querySelector(".ticket__cost").innerHTML = price;

let newHallConfig = selectSeanse.hallConfig.replace(/selected/g, "taken");
console.log(newHallConfig);

document.getElementById("acceptin-button").addEventListener("click", (event) => {
	event.preventDefault();
	let request = `event=sale_add&timestamp=${selectSeanse.seanceTimeStamp}&hallId=${selectSeanse.hallId}&seanceId=${selectSeanse.seanceId}&hallConfiguration=${newHallConfig}`;
	
	getRequest(request, ()=> {
		window.location.href='ticket.html';
	});
});