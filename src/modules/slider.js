import Swiper, { Navigation } from 'swiper';
export const slider = () => {
	const swiper = new Swiper('.swiperPrivileges', {
		modules: [Navigation],
		loop:true,
		speed:400,
		slidesPerView: 1,
		navigation: {
			nextEl: ".slider-button-prev",
			prevEl: ".slider-button-next",
		  },
		  breakpoints: {
			606: {
			  slidesPerView: 2,
			},
			768: {
			  slidesPerView: 3,
			},
			1024: {
			  slidesPerView: 4,
			},
			1146: {
				slidesPerView: 5,
				
			  },
		  },
	});
}
 