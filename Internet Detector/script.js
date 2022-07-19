const wrapper = document.querySelector('.wrapper'),
	toast = wrapper.querySelector('.toast'),
	title = toast.querySelector('span'),
	subTitle = toast.querySelector('p'),
	wifiIcon = toast.querySelector('.icon'),
	closeIcon = toast.querySelector('.close-icon');

function autoHideAlert() {
	setTimeout(() => wrapper.classList.add('hide'), 2000);
}

window.addEventListener('load', () => {
	const internetStatus = navigator.onLine;
	console.log(internetStatus);
	internetStatus ? onlineAlert() : offlineAlert;
});

window.addEventListener('online', () => onlineAlert());
window.addEventListener('offline', () => offlineAlert());

closeIcon.onclick = () => {
	wrapper.classList.add('hide');
};

function onlineAlert() {
	toast.classList.remove('offline');
	title.innerText = "You're online now";
	subTitle.innerText = 'Hurray! Internet is connected.';
	wifiIcon.innerHTML = '<i class="uil uil-wifi"></i>';
	autoHideAlert();
}
function offlineAlert() {
	wrapper.classList.remove('hide');
	toast.classList.add('offline');
	title.innerText = "You're offline now";
	subTitle.innerText = 'Opps! Internet is disconnected.';
	wifiIcon.innerHTML = '<i class="uil uil-wifi-slash"></i>';
	autoHideAlert();
}
