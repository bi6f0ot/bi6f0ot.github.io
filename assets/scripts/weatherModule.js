var location2 = "Arcata, CA";
var defaultLocation2 = "Arcata, CA";

function setWeatherModules(){
	setWeather("Tulare, CA", 0);
	setWeather(location2, 1);
}

function setWeather(place, index) {
	$.simpleWeather({
		location: place,
		woeid: '',
		unit: 'f',
		success: function(weather) {
			document.getElementsByClassName("graphic")[index].innerHTML = "<div class=\"icon-" + weather.code + "\" title=\"" + weather.text + "\"></div>";
			document.getElementsByClassName("currTemp")[index].innerHTML = "<span title=\"" + weather.title + "\">" + weather.temp + "</span>";
			document.getElementsByClassName("tempUnits")[index].innerHTML = "&deg;" + weather.units.temp;
			document.getElementsByClassName("todayHigh")[index].innerHTML = "/ " + weather.high
			document.getElementsByClassName("city")[index].textContent = weather.city + ", " + (weather.region == "" ? weather.country : weather.region);

			var foreStart = (index == 0 ? 0 : 4);
			var readings = document.getElementsByClassName("forecastReading");
			var graphics = document.getElementsByClassName("forecastGraphic");
			
			for(var i = 1; i <= 4; i++){
				graphics[foreStart + (i-1)].innerHTML = "<div class=\"icon-" + weather.forecast[i].code + "\" title=\"" + weather.forecast[i].text + "\"></div>"
				readings[foreStart + (i-1)].innerHTML = "<span title=\"" + weather.forecast[i].day + ": " + weather.forecast[i].date + "\">" + weather.forecast[i].high + "</span>"
			}
		},
		error: function(error) {
			location2 = defaultLocation2;
			window.alert("There was a problem with \"" + place + "\", showing " + location2 + " instead.");
			setWeather(location2, 1);
		}
	});
}

function changeCity() {
	location2 = prompt("Enter New City Name:");
	setWeather(location2, 1);
}