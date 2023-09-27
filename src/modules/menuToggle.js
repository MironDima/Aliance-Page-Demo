const menuToggle = () => {
	const mobailMenuToggle = document.querySelector('.mobail-menu-toggle')
	const menu = document.querySelector('.mobail-menu')

	mobailMenuToggle.addEventListener('click', (e) => {
		e.preventDefault()
		menu.classList.toggle('menu-open')
	})
	console.log(mobailMenuToggle);


	
}



export default menuToggle
