const apiID = '137538aff620b92e7ea81528baac2d56';
if (apiID == '') document.getElementById('temp').innerHTML = ('Remember to add your api key!');

function weatherApp(city) {
	fetch('https://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiID)
		.then(function (resp) { return resp.json() }) // Convert data to json
		.then(function (data) {
			sendWeatherData(data); //calls sendWeatherData function
		})
		.catch(function () {

		});
}
function sendWeatherData(wData) {
	//Retrieves Data from JSON
	var celcius = Math.round(parseFloat(wData.main.temp) - 273.15);

	var description = wData.weather[0].description;

	document.getElementById('description').innerHTML = description;
	document.getElementById('temp').innerHTML = celcius + '&deg;';
	document.getElementById('location').innerHTML = wData.name;




	if (description.indexOf('rain') > 0) {
		document.getElementById('weather').className = 'rainy';
	} else if (description.indexOf('cloud') > 0) {
		document.getElementById('weather').className = 'cloudy';
	} else if (description.indexOf('sunny') > 0) {
		document.getElementById('weather').className = 'sunny';
	} else if (description.indexOf('snow') > 0) {
		document.getElementById('weather').className = 'snow';
	}
	else {
		document.getElementById('weather').className = 'clear';
	}
}
window.onload = function () {
	//Loads Weatherapp on page
	weatherApp('Waterloo,ca');
}