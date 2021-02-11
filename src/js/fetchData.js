document.addEventListener('DOMContentLoaded', function () {
	const gridBoxes = document.getElementById('grid-boxes');
	const URL = './js/creations.json';

	const getCreationsData = async () => {
		const response = await fetch(URL);
		const data = await response.json();
		const boxes = data.boxes;

		gridBoxes.innerHTML = boxes
			.map((box) => {
				const { id, title, image, imageMob } = box;

				return `
					<div class="grid__box">
						<img 
							class="grid__box-img"
							src=" ${window.innerWidth > 600 ? image : imageMob}"
							alt="${title}"
						/>
						<h4 class="grid__box-title">${title}</h4>
					</div>
			`;
			})
			.join('');
	};

	getCreationsData();
});
