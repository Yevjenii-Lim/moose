document.getElementById('slider_left').onclick = sliderleft;

let left = 0;

function sliderleft() {
	let polosa = document.getElementById('polosa')
	left = left - 1200;
	if (left < -2450) {
		left = 0;
	}
	polosa.style.left = left +'px';
	console.log(polosa)
}
