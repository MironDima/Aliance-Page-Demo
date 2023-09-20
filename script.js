const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
const scrollTopPosition = window.scrollY
const svgLogo = document.querySelector('.logo-img-light>use')
const mobailMenuLine = document.querySelectorAll('.mobail-menu-line')

if( scrollTopPosition > 150) {
	navbar.classList.add('navbar-scroll')
	svgLogo.href.baseVal = 'img/iconSprite.svg#logo2';
	mobailMenuLine.forEach((mobailMenuLineItem) => {
		mobailMenuLineItem.style.backgroundColor = 'black'})

}else {
	navbar.classList.remove('navbar-scroll')
	svgLogo.href.baseVal = 'img/iconSprite.svg#logo-light';
	mobailMenuLine.forEach((mobailMenuLineItem) => {
		mobailMenuLineItem.style.backgroundColor = ''})
}
})

