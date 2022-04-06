const daysEl = document.getElementById('days');
const hourEl = document.getElementById('hours');
const minsEl = document.getElementById('mins');
const secsEl = document.getElementById('secs');

// declaring the date of Spring Equinox
const present = new Date();
const presentYear = present.getFullYear();
const springEquinox = `22 September ${presentYear}`;

function countdownSouth () {
	const springDate = new Date(springEquinox);
	const currentDate = new Date();

	if (springDate - currentDate < 0) {
		springDate.setFullYear(presentYear + 1);
	}

	const totalSeconds = Math.floor(springDate - currentDate) / 1000;

	const seconds = Math.floor(totalSeconds) % 60;
	const minutes = Math.floor(totalSeconds / 60) % 60;
	const hours = Math.floor(totalSeconds / 3600) % 24;
	const days = Math.floor(totalSeconds / 86400);

	daysEl.innerHTML = formatTime(days);
	hourEl.innerHTML = formatTime(hours);
	minsEl.innerHTML = formatTime(minutes);
	secsEl.innerHTML = formatTime(seconds);
}

function formatTime (time) {
	return time < 10 ? `0${time}` : time;
}
// we call the created function

countdownSouth();

// set a refreshin interval

setInterval(countdownSouth, 1000);
