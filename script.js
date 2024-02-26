const digitalElement = document.querySelector(".digital");
const secondElement = document.querySelector(".p_s");
const minuteElement = document.querySelector(".p_m");
const hourElement = document.querySelector(".p_h");

function getCurrentTime() {
	const now = new Date();
	const hours = now.getHours();
	const minutes = now.getMinutes();
	const seconds = now.getSeconds();

	digitalElement.innerText = `${fixTime(hours)}:${fixTime(minutes)}:${fixTime(
		seconds
	)}`;

	const segDeg = (360 / 60) * seconds - 90;
	const minDeg = (360 / 60) * minutes - 90;
	const hourDeg = (360 / 12) * minutes - 90;

	secondElement.style.transform = `rotate(${segDeg}deg)`;
	minuteElement.style.transform = `rotate(${minDeg}deg)`;
	hourElement.style.transform = `rotate(${hourDeg}deg)`;
}

function fixTime(time) {
	return time < 10 ? `0${time}` : time;
}

getCurrentTime();
setInterval(() => {
	getCurrentTime();
}, 1000);
