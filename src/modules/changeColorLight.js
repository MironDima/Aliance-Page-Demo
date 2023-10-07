export function changeColorLight() {
	const mobailMenuLine = document.querySelectorAll('.mobail-menu-line');
	const svgLogo = document.querySelector('.logo-img-light>use');

	svgLogo.href.baseVal = 'img/iconSprite.svg#logo-light';
	mobailMenuLine.forEach((mobailMenuLineItem) => {
		mobailMenuLineItem.style.backgroundColor = '';
	})
}