import Swiper, { Navigation,Autoplay } from "swiper"

export const sliderExpert = () => {
	const swiper = new Swiper('.sliderExpert', {
		modules: [Navigation,Autoplay],
		navigation: {
			nextEl: '.sliderExpert-button-next',
			prevEl: '.sliderExpert-button-prev',
		},
		slidesPerView:2,
		spaceBetween:30,
		speed: 500,
		breakpoints: {
			752: {
				slidesPerView: 2,
			},
			576 : {
				slidesPerView: 1,
			},
			325 : {
				slidesPerView: 1,
			}
		},
	}) 
}