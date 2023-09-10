const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
const scrollTopPosition = window.scrollY
const svgLogo = document.querySelector('.logo-svg>use')


if( scrollTopPosition > 150) {
	navbar.classList.add('navbar-scroll')
	svgLogo.href.baseVal = 'img/iconSprite.svg#logo2';
}else {
	navbar.classList.remove('navbar-scroll')
	svgLogo.href.baseVal = 'img/iconSprite.svg#logo-light';
}
})

