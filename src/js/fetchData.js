document.addEventListener('DOMContentLoaded', function () {
	const gridBoxes = document.getElementById('grid-boxes');
	const URL = './js/creations.json';

	const localUrlJSON = require('./creations.json');

	const getCreationsData = async () => {
		/* const response = await fetch(URL);
		const data = await response.json();
		const boxes = data.boxes; */

		const boxes = localUrlJSON.boxes;

		gridBoxes.innerHTML = boxes
			.map((box) => {
				const { id, title, image, imageMob } = box;

				return `
					<div class="grid__box">
						<picture class="grid__picture">
							<source media="(max-width:599px)" srcset="${imageMob}">
                        	<source media="(min-width:600px)" srcset="${image}">
							<img src="${
								window.innerWidth >= 600 ? image : imageMob
							}" class="grid__box-img" alt="${title}"/>
						</picture>		
						<h4 class="grid__box-title">${title}</h4>
					</div>
					`;
			})
			.join('');
	};

	getCreationsData();
});
