import { changeColorBlack } from "./changeColorBlack"
import { changeColorLight } from "./changeColorLight"
const menuToggle = () => {
	const mobailMenuToggle = document.querySelector('.mobail-menu-toggle')
	const menu = document.querySelector('.mobail-menu')
	const body = document.body
	
	const openMenu = (e) => {
		menu.classList.add('is-open');
		body.classList.add('noScroll');
		mobailMenuToggle.classList.add('close-menu');
		changeColorBlack()
	}
	const closeMenu = (e) => {
		menu.classList.remove('is-open');
		body.classList.remove('noScroll');
		mobailMenuToggle.classList.remove('close-menu');
		changeColorLight()
	}

	mobailMenuToggle.addEventListener('click', (e) => {
		e.preventDefault()
		menu.classList.contains('is-open') ? closeMenu() : openMenu();
	})
}
export default menuToggle
