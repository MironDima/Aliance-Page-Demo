export function changeColorBlack() {
	const mobailMenuLine = document.querySelectorAll('.mobail-menu-line');
	const svgLogoLight = document.querySelector('.logo-img-light');
	const svgLogoBlack = document.querySelector('.logo-img-black');

	svgLogoLight.style.display = 'none';
	svgLogoBlack.style.display = 'block';
	mobailMenuLine.forEach((mobailMenuLineItem) => {
		mobailMenuLineItem.style.backgroundColor = 'black';
	})
}