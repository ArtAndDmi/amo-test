const inputEl = document.querySelector('input')
const buttonEl = document.querySelector('button')
const timerEl = document.querySelector('span')

const createTimerAnimator = () => {
	console.log(timerEl)
	return (seconds) => {
		const timer = setInterval(function () {
			
			const [secs, mins, hours] = [
				seconds % 60,
				seconds / 60 % 60,
				seconds / 60 / 60 % 60]
			
			if (seconds <= 0) {
				timerEl.innerHTML = '00:00:00'
				alert('Time is up')
				clearInterval(timer)
				timerEl.innerHTML = 'hh:mm:ss'
			} else {
				const innerHours = Math.floor(hours).toString().length === 1
					? '0' + Math.trunc(hours)
					: Math.trunc(hours)
				const innerMinutes = Math.floor(mins).toString().length === 1
					? '0' + Math.trunc(mins)
					: Math.trunc(mins)
				const innerSecs = Math.floor(secs).toString().length === 1
					? '0' + Math.trunc(secs)
					: Math.trunc(secs)
				timerEl.innerHTML = `${innerHours}:${innerMinutes}:${innerSecs}`
			}
			--seconds
		}, 1000)
	}
}

const animateTimer = createTimerAnimator()

inputEl.addEventListener('input', (e) => {
	
	if (isNaN(+e.target.value[e.target.value.length - 1])) {
		e.target.value = e.target.value.slice(0, e.target.value.length - 1)
	}
	
})

buttonEl.addEventListener('click', () => {
	const seconds = Number(inputEl.value)
	animateTimer(seconds)
	
	inputEl.value = ''
})
