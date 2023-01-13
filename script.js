const ratingCard = document.querySelector('.rating')
const ratedCard = document.querySelector('.rated')
const submitBtn = document.getElementById('btn-submit')
const rateSelection = document.querySelectorAll('.btn')
const rateSelected = document.getElementById('selected')

submitBtn.addEventListener('click', () => {
	ratedCard.classList.remove('hidden')
	ratingCard.style.display = 'none'
})

rateSelection.forEach((rate) => {
	rate.addEventListener('click', () => {
		rateSelected.innerHTML = rate.innerHTML
	})
})

