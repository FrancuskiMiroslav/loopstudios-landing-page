document.addEventListener('DOMContentLoaded', function () {
	const headerContainer = document.getElementById('header-container');
	const menuBtn = document.getElementById('menu-btn');
	const navList = document.getElementById('nav-list');

	window.addEventListener('scroll', (e) => {
		if (document.documentElement.scrollTop > 0) {
			headerContainer.classList.add('sticky');
			/* btnScrollToTop.style.opacity = 1; */
		} else {
			headerContainer.classList.remove('sticky');
			/* 	btnScrollToTop.style.opacity = 0; */
		}
	});

	menuBtn.addEventListener('click', (e) => {
		menuBtn.classList.toggle('clicked');
		/* 	headerContainer.classList.toggle('overlay');
		navList.classList.toggle('show'); */
	});
});
