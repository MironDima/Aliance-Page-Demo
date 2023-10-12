import Swiper, { Navigation,Autoplay } from 'swiper';
export const sliderStep = () => {
	const swiper = new Swiper('.stepSwiper', {
		modules: [Navigation, Autoplay],
		speed: 500,
		slidesPerView: 1,
		allowSlidePrev : true,
		navigation: {
			nextEl: '.sliderStep-button-next',
			prevEl: '.sliderStep-button-prev',
		},
		breakpoints: {
			430: {
				slidesPerView: 2,
			},
			577: {
				slidesPerView: 4,
			}
		},
		autoplay: {
			delay: 5000,
		  },

	});
}
