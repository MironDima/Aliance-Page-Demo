import { changeColorBlack } from "./changeColorBlack";
import { changeColorLight } from "./changeColorLight";
const navbar = () => {
	const navbar = document.querySelector('.navbar');
	window.addEventListener('scroll', () => {
		const scrollTopPosition = window.scrollY;
		scrollTopPosition > 10
			? (navbar.classList.add('navbar-scroll'), changeColorBlack())
			: (navbar.classList.remove('navbar-scroll'), changeColorLight());
	})
}
export { navbar }
