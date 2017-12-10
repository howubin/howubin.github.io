// window.addEventListener('resize', function(e) {
// 	var height = window.innerHeight;
// 	var width = window.innerWidth;
// 	var svg = document.querySelector('.svg-line');
// 	var el1 = document.querySelector('.main-container').getBoundingClientRect();
// 	var el2 = document.querySelector('.editor').getBoundingClientRect();
// 	console.log(el2.y - (el1.y + el1.height));
// 	// svg.style.height = el2.y - (el1.y + el1.height) + 'px';
// 	svg.style.transform = 'translateY(-50%) scaleY(' + (1 + (100 / (el2.y - (el1.y + el1.height)))) + ')';
// });

window.addEventListener('scroll', function(e) {
	var scrollY = window.scrollY - (window.innerHeight / 2);
	var editor = document.querySelector('.editor');
	var choose = document.querySelector('.choose');
	var create = document.querySelector('.create');
	var customize = document.querySelector('.customize');
	var threshold = editor.getBoundingClientRect().y - 200;
	if (scrollY > threshold) {
		editor.style.opacity = 1;	
		choose.style.opacity = 1;
		create.style.opacity = 1;
		customize.style.opacity = 1;
	}

	var rows = document.querySelector('.section2 .rows');
	var threshold = rows.getBoundingClientRect().y;
	if (scrollY > threshold) {
		rows.className = rows.className + ' show';
	}
});