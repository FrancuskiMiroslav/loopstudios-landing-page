document.addEventListener('DOMContentLoaded', function () {
	const heroNav = document.getElementById('hero-nav');
	const stickyHeader = document.getElementById('sticky-header');
	const menuBtn = document.getElementById('menu-btn');
	const navList = document.getElementById('nav-list');

	window.addEventListener('scroll', (e) => {
		if (document.documentElement.scrollTop > 0) {
			stickyHeader.classList.add('sticky');
			/* btnScrollToTop.style.opacity = 1; */
		} else {
			stickyHeader.classList.remove('sticky');
			/* 	btnScrollToTop.style.opacity = 0; */
		}
	});

	menuBtn.addEventListener('click', (e) => {
		menuBtn.classList.toggle('clicked');
		heroNav.classList.toggle('overlay');
		navList.classList.toggle('show');
	});
});
