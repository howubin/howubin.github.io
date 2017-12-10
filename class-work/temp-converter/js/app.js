$('#fahrenheit').change(changeFahrenheit);
$('#celsius').change(changeCelsius);

function changeFahrenheit() {
	var fahrenheit = $('#fahrenheit').value;
	//convert to celsius
	var celsius = (fahrenheit - 32) / 1.8
}

function changeCelsius() {
	var celsius = $('#celcius').val();
	var fahrenheit = celsius * 1.8 + 32
	//convert to fahrenheit
}
