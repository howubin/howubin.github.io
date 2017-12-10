// 1. Create .click() handlers for each of the thumbnails: #first, #second, #third, #fourth
// 2. Use .attr() to change the `src` attribute of #bigimage to correspond to image that was clicked

/*
$('#first').click(showCityOne);

function showCityOne() {
	$('#bigimage').attr('src', 'img/1.jpg')
}

$('#second').click(showCityTwo);

function showCityTwo() {
	$('#bigimage').attr('src', 'img/2.jpg')
}

$('#third').click(showCityThree);

function showCityThree() {
	$('#bigimage').attr('src', 'img/3.jpg')
}

$('#fourth').click(showCityFour);

function showCityFour() {
	$('#bigimage').attr('src', 'img/4.jpg')
}
*/

$('.thumb').click();

function changeImage () {
	console.log(this.)
	// 1. get (store in a variable) this elements 'src'
	var newImage = $(this).attr('src');
	// 2. update #bigimage's 'src' using the above variable
	$('#bigimage').attr('src', newImage)
}