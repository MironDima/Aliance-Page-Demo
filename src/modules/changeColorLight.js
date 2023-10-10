export function changeColorLight() {
	const mobailMenuLine = document.querySelectorAll('.mobail-menu-line');
	const svgLogoLight = document.querySelector('.logo-img-light');
	const svgLogoBlack = document.querySelector('.logo-img-black');

	svgLogoBlack.style.display = 'none';
	svgLogoLight.style.display = 'block';
	mobailMenuLine.forEach((mobailMenuLineItem) => {
		mobailMenuLineItem.style.backgroundColor = '';
	})
}