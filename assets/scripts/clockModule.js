var Days = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"];
var Months = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"];

function setClockModule() {
	var date = new Date();

	var Now = {
		day: Days[date.getDay()],
		month: Months[date.getMonth()],
		date: leadingZero(date.getDate()),
		hour: (date.getHours() > 12 ? date.getHours() - 12 : (date.getHours() == 0 ? 12 : date.getHours())),
		minute: leadingZero(date.getMinutes(), 2),
		second: leadingZero(date.getSeconds(), 2) + (date.getHours() > 11 ? " pm" : " am")
	};

	document.getElementById("date").textContent = Now.day + ", " + Now.month + " " + Now.date;
	document.getElementById("time").textContent = Now.hour + ":" + Now.minute + ":" + Now.second;
}

function leadingZero(num, size) {
	var s = num + "";
	while (s.length < size) {
		s = "0" + s;
	}
	return s;
}