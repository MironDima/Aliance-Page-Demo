import Swiper from 'swiper';
export const slider = () => {
	const swiper = new Swiper('.swiper', {
		loop: true,
		slidesPerView: 4,
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		  },
	});
}
 