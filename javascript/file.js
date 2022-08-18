const hamburgerIcon = document.getElementById('hamburger');
const navMenu = document.querySelector('.ul-list1');

hamburgerIcon.addEventListener('click', function () {
	navMenu.classList.toggle('active');
	hamburger.classList.toggle('active');
});
