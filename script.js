const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
const scrollTopPosition = window.scrollY
const logoLinkLight = navbar.querySelector('.logo-img-light')
const logoLinkBlack = navbar.querySelector('.logo-img-black')

if( scrollTopPosition > 150) {
	navbar.classList.add('navbar-scroll')
	logoLinkLight.classList.add('hidden')
	logoLinkBlack.classList.remove('hidden')
}else {
	navbar.classList.remove('navbar-scroll')
	logoLinkBlack.classList.add('hidden')
	logoLinkLight.classList.remove('hidden')
}
})

