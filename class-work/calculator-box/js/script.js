var total = 0;

/*click on #a10
add 10 to 'total'
output updated 'total' to #out*/

$('#a10').click(add10);
function add10 () {
	total += 10
	$('#out').html(total);
}

$('#a20').click(add20);
function add20 () {
	total += 20
	$('#out').html(total);
}

$('#a30').click(add30);
function add30 () {
	total += 30
	$('#out').html(total);
}

$('#red').click(red);
function red () {
	$('#out').css('backgroundColor', 'red');
}

$('#blue').click(blue);
function blue () {
	$('#out').css('backgroundColor', 'blue');
}

$('#n10').click(subtract10);
function subtract10 () {
	total -= 10
	$('#out').html(total);
}

$('#n20').click(subtract20);
function subtract20 () {
	total -= 20
	$('#out').html(total);
}

$('#n30').click(subtract30);
function subtract30 () {
	total -= 30
	$('#out').html(total);
}

$('#out').click(clear);
function clear () {
	total = 0
	$('#out').html(total);
	$('#out').css('backgroundColor', 'white');
}