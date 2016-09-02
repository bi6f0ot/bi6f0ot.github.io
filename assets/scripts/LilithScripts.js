window.onload = function() {
	setWeatherModules();
	setInterval(setWeatherModules, 60000);
	
	setClockModule();
	setInterval(setClockModule, 1000)
}